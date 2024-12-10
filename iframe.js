(function () {
    // Function to handle the email retrieval and processing
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

    // Set up a MutationObserver to watch for changes in the DOM
    var observer = new MutationObserver(function () {
        processEmail(); // Call the processing function whenever the DOM changes
    });

    // Target the body element to observe changes across the entire document
    var targetNode = document.body;

    // Configuration for the observer
    var config = {
        childList: true, // Monitor addition/removal of child elements
        subtree: true, // Monitor changes in all child nodes
        attributes: true, // Monitor changes in attributes (useful if email is added later)
    };

    // Start observing the DOM
    observer.observe(targetNode, config);

    // Initial call to handle the case where the element exists on page load
    processEmail();

    console.log("Dynamic script for 'swell-customer-identification' initialized.");
})();
