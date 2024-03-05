// array for localStorage
let arr = JSON.parse(localStorage.getItem("indicator2")) || [];

let submitForm = document.querySelector("#submit-form");
let inputTag = document.getElementById("imageUrl");
// Form event
submitForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (inputTag === "") {
    alert("Enter Image URL");
  } else {
    arr.push(inputTag.value);
    inputTag.value = null;
  }
  localStorage.setItem("indicator2", JSON.stringify(arr));
});

// currentIndex for all images
let currentIndex = 0;
// Interval id for event loop
let intervalId = null;

// Fetching all the elements in html into js
let carouselImageContainer = document.querySelector(
  ".carousel-image-container"
);
let leftArrow = document.querySelector(".left-arrow");
let rightArrow = document.querySelector(".right-arrow");
let indicatorContainer = document.querySelector(".indicator-container");

// left arrow button function
leftArrow.addEventListener("click", function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = arr.length - 1;
  }
  indicatorFunc(currentIndex);
});

// right arrow button function
rightArrow.addEventListener("click", function () {
  currentIndex++;
  if (currentIndex === arr.length) {
    currentIndex = 0;
  }
  indicatorFunc(currentIndex);
});

// using higher order function to create multiple span tag
arr.forEach(function (ele, ind) {
  let spanTag = document.createElement("span");
  let iTag = document.createElement("i");
  iTag.setAttribute("class", "lni lni-circle-minus font-bold");
  spanTag.setAttribute(
    "class",
    "w-[1rem] text-sm hover:text-white cursor-pointer"
  );
  iTag.addEventListener("click", function () {
    indicatorFunc(ind);
  });
  spanTag.append(iTag);
  indicatorContainer.append(spanTag);
});

// Indicator function
function indicatorFunc(indicatorIndex) {
  // querySelectorAll return an array
  let iTagArray = document.querySelectorAll(".indicator-container i");
  // console.log(iTagArray);
  iTagArray.forEach(function (ele, ind) {
    ele.classList.remove("bg-white");
  });

  iTagArray[indicatorIndex].classList.add("bg-white");

  carouselImage(indicatorIndex);
  currentIndex = indicatorIndex;
}

// carousel image function for showing images in UI
function carouselImage(index) {
  clearInterval(intervalId);
  carouselImageContainer.innerHTML = null;
  let imgTag = document.createElement("img");
  imgTag.src = arr[index];
  imgTag.setAttribute("class", "w-full h-full");
  carouselImageContainer.append(imgTag);

  // applying setInterval
  intervalId = setInterval(function () {
    carouselImageContainer.innerHTML = null;
    if (currentIndex === arr.length) {
      index = 0;
      currentIndex = 0;
    }
    let imageTag = document.createElement("img");
    imageTag.src = arr[currentIndex];
    imageTag.setAttribute("class", "w-full h-full");
    carouselImageContainer.append(imageTag);
    currentIndex++;
  }, 3000);
}
// carouselImage(currentIndex);
indicatorFunc(currentIndex);
