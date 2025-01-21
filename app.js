const form = document.getElementById("form");
const displayElem = document.getElementById("holdUi");
const form2 = document.getElementById("form2");
const jokeSetup = document.getElementById("jokeSetup");
const jokePunch = document.getElementById("jokePunchline");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const result = new FormData(form);
  const searchTerm = Object.fromEntries(result);
  console.log(searchTerm.question);
  fetchIp(searchTerm.question);
});
async function fetchIp(word) {
  const response = await fetch("https://api.ipify.org/?format=json");
  const ipData = await response.json();
  generateIP(ipData);
}

function generateIP(data) {
  displayElem.innerHTML = "";
  console.log(data);
  displayElem.innerText = data.ip;
}

form2.addEventListener("submit", function (event) {
  event.preventDefault();
  const result = new FormData(form);
  const searchJoke = Object.fromEntries(result);
  debugger;
  console.log(searchJoke.query);
  fetchJoke(searchJoke.query);
});
async function fetchJoke(joke) {
  const response = await fetch(
    "https://official-joke-api.appspot.com/random_joke"
  );
  const randomJoke = await response.json();
  generateJoke(randomJoke);
}
async function generateJoke(joke) {
  jokeSetup.innerHTML = "";
  jokePunch.innerHTML = "";
  console.log(joke);
  jokeSetup.innerText = joke.setup;
  jokePunch.innerText = joke.punchline;
}
