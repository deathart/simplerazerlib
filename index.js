const request = require('request');

module.exports = class ChromaSDK {
    constructor(info) {

        this.options = {
            url: 'http://localhost:54235/razer/chromasdk',
            method: "POST",
            body: info,
            json: true
        }

    }

    GetUri(callback) {
        request(this.options, (error, response, body) => {
            if (response.statusCode == 200) {
                let uri = body.uri
                setInterval(function() {
                    request.put(uri + '/heartbeat')
                }, 10000);
                return callback(uri)
            }
            else {
                console.log("ERROR")
            }
        }) 
    }

    createKeyboardEffect(effect, data) {
        
        this.GetUri(function(datauri) {

            var jsonObj;

            if (effect == "CHROMA_NONE") {
                jsonObj = { "effect": effect };
            } else if (effect == "CHROMA_CUSTOM") {
                jsonObj = { "effect": effect, "param": data };
            } else if (effect == "CHROMA_STATIC") {
                var color = { "color": data };
                jsonObj = { "effect": effect, "param": color };
            } else if (effect == "CHROMA_CUSTOM_KEY") {
                jsonObj = { "effect": effect, "param": data };
            }

            request({
                url: datauri + "/keyboard",
                method: "POST",
                json: true,
                body: jsonObj}, (error, response, res) => {
                    if (response.statusCode == 200) {
                        request({
                            url: datauri + "/effect",
                            method: "PUT",
                            json: true,
                            body: { "id": res.id }}, (error, response, res) => {
                                if (response.statusCode == 200) {
                                    return res.result
                                }
                                else {
                                    console.error(response.toJSON())
                                }
                        });
                    }
                    else {
                        console.error(response.toJSON())
                    }
            });

        })
    }

    createMousematEffect(effect, data) {
        this.GetUri(function(datauri) {

            var jsonObj;

            if (effect == "CHROMA_NONE") {
                jsonObj = { "effect": effect };
            } else if (effect == "CHROMA_CUSTOM") {
                jsonObj = { "effect": effect, "param": data };
            } else if (effect == "CHROMA_STATIC") {
                var color = { "color": data };
                jsonObj = { "effect": effect, "param": color };
            }

            request({
                url: datauri + "/mousepad",
                method: "POST",
                json: true,
                body: jsonObj}, (error, response, res) => {
                    if (response.statusCode == 200) {
                        request({
                            url: datauri + "/effect",
                            method: "PUT",
                            json: true,
                            body: { "id": res.id }}, (error, response, res) => {
                                if (response.statusCode == 200) {
                                    return res.result
                                }
                                else {
                                    console.error(response.toJSON())
                                }
                        });
                    }
                    else {
                        console.error(response.toJSON())
                    }
            });

        })
    }

    createMouseEffect(effect, data) {
        this.GetUri(function(datauri) {

            var jsonObj;

            if (effect == "CHROMA_NONE") {
                jsonObj = { "effect": effect };
            } else if (effect == "CHROMA_CUSTOM2") {
                jsonObj = { "effect": effect, "param": data };
            } else if (effect == "CHROMA_STATIC") {
                var color = { "color": data };
                jsonObj = { "effect": effect, "param": color };
            }

            request({
                url: datauri + "/mouse",
                method: "POST",
                json: true,
                body: jsonObj}, (error, response, res) => {
                    if (response.statusCode == 200) {
                        request({
                            url: datauri + "/effect",
                            method: "PUT",
                            json: true,
                            body: { "id": res.id }}, (error, response, res) => {
                                if (response.statusCode == 200) {
                                    return res.result
                                }
                                else {
                                    console.error(response.toJSON())
                                }
                        });
                    }
                    else {
                        console.error(response.toJSON())
                    }
            });

        })
    }

    createHeadsetEffect(effect, data) {
        this.GetUri(function(datauri) {

            var jsonObj;

            if (effect == "CHROMA_NONE") {
                jsonObj = { "effect": effect };
            } else if (effect == "CHROMA_CUSTOM") {
                jsonObj = { "effect": effect, "param": data };
            } else if (effect == "CHROMA_STATIC") {
                var color = { "color": data };
                jsonObj = { "effect": effect, "param": color };
            }

            request({
                url: datauri + "/headset",
                method: "POST",
                json: true,
                body: jsonObj}, (error, response, res) => {
                    if (response.statusCode == 200) {
                        request({
                            url: datauri + "/effect",
                            method: "PUT",
                            json: true,
                            body: { "id": res.id }}, (error, response, res) => {
                                if (response.statusCode == 200) {
                                    return res.result
                                }
                                else {
                                    console.error(response.toJSON())
                                }
                        });
                    }
                    else {
                        console.error(response.toJSON())
                    }
            });

        });
    }

    createKeypadEffect(effect, data) {
        this.GetUri(function(datauri) {

            var jsonObj;

            if (effect == "CHROMA_NONE") {
                jsonObj = { "effect": effect };
            } else if (effect == "CHROMA_CUSTOM") {
                jsonObj = { "effect": effect, "param": data };
            } else if (effect == "CHROMA_STATIC") {
                var color = { "color": data };
                jsonObj = { "effect": effect, "param": color };
            }

            request({
                url: datauri + "/keypad",
                method: "POST",
                json: true,
                body: jsonObj}, (error, response, res) => {
                    if (response.statusCode == 200) {
                        request({
                            url: datauri + "/effect",
                            method: "PUT",
                            json: true,
                            body: { "id": res.id }}, (error, response, res) => {
                                if (response.statusCode == 200) {
                                    return res.result
                                }
                                else {
                                    console.error(response.toJSON())
                                }
                        });
                    }
                    else {
                        console.error(response.toJSON())
                    }
            });

        });
    }

    createChromaLinkEffect(effect, data) {
        this.GetUri(function(datauri) {

            var jsonObj;

            if (effect == "CHROMA_NONE") {
                jsonObj = { "effect": effect };
            } else if (effect == "CHROMA_CUSTOM") {
                jsonObj = { "effect": effect, "param": data };
            } else if (effect == "CHROMA_STATIC") {
                var color = { "color": data };
                jsonObj = { "effect": effect, "param": color };
            }

            request({
                url: datauri + "/chromalink",
                method: "POST",
                json: true,
                body: jsonObj}, (error, response, res) => {
                    if (response.statusCode == 200) {
                        request({
                            url: datauri + "/effect",
                            method: "PUT",
                            json: true,
                            body: { "id": res.id }}, (error, response, res) => {
                                if (response.statusCode == 200) {
                                    return res.result
                                }
                                else {
                                    console.error(response.toJSON())
                                }
                        });
                    }
                    else {
                        console.error(response.toJSON())
                    }
            });

        });
    }

}