import { clearSession } from "../../actions/sessionActions";

function LogOutPage(props) {
  clearSession();
  props.history.push("/login");
}

export default LogOutPage;
