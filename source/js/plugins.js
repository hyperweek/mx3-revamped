// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

// Place any jQuery/helper plugins in here.

;(function($){

    $.fn.extend({

        mainNav: function(options) {
            options = $.extend({speed: 'fast'}, options);

            return this.each(function() {
                var $menuItem = $(this).find('a[rel]');

                $menuItem.on('click', function(event) {
                    var $subMenu = $('#' + $menuItem.attr('rel'));

                    event.preventDefault();
                    if (!$menuItem.hasClass('is-open')) {
                        // Open the menu
                        var $closeBtn = $subMenu.find('a.close');

                        $subMenu.fadeIn(options.speed);
                        $menuItem.addClass('active is-open');

                        $closeBtn.on('click', function() {
                            $subMenu.fadeOut(options.speed);
                            $menuItem.removeClass('active is-open');
                        });
                    } else {
                        // Close the menu
                        $subMenu.fadeOut(options.speed);
                        $menuItem.removeClass('active is-open');
                    }
                });
            });
        },

        compactSearch: function(options) {
            options = $.extend({speed: 'fast'}, options);

            return this.each(function() {
                var $form = $(this),
                    $toggle = $form.find('a.search-toggle'),
                    $input = $form.find('input.search-input');

                $toggle.on('click', function(event) {
                    event.preventDefault();
                    $toggle.fadeOut(options.speed, function() {
                        $input.fadeIn(options.speed).addClass('is-visible').focus();
                    });
                });

                $input.on('blur', function() {
                    $input.removeClass('is-visible').fadeOut(options.speed, function() {
                        $input.val('');
                        $toggle.fadeIn(options.speed);
                    });
                });
            });
        },

        player: function(options) {
            options = $.extend({speed: 'fast'}, options);

            return this.each(function() {
                var $player = $(this),
                    $toggle = $player.find('a.player-toggle'),
                    $drawer = $player.find('.player-drawer'),
                    $volumeToggle = $player.find('a.volume-toggle'),
                    $volumeBar = $player.find('.player-volume'),
                    $trackList = $player.find('.player-track-list > ul'),
                    $trackListMaxHeight = $(window).height() - 250;

                    expandPlayer = function() {
                        $toggle.removeClass('icon-resize-full').addClass('icon-resize-small');
                        $player.removeClass('is-compact').addClass('is-large');
                        $drawer.slideDown(options.speed);
                    },

                    contractPlayer = function() {
                        $toggle.addClass('icon-resize-full').removeClass('icon-resize-small');
                        $drawer.slideUp(options.speed, function() {
                            $player.removeClass('is-large').addClass('is-compact');
                        });
                    };

                $trackList.css({ 'max-height': $trackListMaxHeight + 'px' });

                $toggle.on('click', function(event) {
                    event.preventDefault();
                    if ($player.hasClass('is-compact')) {
                        expandPlayer();
                    } else {
                        contractPlayer();
                    }
                });

                $volumeToggle.on('click', function(event) {
                    event.preventDefault();
                    $volumeBar.toggle();
                });

                $('html').click('click', function() {
                    // Make player compact
                    contractPlayer();
                    $volumeBar.hide();
                });

                $player.on('click', function(event) {
                    event.stopPropagation();
                });

            });
        }

    });

})(jQuery);
