
// Q1 - Welcome Page Greeting (jQuery)
// Runs on document ready
$(function(){
  // Determine time-based greeting on page load
  function setTimeGreeting(){
    var h = new Date().getHours();
    var greet = (h < 12) ? "Good Morning" : (h < 18) ? "Good Afternoon" : "Good Evening";
    $("#time-greeting").text(greet + ", Ayush!").css("font-weight","700");
  }
  setTimeGreeting();

  // Clicking greeting shows alert
  $("#time-greeting").on("click", function(){
    alert($(this).text() + " — thanks for visiting!");
  });

  // Change Greeting -> motivational quote
  $("#change-greet").on("click", function(){
    $("#time-greeting").text("Keep pushing — small steps every day lead to big wins!");
  });

  // Toggle visibility of welcome message
  $("#toggle-welcome").on("click", function(){
    $("#welcome-msg").toggle();
  });
});
