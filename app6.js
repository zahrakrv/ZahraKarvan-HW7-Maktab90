`use strict`;
const firstName = document.getElementById("name");
const midName = document.getElementById("midname");
const lastName = document.getElementById("family");
const course = document.getElementById("course");
const male = document.getElementById("male");
const female = document.getElementById("female");
const other = document.getElementById("other");
let gender;
const address = document.getElementById("address");
const email = document.getElementById("email");
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");
const form = document.getElementById("form");
const phone = document.getElementById("phone");

const submit = document.getElementById("submit");

submit.addEventListener("click", saveData);

function saveData(e) {
  e.preventDefault();
  //validation
  if (firstName.value.length < 3) {
    alert("first name should have minimmum 3 charachter");
    return false;
  }
  if (midName.value.length < 3) {
    alert("middle name should have minimmum 3 charachter");
    return false;
  }
  if (lastName.value.length < 3) {
    alert("last name should have minimmum 3 charachter");
    return false;
  }
  if (address.value.length < 3) {
    alert("address should have minimmum 3 charachter");

    return false;
  }
  if (email.value.length < 5) {
    alert("password should have minimmum 5 charachter");

    return false;
  }
  if (pass1.value !== pass2.value) {
    alert("your password have not match");

    return false;
  } else {
    alert("your form send successfully!");
    // return true;
  }
  //get Gender options
  if (male.checked) {
    gender = "male";
  } else if (female.checked) {
    gender = "female";
  } else if (other.checked) {
    gender = other;
  }
  if (!gender) {
    alert("select gender");
    return false;
  }

  //phone required

  if (phone === "") {
    alert("please enter your phone number ");
    return false;
  }
  // console.log(firstName);
  console.log(firstName.value);
  console.log(midName.value);
  console.log(lastName.value);
  console.log(address.value);
  console.log(email.value);
  console.log(pass2.value);
  console.log(pass1.value);
  return true;
}
///required errors
let a = 0;
let b = 0;
if (firstName.value === "" || firstName.value === null) {
  if (a == 0) {
    firstName.style.border = "2px solid red";
    let error1 = document.createElement("span");
    error1.innerHTML = "this filed is required";
    error1.style.color = "red";
    document.getElementById("name").appendChild(error1);
    console.log(error1);
  }
}
if (lastName.value === "" || lastName.value === null) {
  if (b == 0) {
    lastName.style.border = "2px solid red";
    let error2 = document.createElement("span");
    error2.innerHTML = "this filed is required";
    error2.style.color = "red";
    document.getElementById("family").appendChild(error2);
  }
}
// console.log(course.value);
// console.log(male.value);
// console.log(female.value);
// console.log(other.value);
