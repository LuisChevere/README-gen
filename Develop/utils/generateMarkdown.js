// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license.license;
  let yourLicense = "";

  if(licenseType === "MIT") {
    yourLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if(licenseType === "Apache License 2.0") {
    yourLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  } else if (licenseType == "Boost Software License 1.0") {
    yourLicense = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`
  } else if (licenseType === "Eclipse Public License 2.0") {
    yourLicense = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]`
  } else {
    license.license = "N/A"
  }
  return yourLicense;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(licenseType === "MIT") {
    yourLicense = `(https://opensource.org/licenses/MIT)`
    return yourLicense
  } else if(licenseType === "Apache License 2.0") {
    yourLicense = `(https://opensource.org/licenses/Apache-2.0)`
    return yourLicense
  } else if (licenseType == "Boost Software License 1.0") {
    yourLicense = `(https://www.boost.org/LICENSE_1_0.txt)`
    return yourLicense
  } else if (licenseType === "Eclipse Public License 2.0") {
    yourLicense = `(https://opensource.org/licenses/EPL-1.0)`
    return yourLicense
  } else {
    license.license = "N/A"
    return yourLicense
  }  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  
  <h1 align="center">#${answers.title}</h1>

  ${renderLicenseBadge(answers.license)}<br />

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#contributions)
  - [Tests](#tests)

## Description
  ${answers.description}

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage} 
  
  ## Contributions
  ${answers.contributions}

  ## Tests
  ${answers.test}
  
  ## License
  This application uses the ${answers.license} license.

  ## Questions
  Github: [${answers.github}](https://github.com/${answers.github})<br />
  <br />
  Email with any questions: ${answers.email}
`;
}


module.exports = generateMarkdown;
