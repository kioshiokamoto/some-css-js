const preactiveItem = document.querySelector(".pre-active");
const barItems = document.querySelectorAll(".bar-item");

function changeActive(newActive) {
  preactiveItem.classList.remove("pre-active");
  barItems.forEach((element) => {
    element.classList.remove("active");
  });
  newActive.classList.add("active");
}
