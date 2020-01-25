const button = document.getElementById('fetch_joke');
const jokeEl = document.getElementById('joke');

button.addEventListener('click', fetchJoke)

// fetch jokes at page load
fetchJoke();

async function fetchJoke() {
  // call API
  const jokeRes = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  });
  
  // get data
  const data = await jokeRes.json();
  
  //render data to page
  jokeEl.innerHTML = data.joke;
}
