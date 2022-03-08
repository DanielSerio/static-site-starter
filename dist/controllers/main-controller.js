"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainController = void 0;
function MainController() {
    function indexPage(_, res) {
        res.render('pages/index.pug', { title: 'Home' });
    }
    function aboutPage(_, res) {
        res.render('pages/about.pug', { title: 'About' });
    }
    function contactPage(_, res) {
        res.render('pages/contact.pug', { title: 'Contact' });
    }
    return {
        indexPage,
        aboutPage,
        contactPage
    };
}
exports.MainController = MainController;
