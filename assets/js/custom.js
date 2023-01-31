(function($) {
  

  // Preloader
  function stylePreloader() {
    $('body').addClass('preloader-deactive');
  }

    $(window).load(function () {
      $('.portfolio-default-area').imagesLoaded(function () {

          var $grid = $('.portfolio-list, .masonryGrid').isotope({
              percentPosition: true,
              transitionDuration: '0.7s',
              layoutMode: 'masonry',
              masonry: {
                  columnWidth: '.resizer',
              }
          });
      });
  })


  


  $(window).on('scroll', function(){
    if ($(this).scrollTop() > 250) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }

    
    if($('.sticky-header').length){
      var windowpos = $(this).scrollTop();
      if (windowpos >= 80) {
        $('.sticky-header').addClass('sticky');
      } else {
        $('.sticky-header').removeClass('sticky');
      }
    }

  });


  
  $('.scroll-to-top').on('click', function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });




  
  
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
  
  $(window).on('load', function() {
    stylePreloader();
  });

  /* ----------------------------
      AOS Scroll Animation 
  -------------------------------*/
  $(window).on('scroll', function(){
    AOS.init({
            offset: 80,
            duration: 1000,
            once: true,
            easing: 'ease',
        });
    });
    
    AOS.init({
        offset: 80,
        duration: 1000,
        once: true,
        easing: 'ease',
    });

  
  

/* ==========================================================================
   When Window is resizing, do
   ========================================================================== */
  
  $(window).on('resize', function() {
  });
  

})(window.jQuery);