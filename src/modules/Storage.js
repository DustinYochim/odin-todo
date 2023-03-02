/* eslint-disable import/extensions */
import Task from "./Task.js";
import Project from "./Project.js";

export default class Storage {
  static updateLocalStorage() {
    console.log("Updating local storage");
    localStorage.setItem("projects", JSON.stringify(Project.getAllProjects()));
    localStorage.setItem("tasks", JSON.stringify(Task.getAllTasks()));
  }

  static getLocalStorage() {
    console.log("Getting local storage");
    const projects = JSON.parse(localStorage.getItem("projects"));
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (projects === null || tasks === null) return;
    Task.addTasks(tasks);
    Project.addProjects(projects);
  }
}
