const webringMap = [{
  title: "Kitchen Ring",
  text: "This is the {{link}}, where you can cook your food, for daily needs.",
  url: "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  link: "kitchen-ring",
  icon: "fas fa-faucet"
}, {
  title: "Living Room Ring",
  text: "This is the {{link}}, where you do most of your living, or watch TV.",
  url: "https://images.unsplash.com/photo-1545454760-a8e55231441c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  link: "living-room-ring",
  icon: "fas fa-couch"
}, {
  title: "Bath Room Ring",
  text: "This is the {{link}}, where you take a bath, and make yourself clean.",
  url: "https://images.unsplash.com/photo-1574118140569-4e7d8bd0ffeb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  link: "bath-room-ring",
  icon: "fas fa-shower"
}, {
  title: "Dining Room Ring",
  text: "This is the {{link}}, where you do eat your breakfast, lunch, and dinner.",
  url: "https://images.unsplash.com/photo-1534490449938-cf92275c6db2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  link: "dining-room-ring",
  icon: "fas fa-utensils"
}, {
  title: "Bed Room Ring",
  text: "This is the {{link}}, where you sleep, when you get tired.",
  url: "https://images.unsplash.com/photo-1580789724132-7f75abddbe0f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  link: "bed-room-ring",
  icon: "fas fa-bed"
}, {
  title: "Study Room Ring",
  text: "This is the {{link}}, where you study, or do your work.",
  url: "https://images.unsplash.com/photo-1556866149-a42ffe6478ea?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  link: "study-room-ring",
  icon: "fas fa-book"
}, {
  title: "Attic Ring",
  text: "This the the {{link}}, where you stock the items, you don't use oftenly.",
  url: "https://images.unsplash.com/photo-1596491652949-32762d03b887?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  link: "attic-ring",
  icon: "fas fa-box"
}, {
  title: "Garden Ring",
  text: "This is the {{link}}, where you plant all the trees, or flowers.",
  url: "https://images.unsplash.com/photo-1584211932359-513d7b58fe5f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  link: "garden-ring",
  icon: "fas fa-tree"
}, {
  title: "Garage Ring",
  text: "This is the {{link}}, where you park your own vehicle.",
  url: "https://images.unsplash.com/photo-1467385829985-2b0fb82b5193?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  link: "garage-ring",
  icon: "fas fa-car"
}, {
  title: "Backyard Ring",
  text: "This is the {{link}}, where you do the outdoor pleasures.",
  url: "https://images.unsplash.com/photo-1601560896164-834d6f61ea66?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  link: "backyard-ring",
  icon: "fas fa-swimming-pool"
}];
const webringImage = document.querySelector("#webringImage");
const webringTitle = document.querySelector("#webringTitle");
const webringText = document.querySelector("#webringText");
const webringJoin = document.querySelector("#webringJoin");
const webringURL = document.querySelector("#webringURL");
const webringPrev = document.querySelector("#webringPrev");
const webringNext = document.querySelector("#webringNext");
const webringRandom = document.querySelector("#webringRandom");
const webringLoader = document.querySelector("#webringLoader");
const webringIcon = document.querySelector("#webringIcon");

let activeRing = 0;

function random(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

function setRing(index) {
  webringPrev.classList.remove("disabled");
  webringNext.classList.remove("disabled");
  
  if (activeRing == 0) {
    webringPrev.classList.add("disabled");
  }
  else if (activeRing >= webringMap.length - 1) {
    webringNext.classList.add("disabled");
  }
  
  let map = webringMap[index];
  
  webringImage.style.backgroundImage = `url("${map.url}")`;
  
  webringTitle.innerText = map.title;
  
  let text = map.text.replace(/{{link}}/g, `<a href="#${map.link}">${map.title}</a>`);
  
  webringText.innerHTML = text;
  
  webringJoin.innerHTML = `
    <span class="mr-1">Click to join ${map.title}</span>
    <i class="fas fa-mouse-pointer"></i>
  `;
  
  let url = `http://example.com/${map.link}`;
  
  webringURL.innerHTML = `<a href="#${url}">${url}</a>`;
  
  webringIcon.className = map.icon;
  
  // HACK: Sometimes, transition doesn't work
  setTimeout(function() {
    webringLoader.classList.add("ti-fade");
  }, 10);
}

webringPrev.addEventListener("click", function() {
  if (activeRing > 0) {
    setRing(--activeRing);
  }
});

webringNext.addEventListener("click", function() {
  if (activeRing < webringMap.length - 1) {
    setRing(++activeRing);
  }
});

webringRandom.addEventListener("click", function() {
  activeRing = random(0, webringMap.length - 1);
  
  setRing(activeRing);
});

webringLoader.addEventListener("transitionend", function() {
  this.classList.add("ti-hide");
});

setRing(activeRing);
