// Отримати модальне вікно
var modal = document.getElementById("myModal");
  
// Отримати кнопку, яка відкриває модальне вікно
var btn = document.getElementById("signInBtn");

// Отримати елемент <span>, який закриває модальне вікно
var span = document.getElementById("closeModal");

// Коли користувач натискає кнопку, відкрити модальне вікно
btn.onclick = function() {
    modal.style.display = "block";
}

// Коли користувач натискає <span> (x), закрити модальне вікно
span.onclick = function() {
    modal.style.display = "none";
}

// Коли користувач натискає в будь-якому місці поза модальним вікном, закрити його
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}