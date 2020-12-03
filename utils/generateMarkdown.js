//function to crete license badge 
function createLicenseBadge(license){
  
  return `
  ![license Badge](https://img.shields.io/badge/license-${license}-blue.svg)
  
  `
}






// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${createLicenseBadge(data.license)}

  ## Table of Contents 
  *[Describtion](#Describtion)
  *[Installation](#Insallation)
  *[Usage](#usage)
  *[Test](#Test)
  *[Contributors](#Contributors)
  *[License](#License)
  *[Contact Information](#ContactInfo)

  ## Describtion 
  ${data.Describtion}

  ## Installation 
  ${data.Installation}

  ## usage 
  ${data.usage}

  ## Tests 
  ${data.Test}

  ## Contributors
  ${data.contributors}

  ## License 
  ${createLicenseBadge(data.license)}

  ## Contact informaion 
  For any questions, please contact me at ${data.email}.
  Interested in seeing more of my work? Please visit [https://github.com/${data.username}](https://github.com/${data.username})


`;
}

module.exports = generateMarkdown;
