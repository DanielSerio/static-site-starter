"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainController = void 0;
function MainController() {
    function indexPage(_, res) {
        res.render('pages/index.pug', { title: 'Home' });
    }
    return {
        indexPage
    };
}
exports.MainController = MainController;
