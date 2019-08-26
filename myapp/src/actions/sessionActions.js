import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

export function saveSession(session) {
  dispatcher.dispatch({
    actionType: actionTypes.CREATE_SESSION,
    session: session
  });
}

export function clearSession(session) {
  dispatcher.dispatch({
    actionType: actionTypes.CLEAR_SESSION,
    session: session
  });
}
