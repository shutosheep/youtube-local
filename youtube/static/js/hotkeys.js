function onKeyDown(e) {
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return false;

    // console.log(e);
    let v = Q("video");
    let c = e.key.toLowerCase();
    if (c == "k") {
        v.paused ? v.play() : v.pause();
    }
    else if (c == "arrowleft") {
        e.preventDefault();
        v.currentTime = v.currentTime - 5;
    }
    else if (c == "arrowright") {
        e.preventDefault();
        v.currentTime = v.currentTime + 5;
    }
    else if (c == "j") {
        e.preventDefault();
        v.currentTime = v.currentTime - 10;
    }
    else if (c == "l") {
        e.preventDefault();
        v.currentTime = v.currentTime + 10;
    }
    else if (c == "f") {
        e.preventDefault();
        if (document.fullscreen) document.exitFullscreen();
        else v.requestFullscreen();
    }
    else if (c == "c") {
        e.preventDefault();
        let tt = getActiveTranscriptTrack();
        if (tt == null) return;
        if (tt.mode == "showing") tt.mode = "disabled";
        else tt.mode = "showing";
    }
}

window.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown', onKeyDown);
});
