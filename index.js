// TODO: Include packages needed for this application

const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")
const inquirer = require("inquirer")

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is your project title:',
    name: 'title'
},{
    type: 'list',
    message: 'What is your project license:',
    name: 'license',
    choices:["MIT","Apache","IBM","No License"]
},{
    type: 'input',
    message: 'Please write a description of your project:',
    name: 'description'
},{
    type: 'input',
    message: 'Please write instructions on how to install the project:',
    name: 'installation'
},{
    type: 'input',
    message: 'Please write instructions on how to use the project:',
    name: 'usage'
},{
    type: 'input',
    message: 'Please write about what or who helped contribute in this project:',
    name: 'contributing'
},{
    type: 'input',
    message: 'Please describe which license you decided to choose for this project:',
    name: 'licenseNote'
},{
    type: 'input',
    message: 'Please write examples on how to test the project:',
    name: 'test'
},{
    type: 'input',
    message: 'Please write your email:',
    name: 'email'
},{
    type: 'input',
    message: 'Please write your github username:',
    name: 'username'
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const content = generateMarkdown(data)
    fs.writeFile(fileName,content,err=>{
        if(err){
            console.error(err)
            return
        }
        console.log('Success')
    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(data=>{
        writeToFile("./output/README.md",data)

    })
}

// Function call to initialize app
init();
