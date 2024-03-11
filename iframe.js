var divElement = document.getElementById("swell-customer-identification");
var email = divElement.getAttribute("data-email");
var iframe = document.getElementById("iframe");
iframe.onload = function () {
  iframe.contentWindow.postMessage(email, "*");
};
