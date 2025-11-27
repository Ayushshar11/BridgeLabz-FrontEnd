
// Q4 - Special Offer Banner
$(function(){
  // Hide specific banners (hide all for demo)
  $("#hide-banner").on("click", function(){
    $(".banner").hide();
  });
  // Show hidden banners
  $("#show-banner").on("click", function(){
    $(".banner").show();
  });
  // Slide Up/Down buttons toggle banners
  $("#slide-up").on("click", function(){ $(".banner").slideUp(300); });
  $("#slide-down").on("click", function(){ $(".banner").slideDown(300); });
  // Fade In/Out
  $("#fade-in").on("click", function(){ $(".banner").fadeIn(300); });
  $("#fade-out").on("click", function(){ $(".banner").fadeOut(300); });

  // 5. Auto-rotate through banners every 5 seconds using fadeIn/fadeOut
  var idx = 0, banners = $(".banner");
  banners.hide();
  function rotate(){
    banners.eq(idx).fadeIn(400).delay(2200).fadeOut(400, function(){
      idx = (idx + 1) % banners.length;
      // continue cycle
      setTimeout(rotate, 200);
    });
  }
  rotate();
});
