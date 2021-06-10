function effect() {
    var re = $(window).scrollTop();
    if (re >= $(".bio-right").parents("#about").offset().top - $(".bio-right").parents("#about").height()) {
        $(".bio-right p").addClass("fadeInUp animated").css("opacity", "1");
        $(".bio-right .btn").addClass("fadeInUp animated").css("opacity", "1");
        $(".bio-left").addClass("bounceIn animated").css("opacity", "1");
        //$("").addClass("bounceIn animated").css("opacity", "1");
    }
    $(".section-title").each(function () {
        var $section_title = $(this)
        if (re >= $section_title.offset().top - $section_title.outerHeight() * 2) {
            $section_title.addClass("zoomInRight animated").css("opacity", "1");
        }
    })
    $(".timeLine li").each(function () {
        var $timeLine = $(this);
        if (re >= $timeLine.offset().top - $timeLine.height() * 2) {
            $timeLine.addClass("fadeInUp animated").css("opacity", "1");
        }
    })

    $(".skills li span").each(function () {
        var $timeLine = $(this);
        if (re >= $timeLine.offset().top - $(window).outerHeight()) {
            $timeLine.addClass("fadeInRight animated").css("opacity", "1");
        }
    })
    $(".award-list ul li").each(function () {
        var $timeLine = $(this);
        if (re >= $timeLine.offset().top - $(window).outerHeight()) {
            $timeLine.addClass("fadeInUp animated").css("opacity", "1");
        }
    })

    if (re >= $("#call-to-action").offset().top - $("#call-to-action").height() - 400) {
        $("#call-to-action i").addClass("zoomIn animated").css("opacity", "1");
        $("#call-to-action p").addClass("zoomIn animated").css("opacity", "1");
        $("#call-to-action h2").addClass("zoomIn animated").css("opacity", "1");
        $("#call-to-action span").addClass("flipInX animated").css("opacity", "1");
    }

    if (re >= $("#contact .container").offset().top - $(window).outerHeight() +300) {
        $(".text-footer").addClass("zoomIn animated").css("opacity", "1");
        $(".form").addClass("zoomIn animated").css("opacity", "1");
        $("#call-to-action h2").addClass("zoomIn animated").css("opacity", "1");
        $("#call-to-action span").addClass("flipInX animated").css("opacity", "1");
    }
    $(".portfolio-item").each(function () {
        var $timeLine = $(this);
        var tttat = 1000;
        tttat++;
        //setTimeout(function () {
            if (re >= $timeLine.offset().top - $(window).outerHeight()) {
                $timeLine.addClass("fadeInUp animated").css("opacity", "1");
            }
        //},1000)
    })

}
///////////////////////////////////////////effect/////////////////////////////
$(function () {
    window.responsive = function responsive() {
        var valueOfblur = 0;





        if ($(window).width() >= 980) {
            $(window).scroll(function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop >= $(".baner-txt").offset().top - $(".header-medium").outerHeight() && scrollTop <= $(".social-network-parent").offset().top + $(".social-network-parent").outerHeight()) {
                    $(".header-medium").removeClass("header-medium-add");
                    $(".header-medium").removeClass("opaque");
                }
                else {
                    if (scrollTop >= $(".social-network-parent").offset().top + $(".social-network-parent").outerHeight()) {
                        $(".header-medium").addClass("opaque");
                    }
                    $(".header-medium").addClass("header-medium-add");
                }


                    valueOfblur = $(window).scrollTop()/30;
                $(".header-overlay").css({
                    "filter": "blur(" + valueOfblur + "px)",
                });
                $(".baner-txt").css("margin-top", -$(window).scrollTop() + 10);
            });


            /*effect-animation*/
            //setTimeout(function () {
            //    $(".background-part-one").fadeIn();
            //    $(".part-one").css("opacity", "1")
            //}, 1000);
            setTimeout(function () {
                $(".baner-txt h1").addClass("fadeInUp animated").css("opacity", "1");
            }, 400);
            setTimeout(function () {
                $(".baner-txt h5").addClass("fadeInUp animated").css("opacity", "1");
            }, 1000);


            $(window).scroll(function () {
     
                effect();
            })
        }
        effect();

        if ($(window).width() >= 680) {
            if ($(window).height() >= 460) {
                $(".home").height($(window).height());
            } else {
                $(".home").css("height", "604px");
            }
        } else {
            if ($(window).height() >= 460) {
                $(".home").height($(window).height());
            } else {
                $(".home").css("height", "600px");
            }
        }
    }
});
//Call the function on load and resize
$(window).on('ready load resize orientationchange', function () { responsive(); });
$(".to-down-header").click(function () {
    $("html,body").animate({
        scrollTop: $("#about").offset().top,
    },800)
});
$(".menu-icon").click(function () {
    $(".scale-menu-content").addClass("effect-menu");
    $(".click-overlay").fadeIn();
    $("body,html").css("overflow", "hidden");
    $(".menu-small-size").addClass("menu-scale");
    $(".header-small").css("left", "-238px");
    $(".menu-icon span").addClass("active-menu");
});
$(".click-overlay").click(function () {
    $(".scale-menu-content").removeClass("effect-menu");
    $(".click-overlay").fadeOut();
    $("body,html").css("overflow", "")
    $(".menu-small-size").removeClass("menu-scale");
    $(".header-small").css("left", "");
    $(".menu-icon span").removeClass("active-menu");

});


///sliks//////////////////////////////////////////////
$(".skills li").each(function () {
    var $value = $(this);
    $value.children("span").css({
        width: $value.children("span").attr("data-value") + "%"
    });
});
///sliks//////////////////////////////////////////////






$(".top-top").click(function () {
    $("html,body").stop().animate({
        scrollTop: 0
    }, 1500);
});
$(window).scroll(function () {
    $(".header-medium ul li").each(function () {
        var $this_header = $(this);
        if ($(window).scrollTop() >= $($this_header.children("span").attr("data-scroll")).offset().top && $(window).scrollTop() <= $($this_header.children("span").attr("data-scroll")).offset().top + $($this_header.children("span").attr("data-scroll")).height()) {
            $this_header.addClass("addClass-liMenu").siblings().removeClass("addClass-liMenu");
        }
    });
});
$(".header-medium ul li").click(function () {
    var $this_header = $(this);
    $("html,body").stop().animate({
        scrollTop: $($this_header.children("span").attr("data-scroll")).offset().top + 1
    }, 1000);
});

$(function () {
    $('.box-move li').each(function () { $(this).hoverdir(); });
});



$(document).ready(function () {
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
});
  $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        alert("Ready");
        console.log(modal, trigger);
      },
      complete: function() { alert('Closed'); } // Callback for Modal close
    }
  );

  $(".testimonials-items").slick({
      customPaging: function (slider, i) {
          return $('<div></div>');
      },
      dots: true,
      dotsClass: 'slick-dots',
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      rtl: true,
      prevArrow: false,
      nextArrow: false,
      responsive: [
  {
      breakpoint: 1024,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
      }
  },
  {
      breakpoint: 980,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1
      }
  },
  {
      breakpoint: 600,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1
      }
  }
      ]
  })

  $("html").niceScroll({
      cursorcolor: "rgb(17, 171, 176)",
      background: "transparent",
      cursorwidth: "8px",
      zindex: 99999
  });
  $(".modal-trigger").click(function () {
      $(".modal-content").niceScroll({
          railalign: "left",
          touchbehavior: true,
          cursorcolor: "#CFCFCF",
          cursorwidth: "1px",
          zindex: 1
      });
      $(".pop-imgs").slick({
          customPaging: function (slider, i) {
              return $('<div></div>');
          },
          dots: true,
          dotsClass: 'slick-dots',
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          rtl: true,
          prevArrow: false,
          nextArrow: false,
          responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          }
      },
      {
          breakpoint: 980,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
          ]
      })
  })


//$("#about").height($(window).height())
