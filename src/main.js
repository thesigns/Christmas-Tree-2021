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

let trunkline = createLine(
  centerX,
  height * 0.4,
  centerX,
  height * 0.7,
  "trunk"
);

for (let trunk = height * 0.2; trunk < height * 0.9; trunk += height / 40) {
  for (let i = Math.PI * 0.2; i < Math.PI * 0.8; i += Math.PI / (2 * trunk)) {
    let x1 = centerX;
    let y1 = trunk * 0.5;
    let radius = (trunk * trunk) / 330;
    let x2 = Math.cos(i) * radius + x1;
    let y2 = Math.sin(i) * radius + y1;
    let line = createLine(x1, y1, x2, y2, "needles");
    line.style.strokeWidth = Math.random() * 0.3;
    line.style.stroke = `hsla(${Math.random() * 20 + 80 - trunk / 2}, 100%, ${
      Math.random() * 60 + 20
    }%, 1)`;
  }
}
