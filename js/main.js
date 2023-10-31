
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
var myTimer = false;

function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        height: "480",
        width: "854",
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
    document.body.style.backgroundColor = "#AED0D8";
}

function doMoreStuff() {
    console.log("moreStuffDone");
    document.body.style.backgroundColor = "#eae6db";
    document.body.style.backgroundImage = 
    "url('https://i.ibb.co/n6FVfrS/whales.png')";
    }