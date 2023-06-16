$(document).ready(function(){
   const waypoint = new Waypoint({
    element: document.getElementById('futures-section'),
    handler: function(direction) {
      if(direction == "down"){
        $("nav").attr('id', 'sticky-nav');
      }else{
        $("nav").removeAttr('id');
      }
    },
    offset: 60,
   })
})