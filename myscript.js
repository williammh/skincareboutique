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
        var activephotoindex = 0;
        var content = $("#photos-content").html()
        $("#main-container").html(content)
        $("#main-container").css("height", window.innerHeight);
        // $("#slides").html(`<img src="${photos[activephotoindex]}" class="photo">`);
        $("#slides").css("background-image", `url('${photos[activephotoindex]}')`);
        // needs clear interval when any other button is clicked
        setInterval(function(){
            if(activephotoindex === photos.length - 1){
                activephotoindex = 0;
            }
            else{
                activephotoindex++;
            }
            console.log(activephotoindex)
            // $("#slides").html(`<img src="${photos[activephotoindex]}" class="photo">`);
            $("#slides").css("background-image", `url('${photos[activephotoindex]}')`);
        }, 4000)
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
    
})
// google maps api key AIzaSyAnjD9kV9KM-ft9pPPchNKQBW427-TlUUw

// slidesjs
