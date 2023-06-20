$(document).ready(function(){

    //sticky nav
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
   });

   //buttons
   $('.order-button').click(function(){
      $('html, body').animate({scrollTop: $('#how-to-order-section').offset().top}, 1000);
   });

   $('.more-button').click(function(){
    $('html, body').animate({scrollTop: $('#futures-section').offset().top}, 1000);
   });

      // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

    //animations
    const waypoint1 = new Waypoint({
      element: document.getElementById('futures-section'),
      handler: function(direction) {
        $('.anim1').addClass('animate__animated animate__fadeIn');
      },
      offset: 60,
     });

     const waypoint2 = new Waypoint({
      element: document.getElementById('cities-section'),
      handler: function(direction) {
        $('.anim2').addClass('animate__animated animate__fadeInRight');
      },
      offset: 60,
     });

     const waypoint3 = new Waypoint({
      element: document.getElementById('how-to-order-section'),
      handler: function(direction) {
        $('.anim3').addClass('animate__animated animate__fadeInUp');
      },
      offset: 60,
     });

     const waypoint4 = new Waypoint({
      element: document.getElementById('header-text'),
      handler: function(direction) {
        if(direction == 'up'){
          $('.anim4').addClass('animate__animated animate__wobble');
        }else{
          $('.anim4').removeClass('animate__animated animate__wobble');
        }
      },
      offset: 60,
     });

     //mobile nav
     $(".mobile-menu-button").click(function(){
          let icon = $(".mobile-menu-button i");
    
          if(icon.hasClass('ion-ios-menu')){
              icon.removeClass('ion-ios-menu');
              icon.addClass('ion-ios-close');
              $("nav").animate({height: "200px"}, 500);
          }else{
              icon.removeClass('ion-ios-close');
              icon.addClass('ion-ios-menu');
              $("nav").animate({height: "70px"}, 500);
          }
    
          $("#main-nav").slideToggle(500);
    
    });
});
