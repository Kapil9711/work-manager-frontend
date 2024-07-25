import { useRef, useState } from "react";
import API from "../services/API";
import Notify from "./Toasts";
// import { useGSAP } from "@gsap/react";
// import gsap, { Expo } from "gsap";

const ModalSetting = ({ user, setUser }) => {
  const [active, setActive] = useState("");
  const usernameRef = useRef(null);
  // const emailRef = useRef(null);
  const oldPasswordRef = useRef(null);
  const newPasswordRef = useRef(null);

  const updateProfileData = async (e) => {
    e.preventDefault();
    let bodyData = {
      username: usernameRef.current?.value,
      // email: emailRef.current?.value,
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
    if (data.success) {
      if (active === "Password") {
        return Notify("success", "Password updated successfully");
      }
      Notify("success", "Profile updated");
      setUser(data.data);
    } else Notify("error", data.message);
  };

  return (
    <div className="setting bg-[#f57156] max-w-[500px] mx-auto mt-8 border-t-8 border-b-8  rounded-3xl border-black shadow-lg shadow-black pb-8">
      <h3 className="font-bold text-2xl text-center pt-4">
        Hello! {user.username}
      </h3>

      <div className="grid gap-5 px-10 py-4  w-full  mx-auto mt-5 ">
        {/* <div className="flex justify-between items-center">
          <h2 className="text-xl tracking-wide text-white font-bold">
            {" "}
            {user.email}
          </h2>
          <button
            onClick={() => setActive("Email")}
            className="btn btn-xs btn-accent"
          >
            update
          </button>
        </div> */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl tracking-wide text-white font-bold">
            {user.username}
          </h2>
          <button
            onClick={() => setActive("Username")}
            className="btn btn-xs btn-accent"
          >
            update
          </button>
        </div>
        <div className="flex  justify-between items-center">
          <h2 className="text-xl tracking-wide text-white font-bold">
            Password
          </h2>
          <button
            onClick={() => setActive("Password")}
            className="btn btn-xs btn-accent"
          >
            update
          </button>
        </div>
      </div>

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
              <div className="flex flex-col gap-2 ">
                <label className="text-2xl" htmlFor="name">
                  Username
                </label>
                <input
                  ref={usernameRef}
                  className="w-full text-black tracking-wide  text-2xl border-l-4 border-r-4 border-t-2 border-b-2 border-black rounded-lg focus:outline-none px-4 h-12"
                  type="text"
                  id="name"
                />
              </div>
            )}

            {/* {active === "Email" && (
              <div className="flex flex-col gap-2">
                <label className="text-2xl" htmlFor="name">
                  Email
                </label>
                <input
                  ref={emailRef}
                  className="w-full text-black tracking-wide  text-2xl border-l-4 border-r-4 border-t-2 border-b-2 border-black rounded-lg focus:outline-none px-4 h-12"
                  type="email"
                  id="name"
                />
              </div>
            )} */}

            {active === "Password" && (
              <div className="flex flex-col gap-2">
                <label className="text-2xl" htmlFor="name">
                  Old Password
                </label>
                <input
                  ref={oldPasswordRef}
                  className="w-full text-black tracking-wide  text-2xl border-l-4 border-r-4 border-t-2 border-b-2 border-black rounded-lg focus:outline-none px-4 h-12"
                  type="email"
                  id="name"
                />
              </div>
            )}

            {active === "Password" && (
              <div className="flex flex-col gap-2">
                <label className="text-2xl" htmlFor="name">
                  new Password
                </label>
                <input
                  ref={newPasswordRef}
                  className="w-full text-black tracking-wide  text-2xl border-l-4 border-r-4 border-t-2 border-b-2 border-black rounded-lg focus:outline-none px-4 h-12"
                  type="email"
                  id="name"
                />
              </div>
            )}

            <button className="btn block btn-accent btn-sm mx-auto mt-5">
              Update
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ModalSetting;
