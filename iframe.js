// Function to handle content changes
function handleContentChange() {
    var divElement = document.getElementById("swell-customer-identification");
    var email = divElement ? divElement.getAttribute("data-email") : null;

    if (email) {
        var iframe = document.getElementById("iframe");
        if (iframe) {
            var iframeWindow = iframe.contentWindow;
            if (iframeWindow) {
                iframeWindow.postMessage(email, "*");
            } 
        }
    }
}

// Check if the current URL contains '/contact-us'
if (window.location.pathname.includes('/contact-us')) {
    // Set up a MutationObserver to watch for changes in the DOM
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            handleContentChange();
        });
    });

    // Target node to observe
    var targetNode = document.body; // You can narrow this to a specific element

    // Configuration for the observer
    var config = {
        childList: true, // Observes addition or removal of child elements
        subtree: true, // Observes changes in all child nodes of the target
        attributes: true, // Observes changes to attributes
    };

    // Start observing the target node
    observer.observe(targetNode, config);

    // Initial call in case the content is already loaded
    handleContentChange();
}