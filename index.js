#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let loop = true;
while (loop) {
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "todo",
            message: "What needs to be done?",
        },
        {
            type: "confirm",
            name: "moreTodo",
            message: "Do you want to add more?",
            default: false,
        },
    ]);
    const { todo, moreTodo } = answer;
    if (todo) {
        todos.push(todo);
    }
    else {
        console.log("Invalid Prompt");
    }
    loop = moreTodo;
}
if (todos.length > 0) {
    console.log("Your Today's Todo List:");
    todos.forEach((eTodo) => {
        console.log(eTodo);
    });
}
else {
    console.log(chalk.red("No Todos"));
}
