const container = document.querySelector(".container");
const lapins = [
  {
    name: "pépito",
    image: "images/lapin1.jpg"
  },
  {
    name: "damien",
    image: "images/lapin2.jpg"
  },
  {
    name: "robert",
    image: "images/lapin3.jpg"
  },
  {
    name: "toto",
    image: "images/lapin4.jpg"
  },
  {
    name: "pikachu",
    image: "images/lapin5.jpg"
  },
  {
    name: "poupou",
    image: "images/lapin6.jpg"
  },
  {
    name: "tintin",
    image: "images/lapin7.jpg"
  },
  {
    name: "titou",
    image: "images/lapin8.jpg"
  },
  {
    name: "boule",
    image: "images/lapin9.jpg"
  }
];
const showLapin = () => {
  let output = "";
  lapins.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Buy</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showLapin);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
