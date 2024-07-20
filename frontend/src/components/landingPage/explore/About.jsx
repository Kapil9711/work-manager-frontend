import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import aboutBg from "../../../images/background-removed-about.png";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Expo } from "gsap";

const About = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("#a", {
      scrollTrigger: {
        trigger: "#a",
        start: "-40% bottom",
        toggleActions: "restart none none none",
      },
      duration: 1.2,
      delay: 0.1,
      x: 150,
      y: 100,
      opacity: 0,
      ease: Expo.easeInOut,
    });
    gsap.from("#b", {
      scrollTrigger: {
        trigger: "#b",
        start: "-35% 100%",
        toggleActions: "restart none none none",
      },
      duration: 1.2,
      delay: 0.1,
      opacity: 0,
      ease: Expo.easeInOut,
      x: -150,
      y: 100,
    });
    gsap.from("#c", {
      scrollTrigger: {
        trigger: "#c",
        start: "-50% 100%",
        toggleActions: "restart none none none",
      },
      duration: 1.2,
      delay: 0.2,
      opacity: 0,
      ease: Expo.easeInOut,
      x: 150,
      y: 100,
    });
  });
  return (
    <section
      id="about"
      className="sm:relative sm:container pb-40 sm:gap-16 sm:flex sm:items-center sm:flex-col  mx-auto min-h-screen about"
    >
      <h2 className="  text-3xl sm:text-5xl text-center  text-orange-400">
        About Us
      </h2>
      <div
        style={{ height: "500px" }}
        className=" sm:w-2 sm:relative sm:bg-orange-500 sm:border sm:border-orange-500 "
      >
        <div
          // id="a"
          className="hidden sm:block absolute top-2 left-0 w-32 h-32 border-t-4 rounded-full border-orange-500"
        ></div>
        <div
          // id="b"
          className="w-32 hidden sm:block absolute top-48 -left-32 h-32  border-t-4 rounded-full border-orange-500"
        ></div>
        <div
          // id="c"
          className="w-32 hidden sm:block h-32 absolute -bottom-16  left-0 border-t-4 rounded-full   border-orange-500"
        ></div>

        <div
          id="a"
          className="mt-10 sm:mt-0 sm:absolute sm:top-16 sm:left-40  sm:w-96"
        >
          <strong className="text-xl sm:text-2xl">Introduction :</strong>
          <p className=" mx-auto  p-2  mt-4  border border-orange-500 leading-7 tracking-wide text-gray-400 hover:text-gray-300 sm:text-xl sm:pl-4 sm:max-w-2/3  sm:hover:scale-105 transition-all duration-500 ease-in-out">
            Welcome to Listify, your go-to platform for staying organized and
            productive. Whether you're managing personal tasks, professional
            projects, or collaborative efforts, we've got you covered
          </p>
        </div>
        <div
          id="b"
          className="sm:absolute top-56 -left-96 sm:w-96 mt-10 sm:mt-0 sm:-ml-40"
        >
          <strong className="text-xl sm:text-2xl">Our Mission :</strong>
          <p className="  mx-auto  sm:pl-4  p-2 mt-4  border border-orange-500 leading-7 tracking-wide text-gray-400 hover:text-gray-300 sm:text-xl sm:max-w-2/3  sm:hover:scale-105 transition-all duration-500 ease-in-out">
            Our mission is to make task management effortless for everyone. We
            aim to empower individuals and teams to achieve their goals and
            manage their time more effectively with a seamless, user-friendly
            experience.
          </p>
        </div>

        <div
          id="c"
          className="mt-8 sm:absolute top-96 left-40 sm:w-96 sm:mt-28"
        >
          <strong className="text-xl sm:text-2xl">Our Story :</strong>
          <p className=" mx-auto  sm:pl-4  p-2 mt-4  border border-orange-500 leading-7 tracking-wide text-gray-400 hover:text-gray-300 sm:text-xl sm:max-w-2/3  sm:hover:scale-105 transition-all duration-500 ease-in-out">
            Founded in 2024, Listify was born out of a simple idea: to create an
            intuitive and powerful to-do list app that anyone can use.
          </p>
        </div>
      </div>

      {/* <Image className=" absolute top-0 left-0" src={aboutBg} alt="about-img" /> */}

      {/* ul start  */}
      {/* <ul className="  text-white my-12  sm:flex sm:justify-around sm:flex-wrap sm:gap-8 "> */}
      {/* first item  */}
      {/* <li>
          <strong className="text-xl sm:text-2xl">Introduction :</strong>
          <p className="max-w-96 mx-auto  p-2 sm:py-8 mt-4  border border-orange-500 leading-7 tracking-wide text-gray-400 hover:text-gray-300 sm:text-xl sm:pl-4 sm:max-w-2/3 sm:h-60 sm:hover:scale-105 transition-all duration-500 ease-in-out">
            Welcome to Listify, your go-to platform for staying organized and
            productive. Whether you're managing personal tasks, professional
            projects, or collaborative efforts, we've got you covered
          </p>
        </li> */}
      {/* second item  */}
      {/* <li className="mt-4 sm:mt-0 ">
          <strong className="text-xl sm:text-2xl">Our Mission :</strong>
          <p className="max-w-96 mx-auto sm:py-5 sm:pl-4  p-2 mt-4  border border-orange-500 leading-7 tracking-wide text-gray-400 hover:text-gray-300 sm:text-xl sm:max-w-2/3 sm:h-60 sm:hover:scale-105 transition-all duration-500 ease-in-out">
            Our mission is to make task management effortless for everyone. We
            aim to empower individuals and teams to achieve their goals and
            manage their time more effectively with a seamless, user-friendly
            experience.
          </p>
        </li> */}
      {/* third item */}
      {/* <li className="mt-4 ">
          <strong className="text-xl sm:text-2xl">Features :</strong>
          <ul className="pl-4 sm:mt-4 sm:grid grid-cols-2 gap-8   ">
            <li className="mt-4">
              <strong className="">User-Friendly Interface : </strong>
              <p className="max-w-96 mx-auto sm:pl-4  p-2 mt-2 sm:mt-4   border border-orange-500 leading-7 tracking-wide text-gray-400 hover:text-gray-300 sm:text-xl sm:max-w-2/3 sm:py-5 sm:hover:scale-105 transition-all duration-500 ease-in-out">
                Easily add, edit, and organize tasks with our clean and
                intuitive design.
              </p>
            </li>
            <li className="mt-4">
              <strong className="">Customization : </strong>
              <p className="max-w-96 mx-auto sm:pl-4   p-2 mt-2 sm:mt-4  border border-orange-500 leading-7 tracking-wide text-gray-400 hover:text-gray-300 sm:text-xl sm:max-w-2/3 sm:hover:scale-105 transition-all duration-500 ease-in-out">
                Personalize your task lists with categories, tags, and
                priorities to fit your workflow.
              </p>
            </li>{" "}
            <li className="mt-4">
              <strong className=" ">Reminders and Notifications : </strong>
              <p className="max-w-96 mx-auto sm:pl-4   p-2 mt-2 sm:mt-4  border border-orange-500 leading-7 tracking-wide text-gray-400 hover:text-gray-300 sm:text-xl sm:max-w-2/3 sm:py-5 sm:hover:scale-105 transition-all duration-500 ease-in-out">
                Stay on track with customizable reminders and push
                notifications.
              </p>
            </li>{" "}
            <li className="mt-4">
              <strong className="">Security :</strong>
              <p className="max-w-96 mx-auto sm:pl-4   p-2 mt-2 sm:mt-4   border border-orange-500 leading-7 tracking-wide text-gray-400 hover:text-gray-300 sm:text-xl sm:max-w-2/3 sm:hover:scale-105 transition-all duration-500 ease-in-out">
                Your data is safe with us, thanks to our robust security
                measures and privacy policies.
              </p>
            </li>
          </ul>
        </li>
        <li></li>
      </ul> */}
    </section>
  );
};

export default About;
