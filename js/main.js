/*-----------------------------------------------------------------------------------*/
/* 		Mian Js Start
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();
$(document).ready(function($) {
"use strict";
	
	
/*-----------------------------------------------------------------------------------*/
/*	BACKGROUND SLIDER
/*-----------------------------------------------------------------------------------*/
$( function() {
	$.vegas('slideshow', {
	  delay:4000, //optional.  The default is 5000 milliseconds
       backgrounds:[
		{ src:'images/sliders/slider_1.jpg', fade:1000 },
		{ src:'images/sliders/slider_2.jpg', fade:1000 },
		{ src:'images/sliders/slider_3.jpg', fade:1000 },
		{ src:'images/sliders/slider_4.jpg', fade:1000 }
	  ]
	})('overlay', {
	  src:'http://vegas.jaysalvat.com/js/vegas/overlays/11.png'
   });
});





/*-----------------------------------------------------------------------------------*/
/*	STICKY NAVIGATION
/*-----------------------------------------------------------------------------------*/
$(document).ready(function(){
    $(".sticky").sticky({topSpacing:0});
});




/*-----------------------------------------------------------------------------------*/
/*	HOVER EFFECT
/*-----------------------------------------------------------------------------------*/
$(document).ready(function(){
    $(".over").mouseenter(function(){
	     $(this).addClass("hover");
    })
	.mouseleave(function(){
          $(this).removeClass("hover");
    });
});






/*-----------------------------------------------------------------------------------*/
/*	ISOTOPE PORTFOLIO
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
    var $container = $('.portfolio-wrapper .items');
    $container.imagesLoaded(function () {
        $container.isotope({
            itemSelector: '.item',
            layoutMode: 'fitRows'
        });
	});
    $('.filter li a').click(function () {
        $('.filter li a').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector
        });
        return false;
    });
});




/*-----------------------------------------------------------------------------------*/
/*	Easy Pie Chart
/*-----------------------------------------------------------------------------------*/
var options = {
  scaleColor: false,
  trackColor: 'rgba(0,0,0,0.0)',
  barColor: '#fff',
  lineWidth: 10,
  lineCap: 'butt',
  size: 95
};
window.addEventListener('DOMContentLoaded', function() {
  var charts = [];
  [].forEach.call(document.querySelectorAll('.chart'),  function(el) {
    charts.push(new EasyPieChart(el, options));
  });
});





/*-----------------------------------------------------------------------------------*/
/* ANIMATION
/*-----------------------------------------------------------------------------------*/
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       100,          // distance to the element when triggering the animation (default is 0)
    mobile:       false        // trigger animations on mobile devices (true is default)
  }
);
wow.init();





/*-----------------------------------------------------------------------------------*/
/* LOADER
/*-----------------------------------------------------------------------------------*/

$(window).load(function() {
	$(".loader").delay(300).fadeOut();
	$("#page-loader").delay(500).fadeOut("slow");
});



/* ==============================================
			Back to Top
=============================================== 
$(window).scroll(function(){
	"use strict";
    if($(window).scrollTop() > 300){
      $("#back-to-top").fadeIn(600);
    } else{
      $("#back-to-top").fadeOut(600);
    }
});

$('#back-to-top, .back-to-top').click(function() {
      $('html, body').animate({ scrollTop:0 }, '1000');
      return false;
});
*/




/* ==============================================
	POPUP SECTION
=============================================== */ 
$('#popups').magnificPopup({
  delegate: 'a',
  removalDelay: 500, //delay removal by X to allow out-animation
  callbacks: {
    beforeOpen: function() {
       this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});

// Inline popups
$('#popups-blog').magnificPopup({
  delegate: 'a',
  removalDelay: 500, //delay removal by X to allow out-animation
  callbacks: {
    beforeOpen: function() {
       this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});


// Image popups
$('#image-popups').magnificPopup({
  delegate: 'a',
  type: 'image',
  removalDelay: 500, //delay removal by X to allow out-animation
  callbacks: {
    beforeOpen: function() {
      // just a hack that adds mfp-anim class to markup 
       this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
       this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  closeOnContentClick: true,
  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});


// Hinge effect popup
$('a.hinge').magnificPopup({
  mainClass: 'mfp-with-fade',
  removalDelay: 1000, //delay removal by X to allow out-animation
  callbacks: {
    beforeClose: function() {
        this.content.addClass('hinge');
    }, 
    close: function() {
        this.content.removeClass('hinge'); 
    }
  },
  midClick: true
});
});




/* ==============================================
	Active Menu Item on Page Scroll
=============================================== */ 
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('#header a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-70
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#header a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#header a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}


/*-----------------------------------------------------------------------------------*/
/* Slider
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
  $("#owl-crosal").owlCarousel({
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
	  navigationText: false,
  	  paginationNumbers :false,
      paginationSpeed : 400,
	  navigationText: ["<i class='ion-ios7-arrow-back'></i>","<i class='ion-ios7-arrow-forward'></i>"],
      items : 4
  });
});





/*-----------------------------------------------------------------------------------*/
/* Slider
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
  $(".owl-home").owlCarousel({
      slideSpeed :1000,
	  navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 500,
      singleItem:true,
	  navigationText: false,
  	  paginationNumbers :false,
	  pagination:true,
      items : 1, 
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false,
	  autoPlay :true,
	  transitionStyle : "fade"
  });
});



/*-----------------------------------------------------------------------------------*/
/* Slider
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
  $(".owl-number").owlCarousel({
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
	  navigationText: false,
  	  paginationNumbers :false,
	  pagination:true,
      items : 1, 
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false,
	   transitionStyle : "fade"
  });
});
