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
    `<div class="d-flex flex-column justify-content-center text-center">
    <button type="button" id="rndCard" class="btn btn-light ms-5 mb-2">Random Card</button>
      <button type="button" id="cardTime" class="btn btn-light ms-5 mb-2">Card by time</button>
      <button type="button" id="stopTime" class="btn btn-danger ms-5 d-none justify-content-center mb-2">Stop</button>
      
    <div class="btn-group ms-5">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Custom Size <i class="fa-solid fa-screwdriver-wrench"></i>
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
   
  <li><div class="input-group form-control-sm">
  <span class="input-group-text">Height</span>
  <input type="number" aria-label="height" class="form-control" id="height">
</div></li>
    


    <li><div class="input-group form-control-sm">
  <span class="input-group-text">Width</span>
  <input type="number" aria-label="width" class="form-control" id="width">
</div></li>
  </ul>
</div>

      </div>
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

  document.querySelector("#height").addEventListener("input", event => {
    let customHeight = event.target.value;
    let scaleY = customHeight / 500;
    let card = document.querySelector("#card-display");
    card.style.height = `${customHeight}px`;
    card.style.transform = `scaleY(${scaleY})`;
  });

  document.querySelector("#width").addEventListener("input", event => {
    let customWidth = event.target.value;
    let scaleX = customWidth / 350;
    let card = document.querySelector("#card-display");
    card.style.width = `${customWidth}px`;
    card.style.transform = `scaleX(${scaleX})`;
  });
};
