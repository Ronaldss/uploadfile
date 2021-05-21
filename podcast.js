$(document).ready(function() {
    var $nav_toggle = $('#nav-toggle');
    // var $nav_toggle_after = $('#nav-toggle::after');
    var $nav_circle = $('#nav-circle');
    var $nav = $('#nav');
    var $nav_list_items = $nav.find('li');
    // var $nav_links = $
    var $ripples = $('.ripple');
    
    TweenMax.set($nav_list_items, {
      transformOrigin: 'center center',
    });
    
    // TweenMax.set($ripples, {
    //   transformOrigin: 'center center',
    // });
    
    
  
    
    
    $nav_toggle.click(function() {
      if($(this).hasClass('open')) {
        // NAV CLOSES
        TweenMax.to($nav_circle, 1, {
          width: '10px',
          height: '10px',
          ease: Power4.easeOut,
        });
        TweenMax.set($nav, {
          pointerEvents: 'none',
        });
        TweenMax.to($nav_list_items, 0.5, {
          opacity: '0',
          // x: '-100px',
        });
        TweenMax.set($nav_list_items, {
          x: '-100px',
          delay: 0.5,
        });
      } else {
        // NAV OPENS
        TweenMax.to($nav_circle, 1, {
          width: '400vw',
          height: '400vw',
          ease: Power4.easeOut,
        });
        TweenMax.set($nav, {
          pointerEvents: 'auto',
        });
        TweenMax.staggerTo($nav_list_items, 0.5, {
          opacity: '100',
          x: 0,
          ease: Power4.easeOut,
        }, 0.15);
        TweenMax.to($ripples, 0.5, {
          opacity: '0',
        });
      }
      $(this).toggleClass('open');
    });
  });