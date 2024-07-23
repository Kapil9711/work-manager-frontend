import { useEffect, useState } from "react";
import Login from "../components/authPage/Login";
import Register from "../components/authPage/Register";
import ForgotPassword from "../components/authPage/ForgotPassword";
import ResetPassword from "../components/authPage/ResetPassword";
import gsap, { Expo } from "gsap";
import { useGSAP } from "@gsap/react";

const AuthPage = () => {
  const [isActive, setActive] = useState("login");
  const [firstRender, setFirstRender] = useState(true);
  const [resetToken, setResetToken] = useState("");

  useEffect(() => {
    setFirstRender(false);
  }, []);

  useGSAP(() => {
    gsap.from(".auth", {
      duration: 1.6,
      // opacity: 0,
      scale: 0.5,
      y: 600,
      ease: Expo.easeOut,
    });
  });

  return (
    <div
      // style={{ backgroundImage: `url(${authBgImage})` }}
      className="auth w-full  min-h-screen bg-orange-600 flex justify-center items-center overflow-hidden"
    >
      {isActive === "login" && (
        <Login firstRender={firstRender} setActive={setActive} />
      )}
      {isActive === "register" && <Register setActive={setActive} />}
      {isActive === "forgotPassword" && (
        <ForgotPassword setActive={setActive} setResetToken={setResetToken} />
      )}
      {isActive === "resetPassword" && (
        <ResetPassword resetToken={resetToken} setActive={setActive} />
      )}
    </div>
  );
};

export default AuthPage;
