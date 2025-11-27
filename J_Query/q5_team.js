
// Q5 - Team Members Directory
$(function(){
  // 1. Click a manager -> highlight direct reports (siblings inside department)
  $("#team").on("click", ".manager", function(){
    $(this).siblings(".employee").addClass("highlight");
  });

  // 2. Hover on employee -> show contact info using .next() or .data()
  $("#team").on("mouseenter", ".employee", function(){
    var info = $(this).data("email");
    // show contact inline using .after() temporarily
    $(this).after("<div class='card contact'>Contact: "+info+"</div>");
  }).on("mouseleave", ".employee", function(){
    $(this).siblings(".contact").remove();
  });

  // 3. Click on department -> change background of all members in that department using .children()
  $("#team").on("click", ".department", function(e){
    // avoid triggering when clicking internal buttons
    if ($(e.target).is("button")) return;
    $(this).children().css("background","#eef7ff");
  });

  // 4. Select a random employee -> highlight sibling employees
  $("#random-emp").on("click", function(){
    var all = $("#team .employee");
    var pick = all.eq(Math.floor(Math.random()*all.length));
    pick.addClass("selected");
    pick.siblings(".employee").addClass("highlight");
  });

  // 5. Collapse/expand team using .parent() and .find()
  $("#toggle-team").on("click", function(){
    $(".department").each(function(){
      var $d = $(this);
      $d.find(".employee").toggle();
    });
  });
});
