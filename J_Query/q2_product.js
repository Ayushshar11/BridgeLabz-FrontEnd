
// Q2 - Product Highlight
$(function(){
  // 1. Click on product -> highlight background
  $("#product-list").on("click", ".product", function(e){
    // Avoid clicking the favorite span toggling the selection - handle separately
    if ($(e.target).hasClass("fav")) return;
    $(".product").removeClass("highlight");
    $(this).addClass("highlight");
    // 5. If out of stock, show alert
    if ($(this).data("stock") === "out") {
      alert("Sorry — this product is out of stock.");
    }
  });

  // 2. Hover -> show additional product details (mouseenter/mouseleave)
  $("#product-list").on("mouseenter", ".product", function(){
    $(this).find(".extra").slideDown(150);
  }).on("mouseleave", ".product", function(){
    $(this).find(".extra").slideUp(150);
  });

  // 3. Clicking favorite icon toggles selected class
  $("#product-list").on("click", ".fav", function(e){
    e.stopPropagation();
    $(this).closest(".product").toggleClass("selected");
    // toggle heart glyph
    $(this).text($(this).closest(".product").hasClass("selected") ? "♥" : "♡");
  });

  // 4. Apply different styles to products with discounts using attribute selector
  // Add a small badge for discounted items
  $("#product-list .product[data-discount]").each(function(){
    var d = $(this).data("discount");
    if (d && d > 0) {
      $(this).prepend("<div class='card' style='display:inline-block;padding:6px;margin-bottom:8px;background:#fff5f0;'>"+d+"% OFF</div>");
    }
  });
});
