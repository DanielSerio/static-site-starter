"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const router_1 = __importDefault(require("./router"));
const PORT = 4000;
const reload = require('reload');
const server = (0, http_1.createServer)(router_1.default);
function listen() {
    console.log(`http://127.0.0.1:${PORT}`);
}
function onSuccess() {
    server.listen(PORT, listen);
}
function onError(e) {
    console.table(e);
    process.exit(1);
}
reload(router_1.default)
    .then(onSuccess)
    .catch(onError);
