var nog = 0;
nog = 15;
document.getElementById("nuofgu").innerHTML = nog;
var guess01 = "";
var naem = localStorage.getItem("forNextPage");
var r = "";
r = Math.floor(Math.random() * 100 + 1);
function guess() {
    guess01 = document.getElementById("guesser").value;
    nog = nog - 1;
    document.getElementById("nuofgu").innerHTML = nog;
    if (nog == 0) {
        document.getElementById("end").style = "color: red;";
        document.getElementById("end").innerHTML = "Oops! You're Out Of Guesses! The Correct Answer Was "+r+"!";
    };

    if (guess01 == r) {
        document.getElementById("end").style = "color: green;";
        document.getElementById("end").innerHTML = "Wow "+naem+"! You Guessed It Right! The Correct Answer Was "+r+"! You Win!";
    };

    if (guess01 != r) {
        document.getElementById("end").style = "color: turquoise;";
        if (r >= 50 && r <= 80) {
            document.getElementById("end").innerHTML = "You Guesssed Wrong. The Number Is Either 50 Or 80 Or It Is Somewhere Between 50 & 80.";
        };
        if (r < 20) {
            document.getElementById("end").innerHTML = "You Guesssed Wrong. The Number Is Below 20.";
        };
        if (r > 80) {
            document.getElementById("end").innerHTML = "You Guesssed Wrong. The Number Is Greater Than 80.";
        };
        if (r >= 20 && r < 50) {
            document.getElementById("end").innerHTML = "You Guesssed Wrong. The Number Is Either 20 Or It Is Somewhere Between 20 & 50";
        };
    };
    document.getElementById("guesser").value = "";
};

function replay(){
    document.getElementById("guesser").value = "";
    r = "";
    r = Math.floor(Math.random() * 100 + 1);
    document.getElementById("end").innerHTML = "";
    nog = 0;
    nog = 15;
    document.getElementById("nuofgu").innerHTML = nog;
};