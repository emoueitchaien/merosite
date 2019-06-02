(function($){
	"use strict";	
    $(document).ready(function() {
            
        if ( $('.post').length ) { $('.post').fitVids(); }
            
        if ( $('select').length ) { $('select').chosen(); }
		
		// Menu Navigation
		$('.dropdown-toggle').on("click", function(e){
			$(this).next('ul').toggle();
			e.stopPropagation();
			e.preventDefault();
		});

		// Toggle vtmenu
		$(".nav-toggle").on("click", function(){
			$(this).toggleClass("active");
			$(".vtmenu").slideToggle();
		});
		
        // Show / Hide Search
		$('.toggle-search .fa.fa-search').click(function(){
			$('.wrapper-search-top-bar').fadeIn('', function() {});
			$('.toggle-search .fa.fa-search').toggleClass('active');
			$('.toggle-search .fa.fa-times').toggleClass('active');
			$( '.wrapper-search-top-bar input.search-field' ).focus();
		});

		$('.toggle-search .fa.fa-times').click(function(){
			$('.wrapper-search-top-bar').fadeOut('', function() {});
			$('.toggle-search .fa.fa-search').toggleClass('active');
			$('.toggle-search .fa.fa-times').toggleClass('active');
			$( '.wrapper-search-top-bar input.search-field' ).focus();
		});
	
		// Fitvids
		$(".container").fitVids();

		// Scroll to top
		$(function () {
			jQuery(window).scroll(function(){
				if (jQuery(this).scrollTop() > 100) {
					jQuery('#backtotop').css({bottom:"95px"});
				} else {
					jQuery('#backtotop').css({bottom:"-100px"});
				}
			});
			jQuery('#backtotop').click(function(){
				jQuery('html, body').animate({scrollTop: '0px'}, 1800);
				return false;
			});
        });
		
    });
})(jQuery);