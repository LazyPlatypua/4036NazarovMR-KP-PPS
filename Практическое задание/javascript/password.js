function generatePassword() {
    var length = 10; 
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"; 
    var password = "";
    
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
    
    document.getElementById("password").value = password;
  }
  
  function checkPassword() {
    var generatedPassword = document.getElementById("password").value;
    var userPassword = document.getElementById("confirm_password").value;
    
    if (generatedPassword === userPassword) {
      alert("Пароль венчает,\nВерность тайны раскрыв,\nДоступ открыт!");
    } else {
      alert("Пароль не тот,\nЗапретный путь закрыт,\nНеверное слово.");
    }
  }
  
  function preventPaste(event) {
    event.preventDefault();
  }