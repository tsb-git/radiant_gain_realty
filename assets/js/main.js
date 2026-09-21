(function($) {
    "use strict";

    // ==========================================
    //      Start Document Ready function
    // ==========================================
    $(document).ready(function() {

        // ============== Mobile Menu Sidebar & Offcanvas Js Start ========
        $('.toggle-mobileMenu').on('click', function() {
            $('.mobile-menu').addClass('active');
            $('.side-overlay').addClass('show');
            $('body').addClass('scroll-hide-sm');
        });

        $('.close-button, .side-overlay').on('click', function() {
            $('.mobile-menu').removeClass('active');
            $('.side-overlay').removeClass('show');
            $('body').removeClass('scroll-hide-sm');
        });
        // ============== Mobile Menu Sidebar & Offcanvas Js End ========

        // ============== Mobile Nav Menu Dropdown Js Start =======================
        var windowWidth = $(window).width();

        $('.has-submenu').on('click', function() {
            var thisItem = $(this);

            if (windowWidth < 992) {
                if (thisItem.hasClass('active')) {
                    thisItem.removeClass('active')
                } else {
                    $('.has-submenu').removeClass('active')
                    $(thisItem).addClass('active')
                }

                var submenu = thisItem.find('.nav-submenu');

                $('.nav-submenu').not(submenu).slideUp(300);
                submenu.slideToggle(300);
            }

        });
        // ============== Mobile Nav Menu Dropdown Js End =======================

        // ======================== Offcanvas Js Start ====================
        $('.offcanvas-btn').on('click', function() {
            $('.common-offcanvas').addClass('active');
            $('.side-overlay').addClass('show');
            $('body').addClass('scroll-hide');
        });

        $('.close-button, .side-overlay').on('click', function() {
            $('.common-offcanvas').removeClass('active');
            $('.side-overlay').removeClass('show');
            $('body').removeClass('scroll-hide');
        });
        // ======================== Offcanvas Js End ====================

        // ===================== Scroll Back to Top Js Start ======================
        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function() {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 550;
        jQuery(window).on('scroll', function() {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.progress-wrap').addClass('active-progress');
            } else {
                jQuery('.progress-wrap').removeClass('active-progress');
            }
        });
        jQuery('.progress-wrap').on('click', function(event) {
            event.preventDefault();
            jQuery('html, body').animate({
                scrollTop: 0
            }, duration);
            return false;
        })
        // ===================== Scroll Back to Top Js End ======================

        // ============== Magnific Popup Js Start =======================
        $('.popup-video-link').magnificPopup({
            type: 'iframe'
        });
        $('.gallery-popup').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
        // ============== Magnific Popup Js End =======================

        // ========================= Portfolio Slick Slider Js Start ==============
        $('.portfolio-wrapper').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            rtl: $("html").attr("dir") == "rtl" ? true : false,
            autoplaySpeed: 2000,
            speed: 1500,
            dots: false,
            pauseOnHover: true,
            arrows: false,
            centerMode: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
            responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 530,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
        // ========================= Portfolio Slick Slider Js End ===================

        // ========================= Testimonial Slick Slider Js Start ==============
        $('.testimonial-box').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            rtl: $("html").attr("dir") == "rtl" ? true : false,
            autoplaySpeed: 2000,
            speed: 1500,
            dots: false,
            pauseOnHover: true,
            arrows: true,
            fade: true,
            draggable: true,
            speed: 900,
            infinite: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
        });
        // ========================= Testimonial Slick Slider Js End ===================  

        // ========================= Testimonial Four Slider Js Start ==============
        $('.testimonial-four-slider').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            rtl: $("html").attr("dir") == "rtl" ? true : false,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 1500,
            dots: true,
            pauseOnHover: true,
            arrows: false,
            draggable: true,
            speed: 900,
            infinite: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }]
        });
        // ========================= Testimonial Four Slider Js End ===================

        // ========================= Testimonial Three Slick Slider Js Start ==============
        $('.testimonials-three__wrapper').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 1500,
            rtl: $("html").attr("dir") == "rtl" ? true : false,
            dots: false,
            pauseOnHover: true,
            arrows: true,
            centerMode: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
        });
        // ========================= Testimonial Three Slick Slider Js End ===================

        // ========================= Testimonial Three Slick Slider Js Start ==============
        $('.project-page__inner').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            rtl: $("html").attr("dir") == "rtl" ? true : false,
            autoplaySpeed: 2000,
            speed: 1500,
            dots: false,
            pauseOnHover: true,
            arrows: true,
            centerMode: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
            responsive: [{
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                }
            ]
        });
        // ========================= Testimonial Three Slick Slider Js End ===================

        // ========================= Property Five Slick Slider Js Start ==============
        $('.property-five-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            rtl: $("html").attr("dir") == "rtl" ? true : false,
            autoplaySpeed: 2000,
            speed: 1500,
            dots: false,
            pauseOnHover: true,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
            responsive: [{
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots: true,
                    }
                }
            ]
        });
        // ========================= Property Five Slick Slider Js End ===================




        // =========================  Swipper Slider Js Start ==============
        const sliderswiper = new Swiper('.banner-9-active', {
            // Optional parameters
            speed: 1500,
            loop: true,
            slidesPerView: 1,
            autoplay: true,
            effect: 'fade',
            breakpoints: {
                '1600': {
                    slidesPerView: 1,
                },
                '1400': {
                    slidesPerView: 1,
                },
                '1200': {
                    slidesPerView: 1,
                },
                '992': {
                    slidesPerView: 1,
                },
                '768': {
                    slidesPerView: 1,
                },
                '576': {
                    slidesPerView: 1,
                },
                '0': {
                    slidesPerView: 1,
                },

                a11y: false,
            },
            // Navigation arrows
            navigation: {
                nextEl: '.slider-next',
                prevEl: '.slider-prev',
            },
            // pagination dots
            pagination: {
                el: ".slider-dots",
                clickable: true,
            },

        });
        // =========================  Swipper Slider Js End ==============



        // =========================  Home 9 Brand Js Start ==============
        var slider = new Swiper('.brand-9-active', {
            slidesPerView: 4,
            spaceBetween: 100,
            loop: true,
            speed: 3000,
            autoplay: true,
            centeredSlides: true,
            breakpoints: {
                '1200': {
                    slidesPerView: 5,
                },
                '992': {
                    slidesPerView: 4,
                },
                '768': {
                    slidesPerView: 3,
                },
                '576': {
                    slidesPerView: 2,
                },
                '0': {
                    slidesPerView: 2,
                },
            },
        });
        // =========================  Home 9 Brand Js End ==============



        // =========================  Feature 9 Js Start ==============
        function mediaSize() {
            if (window.matchMedia('(min-width: 768px)').matches) {
                const panels = document.querySelectorAll('.col-custom')
                panels.forEach(panel => {
                    panel.addEventListener('click', () => {
                        removeActiveClasses()
                        panel.classList.add('active')
                    })
                })

                function removeActiveClasses() {
                    panels.forEach(panel => {
                        panel.classList.remove('active')
                    })
                }
            } else {
                $(".col-custom ").addClass("active");
            }
        };
        mediaSize();
        window.addEventListener('resize', mediaSize, false);
        // =========================  Feature 9 Brand Js End ==============




        // =========================  Project 9 Js Start ==============
        // Home 1 testimonial
        var slider = new Swiper('.project-9-active', {
            slidesPerView: "auto",
            spaceBetween: 30,
            loop: true,
            speed: 3500,
            autoplay: true,
            breakpoints: {
                '1400': {
                    slidesPerView: 3.5,
                },
                '1200': {
                    slidesPerView: 2.8,
                },
                '992': {
                    slidesPerView: 2.1,
                },
                '768': {
                    slidesPerView: 1.2,
                },
                '576': {
                    slidesPerView: 1,
                },
                '0': {
                    slidesPerView: 1,
                },
            },
        });
        // =========================  Project 9 Js End ==============



        // =========================  Building 9 Js End ==============
        var slider = new Swiper('.building-9-active', {
            slidesPerView: "auto",
            spaceBetween: 30,
            loop: true,
            speed: 2500,
            autoplay: true,
            breakpoints: {
                '1200': {
                    slidesPerView: 4,
                },
                '992': {
                    slidesPerView: 3,
                },
                '768': {
                    slidesPerView: 2,
                },
                '576': {
                    slidesPerView: 1,
                },
                '0': {
                    slidesPerView: 1,
                },
            },

            // Navigation arrows
            navigation: {
                nextEl: '.slider-next',
                prevEl: '.slider-prev',
            },
        });
        // =========================  Building 9 Js End ==============




        // =========================  Testimonial 9 Js End ==============
        // Home one Product
        $('.testimonial-9-content-active').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            draggable: true,
            rtl: $('html').attr('dir') === 'rtl' ? true : false,
            fade: false,
            asNavFor: '.testimonial-9-item-active'
        });
        $('.testimonial-9-item-active').slick({
            slidesToShow: 3,
            slidesToScroll: false,
            asNavFor: '.testimonial-9-content-active',
            dots: false,
            draggable: false,
            arrows: false,
            vertical: false,
            focusOnSelect: true,
            centerPadding: '0',
            centerMode: true,
            speed: 3500,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                    }
                }

            ]
        });
        // =========================  Testimonial 9 Js End ==============




        // =========================  Building 10 Js Start ==============
        var slider = new Swiper('.building-10-active', {
            slidesPerView: "auto",
            spaceBetween: 30,
            loop: true,
            speed: 2500,
            autoplay: true,
            breakpoints: {
                '1200': {
                    slidesPerView: 4,
                },
                '992': {
                    slidesPerView: 3,
                },
                '768': {
                    slidesPerView: 2,
                },
                '576': {
                    slidesPerView: 1,
                },
                '0': {
                    slidesPerView: 1,
                },
            },

            // pagination
            pagination: {
                el: ".building-10-dots",
                clickable: true,
                renderBullet: function(index, className) {
                    return '<span class="' + className + '">' + '<button>' + (index + 1) + '</button>' + "</span>";
                },
            },
        });
        // =========================  Building 10 Js End ==============




        // =========================  button hover animation 9 Js Start ==============
        $(".h9-hover-btn").on("mouseenter", function(e) {
            var x = e.pageX - $(this).offset().left;
            var y = e.pageY - $(this).offset().top;
            $(this).find(".h9-hover-btn-circle-dot").css({
                top: y,
                left: x,
            });
        });
        $(".h9-hover-btn").on("mouseout", function(e) {
            var x = e.pageX - $(this).offset().left;
            var y = e.pageY - $(this).offset().top;
            $(this).find(".h9-hover-btn-circle-dot").css({
                top: y,
                left: x,
            });
        });
        // =========================  button hover animation 9 Js End ==============


        // =========================  Team 10 Hover Animation Js Start ==============
        $('.team-10-list-wrap .team-10-list-item').on("mouseenter", function() {
            $('#team-10-thumb').removeClass().addClass($(this).attr('rel'));
            $(this).addClass('active').siblings().removeClass('active');
        });
        // =========================  Team 10 Hover Animation Js End ==============



        // =========================  Building 10 Js Start ==============
        var slider = new Swiper('.testimonial-10-active', {
            slidesPerView: "auto",
            spaceBetween: 30,
            loop: true,
            speed: 2500,
            autoplay: true,
            breakpoints: {
                '1200': {
                    slidesPerView: 2.1,
                },
                '992': {
                    slidesPerView: 2,
                },
                '768': {
                    slidesPerView: 2,
                },
                '576': {
                    slidesPerView: 1,
                },
                '0': {
                    slidesPerView: 1,
                },
            },

            // pagination
            pagination: {
                el: ".testimonial-10-dots",
                clickable: true,
                renderBullet: function(index, className) {
                    return '<span class="' + className + '">' + '<button>' + (index + 1) + '</button>' + "</span>";
                },
            },
        });
        // =========================  Building 10 Js End ==============



        // =========================  Service 10 Button Active Js Start ==============
        document.querySelectorAll(".service-9-love-button").forEach(function(button) {
            // Add click event listener to each button
            button.addEventListener("click", function() {
                // Toggle the "active" class on the clicked button
                this.classList.toggle("active");
            });
        });
        // =========================  Service 10 Button Active Js End ==============




        // =========================  Search Bar 9 Js Start ==============
        $(".h9-search-popup").on("click", function() {
            $(".search_popup").addClass("search-opened");
            $(".search-popup-overlay").addClass("search-popup-overlay-open");
        });
        $(".search_close_btn").on("click", function() {
            $(".search_popup").removeClass("search-opened");
            $(".search-popup-overlay").removeClass("search-popup-overlay-open");
        });
        $(".search-popup-overlay").on("click", function() {
            $(".search_popup").removeClass("search-opened");
            $(this).removeClass("search-popup-overlay-open");
        });
        // =========================  Search Bar 9 Js End ==============




        // ========================= Banner toggle 10 Js Start ==============
        $(".toggle-menu-bar").on("click", function() {
            $(".banner-10-dropdown-content").toggleClass("opened");
        });
        $(".close-btn").on("click", function() {
            $(".banner-10-dropdown-content").removeClass("opened");
        });
        // ========================= Banner toggle 10 Js End ==============








        // ========================= Counter Up Js End ===================
        const counterUp = window.counterUp.default;

        const callback = (entries) => {
            entries.forEach((entry) => {
                const el = entry.target;
                if (entry.isIntersecting && !el.classList.contains('is-visible')) {
                    counterUp(el, {
                        duration: 2000,
                        delay: 16,
                    });
                    el.classList.add('is-visible');
                }
            });
        };

        const IO = new IntersectionObserver(callback, {
            threshold: 1
        });

        // About Counter
        const statisticsCounter = document.querySelector('.statisticsCounter');
        if (statisticsCounter) {
            IO.observe(statisticsCounter);
        }

        // Counter
        const counter = document.querySelector('.counter');
        if (counter) {
            IO.observe(counter);
        }

        // Counter Two
        const counterNumbers = document.querySelectorAll('.counterNumber');
        if (counterNumbers.length > 0) {
            counterNumbers.forEach((counterNumber) => {
                IO.observe(counterNumber);
            });
        }

        // Counter Three
        const counterThree = document.querySelectorAll('.counter-three-item__number');
        if (counterThree.length > 0) {
            counterThree.forEach((counterNumber) => {
                IO.observe(counterNumber);
            });
        }

        // Counter Five
        const counterFive = document.querySelectorAll('.counter-five-item__number');
        if (counterFive.length > 0) {
            counterFive.forEach((counterNumber) => {
                IO.observe(counterNumber);
            });
        }

        // Counter Five
        const counterSix = document.querySelectorAll('.project-content__number');
        if (counterSix.length > 0) {
            counterSix.forEach((counterNumber) => {
                IO.observe(counterNumber);
            });
        }

        // Counter Five
        const counterSeven = document.querySelectorAll('.about-five__amount');
        if (counterSeven.length > 0) {
            counterSeven.forEach((counterNumber) => {
                IO.observe(counterNumber);
            });
        }

        // Counter Five
        const counterEight = document.querySelectorAll('.counter-six-item__number');
        if (counterEight.length > 0) {
            counterEight.forEach((counterNumber) => {
                IO.observe(counterNumber);
            });
        }
        // ========================= Counter Up Js End ===================

        // ========================== add active class to ul>li top Active current page Js Start =====================
        function dynamicActiveMenuClass(selector) {
            let FileName = window.location.pathname.split("/").reverse()[0];

            // If we are at the root path ("/" or no file name), keep the activePage class on the Home item
            if (FileName === "" || FileName === "index.html") {
                // Keep the activePage class on the Home link
                selector.find("li.nav-menu__item.has-submenu").eq(0).addClass("activePage");
            } else {
                // Remove activePage class from all items first
                selector.find("li").removeClass("activePage");

                // Add activePage class to the correct li based on the current URL
                selector.find("li").each(function() {
                    let anchor = $(this).find("a");
                    if ($(anchor).attr("href") == FileName) {
                        $(this).addClass("activePage");
                    }
                });

                // If any li has activePage element, add class to its parent li
                selector.children("li").each(function() {
                    if ($(this).find(".activePage").length) {
                        $(this).addClass("activePage");
                    }
                });
            }
        }

        if ($('ul').length) {
            dynamicActiveMenuClass($('ul'));
        }
        // ========================== add active class to ul>li top Active current page Js End =====================

        // ========================== Add Attribute For Bg Image Js Start ====================
        $(".background-img").css('background', function() {
            var bg = ('url(' + $(this).data("background-image") + ')');
            return bg;
        });
        // ========================== Add Attribute For Bg Image Js End =====================


        // ========================== Social List Visibility Js Start =====================
        $(document).on('click', function(event) {
            if (!$(event.target).closest('.social-share').length && !$(event.target).closest('.social-share__button').length) {
                $('.social-share-list').removeClass('active');
                $('.social-share__button').removeClass('active')
            }
        });

        $('.social-share__button').on('click', function() {
            $('.social-share__button').not($(this)).removeClass('active')
            $(this).toggleClass('active')
            $('.social-share-list').not($(this).siblings('.social-share-list')).removeClass('active');
            $(this).siblings('.social-share-list').toggleClass('active');
        });
        // ========================== Social List Visibility Js End =====================

        // ========================== Text Slide Js Start =====================
        $('.service-slider').marquee({
            pauseOnHover: true,

            allowCss3Support: true,
            css3easing: 'linear',
            easing: 'linear',
            delayBeforeStart: 1000,
            duration: 7000,
            gap: 20,
            pauseOnCycle: false,
            startVisible: false,
        });
        // ========================== Text Slide Js End =====================

        // ========================== Image Uploader Js Start =====================
        $(function() {
            $('.input-images').imageUploader();
        });
        // ========================== Image Uploader Js End =====================

        // ========================== Grid & List View Js Start =====================
        $('.list-button').on('click', function() {
            $('body').addClass('list-view');
            $(this).addClass('active');
            $('.grid-button').removeClass('active');
        });
        $('.grid-button').on('click', function() {
            $('body').removeClass('list-view');
            $('.list-button').removeClass('active');
            $(this).addClass('active');
        });
        // ========================== Grid & List View Js End =====================

        // ========================== Range Slider Js Start =====================
        $(function() {
            $("#slider-range").slider({
                range: true,
                min: 0,
                max: 500,
                values: [75, 300],
                slide: function(event, ui) {
                    $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
                }
            });
            $("#amount").val("$" + $("#slider-range").slider("values", 0) +
                " - $" + $("#slider-range").slider("values", 1));
        });
        // ========================== Range Slider Js End =====================

        // ========================== Increment & Decrement Js Start =====================
        $(function() {
            $('[data-decrease]').click(decrease);
            $('[data-increase]').click(increase);
            $('[data-value]').change(valueChange);
        });

        function decrease() {
            var value = $(this).parent().find('[data-value]').val();
            if (value > 1) {
                value--;
                $(this).parent().find('[data-value]').val(value);
            }
        }

        function increase() {
            var value = $(this).parent().find('[data-value]').val();
            if (value < 100) {
                value++;
                $(this).parent().find('[data-value]').val(value);
            }
        }

        function valueChange() {
            var value = $(this).val();
            if (value == undefined || isNaN(value) == true || value <= 0) {
                $(this).val(1);
            } else if (value >= 101) {
                $(this).val(100);
            }
        }
        // ========================== Increment & Decrement Js End =====================

        // ========================== Cart Item Delete Js Start =====================
        $('.delete-btn').on('click', function() {
            $(this).closest('tr').addClass('d-none')
        });
        // ========================== Cart Item Delete Js End =====================

        // ========================== Password Show Hide Js Start =====================
        $(".toggle-password").on('click', function() {
            $(this).toggleClass(" la-eye-slash");
            var input = $($(this).attr("id"));
            if (input.attr("type") == "password") {
                input.attr("type", "text");
            } else {
                input.attr("type", "password");
            }
        });
        // ========================== Password Show Hide Js End =====================

        // ========================== Floating Chat Js Start ===================== 
        $('.floating-chat__icon').on('click', function() {
            $('.floating-chat').toggleClass('active');
        })

        $('.floating-chat__close').on('click', function() {
            $('.floating-chat').removeClass('active');
        })


        // ========================== Floating Chat Js End ===================== 

        // ========================== Apex Chart Js Start ===================== 
        var options = {
            series: [{
                name: 'Net Profit',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
            }, {
                name: 'Revenue',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
            }, {
                name: 'Free Cash Flow',
                data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
            }],
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            yaxis: {
                title: {
                    text: '$ (thousands)'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function(val) {
                        return "$ " + val + " thousands"
                    }
                }
            }
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();

        // ========================== Apex Chart Js End ===================== 


    });
    // ==========================================
    //      End Document Ready function
    // ==========================================

    // ========================= Preloader Js Start =====================
    $(window).on("load", function() {
        $('.preloader').fadeOut();
    })
    // ========================= Preloader Js End=====================

    // ========================= Header Sticky Js Start ==============
    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= 260) {
            $('.header').addClass('fixed-header');
        } else {
            $('.header').removeClass('fixed-header');
        }
    });
    // ========================= Header Sticky Js End===================

})(jQuery);