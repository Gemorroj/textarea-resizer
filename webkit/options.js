"use strict";

window.addEventListener('DOMContentLoaded', function() {
    chrome.storage.sync.get([
        'pressModifierKey',
        'markerMinWidth',
        'markerMinHeight',
        'textarea',
        'iframe',
        'select',
        'img',
        'video',
        'canvas',
        'objectEmbed',
        'imgMinWidth',
        'imgMinHeight',
        'input',
        'inputText',
        'inputPassword',
        'inputFile',
        'inputEmail',
        'inputSearch',
        'inputTel',
        'inputUrl',
        'textareaDblclick',
        'iframeDblclick',
        'imgDblclick',
        'inputDblclick',
        'selectDblclick',
        'videoDblclick',
        'canvasDblclick',
        'objectEmbedDblclick'
    ], function (items) {
        console.log(items);
        document.getElementById('pressModifierKey').selectedIndex = items.pressModifierKey;
        document.getElementById('markerMinWidth').value = items.markerMinWidth;
        document.getElementById('markerMinHeight').value = items.markerMinHeight;
        document.getElementById('textarea').checked = items.textarea;
        document.getElementById('iframe').checked = items.iframe;
        document.getElementById('select').checked = items.select;
        document.getElementById('img').checked = items.img;
        document.getElementById('video').checked = items.video;
        document.getElementById('canvas').checked = items.canvas;
        document.getElementById('objectEmbed').checked = items.objectEmbed;
        document.getElementById('imgMinWidth').value = items.imgMinWidth;
        document.getElementById('imgMinHeight').value = items.imgMinHeight;
        document.getElementById('input').checked = items.input;
        document.getElementById('inputText').checked = items.inputText;
        document.getElementById('inputPassword').checked = items.inputPassword;
        document.getElementById('inputFile').checked = items.inputFile;
        document.getElementById('inputEmail').checked = items.inputEmail;
        document.getElementById('inputSearch').checked = items.inputSearch;
        document.getElementById('inputTel').checked = items.inputTel;
        document.getElementById('inputUrl').checked = items.inputUrl;
        document.getElementById('textareaDblclick').checked = items.textareaDblclick;
        document.getElementById('iframeDblclick').checked = items.iframeDblclick;
        document.getElementById('imgDblclick').checked = items.imgDblclick;
        document.getElementById('inputDblclick').checked = items.inputDblclick;
        document.getElementById('selectDblclick').checked = items.selectDblclick;
        document.getElementById('videoDblclick').checked = items.videoDblclick;
        document.getElementById('canvasDblclick').checked = items.canvasDblclick;
        document.getElementById('objectEmbedDblclick').checked = items.objectEmbedDblclick;
    });

    document.getElementById("form").addEventListener("submit", function () {
        chrome.storage.sync.set({
            'pressModifierKey': document.getElementById('pressModifierKey').selectedIndex,
            'markerMinWidth': window.parseInt(document.getElementById('markerMinWidth').value, 10),
            'markerMinHeight': window.parseInt(document.getElementById('markerMinHeight').value, 10),
            'textarea': document.getElementById('textarea').checked,
            'iframe': document.getElementById('iframe').checked,
            'select': document.getElementById('select').checked,
            'img': document.getElementById('img').checked,
            'video': document.getElementById('video').checked,
            'canvas': document.getElementById('canvas').checked,
            'objectEmbed': document.getElementById('objectEmbed').checked,
            'imgMinWidth': window.parseInt(document.getElementById('imgMinWidth').value, 10),
            'imgMinHeight': window.parseInt(document.getElementById('imgMinHeight').value, 10),
            'input': document.getElementById('input').checked,
            'inputText': document.getElementById('inputText').checked,
            'inputPassword': document.getElementById('inputPassword').checked,
            'inputFile': document.getElementById('inputFile').checked,
            'inputEmail': document.getElementById('inputEmail').checked,
            'inputSearch': document.getElementById('inputSearch').checked,
            'inputTel': document.getElementById('inputTel').checked,
            'inputUrl': document.getElementById('inputUrl').checked,
            'textareaDblclick': document.getElementById('textareaDblclick').checked,
            'iframeDblclick': document.getElementById('iframeDblclick').checked,
            'imgDblclick': document.getElementById('imgDblclick').checked,
            'inputDblclick': document.getElementById('inputDblclick').checked,
            'selectDblclick': document.getElementById('selectDblclick').checked,
            'videoDblclick': document.getElementById('videoDblclick').checked,
            'canvasDblclick': document.getElementById('canvasDblclick').checked,
            'objectEmbedDblclick': document.getElementById('objectEmbedDblclick').checked
        }, function () {
            document.getElementById('response').innerHTML = '<span class="ok">Options Saved!</span>';
        });

        return false;
    }, false);
}, false);
