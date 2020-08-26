jQuery(document).ready(function($) {
    

    $('#tavc-clients').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 950,
    autoplayTimeout: 2000,  
    responsiveClass: true,
    autoplayHoverPause:false,
    responsive: {
      0: {
        items: 2,
        margin: 50,
      },
      600: {
        items: 4,
        margin: 80,
      },
      1000: {
        items: 6,
        margin: 80,
      }
    }
  })
  
  $('.countup').counterUp({
      delay: 25,
      time: 2500
  });  
  
  
    /*---------------------
    Blog Grid
    -----------------------*/
      $('#blog-grid-simple').owlCarousel({
        loop: false,
        responsiveClass: true,
        nav:false,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],       
        autoplay: true,
        smartSpeed: 950,
        autoplayTimeout: 1800,  
        responsiveClass: true,
        autoplayHoverPause:false,    
        responsive: {
          0: {
            items: 1,
            nav: false,
            dots: true,
            margin: 10,
          },
          600: {
            items: 2,
            nav: false,
            dots: true,        
            margin: 0,
          },
          1000: {
            items: 3,
            dots: true,
            margin: 0,
          }
        }
      })      


    
    //alert("Hi i am alert")


/*------------------------------------
    1. Owl Carousel
--------------------------------------*/  


    /*---------------------
    Testmonials carousel
    -----------------------*/
      $('#testmonials-carousel').owlCarousel({
        loop: false,
        responsiveClass: true,
        nav:true,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],       
        responsive: {
          0: {
            items: 1,
            nav: false,
            dots: true,
            margin: 10,
          },
          600: {
            items: 1,
            nav: false,
            dots: true,        
            margin: 15,
          },
          1000: {
            items: 1,
            dots: false,
            margin: 40,
          }
        }
      })  



   



    /*---------------------
    Team Carousel
    -----------------------*/
      $('#team-block').owlCarousel({
        dots: true,
        loop: false,
        nav: false,    
        responsiveClass: true,
        smartSpeed: 950,
        responsive: {
          0: {
            items: 1,
            margin: 15,
            dots: false,
          },
          600: {
            items: 1,
            margin: 0,
            dots: false,
          },
          1000: {
            items: 2,
            margin: 0,
          }
        }
      })


    /*---------------------
    Testmonials Carousel 1
    -----------------------*/
      $('#testmonials-modern').owlCarousel({
        loop: false,
        nav: false,    
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            margin: 15,
            dots: false,
          },
          600: {
            items: 1,
            margin: 20,
            dots: false,
          },
          1000: {
            items: 2,
            margin: 0,
          }
        }
      })


    /*---------------------
    Testmonials Carousel 2
    -----------------------*/
      $('#testmonials-parallax').owlCarousel({
        dots: false,
        loop: false,
        nav: false,   
        smartSpeed: 950, 
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            margin: 15,
            dots: false,
          },
          600: {
            items: 1,
            margin: 0,
            dots: false,
          },
          1000: {
            items: 1,
            margin: 0,
          }
        }
      })



    /*---------------------
    Clients carousel
    -----------------------*/
      $('#tavc-clients').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 950,
        autoplayTimeout: 2000,  
        responsiveClass: true,
        autoplayHoverPause:false,
        responsive: {
          0: {
            items: 2,
            margin: 50,
          },
          600: {
            items: 4,
            margin: 80,
          },
          1000: {
            items: 6,
            margin: 80,
          }
        }
      })



    /*---------------------
    Clients carousel
    -----------------------*/
      $('.projects_4col').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 500,
        autoplayTimeout: 5000,  
        responsiveClass: true,
        autoplayHoverPause:false,
        responsive: {
          0: {
            items: 1,
            margin: 0,
          },
          600: {
            items: 2,
            margin: 0,
          },
          1000: {
            items: 4,
            margin: 0,
          }
        }
      })  



    /*---------------------
    Single Item Autoplay Carousel
    -----------------------*/
      $('.carousel-single-item-autoplay').owlCarousel({
        dots: false,
        loop: true,
        nav: false,   
        responsiveClass: true,
        autoplay: true,
        smartSpeed: 950,
        autoplayTimeout: 6000,  
        autoplayHoverPause: true,   
        responsive: {
          0: {
            items: 1,
            margin: 30,
          },
          600: {
            items: 1,
            margin: 0,
          },
          1000: {
            items: 1,
            margin: 0,
          }
        }
      })

    /*---------------------
    Single Item Carousel
    -----------------------*/
      $('.carousel-single-item').owlCarousel({
        dots: false,
        loop: false,
        nav: false,   
        smartSpeed: 950, 
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            margin: 30,
          },
          600: {
            items: 1,
            margin: 0,
          },
          1000: {
            items: 1,
            margin: 0,
          }
        }
      })  


    /*---------------------
    Gallery Carousel
    -----------------------*/
      $('.gallery-carousel').owlCarousel({
        center:true,
        stagePadding: 20,
        smartSpeed: 1100,   
        URLhashListener:true,
        startPosition: 'URLHash',
        autoplay:true,
        autoplayTimeout: 3500,
        loop: true,
        nav: false,    
        responsiveClass: true,
        dots: false,
        responsive: {
          0: {
            items: 1,
            margin: 15,
          },
          600: {
            items: 1,
            margin: 15,
          },
          1000: {
            items: 2,
            margin: 30,
          }
        }
      })    




    /*---------------------
    Customiable Carousel
    -----------------------*/
      var owl_carousel = $("div.customizable-carousel");
      if(owl_carousel.length > 0) {  
         owl_carousel.each(function () {
          var $this = $(this),
              $items = ($this.data('items')) ? $this.data('items') : 1,
              $loop = ($this.attr('data-loop')) ? $this.data('loop') : true,
              $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
              $navarrows = ($this.data('nav-arrows')) ? $this.data('nav-arrows') : false,
              $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : false,
              $autospeed = ($this.attr('data-autospeed')) ? $this.data('autospeed') : 3500,
              $smartspeed = ($this.attr('data-smartspeed')) ? $this.data('smartspeed') : 950,
              $autohgt = ($this.data('autoheight')) ? $this.data('autoheight') : false,
              $space = ($this.attr('data-space')) ? $this.data('space') : 15;    
         
              $(this).owlCarousel({
                  loop: $loop,
                  items: $items,
                  responsive: {
                    0:{items: $this.data('xs-items') ? $this.data('xs-items') : 1},
                    600:{items: $this.data('sm-items') ? $this.data('sm-items') : 2},
                    1000:{items: $this.data('md-items') ? $this.data('md-items') : 3},
                    1000:{items: $items}
                  },
                  dots: $navdots,
                  autoplayTimeout:$autospeed,
                  smartSpeed: $smartspeed,
                  autoHeight:$autohgt,
                  margin:$space,
                  nav: $navarrows,
                  navText:["<i class='ti-angle-left'></i>","<i class='ti-angle-right'></i>"],
                  autoplay: $autoplay,
                  autoplayHoverPause: true   
              }); 
         }); 
      }

    /*------------------------------------
        5. Youtube Video Section
    --------------------------------------*/ 
      if($(".video-section").length !== 0) {
        $('.player').mb_YTPlayer();
      }

      if($(".main-video-section").length !== 0) {
        $('#main-video-play').mb_YTPlayer();
      } 


    /*------------------------------------
        6. Video Modal
    --------------------------------------*/ 
      $('.modal').on('hidden.bs.modal', function() {
        var $this = $(this).find('iframe'),
          tempSrc = $this.attr('src');
        $this.attr('src', "");
        $this.attr('src', tempSrc);
      });


    /*------------------------------------
        9. Pie Chart
    --------------------------------------*/  
      if ($('.chart').length > 0) {
          var $pieChart = $('.chart');
          $pieChart.each(function () {
              var $elem = $(this),
                  pieChartSize = $elem.attr('data-size') || "120",
                  pieChartAnimate = $elem.attr('data-animate') || "2100",
                  pieChartWidth = $elem.attr('data-width') || "6",
                  pieChartColor = $elem.attr('data-color') || "#2e52c2",
                  pieChartTrackColor = $elem.attr('data-trackcolor') || "rgba(0,0,0,0.1)";
              $elem.find('span, i').css({
                  'width': pieChartSize + 'px',
                  'height': pieChartSize + 'px',
                  'line-height': pieChartSize + 'px'
              });
              $elem.appear(function () {
                  $elem.easyPieChart({
                      size: Number(pieChartSize),
                      animate: Number(pieChartAnimate),
                      trackColor: pieChartTrackColor,
                      lineWidth: Number(pieChartWidth),
                      barColor: pieChartColor,
                      scaleColor: false,
                      lineCap: 'round',
                      onStep: function (from, to, percent) {
                          $elem.find('span.percent').text(Math.round(percent));
                      }
                  });
              });
          });
      };



    /*------------------------------------
        11. Tabs
    --------------------------------------*/ 
      $('.tabs_animate').tabslet({
        mouseevent: 'click',
        attribute: 'href',
        animation: true
      });





    /*------------------------------------
        13. Modal
    --------------------------------------*/ 
      $(".izimodal").iziModal({
          width: 800,
          top: null,
          bottom: null,
          borderBottom: false,
          padding: 0,
          radius: 3,
          zindex: 999999,
          iframe: false,
          iframeHeight: 400,
          iframeURL: null,
          focusInput: false,
          group: '',
          loop: false,
          arrowKeys: true,
          navigateCaption: true,
          navigateArrows: true, // Boolean, 'closeToModal', 'closeScreenEdge'
          history: false,
          restoreDefaultContent: true,
          autoOpen: 0, // Boolean, Number
          bodyOverflow: false,
          fullscreen: false,
          openFullscreen: false,
          closeOnEscape: true,
          closeButton: true,
          appendTo: 'body', // or false
          appendToOverlay: 'body', // or false
          overlay: true,
          overlayClose: true,
          overlayColor: 'rgba(0, 0, 0, .7)',
          timeout: false,
          timeoutProgressbar: false,
          pauseOnHover: false,
          timeoutProgressbarColor: 'rgba(255,255,255,0)',
          transitionIn: 'comingIn',
          transitionOut: 'comingOut',
          transitionInOverlay: 'fadeIn',
          transitionOutOverlay: 'fadeOut',
          onFullscreen: function(){},
          onResize: function(){},
          onOpening: function(){},
          onOpened: function(){},
          onClosing: function(){},
          onClosed: function(){},
          afterRender: function(){}
      });
      $(document).on('click', '.trigger', function (event) {
          event.preventDefault();
          $('.izimodal').iziModal('setZindex', 99999999);
          $('.izimodal').iziModal('open', { zindex: 99999999 });
          $('.izimodal').iziModal('open');
      });





    /*------------------------------------
        14. Justified Gallery 
    --------------------------------------*/ 
      if ($('.justified_gallery').length > 0) {
          $(".justified_gallery").justifiedGallery();
          var $justifiedgallery = $('.justified_gallery');
          $justifiedgallery.each(function () {
              var $element = $(this),
              rowHeight = $element.attr('data-rowHeight') || "200",
              margins = $element.attr('data-margins') || "10"             
              $element.appear(function () {
                  $element.justifiedGallery({
                      rowHeight: Number(rowHeight),
                      margins: Number(margins),
                  });
              });
          });
      };



    /*------------------------------------
        15. Magnific Popup
    --------------------------------------*/ 
      $('.image-popup-gallery').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        mainClass: 'mfp-fade',
        fixedContentPos: true,
        image: {
          verticalFit: true,
        },
        gallery: {
          tCounter: '',
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }  
      });


      $('.image-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        mainClass: 'mfp-fade',
        fixedContentPos: true,
        image: {
          verticalFit: true,
        },
      });

      $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        closeOnContentClick: true,
        closeBtnInside: false,    
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
      });


    /*------------------------------------
        16. CountDowns
    --------------------------------------*/ 
        $('.countdown').countdown($('.countdown').attr("data-enddate")).on('update.countdown', function (event) {
            $(this).html(event.strftime('' + '<div class="row"><div class="col-md-3 col-sm-6 col-3"><div class="countdown-box">%-D<h6>Day%!d</h6></div></div>' + '<div class="col-md-3 col-sm-6 col-3"><div class="countdown-box">%H<h6>Hours</h6></div></div>' + '<div class="col-md-3 col-sm-6 col-3"><div class="countdown-box">%M<h6>Minutes</h6></div></div>' + '<div class="col-md-3 col-sm-6 col-3"><div class="countdown-box">%S<h6>Seconds</h6></div></div></div>'));
        });



    /* ---------------------------------------------------
        16 - Particle Background
	----------------------------------------------------- */
    var count_particles, stats, update;
    stats = new Stats;
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
    count_particles = document.querySelector('.js-count-particles');
    update = function() {
        stats.begin();
        stats.end();
        if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
            count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
        }
        requestAnimationFrame(update);
    };
    requestAnimationFrame(update); 
   
})