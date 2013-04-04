$(function() {

    $('#header').affix({
        offset: $('.ad-space-top').outerHeight()
    });

    $('.main-nav').mainNav();

    $('div.player').player();

    $('form.compact-search').compactSearch();

    $('a.tip').tooltip();

    $('.nav-tabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

});