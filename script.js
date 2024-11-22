function clickFunction() {
  let bg = document.getElementById("background");

  let colors = [
    "red",
    "green",
    "blue",
    "cyan",
    "pink",
    "yellow",
    "indigo",
    "rainbow",
    "orange",
    "brown",
    "silver",
  ];

  const colorIndex = parseInt(Math.random() * colors.length);

  bg.style.backgroundColor = colors[colorIndex];
}
