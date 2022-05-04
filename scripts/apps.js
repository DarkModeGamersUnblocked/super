const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const appName = urlParams.get('app');

let baseurl = location.host;
window.addEventListener('load', () => {
  fetch('./scripts/apps.json')
  .then(response => response.json())
  .then(apps => {
    const appData = apps[appName];
    document.getElementById('appframe').src = appData.iframe_url;
  })
})
