const modal = document.getElementById("modal");
const closeBtn = document.getElementById("btn-close");
const video = document.getElementById("myvideo");
const videoButtons = document.querySelectorAll(".btn-video");
const codeButtons = document.querySelectorAll(".btn-code");
const downloadButton = document.getElementById("btn-download");
const modalHeader = document.querySelector(".modal h1");

// Add click event listeners to each button
videoButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    setVideo(button.id);
    modal.showModal();
  });
});

// Opens correct link for each code button
codeButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    id = button.previousSibling.previousSibling.id;
    urlMap = {
      sortbutton: "https://github.com/AlexKamm123/ExternalSort",
      stockbutton: "https://github.com/AlexKamm123/Stock_Analyzer",
      ddbutton: "https://github.com/AlexKamm123/DesignatedDrivers",
    };

    window.open(urlMap[id], "_blank");
  });
});

// Closes modal on click
closeBtn.addEventListener("click", function () {
  modal.close();
});

// Sets the video src and modal title
function setVideo(buttonId) {
  srcMap = {
    sortbutton: "https://www.youtube.com/embed/A1bkmuzs1hI?si=u2da3a0eV7EiFftU",
    stockbutton: "https://www.youtube.com/embed/o6L5NcfFgWU?si=fYoldTNthSI-tYfZ",
    genebutton: "https://www.youtube.com/embed/ypNLaAExpYs?si=W1krJr5npenWvp5O",
    ddbutton: "https://www.youtube.com/embed/gb9hZIAqGPw?si=65WfEQwl5UZic5mm",
  };

  titleMap = {
    sortbutton: "External Sort",
    stockbutton: "Stock Analyzer",
    genebutton: "Gene-Drug-Network",
    ddbutton: "Designated Drivers",
  };

  src = srcMap[buttonId];
  modalTitle = titleMap[buttonId];

  modalHeader.innerHTML = modalTitle;
  video.src = src;
}
