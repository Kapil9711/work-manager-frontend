import { useRef } from "react";
import API from "../../services/API";

const Login = ({ setActive }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    const data = await API.login("/login", body);
    console.log(data);
  };
  return (
    <div
      style={{ width: "min(90%,400px)" }}
      className="border-2 p-4 bg-orange-200"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-10">
        <div className="flex flex-col">
          <label htmlFor="name">Username</label>
          <input type="text" name="username" id="name" ref={usernameRef} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            ref={passwordRef}
          />
        </div>
        <button className="bg-orange-500 text-white  text-2xl py-2 px-10 w-fit mx-auto">
          Log In
        </button>
      </form>
      <p className="text-center">
        Do Not Have Account ,{" "}
        <span
          onClick={() => setActive("register")}
          className="text-blue-500 cursor-pointer"
        >
          Register
        </span>
      </p>
      <p className="text-center">
        <span
          onClick={() => setActive("forgotPassword")}
          className="text-blue-500 cursor-pointer"
        >
          Forgot Password
        </span>
      </p>
    </div>
  );
};

export default Login;
