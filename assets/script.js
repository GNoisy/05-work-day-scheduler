$(document).ready(function () {

    $("#currentDay").text(moment().format("dddd, MMMM Do"));

})

// Have current day set everytime the application is opened by using moment.js

//Have each time block color coded to match which part of the day (past, present, future), by using conditional to check current time

//Make sure user can enter content into timeblock

//When user clicks save button - set item to local storage

//When user refreshes page info needs to be saved - get item from local storage

