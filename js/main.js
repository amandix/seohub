// ===== On Click ==== 
$( document ).ready(function() {
    $('.banner-images img').addClass('animate');
});


// ===== On Click ==== 
$(function(){
    
    $('.at-drop-down').on('click', function(e){
        if(Modernizr.mq('screen and (max-width:767px)')) {
            e.preventDefault();
            $(this).next($('.sub-menu')).slideToggle();
        }
    });
    
    $(window).resize(function() {
        $('.sub-menu').attr("style", "");
    });

    $('.mobile-nav-button').click(function(){
    	$('.menu-overlay').addClass('is-visible');
    	$('.sidebar-content').addClass('sidebar-content-open');
    });

    $('.menu-overlay').click(function(){
    	$(this).removeClass('is-visible');
    	$('.sidebar-content').removeClass('sidebar-content-open');
    });

    $('.sidebar-close').click(function(){
    	$('.menu-overlay').removeClass('is-visible');
    	$('.sidebar-content').removeClass('sidebar-content-open');
    });

	$('.navbar-toggle').click(function(){
    	$('.navbar-toggle .icon-bar:first-child').toggleClass('new-rotate');
    	$('.navbar-toggle .icon-bar:nth-child(2)').toggleClass('new');
    	$('.navbar-toggle .icon-bar:last-child').toggleClass('new-rotate2');
    });    

});


// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        
        $('.return-top').fadeIn(200);    
    } else {
        $('.return-top').fadeOut(200);   
    }
});
$('.return-top').click(function() {      
    $('body,html').animate({
        scrollTop : 0                       
    }, 500);
});


$(document).ready(function(){
  $('.templates-carousel-inner').owlCarousel({
	    loop:true,
	    margin:5,
	    autoplay:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:4
	        }
	    }
	})
});

$(document).ready(function(){
  $('.multheader-carousel-inner').owlCarousel({
	    loop:true,
	    nav:true,
	    margin:20,
	    autoplay:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:4
	        }
	    }
	})
});