"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const main_controller_1 = require("./controllers/main-controller");
const middleware_1 = __importDefault(require("./middleware"));
const router = (0, express_1.Router)();
const { indexPage, aboutPage, contactPage } = (0, main_controller_1.MainController)();
router.get('/', indexPage);
router.get('/about', aboutPage);
router.get('/contact', contactPage);
middleware_1.default.use('/', router);
exports.default = middleware_1.default;
