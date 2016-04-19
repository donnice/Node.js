/**
 * http://usejsdoc.org/
 */
var currency = require('./currency');


console.log('50 Canadian dollars the following amount of dollars:');
console.log(currency.canadianToUS(50));

console.log('30 dollars the following amount of canadian dollars:');
console.log(currency.USToCanadian(30));