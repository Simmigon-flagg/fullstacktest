$(document).ready(function() {
  var f = "";
  $("#button").on("click", function() {
 
    var userandassets = {};
    event.preventDefault();
    var email = $("#email")
      .val()
      .trim();
    var password = $("#password")
      .val()
      .trim();
    console.log(document.URL);

    // Is this where the login happends
    console.log(email);
    var values = {
      email,
      password
    };
    $.ajax("/login/" + email + "/" + password, {
      method: "POST",
      async: false,
      data: values
      //Init values are coming from the login
    }).then(function(res) {
      userandassets = res;
      console.log(userandassets);
    
      console.log(userandassets);
      for (n in userandassets) {
        f = "/users/" + userandassets['firstname'];
      }
      window.location.href = f;
    }); //End of ajax call
  }); //End of button click

  $(".update-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var updatedQuote = {
      author: "",
      quote: '$("#quo").val().trim()'
    };

    var id = $(this).data("id");

    // Send the POST request.
    $.ajax("/api/homeassets/" + id, {
      type: "PUT",
      data: updatedQuote
    }).then(function() {
      console.log("updated quote");
      // Reload the page to get the updated list
      // location.assign("/");
    });
  });
}); //End of document ready

// With the element initially shown, we can hide it slowly:
// $( "#clickme" ).click(function() {
//   $( "#book" ).hide( "slow", function() {
//     alert( "Animation complete." );
//   });
// });
