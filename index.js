// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: "What is the title of your project?"
    },
    {
        type: 'input',
        name: 'description',
        message:"Please describe your project's scope and purpose."
    },
    {
    type: 'input',
    name: 'installation',
    message:"What are the installation instructions for your project?"
    },
    {   
    type: 'input',
    name: 'usage',
    message: "How does someone use your project?"
    },
    {
    type: 'input',
    name: 'contributing',
    message: "How can somebody contribute to this project?"
    }, 
    {
    type: 'input',
    name: 'tests',
    message: "How does someone run tests on this project?"
    },
    {
    type: 'input',
    name: 'github',
    message: "What is your Github username?"
    },
    {
    type: 'input',
    name: 'email',
    message: "What is your email address?"
    },
    {
    type: 'input',
    name: 'name',
    message: "What is your name?"
        },
    {
    type: 'list',
    name: 'license',
    message: 'Which license would you like to use?',
    choices: ['MIT','GPL','Apache', 'BSD']
    }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName,`# ${data.title}\n`, function(err)  {
        if(err) console.log(err);
        else{
            console.log("Title successfully written!");
            fs.appendFile(fileName,generateMarkdown(data),(err)=>
            err ? console.error(err) : console.log('Commit logged!'));;
        }
    })}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers)=>{
        writeToFile('./utils/README.md', answers);
    })

}

// Function call to initialize app
init();




// `${installation}\n${usage}\n${contributing}\n${tests}\n## Questions \n If you have questions, please visit the source repository on Github (https://www.github.com/${github}) or email me at ${email}.\n`
