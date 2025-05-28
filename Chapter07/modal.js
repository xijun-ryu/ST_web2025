function showModal(message) {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
  modal.querySelector(".message").textContent = message;
}
