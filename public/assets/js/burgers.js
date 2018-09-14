
$(function() {
  $(".devour").on("click",function(event){
    event.preventDefault();
    var eatenBurger = {
      ID: parseInt($(this).attr("data-id")),
      devoured: true
    }
    console.log(eatenBurger);

    var query = "/api/burgers/"+parseInt($(this).attr('data-id'));
    $.ajax(query, {
      type: "PUT",
      data: eatenBurger
    }).then(function(){
       location.reload();})
  })
  $(".create-form").on("submit", function (event)
  {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    if($("#bn").val().trim().length<=1){return}
    var newBurger = {
      burger_name: $("#bn").val().trim(),
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function (){
        console.log("created new burger");
        location.reload();
        $("#bn").val("").focus();
      }
    );
  });
  
});
