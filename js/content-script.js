chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.cmd == 'test') {
        sendResponse(document.getElementsByTagName('video')[0].src.toString());
    }
});