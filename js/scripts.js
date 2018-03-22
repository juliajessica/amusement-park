$(function(){
  $("form#amusement-form").submit(function(event){
  event.preventDefault();

  var riderHeight = $("#height").val();
   console.log(riderHeight);
  if (riderHeight <= 60){
    alert("Sorry you're a shorty!");
    $(".not-of-height").fadeIn("slow");
  } else {
    alert("Yay - you can ride all the rollercoasters in the park!");
    $(".of-height").fadeIn("slow");
  }

  });
});
