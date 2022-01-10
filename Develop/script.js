// Add today's date to jumbotron using moment.js
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do YYYY"));

//colour coding for present, past and future

var rows = document.getElementsByClassName("time-block row");
let currentHour = parseInt(moment().format('H'));

Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === rowHour) {
      setColor(row, "red");
    } else if ((currentHour < rowHour) ) {
      setColor(row, "green");
    } else if ((currentHour > rowHour) ) {
      setColor(row, "lightgrey");
    } else {
      setColor(row, "white");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}