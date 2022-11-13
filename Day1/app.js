// let i = Number(prompt("Enter number: "));

// switch (i) {
//   case 1:
//     console.log("1. In ra sv");
//     break;
//   case 2:
//     console.log("2. Tao sv");
//     break;
//   case 3:
//     console.log("3. Update");
//     break;
//   case 4:
//     console.log("4. Xoa");
//     break;
//   case 5:
//     console.log("Thoat chuong trinh");
//     break;
//   default:
//     console.log("Nhap Sai roi");
// }

function checkReverseString(s) {
  let a = "";
  for (let i = s.length - 1; i >= 0; i--) {
    a = a + s.charAt(i);
  }
  if (s === a) {
    console.log("True");
  } else {
    console.log("False");
  }
}

checkReverseString("accba");
