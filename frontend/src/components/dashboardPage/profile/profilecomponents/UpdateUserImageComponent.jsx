const UpdateUserImageComponent = ({ setFile }) => {
  return (
    <div className="flex flex-col gap-2 ">
      <label className="text-2xl" htmlFor="name">
        Select Image
      </label>
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files["0"]);
        }}
      />
    </div>
  );
};
export default UpdateUserImageComponent;
