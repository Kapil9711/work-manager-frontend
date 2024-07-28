const HandleUserProfileUpdateComponent = ({ user, setActive }) => {
  return (
    <>
      <h3 className="font-bold text-2xl text-center pt-4">
        Hello! {user.username}
      </h3>
      <div className="grid gap-5 px-10 py-4  w-full  mx-auto mt-5 ">
        <UpdateProfileButton heading={"Username"} setActive={setActive} />
        <UpdateProfileButton heading={"Password"} setActive={setActive} />
        <UpdateProfileButton heading={"ProfileImg"} setActive={setActive} />
      </div>
    </>
  );
};

const UpdateProfileButton = ({ heading, setActive }) => {
  return (
    <div className="flex  justify-between items-center">
      <h2 className="text-xl tracking-wide text-white font-bold">{heading}</h2>
      <button
        onClick={() => setActive(heading)}
        className="btn btn-xs btn-accent bg-violet-400 hover:bg-violet-500 "
      >
        update
      </button>
    </div>
  );
};

export default HandleUserProfileUpdateComponent;
