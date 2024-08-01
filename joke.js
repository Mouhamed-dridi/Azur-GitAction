const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? He was outstanding in his field!",
    "Why don't eggs tell jokes? They'd crack each other up!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "What do you call a fake noodle? An impasta!",
    "Why did the math book look so sad? Because it had too many problems!",
    "What do you call a bear with no teeth? A gummy bear!",
    "What do you call a can opener that doesn't work? A can't opener!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "What do you call a sleeping bull? A bulldozer!"
];

function getRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

function displayRandomJoke() {
    const jokeContainer = document.getElementById('jokeContainer');
    jokeContainer.textContent = getRandomJoke();
}

document.getElementById('newJokeBtn').addEventListener('click', displayRandomJoke);