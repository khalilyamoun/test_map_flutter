import "./styles.css";

let myMap;
let i = 1;

function initMap() {
  const iconMarker = {
    labelOrigin: new window.woosmap.map.Point(14, 15),
    url: "https://images.woosmap.com/marker-red.svg"
  };
  myMap = new window.woosmap.map.Map(document.getElementById("map"), {
    center: {
      lat: 51.52,
      lng: -0.13
    },
    zoom: 10
  });
  new window.woosmap.map.Marker({
    position: myMap.getCenter(),
    icon: iconMarker,
    label: {
      text: String(i),
      color: "white"
    },
    map: myMap
  });
  myMap.addListener("click", (e) => {
    i += 1;
    new window.woosmap.map.Marker({
      position: e.latlng,
      icon: iconMarker,
      label: {
        text: String(i),
        color: "white"
      },
      map: myMap
    });
  });
}

initMap();
