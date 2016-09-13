(function($){

    $.fn.starwarsjs = function(options){
        var settings = $.extend({
            target : this.selector,
            stars : 1,
            range : [],
            count : 1,
            disable : -1,
            default_stars : 0,
            on_select : null
        }, options );

        var starwarsjs = {
            target: settings.target,
            star : "rate_star",
            stars: settings.stars,
            range: settings.range,
            count: settings.count,
            disable: settings.disable,
            checked_class : "checked",
            disable_class : "disable",
            input_class : "get_rate",
            default_stars : settings.default_stars,
            on_select : settings.on_select
        };

        append_stars(starwarsjs);
        traverse(starwarsjs);
        presentation(starwarsjs);

        return this;
    };

    // append stars to the selector element
    function append_stars(starwarsjs){
        $(starwarsjs.target).each(function(){

            if (starwarsjs.stars > 1 && starwarsjs.range == '' && starwarsjs.count == 1){
                for (var i = 1; i <= starwarsjs.stars; i++){

                    if (i > starwarsjs.disable && starwarsjs.stars > starwarsjs.disable && starwarsjs.disable > 0){
                        $(this).append("<span class='" + starwarsjs.star + ' '  + starwarsjs.disable_class + "' data-value='" + i + "'></span>"); // set data-value attributes
                    } else if (starwarsjs.stars > starwarsjs.disable && starwarsjs.disable == 0){
                        $(this).append("<span class='" + starwarsjs.star + ' '  + starwarsjs.disable_class + "' data-value='" + i + "'></span>"); // if all stars are disabled
                    } else {
                        $(this).append("<span class='" + starwarsjs.star +"' data-value='" + i + "'></span>");
                    }
                }
                $(this).append("<input type='hidden' class='" + starwarsjs.input_class + "' value=''>");
            } else if (starwarsjs.stars > 1 && starwarsjs.range == '' && starwarsjs.count > 1){

                var i = 1, step = i;
                for (i; i <= starwarsjs.stars; i++){

                    if (i > starwarsjs.disable && starwarsjs.stars > starwarsjs.disable && starwarsjs.disable > 0){
                        $(this).append("<span class='" + starwarsjs.star + ' '  + starwarsjs.disable_class + "' data-value='" + step + "'></span>");  // set data-value attributes with incremented steps
                        step += starwarsjs.count;
                    } else if (starwarsjs.stars > starwarsjs.disable && starwarsjs.disable == 0){
                        $(this).append("<span class='" + starwarsjs.star + ' '  + starwarsjs.disable_class + "' data-value='" + step + "'></span>"); // if all stars are disabled
                        step += starwarsjs.count;
                    } else {
                        $(this).append("<span class='" + starwarsjs.star +"' data-value='" + step + "'></span>");  // set data-value attributes with incremented steps
                        step += starwarsjs.count;
                    }
                }
                $(this).append("<input type='hidden' class='" + starwarsjs.input_class + "' value=''>");
            }

            if (starwarsjs.range && starwarsjs.range.length == 2 && starwarsjs.count == 1){

                var iteration = 0;
                for (var j = starwarsjs.range[0]; j < starwarsjs.range[1]; j++){

                    if (j > starwarsjs.disable && starwarsjs.range[1] > starwarsjs.disable && starwarsjs.disable > 0 && starwarsjs.disable <= iteration){
                        $(this).append("<span class='" + starwarsjs.star + ' '  + starwarsjs.disable_class + "' data-value='" + j + "'></span>"); // set data-value attributes
                    } else if(starwarsjs.disable == 0) {
                        $(this).append("<span class='" + starwarsjs.star + ' '  + starwarsjs.disable_class + "' data-value='" + j + "'></span>");
                    } else {
                        $(this).append("<span class='" + starwarsjs.star +"' data-value='" + j + "'></span>"); // set data-value attributes
                    }
                    iteration++;
                }
                $(this).append("<input type='hidden' class='" + starwarsjs.input_class + "' value=''>");

            } else if (starwarsjs.range && starwarsjs.range.length == 2 && starwarsjs.count > 1){

                var j = starwarsjs.range[0], step  = j, iteration = 0;
                for (j; j < starwarsjs.range[1]; j++){

                    if (j >= starwarsjs.disable && starwarsjs.range[1] > starwarsjs.disable && starwarsjs.disable > 0 && starwarsjs.disable <= iteration){
                        $(this).append("<span class='" + starwarsjs.star + ' '  + starwarsjs.disable_class + "' data-value='" + step + "'></span>");  // set data-value attributes with incremented steps
                        step += starwarsjs.count;
                    } else if(starwarsjs.disable == 0) {
                        $(this).append("<span class='" + starwarsjs.star + ' '  + starwarsjs.disable_class + "' data-value='" + step + "'></span>");
                        step += starwarsjs.count;
                    } else {
                        $(this).append("<span class='" + starwarsjs.star +"' data-value='" + step + "'></span>");  // set data-value attributes with incremented steps
                        step += starwarsjs.count;
                    }
                    iteration++;
                }
                $(this).append("<input type='hidden' class='" + starwarsjs.input_class + "' value=''>");
            }

        });
    }

    // iterate over appended elements
    function traverse(starwarsjs){

        if (starwarsjs.stars) {

            var star_id;

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
                    star_id = $(this).attr('data-value');
                    $(this).siblings("input." + starwarsjs.input_class).val(star_id);
                    $(this).prevAll().andSelf().addClass(starwarsjs.checked_class);
                    $(this).nextAll().removeClass(starwarsjs.checked_class);

                    if (starwarsjs.on_select && typeof starwarsjs.on_select === "function"){

                        starwarsjs.on_select(star_id);
                    }
                });

            });

            $(starwarsjs.target).each(function (key, value) {

                if (starwarsjs.default_stars > 0 && key <= starwarsjs.default_stars &&
                    starwarsjs.stars >= starwarsjs.default_stars){

                    $(starwarsjs.target).find("input." + starwarsjs.input_class).attr('default-stars', starwarsjs.default_stars);
                    var default_selected = $(starwarsjs.target).find("input." + starwarsjs.input_class).attr('default-stars');
                    var set_last_default;

                    if (starwarsjs.disable > 0 && starwarsjs.default_stars < starwarsjs.disable){

                        for (var k = 0; k < default_selected; k++){

                            $(this).find('.rate_star').eq(k).addClass(starwarsjs.checked_class);
                        }
                        set_last_default = $(starwarsjs.target).find('span.checked:last').attr('data-value');
                        $(this).find("input." + starwarsjs.input_class).val(set_last_default);

                    } else if (starwarsjs.disable <= 0){

                        for (var k = 0; k < default_selected; k++){

                            $(this).find('.rate_star').eq(k).addClass(starwarsjs.checked_class);
                        }
                        set_last_default = $(starwarsjs.target).find('span.checked:last').attr('data-value');
                        $(this).find("input." + starwarsjs.input_class).val(set_last_default);
                    }

                }

                if (starwarsjs.stars <= starwarsjs.default_stars){
                    console.warn('The number of stars in a row should be bigger than the number of default stars.');
                }
                if (starwarsjs.default_stars < 0){
                    console.warn('The number of default stars should be bigger than 0.');
                }
                if (starwarsjs.key >= starwarsjs.default_stars){
                    console.warn('The number of Rows should be less than the number of default stars.');
                }
                if (starwarsjs.disable > 0 && starwarsjs.default_stars > 0 && starwarsjs.default_stars >= starwarsjs.disable){
                    console.warn('The number of disabled stars should not overlap with the number of default stars.');
                }
                if (starwarsjs.disable > 0 && starwarsjs.disable >= starwarsjs.range[1]-starwarsjs.range[0]){
                    console.warn('The number of disabled stars should be less than the last number defined in range.');
                }

            });

            return star_id;
        }

    }


}(jQuery));

// display options in demo
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


