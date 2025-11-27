
// Q3 - Interactive FAQ
$(function(){
  // 1. Click on question -> toggle answer visibility
  $("#faq").on("click", ".question", function(){
    $(this).next(".answer").slideToggle(150);
  });

  // 2. Hover -> change question color
  $("#faq").on("mouseenter", ".question", function(){
    $(this).css("color","#007acc");
  }).on("mouseleave", ".question", function(){
    $(this).css("color","");
  });

  // 3. Double-click question -> collapse all answers
  $("#faq").on("dblclick", ".question", function(){
    $(".answer").slideUp(150);
  });

  // 4. Focus on answer input -> highlight parent question
  $("#support-input").on("focus", function(){
    $(this).closest("dd").prev(".question").css("background","#fff3cd");
  }).on("blur", function(){
    // 5. Blur -> reset background color
    $(this).closest("dd").prev(".question").css("background","");
  });
});
