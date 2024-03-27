document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function () {
      var divElement = document.getElementById("swell-customer-identification");
      var email = divElement ? divElement.getAttribute("data-email") : null;
      var iframe = document.getElementById("iframe");
      if (iframe) {
          var iframeWindow = iframe.contentWindow;
          if (iframeWindow) {
              iframeWindow.postMessage(email, "*");
          } else {
              console.error("IFrame contentWindow is null.");
          }
      } else {
          console.error("IFrame element not found.");
      }
  }, 20 * 1000);
});
