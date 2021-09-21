import { combineReducers } from "redux";
import auth from "./auth";
import projects from "./projects";
import tasks from "./tasks";
import message from "./message";
import Authentication from "./Authentication";

export default combineReducers({
  auth,
  projects,
  tasks,
  message,
  Authentication,
});
