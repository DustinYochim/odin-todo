const projects = [
  {
    name: "Inbox",
    tasks: [],
  },
];

export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  static addProject(project) {
    projects.push(project);
  }

  static getAllProjects() {
    return projects;
  }

  static addTaskToProject(projectName, task) {
    const project = projects.find((project) => project.name === projectName);
    project.tasks.push(task);
  }

  static getProject(name) {
    return projects.find((project) => project.name === name);
  }

  static deleteProject(name) {
    const project = projects.find((project) => project.name === name);
    projects.splice(projects.indexOf(project), 1);
  }
}
