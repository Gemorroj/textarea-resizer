// ==UserScript==
// @name        textartea resizer
// @version     2.13dev
// @date        2012-02-12
// @author      Mike Samokhvalov <mikivanch@gmail.com> (mod by Gemorroj)
// @download    http://www.puzzleclub.ru/files/textarea_resizer.js
// ==/UserScript==

"use strict";
window.addEventListener('DOMContentLoaded', function () {
    var preferences = widget.preferences;

    // Settings
    var markerWidth = 10,
        markerHeight = 10,
        markerTimeout = 1200,
        move = false,
        removeMarkerTimeout = 0,
        current = null,
        marker = null,
        config = {
            pressModifierKey:    preferences.pressModifierKey,
            markerMinWidth:      preferences.markerMinWidth,
            markerMinHeight:     preferences.markerMinHeight,
            textarea:            preferences.textarea            === '1',
            iframe:              preferences.iframe              === '1',
            select:              preferences.select              === '1',
            img:                 preferences.img                 === '1',
            video:               preferences.video               === '1',
            canvas:              preferences.canvas              === '1',
            objectEmbed:         preferences.objectEmbed         === '1',
            imgMinWidth:         preferences.imgMinWidth,
            imgMinHeight:        preferences.imgMinHeight,
            input:               preferences.input               === '1',
            inputText:           preferences.inputText           === '1',
            inputPassword:       preferences.inputPassword       === '1',
            inputFile:           preferences.inputFile           === '1',
            inputEmail:          preferences.inputEmail          === '1',
            inputSearch:         preferences.inputSearch         === '1',
            inputTel:            preferences.inputTel            === '1',
            inputUrl:            preferences.inputUrl            === '1',
            textareaDblclick:    preferences.textareaDblclick    === '1',
            iframeDblclick:      preferences.iframeDblclick      === '1',
            imgDblclick:         preferences.imgDblclick         === '1',
            inputDblclick:       preferences.inputDblclick       === '1',
            selectDblclick:      preferences.selectDblclick      === '1',
            videoDblclick:       preferences.videoDblclick       === '1',
            canvasDblclick:      preferences.canvasDblclick      === '1',
            objectEmbedDblclick: preferences.objectEmbedDblclick === '1'
        },
        _docBody = document.body,
        _docElement = document.documentElement;


    // for WML pages...
    if (!(_docElement instanceof window.HTMLHtmlElement)) {
        return;
    }


    function getOffset(obj) {
        var offset = {top: obj.offsetTop, left: obj.offsetLeft}, parent = obj.offsetParent;

        while (null !== parent) {
            offset.top += parent.offsetTop;
            offset.left += parent.offsetLeft;
            parent = parent.offsetParent;
        }

        return offset;
    }


    function isHidden(obj) {
        while (obj && obj !== _docBody && obj !== _docElement) {
            var style = window.getComputedStyle(obj, null);
            if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === "0") {
                return true;
            }
            obj = obj.parentElement;
        }

        return false;
    }


    function isFixed(obj) {
        while (obj && obj !== _docBody && obj !== _docElement) {
            if (window.getComputedStyle(obj, null).position === 'fixed') {
                return true;
            }
            obj = obj.parentElement;
        }

        return false;
    }


    function calculatePosition() {
        if (!current) {
            return [0, 0];
        }
        var offset = getOffset(current);

        return [offset.left + current.offsetWidth - markerWidth, offset.top + current.offsetHeight - markerHeight];
    }


    function updatePosition() {
        if (null === marker) {
            return;
        }

        var pos = calculatePosition();

        switch (isFixed(current) === true) {
            case true:
                marker.style.position = 'fixed';
                marker.style.left = (pos[0] - window.pageXOffset) + 'px';
                marker.style.top = (pos[1] - window.pageYOffset) + 'px';
                break;


            case false:
                marker.style.position = 'absolute';
                marker.style.left = pos[0] + 'px';
                marker.style.top = pos[1] + 'px';
                break;
        }
    }


    function onMouseOut() {
        if (move === false) {
            removeMarkerTimeout = window.setTimeout(detachResizeMarker, markerTimeout);
        }
    }


    function onMarkerMouseMove(e) {
        if (move === true && current && e) {
            var offset = getOffset(current);
            var tag = current.tagName.toUpperCase(),
                w = e.clientX - offset.left + window.pageXOffset,
                h = e.clientY - offset.top + window.pageYOffset;

            if (w > config.markerMinWidth) {
                current.style.width = w + 'px !important';
            }

            if (h > config.markerMinHeight && (tag === 'TEXTAREA' || tag === 'IMG' || tag === 'IFRAME' || tag === 'VIDEO' || tag === 'OBJECT' || tag === 'EMBED' || tag === 'CANVAS' || (tag === 'SELECT' && current.multiple === true))) {
                current.style.height = h + 'px !important';
            }

            updatePosition();
        }
    }


    function onMarkerMouseUp(e) {
        move = false;
        if (!e.target || (e.target !== current && e.target !== marker)) {
            removeMarkerTimeout = window.setTimeout(detachResizeMarker, markerTimeout);
        }
    }


    function detachResizeMarker() {
        if (null !== marker) {
            marker.parentNode.removeChild(marker);
        }

        if (current) {
            current.removeEventListener('mouseout', onMouseOut, false);
        }

        current = null;
        move = false;
        marker = null;

        document.removeEventListener('mousemove', onMarkerMouseMove, false);
        document.removeEventListener('mouseup', onMarkerMouseUp, false);
    }


    function attachResizeMarker(obj) {
        if (move === true || !obj || obj === current) {
            return;
        }

        detachResizeMarker();
        current = obj;

        var tag = obj.tagName.toUpperCase(),
            m = document.createElement('div'),
            pos = calculatePosition();

        //m.title = 'Resize';
        m.setAttribute('style',
            'left: ' + pos[0] + 'px;' +
            'top: ' + pos[1] + 'px;' +
            'width: ' + markerWidth + 'px;' +
            'height: ' + markerHeight + 'px;' +
            'cursor: se-resize;' +
            'border: none;' +
            'position: absolute;' +
            'z-index: 2147483647;' +
            'padding: 0;' +
            'margin: 0;' +
            'background: transparent url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs%2B9AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAXklEQVQYlY3OwQmAMBAAwU2sIITUoGAZl2IvkMZEbOH0I%2BJDvOx7HhuMj8xo2gGoIuSSzjiCmnbiCAJe8AdVkRs6KJdEHEFNO9Myry56Hj1URQj7drgol0QwMxc17VzVhljiijeJtgAAAABJRU5ErkJggg%3D%3D") no-repeat 50% 50%;'
        );

        if ((tag === 'TEXTAREA' && config.textareaDblclick === true) ||
            (tag === 'IMG' && config.imgDblclick === true) ||
            (tag === 'INPUT' && config.inputDblclick === true) ||
            (tag === 'SELECT' && config.selectDblclick === true) ||
            (tag === 'IFRAME' && config.iframeDblclick === true) ||
            (tag === 'VIDEO' && config.videoDblclick === true) ||
            (tag === 'CANVAS' && config.canvasDblclick === true) ||
            ((tag === 'OBJECT' || tag === 'EMBED') && config.objectEmbedDblclick === true)) {
            var style = window.getComputedStyle(obj, null);
            obj.defaultWidth = (obj.defaultWidth ? obj.defaultWidth : style.width);
            obj.defaultHeight = (obj.defaultHeight ? obj.defaultHeight : style.height);

            m.addEventListener('dblclick', function () {
                current.style.width = obj.defaultWidth;
                current.style.height = obj.defaultHeight;
                onMouseOut();
            }, false);
        }

        m.addEventListener('mousedown', function (e) {
            e.preventDefault();
            move = true;
        }, false);

        m.addEventListener('mouseup', function () {
            move = false;
        }, false);

        m.addEventListener('mouseout', function () {
            onMouseOut();
        }, false);

        current.addEventListener('mouseout', onMouseOut, false);

        document.addEventListener('mousemove', onMarkerMouseMove, false);
        document.addEventListener('mouseup', onMarkerMouseUp, false);

        marker = _docElement.appendChild(m);
        updatePosition();
    }


    document.addEventListener('mouseover', function (e) {
        var target = e.target;

        if (target) {
            var modifierKey = true, tag = target.tagName.toUpperCase();

            switch (config.pressModifierKey) {
                case '1':
                    modifierKey = e.shiftKey === true;
                    break;


                case '2':
                    modifierKey = e.ctrlKey === true;
                    break;


                case '3':
                    modifierKey = e.altKey === true;
                    break;
            }

            if ((typeof target.style !== 'undefined' && target.style.resize !== 'none') && modifierKey && (
                (tag === 'TEXTAREA' && config.textarea === true) ||
                (tag === 'SELECT' && config.select === true) || (tag === 'OPTION' && config.select === true && (/* fix for <select> */tag = 'SELECT', target = target.parentElement)) ||
                (tag === 'IFRAME' && config.iframe === true) ||
                (tag === 'IMG' && config.img === true && target.width > config.imgMinWidth && target.height > config.imgMinHeight) ||
                (tag === 'VIDEO' && config.video === true) ||
                (tag === 'CANVAS' && config.canvas === true) ||
                ((tag === 'OBJECT' || tag === 'EMBED') && config.objectEmbed === true) ||
                (tag === 'INPUT' && config.input === true && (
                    config.inputText === true && target.type === 'text' ||
                    config.inputPassword === true && target.type === 'password' ||
                    config.inputFile === true && target.type === 'file' ||
                    config.inputEmail === true && target.type === 'email' ||
                    config.inputSearch === true && target.type === 'search' ||
                    config.inputTel === true && target.type === 'tel' ||
                    config.inputUrl === true && target.type === 'url')
                )
            ) && (isHidden(target) === false)) {
                attachResizeMarker(target);
                if (target === current) {
                    window.clearTimeout(removeMarkerTimeout);
                }
            } else if (target === marker) {
                window.clearTimeout(removeMarkerTimeout);
            } else if (move === false) {
                detachResizeMarker();
            }
        }
    }, false);
}, false);