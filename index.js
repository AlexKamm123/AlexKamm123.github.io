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
    video.load();
    modal.showModal();
  });
});

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

closeBtn.addEventListener("click", function () {
  modal.close();
  video.pause();
});

function setVideo(buttonId) {
  videoSource = document.getElementById("video-source");
  srcMap = {
    sortbutton: "media/videos/ExternalSort.mp4",
    stockbutton: "media/videos/Stock_Analyzer.mp4",
    genebutton: "media/videos/Gene_Drug_Network.mp4",
    ddbutton: "media/videos/DesignatedDriver.mp4",
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
  videoSource.src = src;
}
