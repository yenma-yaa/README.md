function askQuestion() {
    var q = prompt("type your opinions below!");
    if (q != null) {
        document.getElementById('question').innerHTML = "thank you for your response. here is a copy of it: " + q + ". just in case you ever need to refer back to it when me and coryo get married💖💖💖!!!";
    }
}

function snowImage() {
    var image = document.getElementById('snow');
    image.src = "images/coriolanus-snow.jpg";
}