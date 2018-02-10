const ChromaSDK = require('./ChromaSDK');
const Color = require('./color');

let chroma = new ChromaSDK({
        "title": "Simple Razer Library",
        "description": "Simple library for accessing the REST API razer",
        "author": {
            "name": "Deathart",
            "contact": "http://github.com/deathart/simplerazerlib"
        },
        "device_supported": [
            "keyboard",
            "mouse",
            "headset",
            "mousepad",
            "keypad",
            "chromalink"],
        "category": "application"
    });

chroma.createKeyboardEffect("CHROMA_STATIC", new Color(255, 0, 0));

chroma.createMousematEffect("CHROMA_CUSTOM", [ 255, 255, 255, 255, 255, 65280, 65280, 65280, 65280, 65280, 16711680, 16711680, 16711680, 16711680, 16711680]);

chroma.createMouseEffect("CHROMA_STATIC", new Color(255, 0, 0));

process.stdin.resume();