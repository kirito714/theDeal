const inquirer = require("inquirer");
const fs = require("fs");
const { error } = require("console");

const generateMarkdown = require("./generateMarkdown");


inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "what is your project title?",
    },
    {
      type: "input",
      name: "description",
      message: "what is the description?",
    },
    {
      type: "input",
      name: "installation",
      message: "what is the installation?",
    },
    {
      type: "input",
      name: "instructions",
      message: "what is the instructions?",
    },
    {
      type: "input",
      name: "usage",
      message: "what is the usage",
    },
    {
      type: "list",
      name: "licenseBadge",
      message: "Choose a license",
      choices: ["Apache", "Boost", "BSD-3"],
    },
    {
      type: "inpute",
      name: "github",
      message: "Enter your github username",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email",
    },
  ])
  .then((input) => {
    const readMecontent = generateMarkdown(input);

    fs.writeFile("README.md", readMecontent, (err) =>
      err ? console.log(err) : console.log("Successfully created README.md!")
    );
  });
