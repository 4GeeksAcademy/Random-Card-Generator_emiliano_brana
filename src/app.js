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
  document
    .querySelector("#widget_content")
    .insertAdjacentHTML(
      "beforeend",
      `<button type="button" id="rndCard" class="btn btn-light ms-5">Random Card</button><button type="button" id="cardTime" class="btn btn-light ms-5">Card by time</button>`
    );
};

document.querySelector("#widget_content").style.height =
  window.innerHeight + "px";

window.onload = function() {
  render(resultado);
  renderbtn();

  document.querySelector("#rndCard").addEventListener("click", function() {
    render(variables(numbers, simbols));
  });
};
