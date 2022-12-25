let inputColor = document.querySelector("input");
document.querySelector("button").addEventListener("click", () => {
  document.querySelector(".box").style.backgroundColor = inputColor.value;
  inputColor.value = "";
});
