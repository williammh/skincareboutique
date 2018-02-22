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
    });
    $("#navservices").click(function(){
        var content = $("#services-content").html()
        $("#main-container").html(content)
        $("#main-container").css("height", "auto")
    });
    $("#navlocation").click(function(){
        var content = $("#location-content").html()
        $("#main-container").html(content)
    });
    $("#navcontact").click(function(){
        var content = $("#contact-content").html()
        $("#main-container").html(content)
    });
    $("#navphotos").click(function(){
        var content = $("#photos-content").html()
        $("#main-container").html(content)
    });
    if(window.innerWidth < window.innerHeight){
        $("#main-container").css("height", window.innerHeight);
        $("#photos-content").html(`<p>window.innerHeight = ${window.innerHeight}</p><p>window.innerWidth = ${window.innerWidth}</p>`);
    }
})
// google maps api key AIzaSyAnjD9kV9KM-ft9pPPchNKQBW427-TlUUw