var moment = require('moment');

console.log(moment().format());



var now = moment();

console.log('current timestamp', now.unix());

var timestamp = 1475842749;
var currentMoment = moment.unix(timestamp);
console.log('current momeent', currentMoment.format('D MMMM, YYYY @ HH:mm'));
