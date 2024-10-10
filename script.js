/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// Initialize and add the map
let map;

async function initMap() {
  // The locations of all the cities I've been to
  const locations = [
    ['Bath', 51.3781, -2.3597],
    ['Barcelona', 41.3874, 2.1686],
    ['Jiangyin', 31.9192, 120.2843],
    ['Osaka', 34.6937, 135.5023],
    ['Hokkaido', 43.2203, 142.8635],
    ['Italy', 41.8719, 12.5674],
    ['Singapore', 1.3521, 103.8198],
  ];

  // Request needed libraries
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // Initialize the map, centered at Tokyo
  map = new Map(document.getElementById("map"), {
    zoom: 3,
    center: { lat: 35.6764, lng: 139.6500 }, // centered in Tokyo
    mapId: "DEMO_MAP_ID",
  });

  // Loop through locations and add markers
  for (let i = 0; i < locations.length; i++) {
    const marker = new AdvancedMarkerElement({
      map: map,
      position: { lat: locations[i][1], lng: locations[i][2] },
      title: locations[i][0],
    });

    // Create an info window for each marker
    const infowindow = new google.maps.InfoWindow({
      content: locations[i][0],
    });

    // Add a click event to open the info window
    google.maps.event.addListener(marker, 'click', function () {
      infowindow.open(map, marker);
    });
  }
}

// Call the function to initialize the map
initMap();
