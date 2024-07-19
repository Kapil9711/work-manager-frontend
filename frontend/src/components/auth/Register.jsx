import { useEffect, useRef, useState } from "react";
import API from "../../services/API";
import styled from "styled-components";
import Loading from "../../utilities/Loading";
import Notify from "../../utilities/Toasts";
import gsap, { Expo } from "gsap";
import { useGSAP } from "@gsap/react";

const Form = styled.form``;

const Register = ({ setActive }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    emailRef.current.focus();
  });

  useGSAP(() => {
    gsap.from(".register", {
      duration: 1.2,
      opacity: 0,
      x: 500,
      scale: 0.6,
      ease: Expo.easeInOut,
    });
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const body = {
      email: emailRef.current.value,
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    const data = await API.register("/register", body);
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
      className="register border-2 py-8 px-5 bg-orange-500 shadow-2xl"
    >
      <h2 className="text-3xl text-center underline text-white font-bold mb-8">
        Register
      </h2>
      <Form
        autoComplete="off"
        onSubmit={handleSubmit}
        className="flex flex-col gap-5"
      >
        <div className="box1 flex flex-col ">
          <label
            className="text-xl  font-bold tracking-wide text-gray-200 "
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
        <div className="box2 flex flex-col">
          <label
            className="text-xl   font-bold tracking-wide text-gray-200 "
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
        <div className="box3 flex flex-col">
          <label
            className="text-xl font-bold tracking-wide text-gray-200  "
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
            Register
          </button>
        )}
      </Form>
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
