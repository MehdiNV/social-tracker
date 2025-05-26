const map = L.map("map").setView([20, 0], 2);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

fetch("people.json")
  .then((res) => res.json())
  .then((peopleData) => {
    peopleData.forEach((person) => {
      L.marker(person.coords)
        .addTo(map)
        .bindPopup(
          `<b>${person.name}</b><br>${person.city}<br><a href='${person.noteURL}' target='_blank'>Open Note</a>`
        );
    });
  })
  .catch((err) => {
    console.error("Failed to load people data:", err);
  });
