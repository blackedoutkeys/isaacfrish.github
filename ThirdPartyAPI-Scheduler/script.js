var hour 9 = $(#9);
var hour 10 = $(#10);
var hour 11 = $(#11);
var hour 12 = $(#12);
var hour 1 = $(#13);
var hour 2 = $(#14);
var hour 3 = $(#15);
var hour 4 = $(#16);
var hour 5 = $(#17);
var time = moment ();

function dayPlanner() {

    $(#currentDay).text(moment().format("dddd [the] Do [of] MMMM"));

    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);

        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    });
}

dayPlanner ();
var saveBtn = $(".saveBtn");

saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();

    localStorage.setItem(time, schedule);
});

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
    })
}

pastPresentFuture ();