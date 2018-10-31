/*-------------------------------------------------------------------------------

        - mEbook -
         js script

version:   	1.0
date:      	10/22/2018
author:		AladinStudio
link:   	https://www.aladindev.com

---------------------------------------------------------------------------------*/

/* Table of Content: ============================================================
1-Preloader
2-Counter Up
3-Shrink Nevbar and Display "Top Button" on Scrolling
4-Wow animations
5-Smooth Scrolling on Navigation
 ==============================================================================*/

(function ($) {
    "use strict";

$(document).ready(function () {

    var $window = $(window),
        $preloader = $('#preloader'),
        $nav = $("nav"),
        $scrollToTop = $("#scroll-to-top");

    /*---------------------------------------
    1-PRELOADER JS --------------------------
    ----------------------------------------*/
    $window.on('load', function () {
        $preloader.fadeOut('slow');
        $nav.addClass('fixed-top');
    });


    /*---------------------------------------
    2-Counter Up ----------------------------
    ----------------------------------------*/
    $('.count').counterUp({
        delay: 20,
        time: 1500
    });


    /*-----------------------------------------------------------------------------------
    3- Shrink Navbar and Display "Scroll to Top" button When scrolling down -------------
    ------------------------------------------------------------------------------------*/
    var navbarFloat = function () {
        if ($nav.offset().top > 100) {
            $nav.addClass("navbar-shrink");
            $scrollToTop.addClass("display");
        } else {
            $nav.removeClass("navbar-shrink");
            $scrollToTop.removeClass("display");
        }
    };
    // Collapse now if page is not at top
    navbarFloat();
    // Collapse the navbar when page is scrolled
    $window.scroll(navbarFloat);


    /*---------------------------------------------------
    4-Wow Animation -------------------------------------
    ----------------------------------------------------*/
    new WOW().init();
    

    /*---------------------------------------------------
    5-Smooth scrolling using jQuery easing --------------
    ----------------------------------------------------*/
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { 
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); 
                            $target.focus(); 
                        };
                    });
                }
            }
        });
});

}(jQuery));