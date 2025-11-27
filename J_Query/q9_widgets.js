
// Q9 - Multi-jQuery Widgets demonstration
// For demo, we simulate two jQuery versions by using noConflict aliasing.
// Here we simply show the pattern; real multi-version usage requires loading separate jQuery scripts.
(function($){
  // v1 logic - carousel rotation & highlight
  $(".widget[data-widget='carousel']").on("click", function(){
    $(this).toggleClass("selected");
    alert("Carousel (v1) toggled.");
  });
  $(".widget[data-widget='active']").on("click", function(){
    $(this).addClass("highlight");
  });
})(jQuery);

// Imagine a second jQuery allocated to $jq2 via noConflict in a real multi-version page.
// We cannot actually load two versions here, but show how you'd attach using a different alias.
/* Example:
var jq2 = jQuery.noConflict(true);
(function($){
  $(".widget[data-widget='modal']").on("click", function(){
    // modal open
  });
})(jq2);
*/
