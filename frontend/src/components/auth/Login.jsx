import { useRef, useState } from "react";
import Loading from "../../utilities/Loading";
import API from "../../services/API";
import Notify from "../../utilities/Toasts";

const Login = ({ setActive }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    const data = await API.login("/login", body);
    console.log(data);
    if (data.success) {
      Notify("success", data.message);
      setLoading(false);
    } else {
      setLoading(false);
      Notify("error", data.message);
    }
  };
  return (
    <div
      style={{
        width: "min(95%,420px)",
        background: "hsl(20, 100%, 56%)",
      }}
      className="border-2 py-8 px-5 bg-orange-500 shadow-2xl"
    >
      <h2 className="text-3xl text-center underline text-white font-bold mb-4">
        Login
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="box1 flex flex-col ">
          <label
            className="text-xl  font-bold tracking-wide text-gray-200 "
            htmlFor="name"
          >
            Username
          </label>
          <input
            className="bg-transparent text-white py-2 pl-2 border-b-4 border-b-orange-900 text-xl sm:text-2xl tracking-wide focus:outline-none sm:font-bold"
            type="text"
            name="username"
            id="name"
            ref={usernameRef}
          />
        </div>

        <div className="box2 flex flex-col">
          <label
            className="text-xl  font-bold tracking-wide text-gray-200  "
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="bg-transparent text-white py-2 pl-2 border-b-4 border-b-orange-900 text-xl sm:text-2xl sm:font-bold tracking-wide focus:outline-none"
            type="password"
            name="password"
            id="password"
            ref={passwordRef}
          />
        </div>
        {isLoading ? (
          <div className="flex justify-center h-16">
            <Loading />
          </div>
        ) : (
          <button className="bg-gray-300 font-bold mt-4 tracking-wide text-orange-950  text-2xl py-2 px-10 w-fit mx-auto hover:bg-gray-200">
            Login
          </button>
        )}
      </form>
      <p className="text-center mt-5 text-xl">
        Do Not Have An Account ,{" "}
        <span
          onClick={() => setActive("register")}
          className="text-white underline cursor-pointer"
        >
          Register.
        </span>
      </p>
      <p className="text-center mt-4 text-xl">
        <span
          onClick={() => setActive("forgotPassword")}
          className="text-red-50 underline cursor-pointer"
        >
          Forgot Password
        </span>
      </p>
    </div>
  );
};

export default Login;
