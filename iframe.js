(function () {
    // Keep track of the last URL to detect changes
    let lastURL = window.location.href;

    // Function to process the required logic
    function processEmail() {
        const divElement = document.getElementById("swell-customer-identification");
        const email = divElement ? divElement.getAttribute("data-email") : null;

        if (email) {
            const iframe = document.getElementById("iframe");
            if (iframe) {
                const iframeWindow = iframe.contentWindow;
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

    // Function to handle page reloads or URL changes
    function handlePageChange() {
        console.log("URL or Page Reload detected. Running the script...");
        processEmail(); // Run the logic
    }

    // Detect changes in the URL periodically (useful for SPAs)
    setInterval(() => {
        const currentURL = window.location.href;
        if (currentURL !== lastURL) {
            lastURL = currentURL;
            console.log("URL changed to:", currentURL);
            handlePageChange(); // Run logic on URL change
        }
    }, 100); // Check every second

    // Listen for popstate event (browser back/forward navigation)
    window.addEventListener("popstate", () => {
        console.log("Popstate event detected.");
        handlePageChange();
    });

    // Override pushState and replaceState to detect programmatic URL changes
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function () {
        originalPushState.apply(this, arguments);
        console.log("PushState detected.");
        handlePageChange();
    };

    history.replaceState = function () {
        originalReplaceState.apply(this, arguments);
        console.log("ReplaceState detected.");
        handlePageChange();
    };

    // Initial execution on page load
    console.log("Script initialized on:", window.location.href);
    handlePageChange();
})();
