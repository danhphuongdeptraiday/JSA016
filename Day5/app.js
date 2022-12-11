let btn = document.querySelector("button");
let kindOfStorage = document.getElementById("kindOfStorage");
let username = document.getElementById("username");
let password = document.getElementById("password");

btn.addEventListener("click", function () {
  let key = kindOfStorage.value;
  let inputUsername = username.value;
  let inputPassword = password.value;

  let listUser = [];
  let user = {
    name: inputUsername,
    password: inputPassword,
  };

  listUser.push(user);

  localStorage.setItem(key, JSON.stringify(listUser));
  console.log("123");
});

// let user = {
//   name: "Phuong",
//   password: "123",
// };

// console.log(user.name);

// localStorage.setItem("user", JSON.stringify(user));
// console.log(user);
// let t = JSON.stringify(user);
// console.log(JSON.parse(t).name);

// let array = ["a", "b", "c", "d"];
// console.log(typeof array);
// console.log(typeof JSON.stringify(array));
// localStorage.setItem("listName", array);
// console.log(localStorage.getItem("listName"));
// console.log(localStorage.getItem("listName"));

// btn.addEventListener("click", () => {
//   let array = ["a", "b", "c", "d"];
//   let person = {
//     name: "Phuong",
//     favoriteLanguage: ["Java", "Python", "Javascript"],
//   };
//   localStorage.setItem("listUsername", JSON.stringify(person));

//   //   let date = new Date();
//   //   let hour = date.getHours();
//   //   let minute = date.getMinutes();
//   //   let second = date.getSeconds();
//   //   console.log(hh);
//   //   console.log(mm);
//   //   console.log(ss);
// });

// console.log(JSON.parse(localStorage.getItem("listUsername")));

// setTimeout() ;

// function print() {
//   console.log(1);
// }
// setTimeout(function () {
//   console.log(1);
// }, 2000);
// // console.log(1);
// console.log(2);

// setTimeout(function () {
//   console.log(1);
// }, 1000);

// setTimeout(function () {
//   console.log(2);
// }, 2000);

// setTimeout(function () {
//   console.log(3);
// }, 3000);

// console.log(date);
// console.log(date);
// console.log(date);

// function currentDate() {
//   let date = new Date();
//   let hours = date.getHours();
//   let minute = date.getMinutes();
//   let second = date.getSeconds();

//   let h = document.getElementById("hours");
//   let m = document.getElementById("minute");
//   let s = document.getElementById("second");

//   if (hours < 10) {
//     h.innerText = "0" + hours;
//   } else {
//     h.innerText = hours;
//   }

//   if (minute < 10) {
//     m.innerText = "0" + minute;
//   } else {
//     m.innerText = minute;
//   }

//   if (second < 10) {
//     s.innerText = "0" + second;
//   } else {
//     s.innerText = second;
//   }

//   let checkTime = hours == 10 && minute == 00 && second == 00;
//   if (checkTime == true) {
//     announcement();
//   }
// }

// function announcement() {
//   alert("Lớp đã đến giờ nghỉ. Hẹn các em ở buổi học sau");
// }

// let btn1 = document.querySelectorAll("button")[0];
// let btn2 = document.querySelectorAll("button")[1];

// btn1.addEventListener("click", function () {
//   clearInterval(t);
// });

// btn2.addEventListener("click", function () {
//   t = setInterval(currentDate, 1000);
// });

// let t = setInterval(currentDate, 1000);
// clearInterval(setInterval(currentDate, 1000));
// setTimeout(currentDate, 2000);
// setTimeout(currentDate, 3000);
// setTimeout(currentDate, 4000);
