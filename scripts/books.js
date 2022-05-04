const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const gameName = urlParams.get('notebook');
const iframe = document.getElementById('gameframe');
const aboutinfo = document.getElementById('aboutinfo');
const controlsinfo = document.getElementById('controlsinfo');
const devinfo = document.getElementById('developerinfo');

if (gameName == null) {
  window.location = "./notecards.html";
}

let baseurl = location.host;
window.addEventListener('load', () => {
  fetch('./scripts/books.json')
  .then(response => response.json())
  .then(notebooks => {
    const gameData = notebooks[gameName];
    iframe.src = gameData.iframe_url;
    aboutinfo.textContent = gameData.about;
    controlsinfo.textContent = gameData.controls;
    devinfo.textContent = gameData.developer;
  })
})