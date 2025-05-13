const $trainButton = document.querySelector("#train");

$trainButton.addEventListener("click", () => {
  const $dialog = document.querySelector("#train-dialog");
  $dialog.showModal();
});
