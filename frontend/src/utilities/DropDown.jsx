import ModalSetting from "./ModalSetting";

const DropDown = ({ user, setUser, starImg }) => {
  return (
    <div className="dropdown dropdown-hover">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost  text-white text-xl m-1"
      >
        <img className="rounded-full w-11 h-11" src={starImg} alt="starImg" />

        <span className="hidden sm:block">{user.username}</span>
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content -ml-36 sm:ml-0 menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
          <a>{user.email}</a>
        </li>
        <li>
          <ModalSetting user={user} setUser={setUser} />
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
