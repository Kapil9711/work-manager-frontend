import { useRef, useState } from "react";
import API from "../services/API";
import Notify from "./Toasts";
// import Loading from "./Loading";

const ModalSetting = ({ user, setUser }) => {
  const [active, setActive] = useState("");
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const oldPasswordRef = useRef(null);
  const newPasswordRef = useRef(null);

  const updateProfileData = async (e) => {
    e.preventDefault();
    let bodyData = {
      username: usernameRef.current?.value,
      email: emailRef.current?.value,
    };

    let endPoint = "/profile/update";

    if (active === "Password") {
      bodyData = {
        oldPassword: oldPasswordRef.current.value,
        newPassword: newPasswordRef.current.value,
      };
      endPoint = "/password/update";
    }

    const data = await API.updateProfile(endPoint, bodyData);
    console.log(data);
    if (data.success) {
      if (active === "Password") {
        return Notify("success", "Password updated successfully");
      }
      Notify("success", "Profile updated");
      setUser(data.data);
    } else Notify("error", data.message);
  };

  return (
    <>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Settings
      </button>
      <dialog
        id="my_modal_1"
        className="modal min-h-screen w-screen  felx justify-center items-center"
      >
        <div className=" modal-box  w-[350px] h-[900px] md:w-[1000px]  ">
          <h3 className="font-bold text-lg text-center">
            Hello! {user.username}
          </h3>

          <div className="grid gap-5 px-4 py-4 border-2 w-80 mx-auto mt-5">
            <div className="flex justify-between items-center">
              <h2> {user.email}</h2>
              <button
                onClick={() => setActive("Email")}
                className="btn btn-sm btn-accent"
              >
                update
              </button>
            </div>
            <div className="flex justify-between items-center">
              <h2>{user.username}</h2>
              <button
                onClick={() => setActive("Username")}
                className="btn btn-sm btn-accent"
              >
                update
              </button>
            </div>
            <div className="flex  justify-between items-center">
              <h2>Passowrd</h2>
              <button
                onClick={() => setActive("Password")}
                className="btn btn-sm btn-accent"
              >
                update
              </button>
            </div>
          </div>

          {active && (
            <div className="forms mt-10">
              <p className="text-center my-4  text-3xl">{active}</p>
              <form
                onSubmit={updateProfileData}
                className="border-2 border-black bg-orange-200 w-72 mx-auto px-5 py-5"
              >
                {active === "Username" && (
                  <div className="flex flex-col gap-4 ">
                    <label className="text-2xl" htmlFor="name">
                      Username
                    </label>
                    <input
                      ref={usernameRef}
                      className="w-60 text-xl"
                      type="text"
                      id="name"
                    />
                  </div>
                )}

                {active === "Email" && (
                  <div className="flex flex-col gap-4">
                    <label className="text-2xl" htmlFor="name">
                      Email
                    </label>
                    <input
                      ref={emailRef}
                      className="w-60 text-xl"
                      type="email"
                      id="name"
                    />
                  </div>
                )}

                {active === "Password" && (
                  <div className="flex flex-col gap-4">
                    <label className="text-2xl" htmlFor="name">
                      Old Password
                    </label>
                    <input
                      ref={oldPasswordRef}
                      className="w-60 text-xl"
                      type="email"
                      id="name"
                    />
                  </div>
                )}

                {active === "Password" && (
                  <div className="flex flex-col gap-4">
                    <label className="text-2xl" htmlFor="name">
                      new Password
                    </label>
                    <input
                      ref={newPasswordRef}
                      className="w-60 text-xl"
                      type="email"
                      id="name"
                    />
                  </div>
                )}

                <button className="btn btn-accent btn-sm mx-auto mt-5">
                  update
                </button>
              </form>
            </div>
          )}

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-error  mx-auto">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ModalSetting;
