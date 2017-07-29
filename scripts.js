$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});

$("#slideshow > div:gt(0)").hide();

var x;

x = 0;

var string;

setInterval(function() {
  $('#slideshow > div:first')
    
    .fadeOut(1000)
    
    .next()
    .fadeIn(1000)
   
    .end()
    
   
    .appendTo('#slideshow');
     checky();
}, 7500);

function checky(){
  
  if(x == 4){
    x = 0;
  }else{
    x++;
  }
  
  switch(x){
    case 0:
      string = "Infrared Sensors are used to detect objects in front of pBot.";
    break;
    
    case 1:
      string = "pBot uses large, industrial tires to traverse difficult terrain.";
      break;
      
    case 2:
      string = "Solar panels provide a renewable power source to pBot.";
      break;
      
    case 3:
      string = "Capacitive sensors check if the material is plastic.";
      break;
      
    case 4:
      string = "pBot is plated with a carbon fiber exoskeleton over a recycled steel shell.";
      break;
      
  }
  
 $("#caption").html(string);
  
}