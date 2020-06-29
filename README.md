# _Tamagochi Clone_

#### _A Tamagochi-like Game_

#### By _**Micheal Hansen & Tristan Emmerson**_

## Description

_This is a game wherein a player tries to take care of a creature that is suspiciously similar to a tamagochi._

## Specifications

| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Program can create a Pet object** | Input: User clicks New Game | Output: Pet = {} |
| **Pet object tracks a hunger stat** | Input: None | Output: Pet = {Hunger = 0} |
| **Pet object tracks a fatigue stat** | Input: None | Output: Pet = {Hunger = 0, Fatigue = 0} |
| **Pet object tracks a mood stat** | Input: None | Output: Pet = {Hunger = 0, Fatigue = 0, Mood = 0} |
| **Hunger stat increments as time passes** | Input: User waits 5 seconds | Output: Pet = {Hunger = 5, ..} |
| **Fatigue stat increments as time passes** | Input: User waits 5 seconds | Output: Pet = {.., Fatigue = 2, ..} |
| **Mood stat increments as time passes** | Input: User waits 5 seconds | Output: Pet = {.., Mood = 10} |
| **Feed button resets the Hunger stat** | Input: User clicks feed | Output: Pet = {Hunger = 0, ..} |
| **Nap button resets the Fatigue stat** | Input: User clicks nap | Output: Pet = {.., Fatigue = 0, ..} |
| **Play button resets the Mood stat** | Input: User clicks play | Output: Pet = {.., Mood = 0} |
| **Object detects a game over if any stat hits the cap** | Input: Hunger stat reaches 20 | Output: Game Over |
| **Object prevents further input if game is over** | Input: User clicks play after Game Over | Output: None |

## Setup/Installation Requirements

Software Requirements
1. Internet browser
2. A code editor like VSCode or Atom to view or edit the codebase.

Open by downloading:
1. Download this repository onto your computer by clicking the 'clone or download button'
2. Double click index.html to open it in your web browser

Open via Bash/GitBash:
1. Clone this repository onto your computer:
`git clone https://github.com/Sudolphus/tamagochi-clone`
2. Navigate into the `tamagochi-clone` directory in Visual Studio Code or preferred text editor
`code .`
3. Get the necessary packages `npm install`.
4. Compile the code `npm run build`.
5. Open index.html in Chrome or preferred browser:
`open dist/index.html`


## Known Bugs

_None currently known_

## Support and contact details

_Please reach out through my GitHub account._

## Technologies Used

* _HTML_
* _CSS (including Bootstrap)_
* _JavaScript (including jQuery)_
* _VSCode_
* _Node.js (including webpack)_

### License

MIT License.

Copyright (c) 2020 **_Micheal Hansen & Tristan Emmerson_**
