$(function () {
    $("#landing-container").css({ "backgroundImage": "url('img/borito3_small.jpg')", "background-repeat": "no-repeat", "background-position": "10%", "backgroundSize": "cover" });

    //Kezdőkép animáció

    var images = Array(
        'img/borito3_small.jpg',
        'img/borito4_small.jpg',
        'img/borito.jpg',
        'img/_ZAM9633-min.jpg');
    //counter
    var currimg = 0;


    function loadimg() {

        $('#landing-container').animate({ opacity: 1 }, 500, function () {

            $('#landing-container').animate({ "background-position": "90%" }, 7500);


            //finished animating, minifade out and fade new back in
            $('#landing-container').animate({ opacity: 0.5 }, 500, function () {

                currimg++;

                if (currimg > images.length - 1) {

                    currimg = 0;

                }

                var newimage = images[currimg];

                //swap out bg src
                $('#landing-container').css({ "background-position": "10%" });
                $('#landing-container').css("background-image", "url(" + newimage + ")");

                //animate fully back in
                $('#landing-container').animate({ opacity: 1 }, 500, function () {



                    //set timer for next
                    setTimeout(loadimg, 100);

                });

            });

        });

    }
    setTimeout(loadimg, 100);


    /*
        $("#landing-container").css({"backgroundImage" : "url('img/borito.jpg')", "background-repeat" : "no-repeat", "background-position" : "center", "backgroundSize" : "cover"});
        $("#landing-container").css({"backgroundImage" : "url('img/borito2.jpg')"});*/

    //Eredeti
    menu = $("nav ul");

    $("#openup").on("click", function (e) {
        e.preventDefault();
        menu.slideToggle();
        $("#groups").hide();
    });

    $(window).resize(function () {
        var w = $(this).width();
        if (w > 480 && menu.is(":hidden")) {
            menu.removeAttr("style");
        }
    });

    /*$("nav li").on("click", function(e) {
        var w = $(window).width();
        if (w < 480) {
            menu.slideToggle();
        }
    });*/
    //Expandable menu items
    $("#us").on("click", function (e) {
        $("#groups").toggle(500);

    });
    $("#tenders-menu").on("click", function (e) {
        $("#tenders").toggle(500);

    });


    $(".open-menu").height($(window).height());

    var w = $(window).width();

    $("main").mousedown(function (e) {
        if (w < 480) {
            menu.slideUp();
        }
    })
    $(window).scroll(function () {
        if (w < 480) {
            menu.slideUp();
        }
    })

    $("*").scroll(function () {
        if (w < 480) {
            menu.slideUp();
        }
    })
});
