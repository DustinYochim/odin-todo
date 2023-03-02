import { format } from "date-fns";
import Storage from "./Storage.js";
import Task from "./Task.js";
import Project from "./Project.js";

export default class UI {
  // Initialize the UI module
  static init() {
    // Check local storage
    UI.themeSwitcher();
    // Render all tasks
    UI.renderAllTasks();
    UI.renderAllProjects();
    // Add event listeners
    UI.addEventListeners();
  }

  // Initialize task buttons
  static initTaskButtons(
    expandButton,
    taskDetails,
    taskSummary,
    markCompleteButton,
    task,
    li
  ) {
    // Add event listener to expand button
    expandButton.addEventListener("click", () => {
      // console.log("Expand button clicked");
      taskDetails.setAttribute("style", "display: block");
      expandButton.setAttribute("style", "display: none");
      const collapseButton = document.createElement("button");
      collapseButton.classList.add("collapse-button");
      const collapseIcon = document.createElement("img");
      collapseIcon.setAttribute("src", "../src/img/expand-less.svg");
      collapseButton.appendChild(collapseIcon);
      taskSummary.appendChild(collapseButton);
      collapseButton.addEventListener("click", () => {
        taskDetails.setAttribute("style", "display: none");
        expandButton.setAttribute("style", "display: block");
        collapseButton.remove();
      });
    });

    // // Add event listener to complete button
    markCompleteButton.addEventListener("click", () => {
      // Task.completeTask(task);
      Task.deleteTask(task);
      li.remove();
    });
  }

  // Initialize project buttons
  static initProjectButtons(deleteButton, li, project) {
    deleteButton.addEventListener("click", UI.deleteProject);

    // Add event listener to project name
    li.addEventListener("click", (e) => {
      // console.log("Project name clicked");
      console.log(e.target.classList.contains("delete-project-button"));
      if (
        e.target.classList.contains("delete-project-button") ||
        e.target.classList.contains("delete-project-icon")
      ) {
        return;
      }
      // console.log(e);
      const mainHeading = document.querySelector("#mainHeading");
      mainHeading.textContent = project.name;
      const tasks = Task.getAllTasks();
      const filteredTasks = tasks.filter(
        (task) => task.project === project.name
      );
      const taskList = document.querySelector("#taskList");
      taskList.innerHTML = "";
      filteredTasks.forEach((task) => {
        UI.renderTask(task);
      });
    });
  }

  // This code is only used to remember theme selection
  static themeSwitcher() {
    const themeSwitch = document.querySelector(".theme-switch");
    themeSwitch.checked = localStorage.getItem("switchedTheme") === "true";

    themeSwitch.addEventListener("change", (e) => {
      if (e.currentTarget.checked === true) {
        // Add item to localstorage
        localStorage.setItem("switchedTheme", "true");
      } else {
        // Remove item if theme is switched back to normal
        localStorage.removeItem("switchedTheme");
      }
    });
  }

  // Render a single task
  static renderTask(task) {
    const taskList = document.querySelector("#taskList");

    // Render task li
    const li = document.createElement("li");
    li.classList.add("task");
    li.setAttribute("id", "expandable");
    // Render task summary Div
    const taskSummary = document.createElement("div");
    taskSummary.classList.add("task-summary");
    // Render complete button
    const markCompleteButton = document.createElement("button");
    markCompleteButton.classList.add("mark-complete-button");
    // Add style based on priority
    if (task.priority === "high") {
      markCompleteButton.classList.add("high-priority");
    } else if (task.priority === "medium") {
      markCompleteButton.classList.add("medium-priority");
    } else if (task.priority === "low") {
      markCompleteButton.classList.add("low-priority");
    }
    // Render Title
    const name = document.createElement("span");
    name.classList.add("task-name");
    name.textContent = task.name;
    // Render Due Date
    const dueDate = document.createElement("span");
    dueDate.classList.add("due-date");
    dueDate.textContent = task.dueDate;
    // Render expand button
    const expandButton = document.createElement("button");
    expandButton.setAttribute("id", "expandButton");
    expandButton.classList.add("expand-button");
    // Render expand icon
    const expandIcon = document.createElement("img");
    expandIcon.setAttribute("src", "../src/img/expand.svg");
    expandButton.appendChild(expandIcon);

    // Append elements to Summary
    taskSummary.appendChild(markCompleteButton);
    taskSummary.appendChild(name);
    taskSummary.appendChild(dueDate);
    taskSummary.appendChild(expandButton);
    // Append Summary to li
    li.appendChild(taskSummary);

    // Render task details
    const taskDetails = document.createElement("div");
    taskDetails.classList.add("task-details");
    // Render Task Project
    const project = document.createElement("p");
    project.classList.add("task-project");
    project.textContent = `Project: ${task.project}`;
    // Render Task Notes
    const notes = document.createElement("p");
    notes.classList.add("task-notes");
    notes.textContent = `Notes: ${task.notes}`;
    // Render Task Priority
    const priority = document.createElement("p");
    priority.classList.add("task-priority");
    priority.textContent = `Priority: ${task.priority}`;
    // Append elements to taskDetails
    taskDetails.appendChild(priority);
    taskDetails.appendChild(project);
    taskDetails.appendChild(notes);
    // Append taskDetails to li
    li.appendChild(taskDetails);
    // Append li to taskList
    taskList.appendChild(li);

    UI.initTaskButtons(
      expandButton,
      taskDetails,
      taskSummary,
      markCompleteButton,
      task,
      li
    );
  }

  // Expand task details
  static expandTask(task, li, expandButton) {
    const taskDetails = document.createElement("div");
    taskDetails.classList.add("task-details");
    // Render Task Project
    const project = document.createElement("p");
    project.classList.add("task-project");
    project.textContent = task.project;
    // Render Task Notes
    const notes = document.createElement("p");
    notes.classList.add("task-notes");
    notes.textContent = task.notes;
    // Render Task Priority
    const priority = document.createElement("p");
    priority.classList.add("task-priority");
    priority.textContent = task.priority;
    // // Render Task Edit Button
    // const editButton = document.createElement("button");
    // editButton.classList.add("edit-button");
    // // Render Edit Icon
    // const editIcon = document.createElement("img");
    // editIcon.setAttribute("src", "../src/img/edit.svg");
    // editButton.appendChild(editIcon);
    // // Render Task Delete Button
    // const deleteButton = document.createElement("button");
    // deleteButton.classList.add("delete-button");
    // // Render Delete Icon
    // const deleteIcon = document.createElement("img");
    // deleteIcon.setAttribute("src", "../src/img/delete.svg");
    // deleteButton.appendChild(deleteIcon);
    // Render Task Collapse Button
    const collapseButton = document.createElement("button");
    collapseButton.classList.add("collapse-button");
    // Render Collapse Icon
    // const collapseIcon = document.createElement("img");
    // collapseIcon.setAttribute("src", "../src/img/collapse.svg");
    // collapseButton.appendChild(collapseIcon);

    // Append elements to taskDetails
    taskDetails.appendChild(project);
    taskDetails.appendChild(notes);
    taskDetails.appendChild(priority);
    taskDetails.appendChild(collapseButton);
    // taskDetails.appendChild(editButton);
    // taskDetails.appendChild(deleteButton);
    // Append taskDetails to li
    li.appendChild(taskDetails);
    expandButton.setAttribute("style", "display: none;");
  }

  // Render all tasks
  static renderAllTasks() {
    // console.log("Rendering all tasks");
    const mainHeading = document.querySelector("#mainHeading");
    mainHeading.textContent = "";
    mainHeading.textContent = "All Tasks";
    const tasks = Task.getAllTasks();
    tasks.sort((a, b) => {
      const dateA = new Date(a.dueDate);
      const dateB = new Date(b.dueDate);
      return dateA - dateB;
    });
    const taskList = document.querySelector("#taskList");
    taskList.innerHTML = "";
    tasks.forEach((task) => {
      UI.renderTask(task);
    });
  }

  // Render project
  static renderProject(project) {
    const projectList = document.querySelector("#projectList");
    const li = document.createElement("li");
    li.classList.add("project");
    // Render project name
    const name = document.createElement("span");
    name.classList.add("project-name");
    name.textContent = project.name;
    // Render project delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-project-button");
    deleteButton.setAttribute("id", "deleteProjectButton");
    // // Render delete icon
    const deleteIcon = document.createElement("img");
    deleteIcon.classList.add("delete-project-icon");
    deleteIcon.setAttribute("src", "../src/img/x.svg");
    deleteButton.appendChild(deleteIcon);
    // Append elements to li
    li.appendChild(name);
    li.appendChild(deleteButton);
    // Append li to projectList
    projectList.appendChild(li);

    UI.initProjectButtons(deleteButton, li, project);
  }

  // Render all projects
  static renderAllProjects() {
    // console.log("Rendering all projects");
    const projects = Project.getAllProjects();
    const projectList = document.querySelector("#projectList");
    projectList.innerHTML = "";
    projects.forEach((project) => {
      UI.renderProject(project);
    });
  }

  // Show project form
  static showProjectForm() {
    const projectForm = document.querySelector("#addProjectForm");
    projectForm.setAttribute("style", "display: block");
    document.getElementById("addProjectInput").focus();
  }

  // Hide project form
  static hideProjectForm() {
    // console.log("Hiding project form");
    const projectForm = document.querySelector("#addProjectForm");
    projectForm.setAttribute("style", "display: none");
    projectForm.reset();
  }

  // Show task form
  static showTaskForm() {
    UI.addFormSelectOptions();
    const taskForm = document.querySelector("#addTaskForm");
    taskForm.setAttribute("style", "display: block");
  }

  // Hide task form
  static hideTaskForm() {
    const taskForm = document.querySelector("#addTaskForm");
    taskForm.setAttribute("style", "display: none");
    taskForm.reset();
  }

  // Format date
  static formatDate(date) {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    const formattedDate = format(new Date(year, month - 1, day), "MM/dd/yyyy");
    return formattedDate;
  }

  // Add task form submit
  static addTaskFormSubmit(e) {
    e.preventDefault();
    const name = document.querySelector("#taskName").value;
    const date = document.querySelector("#dueDate").value;
    const dueDate = UI.formatDate(date);
    const project = document.querySelector("#project").value;
    const notes = document.querySelector("#notes").value;
    let priority = null;
    if (document.getElementById("high").checked) {
      priority = "high";
    } else if (document.getElementById("medium").checked) {
      priority = "medium";
    } else if (document.getElementById("low").checked) {
      priority = "low";
    } else {
      alert("Something went wrong!");
    }
    const task = new Task(name, priority, notes, false, project, dueDate);
    Project.addTaskToProject(project, task);
    Task.addTask(task);

    UI.renderAllTasks();
    const taskForm = document.querySelector("#addTaskForm");
    taskForm.setAttribute("style", "display: none");
    taskForm.reset();
  }

  // Add project form submit
  static addProjectFormSubmit(e) {
    e.preventDefault();
    const name = document.querySelector("#addProjectInput").value;
    const project = new Project(name);

    Project.addProject(project);
    UI.renderAllProjects();
    const projectForm = document.querySelector("#addProjectForm");
    projectForm.setAttribute("style", "display: none");
    projectForm.reset();
  }

  // Delete project
  static deleteProject(e) {
    const project = e.target.parentElement.parentElement;
    // console.log(project);
    const projectName = project.querySelector(".project-name").textContent;
    if (projectName === "Inbox") {
      alert("You cannot delete the Inbox project");
      return;
    }
    // console.log(projectName);
    console.log(Project.getAllProjects());
    Task.deleteAllTasksInProject(projectName);
    Project.deleteProject(projectName);
    console.log(Project.getAllProjects());
    UI.renderAllProjects();
    UI.renderAllTasks();
  }

  // Render Tasks due today
  static renderTodayTasks() {
    // console.log("Rendering tasks due today");
    const mainHeading = document.querySelector("#mainHeading");
    mainHeading.textContent = "Today";
    const tasks = Task.getAllTasks();
    const taskList = document.querySelector("#taskList");
    taskList.innerHTML = "";
    tasks.forEach((task) => {
      if (task.dueDate === UI.formatDate(new Date().toISOString())) {
        UI.renderTask(task);
      }
    });
  }

  // Render Tomorrows Tasks
  static renderTomorrowTasks() {
    // console.log("Rendering tasks due tomorrow");
    const mainHeading = document.querySelector("#mainHeading");
    mainHeading.textContent = "Tomorrow";
    const tasks = Task.getAllTasks();
    const taskList = document.querySelector("#taskList");
    taskList.innerHTML = "";
    tasks.forEach((task) => {
      const taskDate = new Date(task.dueDate);
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      if (taskDate.toDateString() === tomorrow.toDateString()) {
        UI.renderTask(task);
      }
    });
  }

  // Render Tasks due this week
  static renderWeekTasks() {
    // console.log("Rendering tasks due this week");
    const mainHeading = document.querySelector("#mainHeading");
    mainHeading.textContent = "Next 7 Days";
    const tasks = Task.getAllTasks();
    tasks.sort((a, b) => {
      const dateA = new Date(a.dueDate);
      const dateB = new Date(b.dueDate);
      return dateA - dateB;
    });
    const taskList = document.querySelector("#taskList");
    taskList.innerHTML = "";
    tasks.forEach((task) => {
      const taskDate = new Date(task.dueDate);
      const today = new Date();
      const week = new Date();
      week.setDate(today.getDate() + 7);
      if (taskDate >= today && taskDate <= week) {
        UI.renderTask(task);
      }
    });
  }

  // Add Event Listeners
  static addEventListeners() {
    const addProjectButton = document.querySelector("#addProjectButton");
    addProjectButton.addEventListener("click", UI.showProjectForm);

    const addProjectForm = document.querySelector("#addProjectForm");
    addProjectForm.addEventListener("submit", UI.addProjectFormSubmit);

    const addTaskButton = document.querySelector("#addTaskButton");
    addTaskButton.addEventListener("click", UI.showTaskForm);

    const addTaskForm = document.querySelector("#addTaskForm");
    addTaskForm.addEventListener("submit", UI.addTaskFormSubmit);
    addTaskForm.reset();

    const cancelButton = document.querySelector("#cancelButton");
    cancelButton.addEventListener("click", UI.hideTaskForm);

    const cancelProjectButton = document.querySelector("#cancelProjectButton");
    cancelProjectButton.addEventListener("click", UI.hideProjectForm);

    const allTasksLink = document.querySelector("#allTasksLink");
    allTasksLink.addEventListener("click", UI.renderAllTasks);

    const todayLink = document.querySelector("#todayLink");
    todayLink.addEventListener("click", UI.renderTodayTasks);

    const tomorrowLink = document.querySelector("#tomorrowLink");
    tomorrowLink.addEventListener("click", UI.renderTomorrowTasks);

    const weekLink = document.querySelector("#weekLink");
    weekLink.addEventListener("click", UI.renderWeekTasks);
  }

  // Add Form Select Options
  static addFormSelectOptions() {
    const projects = Project.getAllProjects();
    const projectSelect = document.querySelector("#project");
    projectSelect.innerHTML = "";
    projects.forEach((project) => {
      const option = document.createElement("option");
      option.setAttribute("value", project.name);
      option.textContent = project.name;
      projectSelect.appendChild(option);
    });
  }
}
