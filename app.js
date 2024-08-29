const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://dummyjson.com/quotes";

async function getQuote(url) {
  const response = await fetch(url);
  let data = await response.json();
  //   console.log(data.quotes[3].quote);
  /**
   * here I have to do work further to use actual
   * quote api, hence it is a dummy api;
   */

  /**
   * here I have to use map or filter or random to show
   * random quote but here now is static
   */
  quote.innerHTML = data.quotes[3].quote;
  author.innerHTML = data.quotes[3].author;
}

// we have to get tweet button link from https://developer.x.com/en/docs/x-for-websites/tweet-button/overview
function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "---- by " +
      author.innerHTML,
    "Tweet Window",
    "width=600, height=300"
  );
}
