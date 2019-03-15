"use strict";

var myFunc = function(){

	var scrollMenu = function(){
		var sections = $('.menu_item');
		$(window).scroll(function() {
		    // var currentPosition = $(this).scrollTop();
		    var navigationHeight = $('.navigation').height();
		    var windowHeight = $(window).height();
		    var currentPosition = $(this).scrollTop() + (windowHeight - navigationHeight)/2;

		    sections.removeClass('selected').each(function() {
		        var top = $(this).offset().top,
		            bottom = top + $(this).height();
		        if (currentPosition >= top && currentPosition <= bottom) {
		            var name = $(this).attr('id');
		            $('.navigation a').removeClass('act');
		            $('.navigation a.'+name).addClass('act');
		        }
		    });
		    
		});
	}

	var smoothScroll = function () {
	    $('a[href*="#"]:not([href="#"])').click(function () {
	        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	            var target = $(this.hash);
	            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	            if (target.length) {
	                $('html, body').animate({
	                    scrollTop: target.offset().top
	                }, 1000);
	                return false;
	            }
	        }
	    });
	}

	var mobileNav = function(){
		$('.burger').click(function(){
			if ( $(this).hasClass('act') ) {
				$(this).removeClass('act');
				$('.mobile_nav').slideUp();
			} else {
				$(this).addClass('act');
				$('.mobile_nav').slideDown();
			}
		});
	}


	$(document).ready(function(){
		scrollMenu();
		smoothScroll();
		mobileNav();

		$('.about .owl-carousel').owlCarousel({
		    loop:true,
		    nav:true,
		    items:5,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:5
		        }
		    }
		});

		$('.testimonials .owl-carousel').owlCarousel({
		    loop:true,
		    nav:true,
		    items:2,
		    responsive:{
		        0:{
		            items:1
		        },
		        767:{
		            items:2
		        }
		    }
		});
	});

	$(window).resize(function(){
		
	});

	$(window).load(function(){

	});

}

myFunc();