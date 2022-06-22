function calcRectArea(width, height) {
  return width * height;
}
console.log(calcRectArea(6, 7));

// https://stackoverflow.com/questions/31778413/run-javascript-in-visual-studio-code#:~:text=Open%20the%20JavaScript%20code%20file,shown%20in%20the%20Output%20Window.

function reverse_a_number(n) {
  n = n + "";
  return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32243)));
