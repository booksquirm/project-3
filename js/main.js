
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
var myTimer = false;

function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        height: "auto",
        width: "auto",
        videoId: "BJFlbaSBniI",
        playerVars: {
            playsinline: 1,
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
        },
    });
}

const myplay = document.getElementById("myplay");
const mypause = document.getElementById("mypause");
const slo = document.getElementById("slow");
const normal = document.getElementById("normal");
const fast = document.getElementById("fast");

myplay.addEventListener("click", (e) => {
    player.playVideo();
});

mypause.addEventListener("click", (e) => {
    player.pauseVideo();
});

slo.addEventListener("click", (e) => {
    player.setPlaybackRate(0.25);
});

normal.addEventListener("click", (e) => {
    player.setPlaybackRate(1);
});

fast.addEventListener("click", (e) => {
    player.setPlaybackRate(2);
});

function onPlayerReady(event) {
    console.log("playerReady");
}

function onPlayerStateChange(event) {
    switch (event.data) {
        case YT.PlayerState.PLAYING:
            console.log("starting timer");
            myTimer = setInterval(getTime, 1000, event);
            break;
        case !YT.PlayerState.PLAYING:
            if (!myTimer) {
                console.log("no timer");
            }
            break;
        default:
            clearInterval(myTimer);
            console.log("stopping timer");
    }
}


function getTime(event) {
    let vidInfo = event.target.getVideoData();
    time = Math.floor(event.target.getCurrentTime());

    if (vidInfo.video_id == "BJFlbaSBniI") {
        manageCues(time);
    } else {
        console.log("cue NOT managed");
    }
}

function manageCues(time) {
    console.log(time);

    switch (time) {
        case 5:
            doStuff();
            break;
        case 10:
            doMoreStuff();
            break;
    }
}

function doStuff() {
    console.log("doStuff");
    document.body.style.backgroundImage = 
"url('https://images.unsplash.com/photo-1530053969600-caed2596d242?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
}

function doMoreStuff() {
    document.body.style.backgroundColor = "#283618";
    console.log("moreStuffDone");
}