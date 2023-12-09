const quote = document.getElementById('quote');
const author = document.getElementById('author');

const button = document.getElementById('generator');

function randomNumberBetween(min, max) {
    return (Math.floor((Math.random()*max) + min))
}

button.addEventListener('click', ()=>{
    let randomNumber = randomNumberBetween(0, citas.length);
    quote.innerText = citas[randomNumber].texto;
    author.innerText = citas[randomNumber].autor;
})