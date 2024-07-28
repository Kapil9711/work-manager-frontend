import { forwardRef } from "react";
const UpdatePasswordComponent = forwardRef(({ children }, ref) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-2xl" htmlFor="name">
        {children}
      </label>
      <input
        ref={ref}
        className="w-full text-black tracking-wider font-bold  text-xl border-l-4 border-r-4 border-t-2 border-b-2 border-black rounded-lg focus:outline-none px-4 h-12"
        type="text"
        id="name"
      />
    </div>
  );
});

UpdatePasswordComponent.displayName = "UpdatePassword";

export default UpdatePasswordComponent;
