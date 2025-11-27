
// Q8 - Dynamic Blog Posts (Admin)
$(function(){
  // 1. Add New Post -> append
  $("#add-post").on("click", function(){
    $("#posts").append("<li class='post card'>Post: New article at "+ new Date().toLocaleTimeString() +"</li>");
  });

  // 2. Prepend Featured Post -> add at top
  $("#prepend-post").on("click", function(){
    $("#posts").prepend("<li class='post card'>Featured: Editor's pick - "+ new Date().toLocaleTimeString() +"</li>");
  });

  // 3. Remove Last Post -> delete last element
  $("#remove-last").on("click", function(){
    $("#posts li:last").remove();
  });

  // 4. Add tags to posts -> use before/after
  $("#posts").on("click", ".post", function(){
    $(this).before("<div class='card'>Tag: example</div>");
  });

  // 5. Highlight posts with specific keywords dynamically
  function highlight(keyword){
    $("#posts .post").each(function(){
      if ($(this).text().toLowerCase().indexOf(keyword.toLowerCase()) !== -1){
        $(this).addClass("highlight");
      } else $(this).removeClass("highlight");
    });
  }
  // Example highlight call
  highlight("jquery");
});
