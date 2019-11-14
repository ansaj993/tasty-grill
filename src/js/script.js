$('document').ready(function(){
    $('.nav__icon').click(function(){
        $('.nav__block').slideToggle(800);
    });

    $('a').on('click', function(event) {

        if (this.hash !== "") {
          event.preventDefault();
    
          var hash = this.hash;
    
         
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1200, function(){
       
            window.location.hash = hash;
          });
        }
      });


})
