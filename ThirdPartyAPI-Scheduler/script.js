//global variables for hours

var hour8 = $("#8");
var hour9 = $("#9");
var hour10 = $("#10");
var hour11 = $("#11");
var hour12 = $("#12");
var hour1 = $("#13");
var hour2 = $("#14");
var hour3 = $("#15");
var hour4 = $("#16");
var hour5 = $("#17");
var time = moment();


// gets data for the header date
function currentDate() {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

}
//sets current date and saves user entry data
function dayPlanner() {

    currentDate();

    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);

        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    });
}
//activates save button within HTML
dayPlanner ();
var saveBtn = $(".saveBtn");
//on click function
saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();

    localStorage.setItem(time, schedule);
});
//sets the CSS to activate color changes based on the past/present/future hours to help organize
function pastPresentFuture () {
    hour = time.hours();
    $(".time-block").each(function () {
        var thisHour = parseInt($(this).attr("id"));

        if (thisHour > hour) {
            $(this).addClass("future");
        }
        else if (thisHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    });
}
//calls the function
pastPresentFuture ();