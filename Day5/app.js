let btn = document.querySelector("button");
let username = document.getElementById("username");
let password = document.getElementById("password");

btn.addEventListener("click", () => {
  let array = ["a", "b", "c", "d"];
  let person = {
    name: "Phuong",
    favoriteLanguage: ["Java", "Python", "Javascript"],
  };
  localStorage.setItem("listUsername", JSON.stringify(person));

  //   let date = new Date();
  //   let hour = date.getHours();
  //   let minute = date.getMinutes();
  //   let second = date.getSeconds();
  //   console.log(hh);
  //   console.log(mm);
  //   console.log(ss);
});

console.log(JSON.parse(localStorage.getItem("listUsername")));
