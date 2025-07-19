// Counter Program

let count = 0;

function increment() {
  count += 1;
  document.getElementById("count-el").innerText = count;
}

function reset() {
  count = 0;
  document.getElementById("count-el").innerText = count;
}

function decrement() {
  if (count === 0) return;
  count -= 1;
  document.getElementById("count-el").innerText = count;
}
