$( document ).ready(function() {

    (function($){
        var count = 1;

        $.fn.starwarsjs = function(options){
            var settings = $.extend({
                target : this.selector,
                stars : 1,
                range : [],
                count : 1,
                disable : 0,
                default_stars : 0
            }, options );

            var starwarsjs = {
                target: settings.target,
                star : "rate_star",
                stars: settings.stars,
                range: settings.range,
                count: settings.count,
                disable: settings.disable,
                disable_class : "disable",
                input_class : "get_rate",
                default_stars : settings.default_stars
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

        if(starwarsjs.stars > 1 && starwarsjs.range == '' && starwarsjs.count == 1){

            for(var i = 1; i <= starwarsjs.stars; i++){

                if(i > starwarsjs.disable && starwarsjs.stars > starwarsjs.disable && starwarsjs.disable > 0){
                    $(this).append("<span class='" + starwarsjs.star + ' '  + starwarsjs.disable_class + "' data-value='" + i + "'></span>"); // set data-value attributes
                }else{
                    $(this).append("<span class='" + starwarsjs.star +"' data-value='" + i + "'></span>");
                }
            }
            $(this).append("<input type='hidden' class='" + starwarsjs.input_class + "' value=''>");
        }else if(starwarsjs.stars > 1 && starwarsjs.range == '' && starwarsjs.count > 1){

            var i = 1, step  = i;
            for(i; i <= starwarsjs.stars; i++){

                if(i > starwarsjs.disable && starwarsjs.stars > starwarsjs.disable && starwarsjs.disable > 0){
                    $(this).append("<span class='" + starwarsjs.star + ' '  + starwarsjs.disable_class + "' data-value='" + step + "'></span>");  // set data-value attributes with incremented steps
                    step += starwarsjs.count;
                }else{
                    $(this).append("<span class='" + starwarsjs.star +"' data-value='" + step + "'></span>");  // set data-value attributes with incremented steps
                    step += starwarsjs.count;
                }
            }
            $(this).append("<input type='hidden' class='" + starwarsjs.input_class + "' value=''>");
        }

        if(starwarsjs.range && starwarsjs.range.length == 2 && starwarsjs.count == 1){

            for(var j = starwarsjs.range[0]; j <= starwarsjs.range[1]; j++){

                if(j > starwarsjs.disable && starwarsjs.range[1] > starwarsjs.disable && starwarsjs.disable > 0){
                    $(this).append("<span class='" + starwarsjs.star + ' '  + starwarsjs.disable_class + "' data-value='" + j + "'></span>"); // set data-value attributes
                }else{
                    $(this).append("<span class='" + starwarsjs.star +"' data-value='" + j + "'></span>"); // set data-value attributes
                }
            }
            $(this).append("<input type='hidden' class='" + starwarsjs.input_class + "' value=''>");

        }else if(starwarsjs.range && starwarsjs.range.length == 2 && starwarsjs.count > 1){
            var j = starwarsjs.range[0], step  = j;
            for(j; j <= starwarsjs.range[1]; j++){

                if(j > starwarsjs.disable && starwarsjs.range[1] > starwarsjs.disable && starwarsjs.disable > 0){
                    $(this).append("<span class='" + starwarsjs.star + ' '  + starwarsjs.disable_class + "' data-value='" + step + "'></span>");  // set data-value attributes with incremented steps
                    step += starwarsjs.count;
                }else{
                    $(this).append("<span class='" + starwarsjs.star +"' data-value='" + step + "'></span>");  // set data-value attributes with incremented steps
                    step += starwarsjs.count;
                }
            }
            $(this).append("<input type='hidden' class='" + starwarsjs.input_class + "' value=''>");
        }



    });
}

function traverse(starwarsjs){
    if(starwarsjs.stars) {

        $(starwarsjs.target + ' .' + starwarsjs.star).each(function (key, value) {

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
                $(this).siblings("input." + starwarsjs.input_class).val(star_id);
                $(this).addClass('checked');
                $(this).prevAll().addClass('checked');
                $(this).nextAll().removeClass('checked');
            });


        });

        $(starwarsjs.target).each(function (key, value) {

            if(starwarsjs.default_stars > 0 && key <= starwarsjs.default_stars && starwarsjs.stars >= starwarsjs.default_stars){

                $(this).find("input." + starwarsjs.input_class).val(starwarsjs.default_stars);
                var default_selected = $(this).find("input." + starwarsjs.input_class).val();

                for(var k = 0; k < default_selected; k++){
                    $(this).find('.rate_star').eq(k).addClass('checked');
                }

            }

        });

    }
}

function presentation(){
    $("#change_fonts").bind('keyup mouseup', function () {
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