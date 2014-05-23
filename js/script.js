$(document).ready(function() {

    var scrollingDuration = 1000;

    // Animating all visible elements
    animateAll();

    // Scrolling
    $(window).scroll(function() {
        var scrolledTop = $(window).scrollTop();
        animateAll();
        if (scrolledTop > 60) {
            $('#top-container').addClass('tiny');
            $('#page').addClass('tiny-top-container');
            $('#goto-top').show();
        } else {
            $('#top-container').removeClass('tiny');
            $('#page').removeClass('tiny-top-container');
            $('#goto-top').hide();
        }
    });

    // Toggle links in navigation
    $('nav > a').on('click', function() {
        $('nav li').toggle();
    });

    // Scrolling to top
    $('#goto-top a').on('click', function(event) {
        event.preventDefault();
        scrollTo('html');
    });

    // Scrolling to a selected section
    $('nav a').on('click', function(event) {
        event.preventDefault();
        var target = $(this).attr('href');
        scrollTo(target);
    });

    /**
     * Scrolling to a given element.
     * 
     * @param {type} element
     * @returns {undefined}
     */
    function scrollTo(element) {
        if ($(element).length > 0) {
            $('html, body').animate({
                scrollTop: $(element).offset().top
            }, scrollingDuration);
        }
    }

    /**
     * Animating element.
     * 
     * @param {type} element
     * @returns {undefined}
     */
    function animateElement(element) {
        element.removeClass('hidden');
        element.addClass('animate');
    }

    /**
     * Animating blocks.
     * 
     * @returns {undefined}
     */
    function animateBlocks() {
        $('.block').each(function(index, element) {
            if ($(element).visible(true)) {
                if (index !== 0) {
                    animateElement($(element));
                }
            }
        });
    }

    /**
     * Animating contact form.
     * 
     * @returns {undefined}
     */
    function animateContactForm() {
        var contactForm = $('.contact-form');
        if (contactForm.visible(true)) {
            animateElement(contactForm);
        }
    }

    /**
     * Animating contact methods.
     * 
     * @returns {undefined}
     */
    function animateContactMethods() {
        var contactMethods = $('.other-contact-methods');
        if (contactMethods.visible(true)) {
            animateElement(contactMethods);
        }
    }
    /**
     * Animating infobox.
     * 
     * @returns {undefined}
     */
    function animateInfobox() {
        var infobox = $('#infobox');
        if (infobox.visible(true)) {
            animateElement(infobox);
        }
    }

    /**
     * Animating consultants.
     * 
     * @returns {undefined}
     */
    function animateConsultants() {
        var consultants = $('.consultants > div > article');
        consultants.each(function(index, element) {
            if ($(element).visible(true)) {
                animateElement($(element));
            }
        });
    }

    /**
     * Animating clients.
     * 
     * @returns {undefined}
     */
    function animateClients() {
        $('.client').each(function(index, element) {
            if ($(element).visible(true)) {
                animateElement($(element));
            }
        });
    }

    /**
     * Animating all elements.
     * 
     * @returns {undefined}
     */
    function animateAll() {
        animateBlocks();
        animateClients();
        animateContactForm();
        animateContactMethods();
        animateConsultants();
        animateInfobox();
    }

});