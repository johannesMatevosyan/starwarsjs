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
            presentation(starwarsjs);
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


function presentation(){

    $("#change_fonts").bind('keyup mouseup', function () {
        console.log($(this).val());
        $('.rate_star').css({ "fontSize": $(this).val() + "px"})
    });

    $("#change_color").on('change', function () {
        var color = $(this).val();
        $("<style type='text/css'> .rate_star{ color:" + color + ";} </style>").appendTo("head");
    });

    $("#change_hover_color").on('change', function () {
        var hover_color = $(this).val();
        $("<style type='text/css'> .rate_star.over{ color:" + hover_color + ";} </style>").appendTo("head");
    });

}