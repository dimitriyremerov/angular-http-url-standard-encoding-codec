"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpUrlStandardEncodingCodec = /** @class */ (function () {
    function HttpUrlStandardEncodingCodec() {
    }
    HttpUrlStandardEncodingCodec.prototype.encodeKey = function (key) {
        return encodeURIComponent(key);
    };
    HttpUrlStandardEncodingCodec.prototype.encodeValue = function (value) {
        return encodeURIComponent(value);
    };
    HttpUrlStandardEncodingCodec.prototype.decodeKey = function (key) {
        return decodeURIComponent(key);
    };
    HttpUrlStandardEncodingCodec.prototype.decodeValue = function (value) {
        return decodeURIComponent(value);
    };
    return HttpUrlStandardEncodingCodec;
}());
exports.HttpUrlStandardEncodingCodec = HttpUrlStandardEncodingCodec;
