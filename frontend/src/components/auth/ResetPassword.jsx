import { useRef } from "react";
import API from "../../services/API";

const ResetPassword = ({ setActive, resetToken }) => {
  const passwordRef1 = useRef(null);
  const passwordRef2 = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef1.current.value != passwordRef2.current.value)
      return console.log("entered password are not same");
    const body = {
      password: passwordRef1.current.value,
    };
    const data = await API.resetPassword(`/password/reset/${resetToken}`, body);
    console.log(data);
  };
  return (
    <div
      style={{ width: "min(90%,400px)" }}
      className="border-2 p-4 bg-orange-200"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-10">
        <div className="flex flex-col">
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            name="password"
            id="password"
            ref={passwordRef1}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            name="password"
            id="password"
            ref={passwordRef2}
          />
        </div>
        <button className="bg-orange-500 text-white  text-2xl py-2 px-10 w-fit mx-auto">
          Reset Password
        </button>
      </form>
      <p className="text-center">
        <span
          onClick={() => setActive("login")}
          className="text-blue-500 cursor-pointer"
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default ResetPassword;
