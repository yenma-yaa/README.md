// alert("javascript works!!")
function magic8ball () {
    askAQuestion();
    shake();
    getAFortune();
}
function askAQuestion () {
    // alert("ask a yes or no question and recieve a fortune");
}
function shake () {
    // alert("im shaking");
}
function getAFortune () {
    // alert("ask again later");
    var fortunes = ["yes", "no", "maybe"];
    var num = randomNumber(fortunes.length);
    displayFortune(fortunes[num]);
}

function displayFortune (fortune) {
    // alert(fortune);
    document.getElementById("fortune").innerHTML= fortune;
}

function randomNumber (n) {
    return Math.floor(Math.random() * n);
}