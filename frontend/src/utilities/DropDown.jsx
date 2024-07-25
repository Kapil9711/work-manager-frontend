import { useState } from "react";
import Modal from "./Modal";
import ModalSetting from "./ModalSetting";
import API from "../services/API";
import Notify from "./Toasts";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

const DropDown = ({ user, setUser, starImg }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const logoutUser = async () => {
    const data = await API.logoutUser();
    if (data.success) {
      Notify("success", "Logout successfully");
      navigate("/");
    } else Notify("error", data.message);
  };

  return (
    <div className="dropdown dropdown-hover">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost  text-white text-xl m-1"
      >
        <img className="rounded-full w-11 h-11" src={starImg} alt="starImg" />

        <span className="hidden sm:block">{user.username}</span>
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content -ml-36 sm:ml-0 menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li className="btn btn-ghost text-xl" onClick={() => setIsOpen(true)}>
          Profile
        </li>
        <li className="btn btn-ghost text-sm flex gap-2" onClick={logoutUser}>
          {/* <FaSignOutAlt className="text-white bg-black" /> */}
          Log Out
        </li>
        {isOpen && (
          <Modal setIsOpen={setIsOpen}>
            <ModalSetting user={user} setUser={setUser} />
          </Modal>
        )}
      </ul>
    </div>
  );
};

export default DropDown;
