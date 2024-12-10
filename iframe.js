var checkEmailInterval = setInterval(function () {
    console.log("New Script...")
    var divElement = document.getElementById("swell-customer-identification");
    var email = divElement ? divElement.getAttribute("data-email") : null;
    if (email) {
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
}, 100);