const secondHand = document.querySelector(".second");
const minuteHand = document.querySelector(".minute");
const hourHand = document.querySelector(".hour");

const digitalTime = document.querySelector(".digital-time");

const sections = document.getElementsByTagName("section");

for (let i = 0; i < sections.length; i++) {
  sections[i].style.rotate = `${6 * i}deg`;
}

// Clock Running!
function clock() {
  const date = new Date();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  // Analog Time
  secondHand.style.rotate = `${second * 6}deg`;
  minuteHand.style.rotate = `${minute * 6 + second / 10}deg`;
  hourHand.style.rotate = `${hour * 30 + minute / 2}deg`;

  // Digital Time
  digitalTime.textContent = `${hour < 10 ? "0" + hour : hour}:${
    minute < 10 ? "0" + minute : minute
  }:${second < 10 ? "0" + second : second}`;
}

setInterval(clock, 1000);
