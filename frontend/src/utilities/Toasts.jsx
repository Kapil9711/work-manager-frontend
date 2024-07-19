import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notify = (type, message) => {
  toast[type](message, { position: "top-right" });
};

export default Notify;
