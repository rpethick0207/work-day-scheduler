// Display today's date
var todayDate = moment(0).format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function() {
    // saveBtn click listener
    $(".saveBtn").on("click", function(){
        // Get nerby values of the description in jQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //save to local storage
        localStorage.setItem(time, text);
    })
    function timeTracker() {
        //get current number of hours
        var timeNow = moment().hour();

        //loop time blocks
        $(".time-block").each(function () {

            // check time and classes for background indicators

            if (blockTime < timeNow){
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow){
                $(this).removeClass("future");
                $(this).removeClass ("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
     })

    }
        // Get item from local storage if any
        $("#hour8 .description").val(localStorage.getItem("hour8"));
        $("#hour9 .description").val(localStorage.getItem("hour9"));
        $("#hour10 .description").val(localStorage.getItem("hour10"));
        $("#hour11 .description").val(localStorage.getItem("hour11"));
        $("#hour12 .description").val(localStorage.getItem("hour12"));
        $("#hour13 .description").val(localStorage.getItem("hour13"));
        $("#hour14 .description").val(localStorage.getItem("hour14"));
        $("#hour15 .description").val(localStorage.getItem("hour15"));
        $("#hour16 .description").val(localStorage.getItem("hour16"));
        $("#hour17 .description").val(localStorage.getItem("hour17"));
    
        timeTracker();
    })
