const SVGNS = "http://www.w3.org/2000/svg";

let svg = document.documentElement;

let width = svg.viewBox.baseVal.width;
let height = svg.viewBox.baseVal.height;
let centerX = width / 2;
let centerY = height / 2;

let createLine = (x1, y1, x2, y2, classname) => {
  let line = document.createElementNS(SVGNS, "polyline");
  let points = x1 + "," + y1 + " " + x2 + "," + y2;
  line.setAttribute("points", points);
  line.setAttribute("class", classname);
  svg.appendChild(line);
  return line;
};

let trunk = 88;
for (let i = Math.PI * 0.49; i < Math.PI * 0.51; i += Math.PI / (30 * trunk)) {
  let x1 = centerX;
  let y1 = trunk * 0.5 - Math.random() * 5;
  let radius = (trunk * trunk) / 350 + Math.random() * 7;
  let x2 = Math.cos(i) * radius + x1;
  let y2 = Math.sin(i) * radius + y1;
  let line = createLine(x1, y1, x2, y2, "needles");
  line.style.strokeWidth = Math.random() * 0.25;
  line.style.stroke = `hsla(${Math.random() * 20 + 100 - trunk / 2}, 100%, ${
    Math.random() * 40 + 20
  }%, 1)`;
  line.style.animationDelay = Math.random() * 2 + "s";
}


for (let trunk = height * 0.2; trunk < height * 0.9; trunk += height / 40) {
  for (let i = Math.PI * 0.2; i < Math.PI * 0.8; i += Math.PI / (2 * trunk)) {
    let x1 = centerX;
    let y1 = trunk * 0.5;
    let radius = (trunk * trunk) / 340 + Math.random() * 3;
    let x2 = Math.cos(i) * radius + x1;
    let y2 = Math.sin(i) * radius + y1;
    let line = createLine(x1, y1, x2, y2, "needles");
    line.style.strokeWidth = Math.random() * 0.2;
    line.style.stroke = `hsla(${Math.random() * 20 + 80 - trunk / 2}, 100%, ${
      Math.random() * 60 + 20
    }%, 1)`;
    line.style.animationDelay = Math.random() * 1 + "s";
  }
}
