$( document ).ready(function() {

    (function($){
        var count = 1;

        $.fn.starwarsjs = function(options){
            var settings = $.extend({
                target : this.selector,
                star_number : 1,
                star : "rate_star",
                range : '',
                count : 1
            }, options );

            var starwarsjs = {
                target: settings.target,
                star_number: settings.star_number,
                star: settings.star,
                range: settings.range,
                count: settings.count
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

        if(starwarsjs.star_number > 1 && starwarsjs.range == '' && starwarsjs.count == 1){

            for(var i = 1; i <= starwarsjs.star_number; i++){
                $(this).append("<span class='" + starwarsjs.star +"' data-value='" + i + "'></span>");
            }
        }else if(starwarsjs.star_number > 1 && starwarsjs.range == '' && starwarsjs.count > 1){

            var i = 1, step  = i;
            for(i; i <= starwarsjs.star_number; i++){
                $(this).append("<span class='" + starwarsjs.star +"' data-value='" + step + "'></span>");
                step += starwarsjs.count;
            }
        }

        if(starwarsjs.range && starwarsjs.range.length == 2 && starwarsjs.count == 1){

            for(var j = starwarsjs.range[0]; j <= starwarsjs.range[1]; j++){
                $(this).append("<span class='" + starwarsjs.star +"' data-value='" + j + "'></span>");
            }
        }else if(starwarsjs.range && starwarsjs.range.length == 2 && starwarsjs.count > 1){
console.log(starwarsjs.range[0]);
            var j = starwarsjs.range[0], step  = j;
            for(j; j <= starwarsjs.range[1]; j++){
                $(this).append("<span class='" + starwarsjs.star +"' data-value='" + step + "'></span>");
                step += starwarsjs.count;
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
                var star_id = $(this).attr('data-value');
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