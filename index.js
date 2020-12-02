const inquirer = require("inquirer");
const fs = require("fs");


// array of questions for user
const questions = 
inquirer.prompt([
            {
    type: "input",
    message: "What is the name of your project?",
    name: "title"
    },

    {
        type: "input",
        message: "What would you like to add to describe your projec?",
        name: "description"
    },

    {
        type: "input",
        name: "instalation",
        message:"What type of instalation did you need for your project?",

    },

    {
        type: "input",
        name: "usage",
        message:"How do you use this project?",

    },

    {
        type: "input",
        name: "Contributors",
        message:"Enter the name(s) of the contributors for this project ",

    },

    {
        type: "input",
        name: "Test",
        message: "What are command the user need to use to run this project?",

    },

    {
        type: "list",
        name: "license",
        message:"Select License used for this Project?",
        choices: ["MIT", "APACHE 2.0", "ISC", "Public Domain", "GPL", "BSD"],

    },

    {
        type: "input",
        name: "Username",
        message:"What is your Github username?",

    },

    {
        type: "input",
        name: "Email",
        message:"What is your email address?",

    },

]);


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

