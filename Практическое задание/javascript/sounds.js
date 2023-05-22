document.addEventListener("DOMContentLoaded", function(event) {
    var snd = new Audio('media/vine-boom.mp3');
    var audio = new Audio("media/nope.mp3");
    document.getElementById('email').oninput = function() {
        snd.currentTime = 0;
        snd.play();
    };
    document.getElementById('confirm_password').oninput = function() {
        snd.currentTime = 0;
        snd.play();
    };

    var button = document.getElementById("sound_button");

    button.addEventListener("click", function() {
    audio.play();
  });
})