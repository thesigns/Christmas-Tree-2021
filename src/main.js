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

let createLines = (x, y, angle, angleWidth, number, radiusMin, radiusMax) => {
  for (let i = 0; i < number; i++) {
    let min = angle - angleWidth / 2;
    let max = angle + angleWidth / 2;
    let angleDeg = Math.random() * (max - min + 1) + min;
    let angleRad = angleDeg * Math.PI / 180;
    let radius = Math.random() * (radiusMax - radiusMin + 1) + radiusMax;
    let x2 = Math.sin(angleRad) * radius + x;
    let y2 = Math.cos(angleRad) * radius + y;
    let line = createLine(x, y, x2, y2, "needles");
    line.style.strokeWidth = Math.random() * 0.2;
    line.style.stroke = `hsl(${Math.random() * 20 + 40}, 100%, ${Math.random() * 80 + 20}%)`;
    line.style.animationDelay = Math.random() * 4 + "s";
  }
}

for (let i = 0; i < 30; i += 3) {
  createLines(35, 10 + i, 0, 2 + i * i * 0.45, 5 * i, 1, 3);
  createLines(35, 15 + i, 0, 2 + i * i * 0.35, 5 * i, 5, 8);
  createLines(35, 15 + i, 0, 2 + i * i * 0.18, 5 * i, 10, 15);
  createLines(35, 18 + i, 0, 4, 4 * i, 10, 15);
}
createLines(35, 15, 0, 360, 250, 1, 2);