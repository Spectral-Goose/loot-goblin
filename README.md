# Welcome to Loot Goblin! #

## Project Table of Contents ##

- [Statement of Purpose](/docs/statement-of-purpose.md)
- [Research & Background](/docs/research-and-background.md)
- [Project Languages, Software, and Hardware](/docs/project-languages-software-and-hardware.md)
- [Project Requirements](/docs/project-requirements.md)
- [Project Implementation Description & Explanation](/docs/project-implementation-description-and-explanation.md)
- [Test Plan](/docs/test-plan.md)
- [Test Results](/docs/test-results.md)
- [Challenges Overcome](/docs/challenges-overcome.md)
- [Future Enhancements](/docs/future-enhancements.md)
- [Presentation Slides](/docs/loot-goblin.pdf)

## How to use Loot Goblin's public deployment ##

Navigate to https://csu-lootgoblin.meteorapp.com in your browser.

## How to Install Meteor and run Loot Goblin on Ubuntu ##

1. Install the Meteor framework \
    `$ curl https://install.meteor.com/ | sh`

2. Install @babel/runtime. This package is necessary for the project to run. You might also be prompted to run a fix for the package. \
    `$ meteor npm install --save @babel/runtime` \
    `$ npm audit fix`

3. Download the project from Github, navigate to the project's home directory (rpg-inventory/), and launch the project. \
    `$ meteor`

4. Open a web browser and open localhost at the following link. \
    http://localhost:3000
