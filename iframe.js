$(document).ready(function () {
  setTimeout(function () {
    console.log("Howdy!");

    var divElement = document.getElementById("swell-customer-identification");
    var email = divElement.getAttribute("data-email");
    var iframe = document.getElementById("iframe");
    iframe.onload = function () {
      iframe.contentWindow.postMessage(email, "*");
    };

    // var inputValue = $("#inputField").val();
    // var iframe = document.getElementById("myFrame");
    // iframe.contentWindow.postMessage(inputValue, "https://3liglobal.github.io");
  }, 10000);
});
