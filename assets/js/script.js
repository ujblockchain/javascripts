$(function () {
  $("#datepicker").datepicker();
});

document
  .querySelector("#img-container1")
  .addEventListener("mouseover", function () {
    anime({
      targets: "#card-img-top1",
      scale: 1.2,
      duration: 500,
      easing: "easeInOutQuad",
    });
  });

document
  .querySelector("#img-container1")
  .addEventListener("mouseout", function () {
    anime({
      targets: "#card-img-top1",
      scale: 1.0,
      duration: 500,
      easing: "easeInOutQuad",
    });
  });

document
  .querySelector("#img-container2")
  .addEventListener("mouseover", function () {
    anime({
      targets: "#card-img-top2",
      scale: 1.2,
      duration: 500,
      easing: "easeInOutQuad",
    });
  });

document
  .querySelector("#img-container2")
  .addEventListener("mouseout", function () {
    anime({
      targets: "#card-img-top2",
      scale: 1.0,
      duration: 500,
      easing: "easeInOutQuad",
    });
  });

document
  .querySelector("#img-container3")
  .addEventListener("mouseover", function () {
    anime({
      targets: "#card-img-top3",
      scale: 1.2,
      duration: 500,
      easing: "easeInOutQuad",
    });
  });

document
  .querySelector("#img-container3")
  .addEventListener("mouseout", function () {
    anime({
      targets: "#card-img-top3",
      scale: 1.0,
      duration: 500,
      easing: "easeInOutQuad",
    });
  });

document
  .querySelector("#img-container4")
  .addEventListener("mouseover", function () {
    anime({
      targets: "#card-img-top4",
      scale: 1.2,
      duration: 500,
      easing: "easeInOutQuad",
    });
  });

document
  .querySelector("#img-container4")
  .addEventListener("mouseout", function () {
    anime({
      targets: "#card-img-top4",
      scale: 1.0,
      duration: 500,
      easing: "easeInOutQuad",
    });
  });

document
  .querySelector("#img-container5")
  .addEventListener("mouseover", function () {
    anime({
      targets: "#card-img-top5",
      scale: 1.2,
      duration: 500,
      easing: "easeInOutQuad",
    });
  });

document
  .querySelector("#img-container5")
  .addEventListener("mouseout", function () {
    anime({
      targets: "#card-img-top5",
      scale: 1.0,
      duration: 500,
      easing: "easeInOutQuad",
    });
  });

document
  .querySelector("#img-container6")
  .addEventListener("mouseover", function () {
    anime({
      targets: "#card-img-top6",
      scale: 1.2,
      duration: 500,
      easing: "easeInOutQuad",
    });
  });

document
  .querySelector("#img-container6")
  .addEventListener("mouseout", function () {
    anime({
      targets: "#card-img-top6",
      scale: 1.0,
      duration: 500,
      easing: "easeInOutQuad",
    });
  });

const yearSpan = document.querySelector("#year");
yearSpan.textContent = new Date().getFullYear();

window.addEventListener("scroll", function () {
  var backToTopButton = document.getElementById("backToTop");
  if (window.pageYOffset < 10) {
    backToTopButton.style.display = "none";
  } else {
    backToTopButton.style.display = "block";
  }
});