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

        compactSearch: function(options) {
            options = $.extend({speed: 'fast'}, options);

            return this.each(function() {
                var $form = $(this),
                    $toggle = $form.find('a.search-toggle'),
                    $input = $form.find('input.search-input');

                $toggle.on('click', function() {
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

                    expandPlayer = function() {
                        $toggle.removeClass('icon-resize-full').addClass('icon-resize-small');
                        $player.removeClass('is-compact').addClass('is-large');
                        $drawer.slideDown(options.speed);
                    },

                    contractPlayer = function() {
                        $toggle.addClass('icon-resize-full').removeClass('icon-resize-small');
                        $drawer.hide();
                        $player.removeClass('is-large').addClass('is-compact');
                    };

                $toggle.on('click', function() {
                    if ($player.hasClass('is-compact')) {
                        expandPlayer();
                    } else {
                        contractPlayer();
                    }
                });

                $('html').click('click', function() {
                    // Make player compact
                    contractPlayer();
                });

                $player.on('click', function(event) {
                    event.stopPropagation();
                });

            });
        }

    });

})(jQuery);
