import { useEffect, useState } from "react";
import Modal from "../../../../utilities/Modal";
import API from "../../../../services/API";
import Notify from "../../../../utilities/Toasts";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../../../../redux/user/userSlice";
import Profile from "../../profile/Profile";

const DropDown = () => {
  const user = useSelector((state) => state.user.value);
  const image = useSelector((state) => state.user.image);
  const key = useSelector((state) => state.user.key);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const logoutUser = async () => {
    const data = await API.logoutUser();
    if (data.success) {
      Notify("success", "Logout successfull");
      navigate("/");
    } else Notify("error", data.message);
  };

  return (
    <div className="dropdown dropdown-hover ">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost  text-white text-xl m-1"
      >
        <img
          key={key}
          className="rounded-full w-11 h-11"
          src={image}
          alt="starImg"
        />

        <span className="hidden sm:block">{user.username}</span>
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content bg-white -ml-36 sm:ml-0 menu  rounded-box z-[1] w-52 p-2 shadow"
      >
        <li
          className="btn btn-ghost text-xl hover:bg-gray-200"
          onClick={() => setIsOpen(true)}
        >
          Profile
        </li>
        <li
          className="btn btn-ghost text-sm flex gap-2 hover:bg-gray-200"
          onClick={logoutUser}
        >
          {/* <FaSignOutAlt className="text-white bg-black" /> */}
          Log Out
        </li>
        {isOpen && (
          <Modal setIsOpen={setIsOpen}>
            <Profile user={user} />
            {/* <ModalSetting user={user} /> */}
          </Modal>
        )}
      </ul>
    </div>
  );
};

export default DropDown;
