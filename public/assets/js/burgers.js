
$(function() {

  $(".create-form").on("submit", function (event)
  {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim()
    };
    console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function (error)
      {
        if(error) throw error;
        console.log("created new burger");
        location.reload();
      }
    );
  });
  
});
