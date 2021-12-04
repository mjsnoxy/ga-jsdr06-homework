
// const api = "http://api.open-notify.org/iss-now.json";

function waitForData(response) {
    return response.json();
}

function handleData(data) {
    // Assign latitude & longitude to variables from the returned JSON object.
    let lat = data.iss_position.latitude;
    let lon = data.iss_position.longitude;

    // Find location ID in DOM and add markup.
    let location = document.getElementById("location");
    let markup = `
        <h1>Current ISS Location</h1>
        <p>The current latitude is: <strong>${lat} °</strong></>
        <p>The current longitude is: <strong>${lon} °</strong></>
    `
    location.innerHTML = markup;
}

function iss() {
    const url = "http://api.open-notify.org/iss-now.json";
    fetch(url).then(waitForData).then(handleData);
}

iss();

function drawMap() {
    let map = L.map('map').setView([0, 0], 3);

    // Add tile layer from Mapbox
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibWpzbm94eSIsImEiOiJja3dyY3pmMGEwaDF6MnFtdHk1eGt1bDhoIn0.-N6AkjjCcP66Qm-mHi-QIQ'
    }).addTo(map);

    // Add custom icon - see https://leafletjs.com/reference.html#icon
    var theFalcon = L.icon({
        iconUrl: 'falcon.png',
        iconSize: [220, 160],
        iconAnchor: [110, 80],
    });

    // Set marker to ISS location
    let marker = L.marker([0, 0], { icon: theFalcon }).addTo(map);
}

drawMap();

// Refresh every 5 seconds.
setInterval(iss, 5000);


// Some of this function came from watching the Coding Train

// async function getIss() {
//     const response = await fetch(api);
//     const data = await response.json();

//     // Assign latitude & longitude to variables from the returned JSON object.
//     let lat = data.iss_position.latitude;
//     let lon = data.iss_position.longitude;

//     // Find location ID in DOM and add markup.
//     let location = document.getElementById("location");
//     let markup = `
//         <h1>Current ISS Location</h1>
//         <p>The current latitude is: <strong>${lat} °</strong></>
//         <p>The current longitude is: <strong>${lon} °</strong></>
//     `
//     location.innerHTML = markup;

    // // Set map to ISS location at zoom level of 3.
    // let map = L.map('map').setView([lat, lon], 3);


    // // Add tile layer from Mapbox
    // L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //     maxZoom: 18,
    //     id: 'mapbox/streets-v11',
    //     tileSize: 512,
    //     zoomOffset: -1,
    //     accessToken: 'pk.eyJ1IjoibWpzbm94eSIsImEiOiJja3dyY3pmMGEwaDF6MnFtdHk1eGt1bDhoIn0.-N6AkjjCcP66Qm-mHi-QIQ'
    // }).addTo(map);

    // // Add custom icon - see https://leafletjs.com/reference.html#icon
    // var theFalcon = L.icon({
    //     iconUrl: 'falcon.png',
    //     iconSize: [220, 160],
    //     iconAnchor: [110, 80],
    // });

    // // Set marker to ISS location
    // let marker = L.marker([lat, lon], {icon: theFalcon}).addTo(map);
// }

// getIss();