import { useRef, useState } from "react";
import API from "../../../services/API";
import Notify from "../../../utilities/Toasts";
import Loading from "../../../utilities/Loading";
import { useDispatch } from "react-redux";
import { setUser, refreshProfileImage } from "../../../redux/user/userSlice";
import UpdatePasswordComponent from "./profilecomponents/UpdatePasswordComponent";
import UpdateUsernameComponent from "./profilecomponents/UpdateUsernameComponent";
import UpdateUserImageComponent from "./profilecomponents/UpdateUserImageComponent";
import HandleUserProfileUpdateComponent from "./profilecomponents/HandleUserProfileUpdateComponent";

const Profile = ({ user }) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);
  const usernameRef = useRef(null);
  const oldPasswordRef = useRef(null);
  const newPasswordRef = useRef(null);

  const updateProfileData = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (active === "ProfileImg") {
      await updateProfileImage(file, setIsLoading, dispatch);
    } else {
      let bodyData = {
        username: usernameRef.current?.value,
      };
      let endPoint = "/profile/update";
      if (active === "Password") {
        bodyData = {
          oldPassword: oldPasswordRef.current.value,
          newPassword: newPasswordRef.current.value,
        };
        endPoint = "/password/update";
      }
      await udateUsername(active, bodyData, endPoint, setIsLoading, dispatch);
    }
  };

  return (
    <div className="setting  bg-[#f57156] max-w-[500px] mx-auto mt-16 sm:mt-8 border-t-8 border-b-8  rounded-3xl border-black shadow-lg shadow-black sm:pb-8 pb-16">
      <HandleUserProfileUpdateComponent {...{ user, setActive }} />
      {active && (
        <div className="forms">
          <p className="text-center font-bold tracking-wide mb-4  text-2xl">
            {active}
          </p>
          <form
            onSubmit={updateProfileData}
            className="form1  border-t-4 border-b-4 shadow-lg shadow-black rounded-3xl border-black bg-[#f46748] max-w-96 mx-auto px-5 py-5"
          >
            {active === "Username" && (
              <UpdateUsernameComponent {...{ usernameRef }} />
            )}

            {active === "ProfileImg" && (
              <UpdateUserImageComponent {...{ setFile }} />
            )}
            {active === "Password" && (
              <>
                <UpdatePasswordComponent ref={oldPasswordRef}>
                  Old Password
                </UpdatePasswordComponent>
                <UpdatePasswordComponent ref={newPasswordRef}>
                  New Password
                </UpdatePasswordComponent>
              </>
            )}

            {isLoading ? (
              <div className="flex justify-center h-16">
                <Loading />
              </div>
            ) : (
              <button className="btn block btn-accent btn-sm bg-violet-400 hover:bg-violet-500   mx-auto mt-5">
                Update
              </button>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

const updateProfileImage = async (file, setIsLoading, dispatch) => {
  if (!file) {
    Notify("warning", "please select a image");
    return setIsLoading(false);
  }
  const formData = new FormData();
  formData.append("image", file);

  const data = await API.uploadImage(`/image`, formData);
  if (data.success) {
    Notify("success", data.message);
    dispatch(refreshProfileImage());
  } else Notify("error", data.message);
  setIsLoading(false);
};

const udateUsername = async (
  active,
  bodyData,
  endPoint,
  setIsLoading,
  dispatch
) => {
  const data = await API.updateProfile(endPoint, bodyData);
  if (data.success) {
    setIsLoading(false);
    if (active === "Password") {
      return Notify("success", "Password updated successfully");
    }
    Notify("success", "Username updated successfully");
    dispatch(setUser(data.data));
  } else {
    Notify("error", data.message);
    setIsLoading(false);
  }
};

export default Profile;
