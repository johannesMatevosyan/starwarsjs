$( document ).ready(function() {

    (function($){
        $.fn.starwarsjs = function(options){
            var settings = $.extend({
                target : this.selector
            }, options );
            var starwarsjs = {
                target: settings.target
            };
            traverse(starwarsjs);

            return this;
        };
    }(jQuery));

});

function traverse(starwarsjs){

    $(starwarsjs.target).each(function(){

        $(this).hover( // change star's color after mouse hover
            function() {
                $(this).prevAll().andSelf().addClass('over');
            },
            function() {
                $(this).prevAll().andSelf().removeClass('over');
            }
        );

        $(this).on('click', function(){ // get rate after click

            var star_id = $(this).attr('data-id');
            $(this).siblings('input.get_star').val(star_id);
            $(this).addClass('checked');
            $(this).prevAll().addClass('checked');
            $(this).nextAll().removeClass('checked');

            // check if numbers are set true

        });
    });

}