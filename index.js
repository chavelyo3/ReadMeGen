const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const util = require("util");
const writeToFiles = util.promisify(fs.writeFile);


// array of questions for user
const questions = () =>
inquirer.prompt([


            {
    type: "input",
    message: "Please enter the name of your project?",
    name: "Title",
    },

    {
        type: "input",
        name: "Describtion",
        message: "Please provide a description of your project.",
        
    },

    {
        type: "input",
        name: "Installation",
        message:"Please describe the installation process and what is needed.",

    },

    {
        type: "input",
        name: "Usage",
        message:"Describe how this project can be used.",

    },

    {
        type: "input",
        name: "Contributors",
        message:"Enter the name(s) of the contributors of this project.",

    },

    {
        type: "input",
        name: "Test",
        message: "What are commands needed to test this project?",

    },

    {
        type: "list",
        name: "License",
        message:"Select License used for this Project?",
        choices: ["MIT", "APACHE","ISC","Other" ],

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
    fs.writeFile(fileName,data, err => {
        if(err){
            throw err;
        }
    })
    
}

// function to initialize program
function init() {
    questions() 
    .then((answers) => {
      writeToFile("./README.MD", generateMarkdown(answers));
      console.log("README.md has been successfully created!");
    }
        
    )
}


// function call to initialize program
init();



