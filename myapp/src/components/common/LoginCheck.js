import sessionStore from "../../stores/sessionStore";
import { toast } from "react-toastify";

function LoginCheck(props) {
  if (sessionStore.getSession() === undefined) {
    props.history.push("/login");
    toast.error("Please login first");
  }
}

export default LoginCheck;
