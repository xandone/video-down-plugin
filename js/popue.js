(function() {
    sendMessage();
})();

// document.getElementById('down-btn').addEventListener('click', function(e) {
// });

function sendMessageToContentScript(message, callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, message, function(response) {
            if (callback) callback(response);
        });
    });
}

function sendMessage() {
    sendMessageToContentScript({ cmd: 'test', value: '' }, function(response) {
        if (isEmpty(response)) {
            document.getElementById('video-url-text').innerText = '视频文件地址出错';
            return;
        }
        document.getElementById('video-url-text').innerText = response;
        document.getElementById('video-url').href = response;
        document.getElementById('down-btn-a').href = response;
        //启用浏览器自带下载功能
        document.getElementById('down-btn-a').download="";
    });
}

function isEmpty(obj) {
    if (typeof obj == "undefined" || obj == null || obj == "") {
        return true;
    } else {
        return false;
    }
}