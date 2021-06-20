const inquirer = require("inquirer");
const fs = require("fs");
const { error } = require("console");

const generateMarkdown = require("./generateMarkdown");


inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "what is your porject title?",
    },
    {
      type: "input",
      name: "discription",
      message: "what is the description,installation,instructions,usage, ect?",
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
