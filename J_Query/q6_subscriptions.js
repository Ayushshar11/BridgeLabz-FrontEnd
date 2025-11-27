
// Q6 - Event Subscription Panel
$(function(){
  function showMessage(text){
    $("#messages").html("<div class='card'>"+text+"</div>").fadeIn(200).delay(1500).fadeOut(400);
  }

  // 1. Subscribe -> enable notifications
  $("#topics").on("click", ".sub-btn", function(){
    var $btn = $(this);
    $btn.text($btn.text() === "Subscribe" ? "Unsubscribe" : "Subscribe");
    showMessage($btn.text() === "Unsubscribe" ? "Subscribed to topic" : "Unsubscribed from topic");
  });

  // 3. Dynamically add new subscription topics -> attach .on() click events (delegation handles it)
  $("#add-topic").on("click", function(){
    var t = $("#new-topic").val().trim();
    if (!t) return;
    $("#topics").append("<li class='topic card'>"+t+" <button class='sub-btn'>Subscribe</button></li>");
    $("#new-topic").val("");
    showMessage("Topic added: " + t);
  });

  // 4. Remove specific subscription -> a user can click to unsubscribe then remove
  $("#topics").on("click", ".remove-btn", function(){
    $(this).closest("li").remove();
    showMessage("Topic removed.");
  });

  // 5. Show success message dynamically inserted (showMessage used above)
});
