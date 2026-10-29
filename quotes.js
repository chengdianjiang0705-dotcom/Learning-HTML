// Read the existing HTML list so the hero and the list share the same content.
const quoteItems = document.querySelectorAll('.quote-list > li');
const heroQuote = document.getElementById('random-quote');
const heroSource = document.getElementById('random-quote-source');
const anotherQuote = document.getElementById('another-quote');
let previousQuote = -1;

function showRandomQuote() {
    let nextQuote;
    if (previousQuote === -1) {
        nextQuote = Math.floor(Math.random() * quoteItems.length);
    } else {
        // Pick from all but the previous entry; no repeated reroll loop.
        nextQuote = Math.floor(Math.random() * (quoteItems.length - 1));
        if (nextQuote >= previousQuote) nextQuote++;
    }
    heroQuote.textContent = quoteItems[nextQuote].querySelector('blockquote').textContent;
    heroSource.textContent = quoteItems[nextQuote].querySelector('cite').textContent;
    previousQuote = nextQuote;
}

if (quoteItems.length && heroQuote && heroSource && anotherQuote) {
    showRandomQuote();
    anotherQuote.hidden = quoteItems.length < 2;
    anotherQuote.addEventListener('click', showRandomQuote);
}
