var myImage = document.querySelector("img");
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/bella-snow.jpg") {
    myImage.setAttribute("src", "images/bella-eva.jpg");
  } else {
    myImage.setAttribute("src", "images/bella-snow.jpg");
  }
};

function setUserName() {
  var myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Белла приветствует тебя, " + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Белла приветствует тебя, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};
