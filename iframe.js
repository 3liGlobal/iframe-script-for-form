// $(document).ready(function () {
//   setTimeout(function () {
//     console.log("Howdy!");
//     var divElement = document.getElementById("swell-customer-identification");
//     var email = divElement.getAttribute("data-email");
//     console.log(email);
//     var iframe = document.getElementById("iframe");
//     iframe.contentWindow.postMessage(email, "*");
//   }, 10000);
// });
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function () {
      console.log("Howdy!");
      var divElement = document.getElementById("swell-customer-identification");
      var email = divElement ? divElement.getAttribute("data-email") : null;
      console.log(email);
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
  }, 10000);
});
