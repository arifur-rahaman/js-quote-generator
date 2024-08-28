const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://dummyjson.com/quotes";

async function getQuote(url) {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data.quotes[3].quote);
  quote.innerHTML = data.quotes[3].quote;
  author.innerHTML = data.quotes[3].author;
}

getQuote(api_url);
