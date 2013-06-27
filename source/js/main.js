$(function() {

    $('#header').affix({
        offset: $('.ad-space-top').outerHeight()
    });

    $('.main-nav').mainNav();

    $('div.player').player();

    $('form.compact-search').compactSearch();

    $('.tip').tooltip();

    $('.toggle-block').toggleBlock();

    $('.nav-tabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    /* ===== Below is ugly code just for the interactions to work ===== */

    // File upload

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

    // Central player playlist

    var $centralPlayerPlaylist = $('.central-player-playlist').on('click', '.btn-expand-playlist', function (event) {
        event.preventDefault();
        var $list = $centralPlayerPlaylist.find('.playlist-track-list')
            $this = $(this),
            $icon = $this.find('i');

        if ($list.hasClass('is-expanded')) {
            $icon.addClass('icon-down-open').removeClass('icon-up-open');
        }
        else {
            $icon.removeClass('icon-down-open').addClass('icon-up-open');
        }
        $list.toggleClass('is-expanded');
    });

    /*var setPlaylistWidth = function () {
        var windowWidth = $(window).width(),
            centralPlayerWidth = 800,
            centralPlayerWrapperWidth = $('.central-player-wrapper').width(),
            playlistWidth = centralPlayerWrapperWidth - centralPlayerWidth - windowWidth*0.05;

        $('.central-player-wrapper .central-player-playlist').width(playlistWidth);
    };

    setPlaylistWidth();

    $(window).on('resize', setPlaylistWidth);*/


});
