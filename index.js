require('dotenv').config()
const car = require('./cars.js')
const chalk = require('chalk')


//console.log(chalk.blue()); //chalk template literal
console.log(chalk.blue(process.env.NAME));
console.log(chalk.blue(car.name, car.year, car.color, car.model));



