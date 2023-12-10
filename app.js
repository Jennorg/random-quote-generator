const quote = document.getElementById('quote');
const author = document.getElementById('author');
const button = document.getElementById('generator');

function randomNumberBetween(min, max) {
    return (Math.floor((Math.random()*max) + min))
}

let randomNumber;

function generateQuote() {
    let newRandomNumber = randomNumberBetween(0, citas.length);

    while(newRandomNumber == randomNumber) {
        newRandomNumber = randomNumberBetween(0, citas.length);
    }

    randomNumber = newRandomNumber;

    quote.innerText = `"${citas[randomNumber].texto}"`;
    author.innerText = citas[randomNumber].autor;
}

generateQuote();

button.addEventListener('click', generateQuote)