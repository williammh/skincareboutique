$(document).ready(function(){
    function hideSplash(){
        $("#splash").css({
            "opacity" : 0,
            "visibility" : "hidden"
        });
    }
    $(window).scroll(function(){
        hideSplash();
    });
    $(window).click(function(){
        hideSplash();
    });
    setTimeout(hideSplash, 2500);
    function breakout_of_frame()
    {
        // see https://www.thesitewizard.com/archive/framebreak.shtml
        // for an explanation of this script and how to use it on your
        // own website

        if (top.location != location) {
            top.location.href = document.location.href ;
        }
    }
    // breakout_of_frame()
    $("#main-container").html($("#about-content").html())
    $("#main-container").css("height", window.innerHeight);
    $("#arrow-container > .material-icons").animate({
        bottom : "0px",
    })
    $("#navabout").click(function(){
        var content = $("#about-content").html()
        $("#main-container").html(content)
        $("#main-container").css("height", window.innerHeight);
        enableButtons();
    });
    $("#navservices").click(function(){
        var content = $("#services-content").html();
        $("#main-container").html(content);
        setFontSize();
        $("#main-container").css("height", $(document).height());
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
    function showModal(){
        $("#modal").css({
            visibility : "visible",
            top : "20%",
        })
    }
    function hideModal(){
        $("#modal").css({
            visibility : "hidden",
            top : "100%",
        })
    }
    function setModalContent(contentid){
        
        
    }
    function enableButtons(){
        $("#schedulebutton, #specialsbutton").click(function(){
            $("#modal-content").html($("#schedule-content").html());
            showModal();
        })
        $("#specialsbutton").click(function(){
            $("#modal-content").html($("#special-content").html());
            showModal();
        })
        $("#hidemodal").click(function(){
            hideModal();
        })
    }
    // to force css rules if a mobile device is in portrait mode AND still has a window innerWidth > 672px
    function setFontSize(){
        if(window.innerWidth < window.innerHeight){
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
    enableButtons();
    setFontSize();
    $(function(){
        $("#slides").slidesjs({
            width: 940,
            height: 528,
            start: 1,
            pagination: {
                active: true,
                  // [boolean] Create pagination items.
                  // You cannot use your own pagination. Sorry.
                effect: "slide"
                  // [string] Can be either "slide" or "fade".
            }
        });
    });
})
// google maps api key AIzaSyAnjD9kV9KM-ft9pPPchNKQBW427-TlUUw

// slidesjs
