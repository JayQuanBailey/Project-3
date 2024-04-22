var main = function() {
    var state;

    // Play button functionality
    $('#play').click(function(){
        $('#message').text("Playing track");
        $('#player').trigger("play");
    });
    // Pause button functionality
$('#pause').click(function(){
    $('#message').text("Track paused");
    $('#player').trigger("pause");
});
// Initialize a variable for mute state
var muted = false;

// Mute button functionality
$('#mute').click(function(){
    // Mute the player
    $('#player').prop('muted', true);
    // Update message bar
    $('#message').text("Track muted");
    // Update muted variable
    muted = true;
});

// Unmute button functionality
$('#unmute').click(function(){
    // Unmute the player
    $('#player').prop('muted', false);
    // Update message bar
    $('#message').text("Track unmuted");
    // Update muted variable
    muted = false;
});

// Extension task: Toggle mute/unmute functionality
$('#toggleMute').click(function(){
    // Toggle mute state
    muted = !muted;
    // Set muted property based on muted variable
    $('#player').prop('muted', muted);
    // Update message bar
    if (muted) {
        $('#message').text("Track muted");
    } else {
        $('#message').text("Track unmuted");
    }
});
// Stop button functionality
$('#stop').click(function(){
    // Pause the player
    $('#player').trigger("pause");
    // Set the current time of the track to 0
    $('#player').prop('currentTime', 0);
    // Update message bar
    $('#message').text("Track stopped");
});
// Volume Up button functionality
$('#volUp').click(function(){
    var currentVolume = $('#player').prop('volume');
    if (currentVolume < 1) {
        var newVolume = Math.min(currentVolume + 0.1, 1);
        $('#player').prop('volume', newVolume);
        console.log("Volume increased to " + newVolume);
    } else {
        console.log("Volume is already at maximum");
    }
});

// Volume Down button functionality
$('#volDown').click(function(){
    var currentVolume = $('#player').prop('volume');
    if (currentVolume > 0) {
        var newVolume = Math.max(currentVolume - 0.1, 0);
        $('#player').prop('volume', newVolume);
        console.log("Volume decreased to " + newVolume);
    } else {
        console.log("Volume is already at minimum");
    }
});

}

$(document).ready(main);
