import { useRef, useState } from "react";
import API from "../../services/API";
import Loading from "../../utilities/Loading";
import Notify from "../../utilities/Toasts";

const ResetPassword = ({ setActive, resetToken }) => {
  const passwordRef1 = useRef(null);
  const passwordRef2 = useRef(null);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (passwordRef1.current.value != passwordRef2.current.value) {
      setLoading(false);
      return Notify("warning", "Confirmed Password Not Matched");
    }

    const body = {
      password: passwordRef1.current.value,
    };
    const data = await API.resetPassword(`/password/reset/${resetToken}`, body);
    if (data.success) {
      setLoading(false);
      setActive("login");
      Notify("success", data.message);
    } else {
      setLoading(false);
      Notify("error");
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
      <h2 className="text-3xl text-center underline text-white font-bold mb-8">
        ResetPassword
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="box1 flex flex-col">
          <label
            className="text-xl  font-bold tracking-wide text-gray-200 "
            htmlFor="password"
          >
            New Password
          </label>
          <input
            className="bg-transparent text-white py-2 pl-2 border-b-4 border-b-orange-900 text-xl sm:text-2xl tracking-wide focus:outline-none sm:font-bold"
            type="password"
            name="password"
            id="password"
            ref={passwordRef1}
          />
        </div>
        <div className="box2 flex flex-col">
          <label
            className="text-xl  font-bold tracking-wide text-gray-200 "
            htmlFor="password"
          >
            Confirm Password
          </label>
          <input
            className="bg-transparent text-white py-2 pl-2 border-b-4 border-b-orange-900 text-xl sm:text-2xl tracking-wide focus:outline-none sm:font-bold"
            type="password"
            name="password"
            id="password"
            ref={passwordRef2}
          />
        </div>
        {isLoading ? (
          <div className="flex justify-center h-16">
            <Loading />
          </div>
        ) : (
          <button className="bg-gray-300 font-bold mt-4 tracking-wide text-orange-950  text-2xl py-2 px-10 w-fit mx-auto hover:bg-gray-200">
            Reset-Password
          </button>
        )}
      </form>
      <p className="text-center mt-5 text-xl">
        <span
          onClick={() => setActive("login")}
          className={`text-white underline cursor-pointer  `}
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default ResetPassword;
