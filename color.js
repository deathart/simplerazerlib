"use strict";

module.exports = class Color {
    constructor(r, g = null, b = null) {
        this.isKey = false;
        if (g === null && b === null && r !== null) {
            if (typeof r === "string") {
                const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);
                this.r = parseInt(result[1], 16);
                this.g = parseInt(result[2], 16);
                this.b = parseInt(result[3], 16);
            }
            else {
                this.b = (r >> 16) & 0xff; // tslint:disable-line:no-bitwise
                this.g = (r >> 8) & 0xff; // tslint:disable-line:no-bitwise
                this.r = (r >> 0) & 0xff; // tslint:disable-line:no-bitwise
            }
        }
        else {
            this.r = Math.round(r);
            this.g = Math.round(g);
            this.b = Math.round(b);
        }
        if (this.r > 255) {
            this.r = 255;
        }
        if (this.g > 255) {
            this.g = 255;
        }
        if (this.b > 255) {
            this.b = 255;
        }
        if (this.r < 0) {
            this.r = 0;
        }
        if (this.g < 0) {
            this.g = 0;
        }
        if (this.b < 0) {
            this.b = 0;
        }
    }
    toBGR() {
        let rhex = this.r.toString(16);
        if (rhex.length < 2) {
            rhex = "0" + rhex;
        }
        let ghex = this.g.toString(16);
        if (ghex.length < 2) {
            ghex = "0" + ghex;
        }
        let bhex = this.b.toString(16);
        if (bhex.length < 2) {
            bhex = "0" + bhex;
        }
        let result = bhex + ghex + rhex;
        if (this.isKey) {
            result = "ff" + result;
        }
        return parseInt(result, 16);
    }
    toJSON() {
        return this.toBGR();
    }
    toString() {
        return this.r + " " + this.g + " " + this.b;
    }
}