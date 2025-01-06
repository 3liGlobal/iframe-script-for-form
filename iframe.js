
document.addEventListener("DOMContentLoaded", function () {
    console.log("Script Started...");
    var checkEmailInterval = setInterval(function () {
        var divElement = document.getElementById("swell-customer-identification");
        var email = divElement ? divElement.getAttribute("data-email") : null;
        console.log(divElement);

        if (email) { // If email is not null or empty
            console.log(email);
            var iframe = document.getElementById("iframe");
            if (iframe) {
                var iframeWindow = iframe.contentWindow;
                if (iframeWindow) {
                    iframeWindow.postMessage(email, "*");
                    clearInterval(checkEmailInterval); // Stop checking once the email is found and message is posted
                } else {
                    console.error("IFrame contentWindow is null.");
                }
            } else {
                console.error("IFrame element not found.");
            }
        }
    }, 500); // Check every second
});