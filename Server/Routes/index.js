"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let router = express_1.default.Router();
const book_1 = require("../Controllers/book");
router.get('/list', function (req, res, next) {
    (0, book_1.DisplayBookList)(req, res, next);
});
router.get('/listTitle', function (req, res, next) {
    (0, book_1.DisplayBookListTitle)(req, res, next);
});
router.get('/find/:id', function (req, res, next) {
    (0, book_1.DisplayBookByID)(req, res, next);
});
router.post('/add', function (req, res, next) {
    (0, book_1.AddBook)(req, res, next);
});
router.delete('/delete/:id', function (req, res, next) {
    (0, book_1.DeleteBook)(req, res, next);
});
router.put('/update/:id', function (req, res, next) {
    (0, book_1.UpdateBook)(req, res, next);
});
exports.default = router;
//# sourceMappingURL=index.js.map