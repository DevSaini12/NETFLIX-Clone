let search = document.body.querySelector("#search");
let submit = document.body.querySelector(".btn-start");

let randonmNumber = document.body.querySelector(".randomNumber");

let OTP = document.body.querySelector(".codebox");
submit.addEventListener("click", () => {
  let number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let i = search.value.charAt(search.value.length - 1);
  if (search.value.endsWith("@gmail.com")) {
    location.href = "Movie app/index.html";
  } else if (search.value.charAt(search.value.length - 1) == number[i - 1]) {
    location.href = "Movie app/index.html";
  } else {
    alert("Enter the Valid Email");
  }
});

// search.value.charAt(search.value.length-1);
