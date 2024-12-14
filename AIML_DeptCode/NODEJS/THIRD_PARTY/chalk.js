//chalk module
//used for styling terminal string output

const chalk = require('chalk');

// Basic color usage
console.log(chalk.blue('This text is blue!'));
console.log(chalk.red('This text is red!'));
console.log(chalk.green('This text is green!'));

// Combining styles
console.log(chalk.yellow.bgBlue.bold('This is bold yellow text on a blue background!'));

// Using template literals
const name = 'Alice';
console.log(chalk.cyan(`Hello, ${name}!`));

// Creating custom styles
const error = chalk.bold.red;
const success = chalk.green;

console.log(error('This is an error message!'));
console.log(success('This is a success message!'));