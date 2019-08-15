$(document).ready(function() {
    // $('.grunge-preview').miniPreview();

    $('.grunge-preview').miniPreview({
        src:'./img/article_preview/grunge_preview.png',
        width:1409, // Image dimensions
        height:417,
        scale:0.5
    });
    $('.qipao-preview').miniPreview({
        src:'./img/article_preview/qipao_preview.png',
        width:1400,
        height:478,
        scale:0.5
    });
    $('.hermes-preview').miniPreview({
        src:'./img/article_preview/hermes_preview.png',
        width:770,
        height:414,
        scale:0.5
    });
    $('.rimowa-preview').miniPreview({
        src:'./img/article_preview/rimowa_preview.png',
        width:774,
        height:440,
        scale:0.5
    });
    $('.chanel-preview').miniPreview({
        src:'./img/article_preview/chanel_preview.png',
        width:792,
        height:479,
        scale:0.5
    });
    $('.exfoliation-preview').miniPreview({
        src:'./img/article_preview/exfoliation_preview.png',
        width:752,
        height:400,
        scale:0.5
    });
    // Materialize Carousel
    var elem = document.querySelector('.carousel');
    const options = {
        onCycleTo: (poem) => {
            const instance = M.Carousel.getInstance(elem);
            //Set bottom text and the href to smth cool of read poem
            const poemTitle = $(poem).attr('data-title')
            const poemHref = $(poem).attr('data-href')
            $('#selected-poem').text(poemTitle)
            $('#read-poem').attr('href',poemHref)
            $('#read-poem').attr('poem-title',poemTitle)            
            //Set instagram href of view poem
            const poemInstagram = $(poem).attr('data-instagram')
            $('#view-poem').attr('href',poemInstagram)
        },
        indicators:true,

    }
    var instances = M.Carousel.init(elem,options);

    window.onbeforeunload = function () {
            window.scrollTo(0,0);
    };

    //------- Lightbox  js --------//  

    $('.popup-modal').magnificPopup({
        type: 'inline',
        mainClass:'mfp-fade',
        removalDelay:300,
        // callbacks: {
        // open: function() {
        //     $('.mfp-container').addClass('no-scroll')
        //     }
        // },
        // close: function() {
        //     $('.mfp-container').removeClass('no-scroll')
        // }
    });

    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
        alert('hi!')
    });    

    //------- Timeline js --------//  

    $('.content').each( function(i){
      
      var bottom_of_object= $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).height();
      
      if( bottom_of_object > bottom_of_window){
        $(this).addClass('hidden');
      }
    });


    $(window).scroll( function(){
        /* Check the location of each element hidden */
        $('.hidden').each( function(i){
          
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
          
            /* If the object is completely visible in the window, fadeIn it */
            if( bottom_of_window > bottom_of_object-50 ){
              $(this).animate({'opacity':'1'},700);
            }
        });
    });

    //------- Tabs Js --------//  
    if (document.getElementById("horizontalTab")) {

    $('#horizontalTab').jqTabs({
        direction: 'horizontal',
        duration: 200
    });
    
    };  

    //------- Mobile Nav  js --------//  

    if ($('#nav-menu-container').length) {
        var $mobile_nav = $('#nav-menu-container').clone().prop({
            id: 'mobile-nav'
        });
        $mobile_nav.find('> ul').attr({
            'class': '',
            'id': ''
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="lnr lnr-menu"></i></button>');
        $('body').append('<div id="mobile-body-overly"></div>');
        $('#mobile-nav').find('.menu-has-children').prepend('<i class="lnr lnr-chevron-down"></i>');

        $(document).on('click', '.menu-has-children i', function(e) {
            $(this).next().toggleClass('menu-item-active');
            $(this).nextAll('ul').eq(0).slideToggle();
            $(this).toggleClass("lnr-chevron-up lnr-chevron-down");
        });

        $(document).on('click', '#mobile-nav-toggle', function(e) {
            $('body').toggleClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
            $('#mobile-body-overly').toggle();
        });

        $(document).on('click', function(e) {
            var container = $("#mobile-nav, #mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
                    $('#mobile-body-overly').fadeOut();
                }
            }
        });
    } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
        $("#mobile-nav, #mobile-nav-toggle").hide();
    }

    //------- Smooth Scroll  js --------//  

    let scrolling = false;
    $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function(event) {
        if(!scrolling){
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                if (target.length) {
                    scrolling = true;
                    var top_space = 0;

                    if ($('#header').length) {
                        top_space = $('#header').outerHeight();

                        if (!$('#header').hasClass('header-fixed')) {
                            top_space = top_space;
                        }
                    }

                    $('html, body').animate({
                        scrollTop: target.offset().top - top_space
                    }, 1500, 'easeInOutExpo',()=>{
                        scrolling = false
                    });

                    if ($(this).parents('.nav-menu').length) {
                        $('.nav-menu .menu-active').removeClass('menu-active');
                        $(this).closest('li').addClass('menu-active');
                    }

                    if ($('body').hasClass('mobile-nav-active')) {
                        $('body').removeClass('mobile-nav-active');
                        $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
                        $('#mobile-body-overly').fadeOut();
                    }
                    return false;
                }
            }            
        } else {
            console.log('failed!')
            return false
        }
    });

    $(document).ready(function() {

        $('html, body').hide();

        if (window.location.hash) {

            setTimeout(function() {

                $('html, body').scrollTop(0).show();

                $('html, body').animate({

                    scrollTop: $(window.location.hash).offset().top - 108

                }, 1000)

            }, 0);

        } else {

            $('html, body').show();

        }

    });


    jQuery(document).ready(function($) {
        // Get current path and find target link
        var path = window.location.pathname.split("/").pop();

        // Account for home page with empty path
        if (path == '') {
            path = 'index.html';
        }

        var target = $('nav a[href="' + path + '"]');
        // Add active class to target link
        target.addClass('menu-active');
    });

    $(document).ready(function() {
        if ($('.menu-has-children ul>li a').hasClass('menu-active')) {
            $('.menu-active').closest("ul").parentsUntil("a").addClass('parent-active');
        }
    });

    //------- Header Scroll Class  js --------//  
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#header').addClass('header-scrolled');
            $('#mobile-nav-toggle i').addClass('mobile-nav-scrolled')
        } else {
            $('#header').removeClass('header-scrolled');
            $('#mobile-nav-toggle i').removeClass('mobile-nav-scrolled')
        }
    });

});