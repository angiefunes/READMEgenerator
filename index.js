// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: ('What is your project title?')
    },
    {
        type: 'input',
        name: 'description',
        message: ('Write a description of your project:')
    },
    {
        type: 'input',
        name: 'installation',
        message: ('What are the steps required to install your project ?'),
    },
    {
        type: 'input',
        name: 'usage',
        message: ('what is the proper usage instructions for your project?'),
    },
    {
        type: 'list',
        name: 'license',
        message: ('What license does your project use?'),
        choices: ['MIT', 'Apache 2.0', 'BSD3',  'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: ('Provide guidelines on how to contribute to your project:'),
    },
    {
        type: 'input',
        name: 'tests',
        message: ('Provide details on how to test your project'),
    },
    {
        type: 'input',
        name: 'questions',
        message: ('For questions Contact:'),
    },
    {
        type: 'input',
        name: 'github',
        message: ('Provide your Github username:'),
    },
    {
        type: 'input',
        name: 'email',
        message: ('Provide your email:')
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) =>
            err 
            ? console.error (err)
            : console.log('Your README has been generated successfully!')
    )};

// TODO: Create a function to initialize app
function init() {
    console.log('Welcome to the README Generator! A program that helps you create a README file.')

        inquirer.prompt(questions)
        .then((response) => 
            writeToFile('sample_README.md', generateMarkdown(response))
        )}

// Function call to initialize app
init();
