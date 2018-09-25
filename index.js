// // Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];

// // Create a new task by adding to the arrays
// // A new task will be created as incomplete
// function newTask(title) {
//   taskTitles.push(title);
//   taskComplete.push(false);
// }

// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }

// // Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }

function newTask(title, desc) {
  const task = {
    title: title,
    description: desc,
    complete: false,
  

    logState: function() {
      console.log(`${this.title} has${this.complete ? ' ' : ' not '}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask('Clean cat liter', 'Take all the 💩 out of the litter box');
const task2 = newTask('Do laundry', '😨');
const tasks = [task1, task2];

// console.log(tasks);

task1.logState();
task1.markCompleted();
task1.logState();

// console.log(tasks);

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed
