"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = require("express");
const helmet_1 = __importDefault(require("helmet"));
const app_1 = __importDefault(require("../app"));
app_1.default.use((0, cors_1.default)());
if (process.env.NODE_ENV === 'production')
    app_1.default.use((0, helmet_1.default)());
app_1.default.use((0, express_1.urlencoded)({ extended: false }));
exports.default = app_1.default;
