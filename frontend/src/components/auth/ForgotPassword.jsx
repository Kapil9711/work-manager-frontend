import { useRef } from "react";
import API from "../../services/API";

const ForgotPassword = ({ setActive, setResetToken }) => {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email: emailRef.current.value,
      username: usernameRef.current.value,
    };
    const data = await API.forgotPassword("/password/forgot", body);
    setResetToken(data.resetToken);
    if (data.success) setActive("resetPassword");
  };
  return (
    <div
      style={{ width: "min(90%,400px)" }}
      className="border-2 p-4 bg-orange-200"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-10">
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" ref={emailRef} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name">Username</label>
          <input type="text" name="username" id="name" ref={usernameRef} />
        </div>
        <button className="bg-orange-500 text-white  text-2xl py-2 px-10 w-fit mx-auto">
          Find User
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

export default ForgotPassword;
