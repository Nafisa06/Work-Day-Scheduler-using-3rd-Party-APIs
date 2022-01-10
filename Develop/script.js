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

//click event for save button

$(document).ready(function () {
    
    $(".saveBtn").on("click", function () {
        
        var text = $(this).siblings(".appointment").val();
        var time = $(this).parent().attr("id"); 

//local storage for each time-block row

localStorage.setItem(time, text);
    })

function timeTracker() {
      
    var timeNow = moment().hour();

   //time block loops
    
    $(".time-block row").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

          
        if (blockTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");

            }

        else if (blockTime === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");

            }

        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

            }
        })
    }
