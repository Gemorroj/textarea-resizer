var preferences = widget.preferences;

function saveOptions () {
    try {
        preferences.pressModifierKey    = document.getElementById('pressModifierKey').selectedIndex;
        preferences.markerMinWidth      = document.getElementById('markerMinWidth').value;
        preferences.markerMinHeight     = document.getElementById('markerMinHeight').value;
        preferences.textarea            = document.getElementById('textarea').checked            ? '1' : '0';
        preferences.iframe              = document.getElementById('iframe').checked              ? '1' : '0';
        preferences.select              = document.getElementById('select').checked              ? '1' : '0';
        preferences.img                 = document.getElementById('img').checked                 ? '1' : '0';
        preferences.video               = document.getElementById('video').checked               ? '1' : '0';
        preferences.canvas              = document.getElementById('canvas').checked              ? '1' : '0';
        preferences.objectEmbed         = document.getElementById('objectEmbed').checked         ? '1' : '0';
        preferences.imgMinWidth         = document.getElementById('imgMinWidth').value;
        preferences.imgMinHeight        = document.getElementById('imgMinHeight').value;
        preferences.input               = document.getElementById('input').checked               ? '1' : '0';
        preferences.inputText           = document.getElementById('inputText').checked           ? '1' : '0';
        preferences.inputPassword       = document.getElementById('inputPassword').checked       ? '1' : '0';
        preferences.inputFile           = document.getElementById('inputFile').checked           ? '1' : '0';
        preferences.inputEmail          = document.getElementById('inputEmail').checked          ? '1' : '0';
        preferences.inputSearch         = document.getElementById('inputSearch').checked         ? '1' : '0';
        preferences.inputTel            = document.getElementById('inputTel').checked            ? '1' : '0';
        preferences.inputUrl            = document.getElementById('inputUrl').checked            ? '1' : '0';
        preferences.textareaDblclick    = document.getElementById('textareaDblclick').checked    ? '1' : '0';
        preferences.iframeDblclick      = document.getElementById('iframeDblclick').checked      ? '1' : '0';
        preferences.imgDblclick         = document.getElementById('imgDblclick').checked         ? '1' : '0';
        preferences.inputDblclick       = document.getElementById('inputDblclick').checked       ? '1' : '0';
        preferences.selectDblclick      = document.getElementById('selectDblclick').checked      ? '1' : '0';
        preferences.videoDblclick       = document.getElementById('videoDblclick').checked       ? '1' : '0';
        preferences.canvasDblclick      = document.getElementById('canvasDblclick').checked      ? '1' : '0';
        preferences.objectEmbedDblclick = document.getElementById('objectEmbedDblclick').checked ? '1' : '0';
    } catch (e) {
        document.getElementById('response').innerHTML = '<span class="error">Error! (' + e + ')</span>';
        return false;
    }

    document.getElementById('response').innerHTML = '<span class="ok">Options Saved!</span>';

    var interval = window.setInterval(function () {
        document.getElementById('response').innerHTML = '';
        window.clearInterval(interval);
    }, 10000);
    return false;
}


window.addEventListener('DOMContentLoaded', function () {
    document.getElementById('pressModifierKey').selectedIndex = preferences.pressModifierKey;
    document.getElementById('markerMinWidth').value           = preferences.markerMinWidth;
    document.getElementById('markerMinHeight').value          = preferences.markerMinHeight;
    document.getElementById('textarea').checked               = preferences.textarea            === '1';
    document.getElementById('iframe').checked                 = preferences.iframe              === '1';
    document.getElementById('select').checked                 = preferences.select              === '1';
    document.getElementById('img').checked                    = preferences.img                 === '1';
    document.getElementById('video').checked                  = preferences.video               === '1';
    document.getElementById('canvas').checked                 = preferences.canvas              === '1';
    document.getElementById('objectEmbed').checked            = preferences.objectEmbed         === '1';
    document.getElementById('imgMinWidth').value              = preferences.imgMinWidth;
    document.getElementById('imgMinHeight').value             = preferences.imgMinHeight;
    document.getElementById('input').checked                  = preferences.input               === '1';
    document.getElementById('inputText').checked              = preferences.inputText           === '1';
    document.getElementById('inputPassword').checked          = preferences.inputPassword       === '1';
    document.getElementById('inputFile').checked              = preferences.inputFile           === '1';
    document.getElementById('inputEmail').checked             = preferences.inputEmail          === '1';
    document.getElementById('inputSearch').checked            = preferences.inputSearch         === '1';
    document.getElementById('inputTel').checked               = preferences.inputTel            === '1';
    document.getElementById('inputUrl').checked               = preferences.inputUrl            === '1';
    document.getElementById('textareaDblclick').checked       = preferences.textareaDblclick    === '1';
    document.getElementById('iframeDblclick').checked         = preferences.iframeDblclick      === '1';
    document.getElementById('imgDblclick').checked            = preferences.imgDblclick         === '1';
    document.getElementById('inputDblclick').checked          = preferences.inputDblclick       === '1';
    document.getElementById('selectDblclick').checked         = preferences.selectDblclick      === '1';
    document.getElementById('videoDblclick').checked          = preferences.videoDblclick       === '1';
    document.getElementById('canvasDblclick').checked         = preferences.canvasDblclick      === '1';
    document.getElementById('objectEmbedDblclick').checked    = preferences.objectEmbedDblclick === '1';
}, false);