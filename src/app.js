/* eslint-disable */
import "bootstrap";
import "./style.css";

let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let simbols = [0, 1, 2, 3];
let img = ["♦", "♥", "♠", "♣"];

function variables(a, b) {
  let randomNumber = a[Math.floor(Math.random() * a.length)];
  let randomSymbol = b[Math.floor(Math.random() * b.length)];
  return {
    number: randomNumber,
    symbol: randomSymbol
  };
}

let resultado = variables(numbers, simbols);

let render = resultado => {
  document.querySelector("#card-display").innerHTML = `
    <div class="card align-self-start ${
      simbols.indexOf(resultado.symbol) == "0" ? "diamond" : ""
    }${simbols.indexOf(resultado.symbol) == "1" ? "heart" : ""}${
    simbols.indexOf(resultado.symbol) == "2" ? "spade" : ""
  }${simbols.indexOf(resultado.symbol) == "3" ? "club" : ""}"> 
      <div class="simbolt">${img[resultado.symbol]}</div>
      <div class="number">${resultado.number}</div>
      <div class="simbolb">${img[resultado.symbol]}</div>
    </div>
`;
};

let renderbtn = () => {
  document.querySelector("#widget_content").insertAdjacentHTML(
    "beforeend",
    `<button type="button" id="rndCard" class="btn btn-light ms-5">Random Card</button>
      <button type="button" id="cardTime" class="btn btn-light ms-5">Card by time</button>
      <button type="button" id="stopTime" class="btn btn-danger ms-5 d-none">Stop</button>
      `
  );
};

document.querySelector("#widget_content").style.height =
  window.innerHeight + "px";

let timer;

function intervalId() {
  if (!timer) {
    timer = setInterval(() => {
      render(variables(numbers, simbols));
      console.log("1");
    }, 2000);
  }
}

window.onload = function() {
  render(resultado);
  renderbtn();

  document.querySelector("#rndCard").addEventListener("click", function() {
    render(variables(numbers, simbols));
  });

  document.querySelector("#cardTime").addEventListener("click", () => {
    intervalId();
    document.querySelector("#cardTime").classList.add("d-none");
    document.querySelector("#stopTime").classList.replace("d-none", "d-flex");
  });

  document.querySelector("#stopTime").addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    document.querySelector("#stopTime").classList.replace("d-flex", "d-none");
    document.querySelector("#cardTime").classList.replace("d-none", "d-flex");
  });
};
