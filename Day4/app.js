// localStorage.setItem(0, "P");
// localStorage.setItem(1, "A");
// localStorage.setItem(2, "B");
// localStorage.setItem(3, "D");

// document.getElementById("text").innerText = localStorage.getItem("0");

// console.log(localStorage.key());.

// console.log(localStorage[`${}`]);
// let s = "Phuong";

// console.log(`My name is ${s}`);

// let i = document.getElementById("a");
// //  a.innerHTML = "<div " + "class" + class + ">" + s + "</div>"

// a.innerHTML = `<div class=${class}>${s}</div>`

let setKey = document.getElementById("setKey");
let setValue = document.getElementById("setValue");

document.getElementById("btn").addEventListener("click", () => {
  localStorage.setItem(setKey.value, setValue.value);
  setKey.value = "";
  setValue.value = " ";
});
