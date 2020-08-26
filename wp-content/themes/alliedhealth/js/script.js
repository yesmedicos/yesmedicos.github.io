var gfhfgjj24 = 1; (function($) {
	
	"use strict";
	
	
	// 1. Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(500).fadeOut(500);
		}
	}
		

	// 2. Submenu Dropdown Toggle
	function DropdownToggole () {
		if($('.main-header li.dropdown ul').length){
			$('.main-header li.dropdown').append('<div class="dropdown-btn"></div>');
			
			//Dropdown Button
			$('.main-header li.dropdown .dropdown-btn').on('click', function() {
				$(this).prev('ul').slideToggle(500);
			});
		}
	}
		

	// 3. Update Header Style + Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var topHeader = $('.mainmenu-area').innerHeight();
			var windowpos = $(window).scrollTop();
			if (windowpos >= topHeader) {
				$('.scroll-to-top').fadeIn(300);
			} else {
				$('.scroll-to-top').fadeOut(300);
			}
		}
	}
    

	// 4. revolution slider
	function revolutionSliderActiver () {
		if ($('.rev_slider_wrapper #slider1').length) {
			$("#slider1").revolution({
				sliderType:"standard",
				sliderLayout:"auto",
				delay:5000,
				navigation: {
					arrows:{enable:true} 
				},
				gridheight:900, 
				gridwidth:1170 
			});
		}
	}

	// 5. languageSwitcher
	function languageSwitcher () {
		if ($("#polyglot-language-options").length) {
				$('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
					effect: 'fade',
	                testMode: true,
	                onChange: function(evt){
	                    alert("The selected language is: "+evt.selectedItem);
	                }
				});
		}
	}

	// 6. datepicker
	function datepicker () {
		if ($('#datepicker').length) {
			$('#datepicker').datepicker();
		}
	}


	// 7. team carousel
	function teamCarousel () {
		if ($('.team-carousel').length) {
			$('.team-carousel').owlCarousel({
			    loop: true,
			    margin: 30,
			    nav: false,
			    dots: true,
			    autoplay:true,
			    autoplayHoverPause:true,
			    responsive: {
			        0:{
			            items:1,
			            loop:true
			        },
			        480:{
						items:2,
						loop:true
					},
			        768:{
			            items:2,
			            loop:true
			        },
			        1000:{
			            items:3,
			            loop:true
			        }
			    }
			});
		}
	}


	// 7.1 product carousel
	function productcarousel () {
		if ($('.product-slide').length) {
			$('.product-slide').owlCarousel({
			    loop: true,
			    margin: 23,
			    nav: false,
			    dots: false,
			    autoplay:true,
			    smartSpeed: 500,
			    responsive: {
			        0:{
			            items:1,
			            loop:true
			        },
			        480:{
						items:2,
						loop:true
					},
			        768:{
			            items:3,
			            loop:true
			        },
			        1000:{
			            items:4,
			            loop:true
			        }
			    }
			});
		}
	}

	// 7.12 portfolio carousel
	function portfoliocarousel () {
		if ($('.portfolio-carousel').length) {
			$('.portfolio-carousel').owlCarousel({
			    loop: true,
			    margin: 0,
			    nav: false,
			    dots: false,
			    autoplay:true,
			    smartSpeed: 500,
			    responsive: {
			        0:{
			            items:1,
			            loop:true
			        },
			        480:{
						items:2,
						loop:true
					},
			        768:{
			            items:3,
			            loop:true
			        },
			        1000:{
			            items:4,
			            loop:true
			        },
			        1200:{
			            items:5,
			            loop:true
			        }
			    }
			});
		}
	}



	// 8. Accordions
	function Accordions () {
		$( "#accordion" ).accordion();
	}
		
	


	// 9. LightBox / Fancybox
	function LightBox () {
		if($('.lightbox-image').length) {
			$('.lightbox-image').fancybox();
		}
	}


    // 10. masonary
	function masonarygallery () {
		if ($('.masonary-gallery').length) {
			$('.masonary-gallery').isotope({
				layoutMode:'masonry'
			});
		}
	}





    // 11. stickyHeader
	function stickyHeader () {
		if ($('.stricky').length) {
			var strickyScrollPos = 100;
			if($(window).scrollTop() > strickyScrollPos) {
				$('.stricky').removeClass('fadeIn animated');
		      	$('.stricky').addClass('stricky-fixed fadeInDown animated');
			}
			else if($(this).scrollTop() <= strickyScrollPos) {
				$('.stricky').removeClass('stricky-fixed fadeInDown animated');
		      	$('.stricky').addClass('slideIn animated');
			}
		}
	}

	// 12. select menu
	function selectMenu () {
		if ($('.select-menu').length) {
			$('.select-menu').selectmenu();
		}
	}




	// 13. contact form validation
	function contactFormValidation () {
		if($('.contact-form').length){
			$('.contact-form').validate({ // initialize the plugin
				rules: {
					username: {
						required: true
					},
					lastname: {
						required: true
					},
					email: {
						required: true,
						email: true
					},
					phone: {
						required: true
					},
					message: {
						required: true
					},
					date: {
						required: true
					},
					time: {
						required: true
					},
					select: {
						required: true
					},
					state: {
						required: true
					},
					zip: {
						required: true
					},
					website: {
						required: true
					}
				},
				submitHandler: function (form) { 
					// sending value with ajax request
					var form = $(form);
					$.post(form.attr('action'), form.serialize(), function (response) {
						form.parent('div').append(response);
						form.find('input[type="text"]').val('');
						form.find('input[type="email"]').val('');
						form.find('textarea').val('');
					});
					return false;
				}
			});
		}



	}

	// 14. select menu
	function timepicker () {
		$('input[name="time"]').ptTimeSelect();
	}
	
	// 15. Fact Counter
	function factCounter() {
		if($('.fact-counter').length){
			$('.fact-counter .column.animated').each(function() {
		
				var $t = $(this),
					n = $t.find(".count-text").attr("data-stop"),
					r = parseInt($t.find(".count-text").attr("data-speed"), 10);
					
				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".count-text").text()
					}).animate({
						countNum: n
					}, {
						duration: r,
						easing: "linear",
						step: function() {
							$t.find(".count-text").text(Math.floor(this.countNum));
						},
						complete: function() {
							$t.find(".count-text").text(this.countNum);
						}
					});
				}
				
			});
		}
	}
	
	// 16. video fancybox
	function videoFancybox () {
		if ($("a.video-fancybox").length) {
			$("a.video-fancybox").on('click', function() {
			    $.fancybox({
			            'padding'       : 0,
			            'autoScale'     : false,
			            'transitionIn'  : 'none',
			            'transitionOut' : 'none',
			            'title'         : this.title,
			            'width'         : 680,
			            'height'        : 495,
			            'href'          : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
			            'type'          : 'swf',
			            openEffect      : 'elastic',
					    closeEffect     : 'elastic',
					    helpers         : {
					    	media : {}
					    },
			            'swf'           : {
			            	'wmode'             : 'transparent',
			                'allowfullscreen'   : 'true'
			            }
			        });

			    return false;
			});
		}
	}

	// 17. testimonial2 Slider
	function testimonial () {
		$('.testimonial-carousel').owlCarousel({
		    loop:true,
		    margin:62,
		    dots:false,
		    nav: true,
			smartSpeed: 500,
			autoplay: 500,
		    responsiveClass:true,
		    responsive:{
		        0:{
		            items:1,
		            loop:true
		        },
		        992:{
					items:2,
					loop:true
				}
		    }
		});
	}
	
	// 17.1 testimonial3 Slider
	function testimonial3 () {
		$('.testimonial-carousel3').owlCarousel({
		    loop:true,
		    margin:0,
		    dots:true,
		    nav: false,
			smartSpeed: 500,
			autoplay: 500,
			items: 1
		});
	}
	// 18 testimonial carousel
	function testimonial2 () {
		$('.testimonial-slide2').owlCarousel({
		    loop:true,
		    margin:0,
		    dots:true,
		    nav: true,
			smartSpeed: 500,
			autoplay: 500,
		    items: 1
		});
	}
		
	// 19. single product carousel
	function serviceCarousel () {
		if ($('.service-carousel-content-box').length && $('.service-carousel-thumbnail-box').length) {

			var $sync1 = $(".service-carousel-content-box"),
				$sync2 = $(".service-carousel-thumbnail-box"),
				flag = false,
				duration = 1000;

				$sync1
					.owlCarousel({
						items: 1,
						autoplay: false,
						loop: false,
						margin: 0,
						nav: true,
						dots: false
					})
					.on('changed.owl.carousel', function (e) {
						if (!flag) {
							flag = true;
							$sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
							flag = false;
						}
					});

				$sync2
					.owlCarousel({
						items: 1,
						autoplay: false,
						loop: false,
						margin: 0,
						nav: false,
						dots: false,
						center: false
					})
					.on('click', '.owl-item', function () {
						$sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);

					})
					.on('changed.owl.carousel', function (e) {
						if (!flag) {
							flag = true;		
							$sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
							flag = false;
						}
					});

		}
	}
	// 20. cart Touch Spin
	function cartTouchSpin () {
		if($('.quantity-spinner').length){
			$("input.quantity-spinner").TouchSpin({
			  verticalbuttons: true
			});
		}
	}
	 // 21. product-description section 
    function customTabproductTab () {
        if ($('#product-description .product-tab-title').length) {
            var tabWrap = $('#product-description .col-lg-9 .product-tab-content');
            var tabClicker = $('#product-description .product-tab-title ul li');
            
            tabWrap.children('div').hide();
            tabWrap.children('div').eq(0).show();
            tabClicker.on('click', function() {
                var tabName = $(this).data('tab-name');
                tabClicker.removeClass('active');
                $(this).addClass('active');
                var id = '#'+ tabName;
                tabWrap.children('div').not(id).hide();
                tabWrap.children('div'+id).fadeIn('500');
                return false;
            });        
        }
    }
		
	if($('.filter-list').length){
		$('.filter-list').mixItUp({});
	}
	// Scroll to top
	if($('.scroll-to-top').length){
		$(".scroll-to-top").on('click', function() {
		   // animate
		   $('html, body').animate({
			   scrollTop: $('html, body').offset().top
			 }, 1000);
	
		});
	}
	// Scroll to top
	if($('.responsive-calendar').length){
		$(".responsive-calendar").responsiveCalendar({
          time: '2016-06',
          events: {
            "2013-04-30": {"number": 5, "url": "http://w3widgets.com/responsive-slider"},
            "2013-04-26": {"number": 1, "url": "http://w3widgets.com"}, 
            "2013-05-03":{"number": 1}, 
            "2013-06-12": {}}
        });
	}

	

	
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}



//scroll reveal=============================



/* ==========================================================================
   When document is ready, do
   ========================================================================== */
   
	$(document).on('ready', function() {
		DropdownToggole();
		revolutionSliderActiver();
		languageSwitcher();
		datepicker();
		teamCarousel();
		productcarousel();
		portfoliocarousel();
		Accordions();
		LightBox();
		masonarygallery();
		selectMenu();
		contactFormValidation();
		timepicker();
		videoFancybox();
		testimonial();
		testimonial3();
		testimonial2();
		serviceCarousel();
		cartTouchSpin();
		customTabproductTab();
	});

/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	$(window).on('scroll', function() {
		stickyHeader();
		headerStyle();
		factCounter();
		
	});
	
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});
	

})(window.jQuery);