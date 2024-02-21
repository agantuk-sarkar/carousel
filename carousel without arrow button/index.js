let imageArr = JSON.parse(localStorage.getItem("array_image6")) || [];

let inputTag = document.getElementById("imageUrl");

// Pushing image urls into an array by submit event
let submitForm = document.getElementById("submit-form");
submitForm.addEventListener("submit", function (event) {
  event.preventDefault();

  imageArr.push(inputTag.value);
  inputTag.value = null;

  localStorage.setItem("array_image6", JSON.stringify(imageArr));
});

// Carousel image
let carouselContainer = document.querySelector(".carousel-container");
let startButton = document.querySelector(".start-button");
let stopButton = document.querySelector(".stop-button");

let id = null;

startButton.addEventListener("click", function () {
  clearInterval(id);
  // carouselContainer.innerHTML = "";
  // carouselContainer.innerHTML = null;
  // imageDiv.innerHTML = "";

  // let imageTag = document.createElement("img");
  // imageTag.setAttribute("class", "w-full h-full");
  let imageDiv = document.createElement("div");

  let imageTag = document.createElement("img");

  // imageTag.src = imageArr[0];

  // imageDiv.append(imageTag);
  // carouselContainer.append(imageDiv);
  let currentIndex = 0;

  id = setInterval(function () {
    if (currentIndex === imageArr.length) {
      currentIndex = 0;
      console.log("currentIndex2:", currentIndex);
      console.log("arrayLength:", imageArr.length);
    }
    imageTag.src = imageArr[currentIndex];
    imageDiv.append(imageTag);
    carouselContainer.append(imageDiv);
    currentIndex++;
    // console.log("currentIndex:", currentIndex);
    // console.log("imageArray:", imageArr);
  }, 2000);
});
// console.log("currentIndex2:", currentIndex);

stopButton.addEventListener("click", function () {
  clearInterval(id);
});
