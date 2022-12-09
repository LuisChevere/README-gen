// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `<h1 align="center>#${answers.title}</h1>

  ![badge] https://img.shields.io/badge/license-${answers.license}-yellow)</br>

  ## Description
  ${answers.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation] (#installation)
  - [Usage] (#usage)
  - [License] (#license)
  - [Contributions] (#contributions)
  - [Tests] (#tests)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage} 
  
  ## Contributions
  ${answers.contributions}

  ## Tests
  - ${answers.tests}
  
  ## License
  This application uses the ${answers.license} license.

  ## Questions
  ${answers.questions}</br>
  </br>
  Github: [${answers.github}](https://github.com/${answers.github})</br>
`;
}


module.exports = generateMarkdown;
