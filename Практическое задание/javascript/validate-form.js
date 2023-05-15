function validateForm() {
    var username = document.getElementById("username-input").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;
    var userClass = document.getElementById("user_class").value;

    var isValid = true;

    if (username.length < 3 || username.length > 20) {
        document.getElementById("username-error").innerHTML = "От трёх до двадцати символов в имени нужно,Чтобы войти в сеть.";
        isValid = false;
    } else {
        document.getElementById("username-error").innerHTML = "";
    }

    if (email === "") {
        document.getElementById("email-error").innerHTML = "Таинственный путь почтовый адрес ждет.";
        isValid = false;
    } else {
        document.getElementById("email-error").innerHTML = "";
    }

    if (phone.length !== 11) {
        document.getElementById("phone-error").innerHTML = "Цифры в порядке, телефонный код в сердце, введи в формате 81234567890, не забудь.";
        isValid = false;
    } else {
        document.getElementById("phone-error").innerHTML = "";
    }

    if (confirmPassword !== password) {
        document.getElementById("confirm-password-error").innerHTML = "Тайны не связаны, проли несхожие, войди в мир другой.";
        isValid = false;
    } else {
        document.getElementById("confirm-password-error").innerHTML = "";
    }

    if (userClass === "") {
        document.getElementById("user-class-error").innerHTML = "Мир рас разнообраз, выбери свою расу, волшебство ждет нас.";
        isValid = false;
    } else {
        document.getElementById("user-class-error").innerHTML = "";
    }

    if (!validateCaptcha())
    {
        document.getElementById("captcha-error").innerHTML = "Капча, загадка странная, но ответ не тот, увы.";
        isValid = false;
    }else {
        document.getElementById("captcha-error").innerHTML = "";
    }

    if(isValid)
    {
        var modal = document.getElementById("modal");
        modal.style.display = "block";
    }
    

    return isValid;
}

function generateCaptcha() {
    var captcha = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < 8; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    console.log("Нельзя сюда подсмтривать! Но вот текст капчи:" + captcha);

    return captcha;
}

function validateCaptcha() {
    var userInput = document.getElementById('captchaInput').value;
    var generatedCaptcha = sessionStorage.getItem('captcha');

    if (userInput === generatedCaptcha) {
        alert('Капча пройдена,\n Защита разомкнута,\nУспех в твоих руках!');
        return true;
    } else {
        alert('Капча ошибкой,\nНеправильный код ввели, \nПовторите снова.');
        return false;
    }
}
