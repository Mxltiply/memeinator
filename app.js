const memeImageText = document.getElementById("memeImage")
const timeLeftText = document.getElementById("timeLeft")
const subredditText = document.getElementById("subredditText")
const linkText = document.getElementById("linkText");
createNewMeme();

function createNewMeme() {
    fetch("https://meme-api.com/gimme")
    .then((res) => res.json())
    .then((data) => {
        var url = data["url"];
        var subreddit = data["subreddit"];
        var link = data["postLink"];
        memeImageText.src = url;
        subredditText.textContent = subreddit;
        linkText.textContent = link;
    })
}


function startTimer() {
    var timeLeft = 5;
    var timerId = setInterval(countdown, 1000);
    function countdown() {
        if (timeLeft <= -1) {
            clearTimeout(timerId);
            startTimer();
            createNewMeme();
        } else {
        timeLeftText.textContent = timeLeft;
        timeLeft--;
        }
    }
}

startTimer();



