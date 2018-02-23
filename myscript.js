$(document).ready(function(){
    $(window).scroll(function(){
        $("#splash").css({
            "opacity" : 0,
        });
        $("#main-container").css({
            "opacity" : 1,
        });
        $("#topbar").animate({
            "top" : "0px",
        });
    });
    $("#main-container").html($("#about-content").html())

    $("#navabout").click(function(){
        var content = $("#about-content").html()
        $("#main-container").html(content)
        $("#main-container").css("height", window.innerHeight);
    });
    $("#navservices").click(function(){
        var content = $("#services-content").html()
        setFontSize();
        $("#main-container").html(content);
        $("#main-container").css("height", "auto");
    });
    $("#navlocation").click(function(){
        var content = $("#location-content").html()
        $("#main-container").html(content)
        $("#main-container").css("height", window.innerHeight);
    });
    $("#navcontact").click(function(){
        var content = $("#contact-content").html()
        $("#main-container").html(content)
        $("#main-container").css("height", window.innerHeight);
    });
    $("#navphotos").click(function(){
        var content = $("#photos-content").html()
        $("#main-container").html(content)
        $("#main-container").css("height", window.innerHeight);
    });
    // to force css rules if a mobile device is in portrait mode AND still has a window innerWidth > 672px
    function setFontSize(){
        if(window.innerWidth < window.innerHeight){
            $("#main-container").css("height", window.innerHeight);
            $("h4").css({
                "font-size" : "1.75rem"
            });
            $("li, p").css({
                "font-size" : "1.5rem",
            });
            $("#services1, #services2").css({
                "width" : "550px"
            });
            $("#dev").html(`<p>window.innerHeight = ${window.innerHeight}</p><p>window.innerWidth = ${window.innerWidth}</p>`);
        }
    }
    setFontSize();
})
// google maps api key AIzaSyAnjD9kV9KM-ft9pPPchNKQBW427-TlUUw