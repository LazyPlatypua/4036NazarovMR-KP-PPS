document.addEventListener("DOMContentLoaded", function(event) {
    var snd = new Audio('media/vine-boom.mp3');
    document.getElementById('username-input').oninput = function() {
        snd.currentTime = 0;
        snd.play();
    };
    document.getElementById('email').oninput = function() {
        snd.currentTime = 0;
        snd.play();
    };
    document.getElementById('phone').oninput = function() {
        snd.currentTime = 0;
        snd.play();
    };
    document.getElementById('confirm_password').oninput = function() {
        snd.currentTime = 0;
        snd.play();
    };
    document.getElementById('user_class').oninput = function() {
        snd.currentTime = 0;
        snd.play();
    };
})