const UpdateUsernameComponent = ({ usernameRef }) => {
  return (
    <div className="flex flex-col gap-2 ">
      <label className="text-2xl" htmlFor="name">
        Username
      </label>
      <input
        ref={usernameRef}
        className="w-full text-black tracking-wider font-bold  text-xl border-l-4 border-r-4 border-t-2 border-b-2 border-black rounded-lg focus:outline-none px-4 h-12"
        type="text"
        id="name"
      />
    </div>
  );
};

export default UpdateUsernameComponent;
