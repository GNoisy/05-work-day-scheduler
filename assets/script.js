$(document).ready(function () {

    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    // Have current day set everytime the application is opened by using moment.js

    //Have each time block color coded to match which part of the day (past, present, future), by using conditional to check current time
    var date = new Date();
    // date.setHours(9,0,0);
    // console.log(date);
    var rowNum = ["row-nine", "row-ten", "row-eleven", "row-twelve", "row-one", "row-two", "row-three", "row-four", "row-five"];

    //Sets past, present, future class on each row
    for (var i=0; i<9; i++) {
        //sets hour to 9
        date.setHours(9 + i,0,0,0);
        var row = document.getElementById(rowNum[i]);
        //sets the difference between date and hours
        var diff = moment().diff(date, "hours");
        // console.log(diff);
        if (diff === 0) {
            $(row).addClass("present");
        } 
        else if (diff > 0) {
            $(row).addClass("past");
        }
        else {
            $(row).addClass("future");
        }
    }


    //When user clicks save button - set item to local storage

    //When user refreshes page info needs to be saved - get item from local storage

    

})



