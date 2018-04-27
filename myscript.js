$(document).ready(function(){
    var photos = [
        "Screenshot_20180205-221407.png",
        "Screenshot_20180205-221435.png",
        "unnamed.jpg",
        "unnamed (1).jpg",
        "unnamed (2).jpg",
        "unnamed (3).jpg",
        "unnamed (4).jpg",
        "unnamed (5).jpg",
        "unnamed (6).jpg",
        "unnamed (7).jpg",
        "unnamed (8).jpg",
    ];
    var photoindex = 0;
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
    setInterval(playSlideshow, 4000);
    function breakout_of_frame()
    {
        // see https://www.thesitewizard.com/archive/framebreak.shtml
        // for an explanation of this script and how to use it on your
        // own website

        if (top.location != location) {
            top.location.href = document.location.href ;
        }
    }
    function playSlideshow(){
        if(photoindex === photos.length - 1){
            photoindex = 0;
        }
        else{
            photoindex++;
        }
        $("#slides").css("background-image", `url('${photos[photoindex]}')`);
    }
    // breakout_of_frame()
    function displayHome(){
        $("#main-container").html($("#about-content").html())
        //change to promise doesn't change before content is added from line above
        setTimeout(function(){
            $("#main-container").css({
                "height" : "auto",
            });
        }, 0)
    }
    displayHome();
    


    // $("#main-container").css({
    //     "height" : "auto",
    // });


    $("#main-container").css("height", window.innerHeight);
    $("#arrow-container > .material-icons").animate({
        bottom : "0px",
    })
    $("#navabout").click(function(){
        var content = $("#about-content").html()
        $("#main-container").html(content)
        $("#main-container").css("height", "auto");
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
        clearInterval(startSlideshow);
    });
    $("#navphotos").click(function(){
        var content = $("#photos-content").html()
        $("#main-container").html(content)
        $("#main-container").css("height", window.innerHeight);
        $("#slides").css("background-image", `url('${photos[photoindex]}')`);
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
        $("#schedulebutton, #specialsbutton").mouseover(function(){
            $(this).find("p").css({
                backgroundColor : "#ffffff",
                color: "goldenrod",
                top : "25%",
                padding : "10% 0 10% 0"
            })
        })
        $("#schedulebutton, #specialsbutton").mouseleave(function(){
            $(this).find("p").css({
                backgroundColor : "#00000055",
                color: "white",
                top : "35%",
                padding : "5% 0 5% 0"
            })
        })
    }
    // to force css rules if a mobile device is in portrait mode AND still has a window innerWidth > 672px
    function setFontSize(){
        if(window.innerWidth < window.innerHeight){
            $("h4").css({
                "font-size" : "1.75rem"
            });
            $("#bottombar > .left, #bottombar > .right").css({
                "display" : "block"
            })
            $("li, p, td").css({
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
    
})
// google maps api key AIzaSyAnjD9kV9KM-ft9pPPchNKQBW427-TlUUw

// slidesjs
