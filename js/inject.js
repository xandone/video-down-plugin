(function() {
    sendMessage();
})();

document.getElementById('down-btn').addEventListener('click', function(e) {

});

function sendMessageToContentScript(message, callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, message, function(response) {
            if (callback) callback(response);
        });
    });
}

function sendMessage() {
    sendMessageToContentScript({ cmd: 'test', value: '' }, function(response) {
        document.getElementById('video-url-text').innerText = response;
        document.getElementById('video-url').href = response;
    });
}