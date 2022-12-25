// let inputColor = document.querySelector("input");
// document.querySelector("button").addEventListener("click", () => {
//   document.querySelector(".box").style.backgroundColor = inputColor.value;
//   inputColor.value = "";
// });

// let person1 = {
//   name: "Phuong",
//   password: "123",
// };

// let t = JSON.stringify(person1);
// localStorage.setItem("p1", t);
// let s = JSON.parse(localStorage.getItem("p1"));

// console.log(s);

// console.log(typeof t);

// let person2 = {
//   name: "Tien",
//   password: "non",
// };

// let arrayObject = [];
// arrayObject.push(person1);
// arrayObject.push(person2);
// console.log(arrayObject);

// localStorage.setItem("users", arrayObject);

let uname = document.getElementById("username");
let pword = document.getElementById("password");

let checkValid = localStorage.getItem("personAccount");
if (checkValid == null) {
  localStorage.setItem("personAccount", JSON.stringify([]));
} else {
  let listUser = JSON.parse(localStorage.getItem("personAccount"));

  document.querySelector("button").addEventListener("click", function () {
    listUser.push({
      username: uname.value,
      password: pword.value,
    });

    localStorage.setItem("personAccount", JSON.stringify(listUser));

    uname.value = "";
    pword.value = "";
  });
}
