import { combineReducers } from "redux";
import Auth from "./auth";
import Alert from "./alert";
import Channels from "./channels";
import Messager from "./messagers";
import DirectMessager from "./directMessages";

export default combineReducers({
  Auth,
  Alert,
  Channels,
  Messager,
  DirectMessager,
});
