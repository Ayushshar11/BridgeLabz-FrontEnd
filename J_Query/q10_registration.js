
// Q10 - Registration Form Validation
$(function(){
  // Simulated existing emails for uniqueness check
  var existing = ["test@example.com","admin@example.com"];

  function validateEmail(email){
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  $("#submit-btn").on("click", function(){
    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var pwd = $("#password").val();

    // reset styles
    $("#name,#email,#password").removeClass("invalid");

    var ok = true;
    if (!name) { $("#name").addClass("invalid"); ok=false; }
    if (!validateEmail(email) || existing.indexOf(email.toLowerCase()) !== -1) {
      $("#email").addClass("invalid");
      ok=false;
      if (existing.indexOf(email.toLowerCase()) !== -1){
        $("#reg-msg").text("Email already registered.");
      }
    }
    if (!pwd || pwd.length < 8) { $("#password").addClass("invalid"); ok=false; }

    if (ok){
      $("#reg-msg").text("Registration successful!").css("color","green");
    } else {
      $("#reg-msg").text("Please fix the highlighted fields.").css("color","red");
    }
  });
});
