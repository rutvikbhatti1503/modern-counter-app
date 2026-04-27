let count = 0;

function updateCount() {
  let showCount = document.getElementById("showCount");
  showCount.innerHTML = count;

  if (count > 10) {
    showCount.style.color = "#1dd1a1"; // pastel green
  } else if (count < 0) {
    showCount.style.color = "#ff6b6b"; // pastel red
  } else {
    showCount.style.color = "#ffffff"; // default white
  }
}

function increaseCount() {
  count++;
  updateCount();
}

function decreaseCount() {
  count--;
  updateCount();
}

function resetCount() {
  count = 0;
  updateCount();
}
