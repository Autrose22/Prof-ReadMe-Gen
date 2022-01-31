const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You need to enter a name to continue.');
                return false;
            }
        }
    },
    
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You must provide a project description.');
                return false;
            }
        }
    },
 
    {
        type: 'input',
        name: 'installation',
        message: 'How did you install your project?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('You need to provide installation info to continue.');
                return false;
            }
        }
    },
  
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You must provide information on how to use project.');
                return false;
            }
        }
    },
   
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose a license for your project.',
        choices: ['license 1', 'license 2', 'license 3', 'license 4', 'None'],
        validate: licensingInput => {
            if (licensingInput) {
                return true;
            } else {
                console.log('You must pick a license for your project.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'How should people contribute to this project?',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('You must provide information on how to contribute to your project.');
                return false;
            }
        }
    },
     
    {
        type: 'input',
        name: 'testing',
        message: 'How do you test this project?',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('You must describe how to test your project.');
                return false;
            }
        }
    },
    
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: 'Would you like to add your email?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err)
        throw err;
        console.log('Success!')
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();