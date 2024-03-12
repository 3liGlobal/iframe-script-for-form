$(document).ready(function () {
  setTimeout(function () {
    console.log("Howdy!");
    var divElement = document.getElementById("swell-customer-identification");
    var email = divElement.getAttribute("data-email");
    console.log(email);
    var iframe = document.getElementById("iframe");
    iframe.contentWindow.postMessage(email, "*");
  }, 10000);
});