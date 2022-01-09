// Add today's date to jumbotron using moment.js
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do YYYY"));
