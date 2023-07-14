window.addEventListener("scroll", function () {
  const iconBar = document.getElementById("icon-bar");
  let scrollY = window.scrollY;

  if (scrollY > 100) {
    iconBar.classList.add("sticky");
  } else {
    iconBar.classList.remove("sticky");
  }
});
