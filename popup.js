// popup.js

// Function to get the title of the current active tab
function getCurrentTabTitle(callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      if (tabs && tabs.length > 0) {
        callback(tabs[0].title);
      } else {
        callback("No active tab");
      }
    });
  }
  
  // Update the popup's HTML with the current tab title
  function updatePopupWithTabTitle(title) {
    const titleElement = document.getElementById("tabTitle");
    titleElement.textContent = title;
  }
  
  // Call the functions when the button is clicked
  document.addEventListener("DOMContentLoaded", function() {
    const showTitleButton = document.getElementById("showTitleButton");
    showTitleButton.addEventListener("click", function() {
      getCurrentTabTitle(function(title) {
        updatePopupWithTabTitle(title);
      });
    });
  });
  