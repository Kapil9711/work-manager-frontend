import gsap, { Expo } from "gsap";
import { useGSAP } from "@gsap/react";

const DashboardPage = () => {
  useGSAP(() => {
    gsap.from(".dashboard", {
      duration: 2,
      opacity: 0,
      scale: 0.7,
      x: 1200,
      ease: Expo.easeInOut,
    });
  });
  return (
    <div className="dashboard min-h-screen bg-pink-500 flex justify-center items-center">
      <h1 className="text-4xl">Dashboard Page</h1>
    </div>
  );
};

export default DashboardPage;
