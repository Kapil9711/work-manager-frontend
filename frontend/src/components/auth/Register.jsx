import { useRef } from "react";
import API from "../../services/API";

const Register = ({ setActive }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email: emailRef.current.value,
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    const data = await API.register("/register", body);
    console.log(data);
  };
  return (
    <div
      style={{
        width: "min(95%,440px)",
        background: "hsl(20, 100%, 56%)",
      }}
      className="border-2 py-8 px-5 bg-orange-500"
    >
      <h2 className="text-3xl text-center text-white font-bold mb-8">
        Register
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label
            className="   text-xl  font-bold tracking-wide text-gray-200 translate-y-8"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="bg-transparent text-white py-2 pl-2 border-b-4 border-b-orange-900 text-xl sm:text-2xl tracking-wide focus:outline-none sm:font-bold"
            type="email"
            name="email"
            id="email"
            ref={emailRef}
          />
        </div>
        <div className="flex flex-col">
          <label
            className="text-xl  font-bold tracking-wide text-gray-200 translate-y-8"
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
        <div className="flex flex-col">
          <label
            className="text-xl  font-bold tracking-wide text-gray-200 translate-y-8 "
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
        <button className="bg-gray-300 font-bold mt-4 tracking-wide text-orange-950  text-2xl py-2 px-10 w-fit mx-auto hover:bg-gray-200">
          Register
        </button>
      </form>
      <p className="text-center mt-5 text-xl">
        Already Registered ,{" "}
        <span
          onClick={() => setActive("login")}
          className=" cursor-pointer text-white underline"
        >
          Login.
        </span>
      </p>
    </div>
  );
};

export default Register;
