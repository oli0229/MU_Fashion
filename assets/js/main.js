(function ($) {

    "use strict";

    /*------------------------------------------
        = All Essential Function
    -------------------------------------------*/
    
    /*------------------------------------------
        = Mobile Nav Hide Show
    -------------------------------------------*/
    if ($('.mobile-menu').length) {

        $('.mobile-menu li.dropdown ul').hide();
        //Dropdown Button
        $('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
            $(this).toggleClass('open');
            $(this).prev('ul').slideToggle(500);
        });
        //Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function () {
            $('body').addClass('mobile-menu-visible');
        });

        //Menu Toggle Btn
        $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function () {
            $('body').removeClass('mobile-menu-visible');
        });
    }

    /*------------------------------------------
        = Sticky Header
    -------------------------------------------*/
    if ($('.main-menu').length) {
        var mobileMenuContent = $('.ic-main-header .header-bottom nav').html();
		$('.sticky-header .main-menu').append(mobileMenuContent);
    }

    /*------------------------------------------
        = Scroll Top
    -------------------------------------------*/
	function headerStyle() {
		if($('.ic-main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.ic-main-header');
			if (windowpos >= 190) {
				siteHeader.addClass('fixed-header');
			} else {
				siteHeader.removeClass('fixed-header');
			}
		}
	}

    /*------------------------------------------
        = Banner Hero Slider
    -------------------------------------------*/
    $('.ic-hero-banner').slick({
        fade: false,
        slidesToScroll: 1,
        dots: false,
        autoplay: true, //true
        autoplaySpeed: 3500,
        prevArrow: '<div class="slick-prev-div"><i class="icofont-thin-left"></i></div>',
        nextArrow: '<div class="slick-next-div"><i class="icofont-thin-right"></i></div>',
    });

    /*------------------------------------------
        = Product Gallery Slider
    -------------------------------------------*/
    $('.ic-product-gallery-slider').slick({
        fade: false,
        slidesToScroll: 1,
        slidesToShow: 4,
        dots: false,
        autoplay: true, //true
        autoplaySpeed: 3000,
        prevArrow: '<div class="slick-prev-div"><i class="icofont-thin-left"></i></div>',
        nextArrow: '<div class="slick-next-div"><i class="icofont-thin-right"></i></div>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    /*------------------------------------------
        = Product Gallery Slider
    -------------------------------------------*/
    $('.ic-product-detail-gallery-slider').slick({
        fade: false,
        slidesToScroll: 1,
        slidesToShow: 3,
        dots: false,
        autoplay: true, //true
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    /*------------------------------------------
        = Brand Slider
    -------------------------------------------*/
    $('.ic-brand-slider').slick({
        fade: false,
        slidesToScroll: 1,
        slidesToShow: 3,
        dots: false,
        arrows: false,
        autoplay: true, //true
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    /*------------------------------------------
        = Company Info Slider
    -------------------------------------------*/
    $('.company-info-content').slick({
        fade: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: true,
        arrows: false,
        autoplay: true, //true
        autoplaySpeed: 3000,
        asNavFor: '.company-info-img-slider',
    });

    $('.company-info-img-slider').slick({
        fade: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: false,
        arrows: false,
        autoplay: true, //true
        autoplaySpeed: 3000,
        asNavFor: '.company-info-content',
    });

    /*------------------------------------------
        = Company Policy Slider
    -------------------------------------------*/
    $('.company-policy-content').slick({
        fade: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: true,
        focusOnSelect: true,
        arrows: false,
        autoplay: false, //true
        // autoplaySpeed: 4000,
        asNavFor: '.company-policy-img',
    });

    $('.company-policy-img').slick({
        fade: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: false,
        arrows: false,
        autoplay: false, //true
        // autoplaySpeed: 4000,
        asNavFor: '.company-policy-content',
    });

    /*------------------------------------------
        = Collapse Enable
    -------------------------------------------*/
    $('.collapse').collapse();


    //isotope activation js codes:
    /*------------------------------------------
        = ISOTOPE JS ACTIVATION
    -------------------------------------------*/
    function productGalleryFilter() {
        $('.grid').isotope({
            itemSelector: '.grid-item',
            layoutMode: 'masonry',
            percentPosition: true,
            filter: '*',
            masonry: {
            }
        });

        $(".filter-button-group li").click(function () {
            $(".filter-button-group li").filter(this);
            var filter_id = $(this).data('filter');
            $(".grid").isotope({
                itemSelector: '.grid-item',
                filter: filter_id,
                animationOptions: {
                    duration: 1000
                }
            });
        });

        // change is-checked class on buttons
        $(".filter-button-group ul").each(function (i, liList) {
            var $liList = $(liList);
            $liList.on('click', 'li ', function () {
                $liList.find('.filter-active').removeClass('filter-active');
                $(this).addClass('filter-active');
            });
        });
    }

    /*------------------------------------------
        = PRODUCT DETAILS SLIDER
    -------------------------------------------*/
    function productDetailsSlider() {
        $('.ic-pro-dec-big-img-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            infinite: true,
            draggable: false,
            dots: false,
            autoplay: false,
            asNavFor: '.ic-pro-dec-small-img-slider'
        });
        $('.ic-pro-dec-small-img-slider').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            dots: false,
            infinite: true,
            focusOnSelect: true,
            asNavFor: '.ic-pro-dec-big-img-slider',
            arrows: false,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 5,
                    },

                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 4,
                    },

                },
                {
                    breakpoint: 400,
                    settings: {
                        dots: false,
                        vertical: false,
                        slidesToShow: 3,
                    },

                }
            ],
        });
    }
    productDetailsSlider();

    /*------------------------------------------
        = WOW ANIMATION SETTING
    -------------------------------------------*/
    var wow = new WOW({});

    //active wow
    wow.init();

    /*----------------------------------
        = ScrollUp Active
    -----------------------------------*/
    $.scrollUp({
        scrollText: '<i class="icofont-rounded-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });  


    /*==========================================================================
        Document Loading
    ==========================================================================*/
    $(window).on('load', function () {
        productGalleryFilter();

    });


    /*==========================================================================
        Window Scroll
    ==========================================================================*/
    $(window).on("scroll", function () {
        headerStyle();
    });


    /*==========================================================================
        Window Resize
    ==========================================================================*/
    $(window).on("resize", function () {

    });





    function playerSend(player, command) {
        if (player == null || command == null) return;
        player.contentWindow.postMessage(JSON.stringify(command), "*");
    }

    function controlVideo(control, usercontrol) {
        var video = void 0,
            videowrap = $('.ic-banner-video-inner'),
            slideType = videowrap.attr("class").split(" ")[1],
            player = $("iframe").get(0);

        if (slideType === "youtube") {
            switch (control) {
                case "play":
                    playerSend(player, {
                        "event": "command",
                        "func": "mute"
                    });
                    playerSend(player, {
                        "event": "command",
                        "func": "playVideo"
                    });
                    if (usercontrol) videowrap.addClass('is-playing').removeClass('is-paused');
                    break;
                case "pause":
                    playerSend(player, {
                        "event": "command",
                        "func": "pauseVideo"
                    });
                    if (usercontrol) videowrap.removeClass('is-playing').addClass('is-paused');
                    break;
            }
        } else if (slideType === "video") {
            video = $("video").get(0);
            if (video != null) {
                if (control === "play") {
                    video.play();
                    if (usercontrol) videowrap.addClass('is-playing').removeClass('is-paused');
                } else {
                    video.pause();
                    if (usercontrol) videowrap.removeClass('is-playing').addClass('is-paused');
                }
            }
        }
    }

    $('.video-play').on('click', function () {
        controlVideo("play", true);
    });

    $('.video-stop').on('click', function () {
        controlVideo("pause", true);
    });





















})(window.jQuery);