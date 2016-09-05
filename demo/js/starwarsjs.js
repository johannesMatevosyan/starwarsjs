$( document ).ready(function() {

    (function($){
        $.fn.starwarsjs = function(options){
            var settings = $.extend({
                target : this.selector,
                range : options.range,
                star : "rate_star"
            }, options );

            var starwarsjs = {
                target: settings.target,
                range: settings.range,
                star: settings.star
            };

            append_stars(starwarsjs);
            traverse(starwarsjs);
            presentation(starwarsjs);
            return this;
        };
    }(jQuery));

});

function append_stars(starwarsjs){
    $(starwarsjs.target).each(function(){
        if(starwarsjs.range){
            for(var i = 1; i <= starwarsjs.range; i++){
                $(this).append("<span class='" + starwarsjs.star +"' data-id='" + i + "'></span>");
            }
        }
    });
}

function traverse(starwarsjs){
    if(starwarsjs.range) {

        $(starwarsjs.target + ' .' + starwarsjs.star).each(function () {
            $(this).hover( // change star's color after mouse hover
                function () {
                    $(this).prevAll().andSelf().addClass('over');
                },
                function () {
                    $(this).prevAll().andSelf().removeClass('over');
                }
            );
            $(this).on('click', function () { // get rate after click
                var star_id = $(this).attr('data-id');
                $(this).siblings('input.get_star').val(star_id);
                $(this).addClass('checked');
                $(this).prevAll().addClass('checked');
                $(this).nextAll().removeClass('checked');
            });
        });
    }
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