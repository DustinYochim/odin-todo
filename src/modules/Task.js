const tasks = [
  {
    name: "Task 1",
    // dueDate: new Date(),
    dueDate: "2023-03-01",
    priority: "High",
    notes: "This is a note",
    completed: false,
    project: "Inbox",
  },
  {
    name: "Task 2",
    dueDate: "2023-03-02",
    // dueDate: new Date(),
    priority: "High",
    notes: "This is a note",
    completed: false,
    project: "Inbox",
  },
  {
    name: "Task 3",
    dueDate: "2023-03-03",
    // dueDate: new Date(),
    priority: "High",
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

  static getDateFormatted() {
    const day = this.dueDate.split("/")[1];
    const month = this.dueDate.split("/")[1];
    const year = this.dueDate.split("/")[2];
    return `${month}/${day}/${year}`;
  }
}
