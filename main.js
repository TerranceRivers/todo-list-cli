const prompt = require("prompt-sync")({ sigint: true });

let completed = [];
let incompleted = [];

console.log("");
console.log("Welcome to the To-Do List Manager Application! ");
console.log("===============================================");

main();

function main() {
  completedArr();
  incompletedArr();
  console.log("~ Select an action ~");
  console.log("[1] Create a to-do item");
  console.log("[2] Complete a to-do item");
  console.log("[3] Edit");
  console.log("[4] Exit");
  let option = Number(prompt("> "));
  if (option === 1) {
    create();
  } else if (option === 2) {
    completedTask();
  } else if (option === 3) {
    edit()
  } else if (option === 4){
    farwell()
  } else {
    console.log("Invalid Choice Please try again!!!!");
    main();
  }
}
function create() {
  console.log("~ Creating a new to-do item ~");
  console.log("What is this to-do item called?");
  let userPic = prompt("> ");
  if (userPic === "") {
    console.log("Please enter a Task Here");
    create();
  }
  incompleted.push(userPic);

  main();
}
function completedTask() {
  if (incompleted.length === 0) {
    console.log("You have no items to complete.");
    main();
  } else {
    console.log("Which to-do item would you like to complete?");
    incompletedArr();

    let item = null;
    while (item === null) {
      const input = prompt("> ");
      const number = Number(input);
      if (String(number) !== input || input === "") {
        console.log("Invalid choice. Please enter a number from the list.");
      } else if (number < 1 || number > incompleted.length) {
        console.log("Invalid choice. Please enter a number from the list.");
      } else {
        item = number;
      }
    }

    for (i = 0; i < incompleted.length; i++) {
      if (i === item - 1) {
        console.log("You have completed " + incompleted[i]);
        completed.push(incompleted[i]);
        incompleted.splice(i, 1);
        main();
      }
    }
  }
}
function completedArr() {
  console.log("============COMPLETED===================");
  if (completed.length === 0) {
    console.log("No compeleted Items");
  } else
    for (i = 0; i < completed.length; i++) {
      console.log(i + 1 + ": " + completed[i]);
      console.log(" ");
    }
}
function incompletedArr() {
  console.log("============INCOMPLETED===================");
  if (incompleted.length === 0) {
    console.log("your list is empty");
  } else
    for (i = 0; i < incompleted.length; i++) {
      console.log(i + 1 + ": " + incompleted[i]);
      console.log(" ");
    }
}
function edit() {
  if (incompleted.length === 0) {
    console.log("You have no items to edit.");
    main();
  } else {
    console.log("Which to-do item would you like to edit?");
    incompletedArr();

    let item = null;
    while (item === null) {
      const input = prompt("> ");
      const number = Number(input);
      if (String(number) !== input || input === "") {
        console.log("Invalid choice. Please enter a number from the list.");
      } else if (number < 1 || number > incompleted.length) {
        console.log("Invalid choice. Please enter a number from the list.");
      } else {
        item = number;
      }
    }

    for (i = 0; i < incompleted.length; i++) {
      if (i === item - 1) {
        console.log("Please edit your to do item here")
        let newedit = prompt("> ")
        incompleted[i] = newedit
        main();
      }
    }
  }
}
function farwell(){
  console.log(" You have exited the application Good Bye!!")
}

 
