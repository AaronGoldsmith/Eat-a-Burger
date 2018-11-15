
function addBurg(str){
  let up = str.toUpperCase();
  if(up.indexOf("BURGER")<0){
    return str + " Burger"
  }
  return str;
}
$(function() {
  
  $(".eaten").on("click",function(event){
    event.preventDefault();
    console.log('clicked available')
    $('#left').css('display','none')
    $('#right').css('display','inline-table')

    
  })
  $(".available").on("click",function(event){
    event.preventDefault();
    console.log('clicked eaten')
    $('#right').css('display','none')
    $('#left').css('display','inline-block')

  })
  $(".addback").on("click",function(event){
    let sib = $(this).attr('data-id')
    console.log(sib);
    var oldBurger = {
      burger_name: $(this)
    };
    // Send the POST request.
    // $.ajax("/api/burgers", {
    //   type: "POST",
    //   data: newBurger
    // }).then(function (){
    //     console.log("created new burger");
    //     location.reload();
    //     $("#bn").val("").focus();
    //   }
    // );
  })
  $(".devour").on("click",function(event){
    event.preventDefault();
    var eatenBurger = {
      ID: parseInt($(this).attr("data-id")),
      devoured: true
    }
    var query = "/api/burgers/"+parseInt($(this).attr('data-id'));
    $.ajax(query, {
      type: "PUT",
      data: eatenBurger
    }).then(function(){
       location.reload();
      })
  })
  $(".create-form").on("submit", function (event)
  {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    if($("#bn").val().trim().length<=1){return}
    let parsed = addBurg($("#bn").val().trim())
    var newBurger = {
      burger_name: parsed,
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
