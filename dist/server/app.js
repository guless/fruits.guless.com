"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/// @Copyright ~2020 ☜Samlv9☞ and other contributors
/// @MIT-LICENSE | 6.0 | https://developers.guless.com/
/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var fs_1 = __importDefault(require("fs"));
var http_1 = __importDefault(require("http"));
var https_1 = __importDefault(require("https"));
var express_1 = __importDefault(require("express"));
var privateKey = fs_1.default.readFileSync("./private/guless.com.key", "utf-8");
var certificate = fs_1.default.readFileSync("./private/guless.com.pem", "utf-8");
var app = express_1.default();
app.use("/", express_1.default.static("./dist/www/"));
var httpServer = http_1.default.createServer(app);
var httpsServer = https_1.default.createServer({ key: privateKey, cert: certificate }, app);
httpServer.listen(80);
httpsServer.listen(443);
