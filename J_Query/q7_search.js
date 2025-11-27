
// Q7 - Search Courses
$(function(){
  function updateCount(){
    $("#match-count").text($("#course-list .course:visible").length);
  }

  // 1. Search input filters courses in real-time using .keyup()
  $("#course-search").on("keyup", function(){
    var q = $(this).val().toLowerCase();
    $("#course-list .course").each(function(){
      var txt = $(this).text().toLowerCase();
      if (txt.indexOf(q) !== -1) {
        // 2. Highlight matched text using .css()
        $(this).show().html($(this).text().replace(new RegExp('('+q+')','ig'), '<span class="match">$1</span>'));
        $(this).find(".match").css({"font-weight":"700"});
      } else {
        // 3. Toggle visibility of non-matching courses
        $(this).hide().text($(this).text());
      }
    });
    updateCount();
  });

  // 5. Clear search -> reset list to show all courses
  $("#clear-search").on("click", function(){
    $("#course-search").val("");
    $("#course-list .course").show().each(function(){ $(this).text($(this).text()); });
    updateCount();
  });

  // Initialize count
  updateCount();
});
