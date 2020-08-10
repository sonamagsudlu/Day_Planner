$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    // get nearby values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    console.log(time)
    console.log(value)

    // save in localStorage
    localStorage.setItem(time, value);
  });

  function hourUpdater() {



    var currentHour = moment().hours();

    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).css('background-color','red');
       


      }
      else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).css('background-color','green')
 
      
      }
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
        $(this).css('background-color','dodgerblue')
  
      }
    });
  }

  hourUpdater();
  // get current number of hours
  var interval = setInterval(hourUpdater,15000);
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));

  $("#currentDay").text(moment().format("dddd, MMMM Do"));
  
  for ( var i = 0, len = localStorage.length; i < len; ++i ) 
  {
    var key = localStorage.key( i )
    var value = localStorage.getItem(key)
    
    var unique_id = `#${key} > .description`;
    console.log(unique_id)
    $(unique_id).val(value);
  }

});
