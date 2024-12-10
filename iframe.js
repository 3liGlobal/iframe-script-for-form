(function () {
    // Function to process email
    function processEmail() {
        var divElement = document.getElementById("swell-customer-identification");
        var email = divElement ? divElement.getAttribute("data-email") : null;

        if (email) {
            var iframe = document.getElementById("iframe");
            if (iframe) {
                var iframeWindow = iframe.contentWindow;
                if (iframeWindow) {
                    iframeWindow.postMessage(email, "*");
                    console.log("Email sent to iframe:", email);
                } else {
                    console.error("IFrame contentWindow is null.");
                }
            } else {
                console.error("IFrame element not found.");
            }
            return true; // Successfully processed email
        } else {
            console.log("'swell-customer-identification' not found or missing email attribute.");
            return false; // Email not found yet
        }
    }

    // Immediately execute to handle elements already present
    if (processEmail()) {
        console.log("Email processed on initial execution.");
        return; // If email is already processed, exit the script
    }

    // Set up MutationObserver for dynamic changes
    var observer = new MutationObserver(function () {
        if (processEmail()) {
            observer.disconnect(); // Stop observing if email is processed
        }
    });

    // Observe the entire document for changes
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
    });

    // Polling fallback in case MutationObserver misses something
    var interval = setInterval(function () {
        if (processEmail()) {
            clearInterval(interval); // Stop polling if email is processed
            observer.disconnect(); // Stop observing to save resources
        }
    }, 500);

    console.log("Script initialized with MutationObserver and polling.");
})();
