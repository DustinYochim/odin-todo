import { format, parseISO } from "date-fns";
import Task from "./Task.js";
import Project from "./Project.js";

export default class UI {
  // Initialize the UI module
  static init() {
    // Render all tasks
    UI.renderAllTasks();
    UI.renderAllProjects();
    UI.themeSwitcher();

    // Add event listeners
    UI.addEventListeners();

    console.log("UI module initialized");
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
    // Render Title
    const name = document.createElement("span");
    name.classList.add("task-name");
    name.textContent = task.name;
    // Render Due Date
    const dueDate = document.createElement("span");
    dueDate.classList.add("due-date");
    dueDate.textContent = task.dueDate;
    // dueDate.textContent = format(parseISO(task.dueDate), "MM/dd/yyyy");
    // console.log(parseISO(task.dueDate));
    // Render details button
    const expandButton = document.createElement("button");
    expandButton.setAttribute("id", "expandButton");
    expandButton.classList.add("expand-button");
    // Render details icon
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
    taskDetails.appendChild(priority);
    taskDetails.appendChild(project);
    taskDetails.appendChild(notes);
    li.appendChild(taskDetails);
    // Append li to taskList
    taskList.appendChild(li);
    // Add event listener to expand button
    expandButton.addEventListener("click", () => {
      console.log("Expand button clicked");
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
    console.log("Rendering all tasks");
    const tasks = Task.getAllTasks();
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
    // // Render project delete button
    // const deleteButton = document.createElement("button");
    // deleteButton.classList.add("delete-button");
    // // Render delete icon
    // const deleteIcon = document.createElement("img");
    // deleteIcon.setAttribute("src", "../src/img/delete.svg");
    // deleteButton.appendChild(deleteIcon);
    // Append elements to li
    li.appendChild(name);
    // li.appendChild(deleteButton);
    // Append li to projectList
    projectList.appendChild(li);
  }

  // Render all projects
  static renderAllProjects() {
    console.log("Rendering all projects");
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
    console.log("Hiding project form");
  }

  // Show task form
  static showTaskForm() {
    UI.addFormSelectOptions();
    const taskForm = document.querySelector("#addTaskForm");
    taskForm.setAttribute("style", "display: block");
  }

  // Add task form submit
  static addTaskFormSubmit(e) {
    e.preventDefault();
    const name = document.querySelector("#taskName").value;
    const dueDate = document.querySelector("#dueDate").value;
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
    console.log(project);
    const task = new Task(name, priority, notes, false, project, dueDate);
    Project.addTaskToProject(project, task);
    Task.addTask(task);
    UI.renderTask(task);
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

    const sortButton = document.querySelector("#sortButton");
    sortButton.addEventListener("click", UI.sortTaskAscending);
  }

  // Add Form Select Options
  static addFormSelectOptions() {
    const projects = Project.getAllProjects();
    const projectSelect = document.querySelector("#project");
    projects.forEach((project) => {
      const option = document.createElement("option");
      option.setAttribute("value", project.name);
      option.textContent = project.name;
      projectSelect.appendChild(option);
    });
  }
}
