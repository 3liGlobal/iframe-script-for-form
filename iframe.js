(function () {
    // Function to handle email processing
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
        } else {
            console.log("'swell-customer-identification' not found or missing email attribute.");
        }
    }

    // Function to handle page reload or URL change
    function onPageChange() {
        console.log("Page changed or reloaded. Running script...");
        processEmail(); // Run your script logic
    }

    // Run on initial page load
    onPageChange();

    // Listen for URL changes (single-page applications)
    window.addEventListener("popstate", onPageChange);

    // Override `pushState` and `replaceState` to detect manual URL changes
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function () {
        originalPushState.apply(this, arguments);
        window.dispatchEvent(new Event("popstate")); // Trigger custom event
    };

    history.replaceState = function () {
        originalReplaceState.apply(this, arguments);
        window.dispatchEvent(new Event("popstate")); // Trigger custom event
    };

    console.log("Script initialized to run on URL change or page reload.");
})();
