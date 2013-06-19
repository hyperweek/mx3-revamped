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

    /* ===== Below is code just for prototype purpose ===== */

    // Single upload

    $('.account-track-upload').on('click', function () {
        $('.account-track-upload-form').show();
        $(this).hide();
    });

    $('.account-track-upload-form').on('click', '.form-cancel', function () {
        $('.account-track-upload').show();
        $(this).parent().hide();
    });

});
