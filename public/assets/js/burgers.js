
function addBurg(str){
  let up = str.toUpperCase();
  if(up.indexOf("BURGER")<0){
    return str + " Burger"
  }
  return str;
}
$(function() {
  $("body").on("scroll",function(event){
    $("#title").css('background','#000')
  })
  $(".eaten").on("click",function(event){
    event.preventDefault();
    $('#left').css('display','none')
    $('#newburger').css('display','none')
    $('#right').css('display','inline-table')

    
  })
  $(".newburg").on("click",function(event){
    event.preventDefault();
    $('#right').css('display','none')
    $('#left').css('display','none')
    $('#newburger').css('display','inline-flex')
  })

  $(".available").on("click",function(event){
    event.preventDefault();
    $('#right').css('display','none')
    $('#newburger').css('display','none')
    $('#left').css('display','initial')
  })
  $(".addback").on("click",function(event){
    let sib = $(this).attr('data-id')
    console.log(sib);
    var oldBurger = {
      burger_name: $(this)
    };
    console.log('sorry, cannot add burgers back yet')

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
        location.reload();
        $("#bn").val("").focus();
      }
    );
  });
  
});
