const tasks = [
  {
    name: "Task 1",
    dueDate: "03/01/2023",
    priority: "high",
    notes: "This is a note",
    completed: false,
    project: "Inbox",
  },
  {
    name: "Task 2",
    dueDate: "03/03/2023",
    priority: "medium",
    notes: "This is a note",
    completed: false,
    project: "Inbox",
  },
  {
    name: "Task 3",
    dueDate: "03/02/2023",
    priority: "low",
    notes: "This is a note",
    completed: false,
    project: "Inbox",
  },
];

export default class Task {
  constructor(
    name,
    priority,
    notes,
    completed,
    project = "Inbox",
    dueDate = "No date"
  ) {
    this.name = name;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.completed = completed;
    this.project = project;
  }

  static getTask(name) {
    return tasks.find((task) => task.name === name);
  }

  static getAllTasks() {
    return tasks;
  }

  static addTask(task) {
    tasks.push(task);
  }

  static sortTasksByDate() {
    return tasks.sort((a, b) => a.dueDate - b.dueDate);
  }

  static deleteTask(name) {
    const task = tasks.find((task) => task.name === name);
    tasks.splice(tasks.indexOf(task), 1);
  }

  static deleteAllTasksInProject(projectName) {
    const project = tasks.filter((task) => task.project === projectName);
    project.forEach((task) => {
      tasks.splice(tasks.indexOf(task), 1);
    });
  }

  static editTask(name, property, value) {
    const task = tasks.find((task) => task.name === name);
    task[property] = value;
  }
}
