document.querySelector(".cover").addEventListener("click", function () {
  this.classList.add("fade");
  setTimeout(() => {
    this.style.display = "none";
  }, 2000);
});

document.querySelector(".hide-button").addEventListener("click", function () {
  document.querySelector(".cover").style.display = "";
  setTimeout(() => {
    document.querySelector(".cover").classList.remove("fade");
  }, 500);
});
