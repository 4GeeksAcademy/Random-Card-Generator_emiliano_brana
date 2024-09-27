/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let simbols = [1, 2, 3, 4];
let img = [];

function fNumbers(a) {
  let aa = a;
  console.log(aa);
}
function fSimbols(a) {
  let aa = a;
  console.log(aa);
}

function render() {
  document.querySelector("#widget_content").innerHTML = `<div class="card"> 
      <div class="simbol">simboltop</div>
      <div class="number">number</div>
      <div class="simbol">simbolbottom</div>
      </div>
      
      `;
}

window.onload = function() {
  //write your code here
  // console.log("Hello Rigo from the console!");

  fNumbers("blah blah");
  fSimbols("blah blah");

  render();
};
