import { useEffect, useState } from "react";
import Login from "../components/authPage/Login";
import Register from "../components/authPage/Register";
import ForgotPassword from "../components/authPage/ForgotPassword";
import ResetPassword from "../components/authPage/ResetPassword";
import gsap, { Expo } from "gsap";
import { useGSAP } from "@gsap/react";
import styled from "styled-components";

const AuthWrapper = styled.div`
  background-image: radial-gradient(
    circle 311px at 8.6% 27.9%,
    rgba(62, 147, 252, 0.57) 12.9%,
    rgba(239, 183, 192, 0.44) 91.2%
  );
`;

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
    <AuthWrapper
      // style={{ backgroundImage: `url(${authBgImage})` }}
      className="auth w-full  min-h-screen  flex justify-center items-center overflow-hidden"
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
    </AuthWrapper>
  );
};

export default AuthPage;
