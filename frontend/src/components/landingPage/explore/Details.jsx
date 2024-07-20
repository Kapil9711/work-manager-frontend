import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Details = () => {
  useGSAP(() => {
    gsap.registerPlugin({ ScrollTrigger });
    gsap.from(".a", {
      scrollTrigger: {
        trigger: ".a",
        start: "-10% bottom",
        toggleActions: "restart none none none",
      },

      y: 100,
      opacity: 0,
      duration: 1,
    });

    gsap.from(".b", {
      scrollTrigger: {
        trigger: ".b",
        start: "-10% bottom",
        toggleActions: "restart none none none",
      },

      x: -100,
      opacity: 0,
      duration: 1,
      delay: 0.2,
    });

    gsap.from(".c", {
      scrollTrigger: {
        trigger: ".c",
        start: "-10% bottom",
        toggleActions: "restart none none none",
      },

      x: 100,
      opacity: 0,
      duration: 1,
      delay: 0.2,
    });

    gsap.from(".d", {
      scrollTrigger: {
        trigger: ".d",
        start: "-10% bottom",
        toggleActions: "restart none none none",
      },

      x: -100,
      opacity: 0,
      duration: 1,
      delay: 0.4,
    });

    gsap.from(".e", {
      scrollTrigger: {
        trigger: ".e",
        start: "-10% bottom",
        toggleActions: "restart none none none",
      },

      x: 100,
      opacity: 0,
      duration: 1,
      delay: 0.4,
    });

    gsap.from(".f", {
      scrollTrigger: {
        trigger: ".f",
        start: "-10% bottom",
        toggleActions: "restart none none none",
      },

      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });
  });

  return (
    <section
      style={{ height: "980px" }}
      className=" relative   details sm:container min-h-screen   pt-20 mx-auto"
    >
      <h2
        id="details"
        className="text-4xl sm:text-5xl text-orange-500 text-center"
      >
        Features
      </h2>

      <div className="a mt-10 sm:mt-0 mx-auto sm:hover:scale-105 transition-transform duration-200 ease-linear sm:absolute top-52 left-1/2 sm:-translate-x-1/2 w-64 h-64 flex justify-center items-center border  border-l-4 border-t-8 border-r-4 rounded-full border-orange-500">
        <p className="text-lg p-8 text-gray-200">
          Quickly add tasks with due dates, priorities, and notes. Effortlessly
          edit or delete tasks as needed.
        </p>
      </div>

      <div className="d mt-10 mx-auto sm:hover:scale-105 transition-transform duration-200 ease-linear  w-64 h-64 sm:absolute  sm:mt-40 top-96 sm:right-80 flex justify-center items-center border   border-t-8 border-r-4 border-l-4 rounded-full border-orange-500">
        <p className="text-lg p-8 text-gray-200">
          Break down larger tasks into manageable subtasks to ensure every
          detail is covered
        </p>
      </div>

      <div className="e mx-auto mt-10 sm:hover:scale-105 transition-transform duration-200 ease-linear  w-64 h-64 sm:absolute sm:mt-40 top-96 left-80 flex justify-center items-center border  border-l-4 border-t-8 border-r-4 rounded-full border-orange-500">
        <p className="text-lg p-8 text-gray-200">
          Organize your tasks with categories and tags for easy filtering and
          searching.
        </p>
      </div>

      <div
        style={{ borderRadius: "50%" }}
        className="hidden  b sm:hover:scale-105 transition-transform duration-200 ease-linear sm:flex justify-center items-center sm:absolute rotate-45   right-96  mt-12 line1 top-96 w-60 h-28 border-t-2 border-b-2 border-orange-500"
      >
        <strong className="text-sm text-gray-200">Subtasks</strong>
      </div>

      <div
        style={{ borderRadius: "50%" }}
        className="hidden c sm:hover:scale-105 transition-transform duration-200 ease-linear sm:flex justify-center items-center sm:absolute -rotate-45  left-96   mt-12 line1 top-96 w-60 h-28 border-t-2 border-b-2 border-orange-500"
      >
        <strong className="text-sm text-gray-200">Customization</strong>
      </div>

      <div
        style={{ borderRadius: "100%" }}
        className="f hidden sm:hover:scale-105 transition-transform duration-200 ease-linear  sm:absolute  sm:flex justify-center items-center  left-96 ml-10  mt-10 line1 bottom-0 w-1/3 h-60 border-t-4 border-b-4 border-orange-500"
      >
        <p className=" text-lg pl-20 pr-16 text-center text-gray-200">
          Organize your tasks with categories and tags for easy filtering and
          searching.
        </p>
      </div>

      <div></div>
    </section>
  );
};

export default Details;
