$(function() {

    $('#header').affix({
        offset: $('.ad-space-top').outerHeight()
    });

    $('.main-nav').mainNav();

    $('div.player').player();

    $('form.compact-search').compactSearch();

    $('a.tip').tooltip();

    $('.toggle-block').toggleBlock();

    $('.nav-tabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    /* ===== Below is code just for the prototype ===== */

    // Single upload

    $('.account-track-upload').on('click', function (event) {
        event.preventDefault();
        $('.account-track-upload-form').show();
        $(this).hide();
    });

    $('.account-track-upload-form').on('click', '.form-cancel', function (event) {
        event.preventDefault();
        $('.account-track-upload').show();
        $(this).parent().hide();
    });

    $('.toggle-past-concerts').on('click', function (event) {
        event.preventDefault();
        $('.account-past-concerts').slideToggle('fast');
    });

    $('.toggle-add-concert-form').on('click', function (event) {
        $('.add-concert-form').toggle();
    });

    $('.add-concert-form').on('click', '.form-cancel', function (event) {
        event.preventDefault();
        $(this).parent().hide();
    });

});
