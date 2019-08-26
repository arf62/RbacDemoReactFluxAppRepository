import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _sessions = [];

class CourseStroe extends EventEmitter {
  addChangeListner(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListner(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getSession() {
    return _sessions[0];
  }
}

const store = new CourseStroe();

Dispatcher.register(action => {
  switch (action.actionType) {
    case actionTypes.CREATE_SESSION:
      _sessions.push(action.session);
      store.emitChange();
      break;
    case actionTypes.CLEAR_SESSION:
      _sessions = [];
      store.emitChange();
      break;

    default:
    //nothing to do
  }
});

export default store;
