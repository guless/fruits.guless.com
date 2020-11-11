/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/// @Copyright ~2020 ☜Samlv9☞ and other contributors
/// @MIT-LICENSE | 6.0 | https://developers.guless.com/
/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import fs from "fs";
import http from "http";
import https from "https";
import express from "express";

const privateKey = fs.readFileSync("./private/fruits.guless.com.key", "utf-8");
const certificate = fs.readFileSync("./private/fruits.guless.com.pem", "utf-8");
const app = express();

app.use("/", express.static("./dist/www/"));

const httpServer = http.createServer(app);
const httpsServer = https.createServer({ key: privateKey, cert: certificate }, app);

httpServer.listen(80);
httpsServer.listen(443);
