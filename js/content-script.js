chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.cmd == 'test') {
        var videos = document.getElementsByTagName('video');
        var myVideo;
        if (videos.length == 0) {
            var iframe = document.getElementsByTagName('iframe')[0];
            myVideo == iframe.contentWindow.document.getElementsByTagName('video')[0];
        } else {
            myVideo = videos[0];
        }
        sendResponse(myVideo.src.toString());
    }
});