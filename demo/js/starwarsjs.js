$( document ).ready(function() {

    (function($){
        $.fn.starwarsjs = function(options){
            var settings = $.extend({
                target : this.selector,
                star_number : options.star_number,
                star : "rate_star",
                range : ''
            }, options );

            var starwarsjs = {
                target: settings.target,
                star_number: settings.star_number,
                star: settings.star,
                range: settings.range
            };

            console.log(starwarsjs);

            append_stars(starwarsjs);
            traverse(starwarsjs);
            presentation(starwarsjs);
            return this;
        };
    }(jQuery));

});

function append_stars(starwarsjs){
    $(starwarsjs.target).each(function(){
        if(starwarsjs.star_number && starwarsjs.range == ''){
            for(var i = 1; i <= starwarsjs.star_number; i++){
                $(this).append("<span class='" + starwarsjs.star +"' data-id='" + i + "'></span>");
            }
        }
        if(starwarsjs.range && starwarsjs.range.length == 2){
            for(var j = starwarsjs.range[0]; j <= starwarsjs.range[1]; j++){
                $(this).append("<span class='" + starwarsjs.star +"' data-id='" + i + "'></span>");
            }
        }
    });
}

function traverse(starwarsjs){
    if(starwarsjs.star_number) {

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