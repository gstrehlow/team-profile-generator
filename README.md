# Team Profile Generator

## Video Walkthrough
[Link to Video Walkthrough](https://watch.screencastify.com/v/K5s6DvdkEVPF489EJrkK)

## Installation
- First, you will clone the repository, next you will install the dependencies using 'npm install jest inquirer', after that you can run the tests with 'npm run test', and lastly to run the application, simply type 'node index' into the console and answer the prompts. An index.html file will be generated in the dist folder and that is where you are able to view the the output. 

## User Story
- As a Manager, I want to generate a webpage that displays my team's basic info, so that I have quick access to their emails and GitHub profiles.

## Acceptance Criteria 
- Given a command-line application that accepts user input
- When I am prompted for my team members and their information, then an HTML file is generated that displays a nicely formatted team roster based on user input.
- When I click on an email address in the HTML, then my default email program opens and populates the TO field of the email with the address
- When I click on the GitHub username, then that GitHub profile opens in a new tab
- When I start the application, then I am prompted to enter the team manager’s name, employee ID, email address, and office number
- When I enter the team manager’s name, employee ID, email address, and office number, then I am presented with a menu with the option to add an engineer or an intern or to finish building my team
- When I select the engineer option, then I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
- When I select the intern option, then I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu.
- When I decide to finish building my team, then I exit the application, and the HTML is generated.
