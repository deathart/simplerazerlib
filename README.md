# simplerazerlib
Simple library for accessing the REST API razer

#How to use
```javascript
const ChromaSDK = require('./ChromaSDK');
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
chroma.createKeyboardEffect("CHROMA_STATIC", 255);

chroma.createMousematEffect("CHROMA_STATIC", 255);

chroma.createMouseEffect("CHROMA_STATIC", 255);
```

#How to use rgb
```javascript
const Color = require('./color');

chroma.createKeyboardEffect("CHROMA_STATIC", new Color(255, 0, 0));
```