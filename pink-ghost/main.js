document.body.addEventListener("mousemove", function (event) {
  document.querySelector(".ghost").style.left = event.pageX + "px";
  document.querySelector(".ghost").style.top = event.pageY + "px";
});
