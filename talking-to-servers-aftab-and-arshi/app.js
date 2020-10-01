const INITIAL_PLACEHOLDER_QUOTE = document.querySelector("#kanye-quote")
  .innerText;

async function getQuote() {
  const response = await fetch("https://api.kanye.rest/");
  const data = await response.json();

  const h1 = document.querySelector("#kanye-quote");
  maybeAppendToList(h1.innerText);
  h1.innerText = data.quote;
}

getQuote();

document.querySelector("#new-quote-button").addEventListener("click", getQuote);

function appendToList(text) {
  const li = document.createElement("li");
  li.innerText = text;
  const ol = document.querySelector("#kanye-quote-history");
  ol.appendChild(li);
}

// Appends to the list conditionally depending on whether the quote
// is a duplicate/placeholder or not.
function maybeAppendToList(text) {
  if (text !== INITIAL_PLACEHOLDER_QUOTE && !isDuplicate(text)) {
    appendToList(text);
  }
}

function isDuplicate(text) {
  return [...document.querySelectorAll("#kanye-quote-history > li")].some(
    (li) => li.innerText === text
  );
}
