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

// Appends to the list based on whether it's
// the first time this function is being invoked
// and whether the text already exists in the list.
const maybeAppendToList = (function () {
  let firstTime = true;
  return (text) => {
    if (!firstTime && !isDuplicate(text)) {
      return appendToList(text);
    }
    firstTime = false;
  };
})();

function isDuplicate(text) {
  return [...document.querySelectorAll("#kanye-quote-history > li")].some(
    (li) => li.innerText === text
  );
}
