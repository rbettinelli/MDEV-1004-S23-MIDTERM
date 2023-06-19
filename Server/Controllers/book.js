"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBook = exports.UpdateBook = exports.AddBook = exports.DisplayBookByID = exports.DisplayBookListTitle = exports.DisplayBookList = void 0;
const book_1 = __importDefault(require("../Models/book"));
function SanitizeStringToArray(unsanitizedString) {
    console.log(unsanitizedString);
    let unsanitizedArray = unsanitizedString.split(",");
    let sanitizedArray = Array();
    for (const unsanitizedString of unsanitizedArray) {
        sanitizedArray.push(unsanitizedString.trim());
    }
    return sanitizedArray;
}
function DisplayBookList(req, res, next) {
    book_1.default.find({})
        .sort({ bookID: 1 })
        .then(function (data) {
        res.status(200).json(data);
    })
        .catch(function (err) {
        console.error(err);
    });
}
exports.DisplayBookList = DisplayBookList;
function DisplayBookListTitle(req, res, next) {
    book_1.default.find({}, { bookID: 1, title: 1 })
        .sort({ movieID: 1 })
        .then(function (data) {
        res.status(200).json(data);
    })
        .catch(function (err) {
        console.error(err);
    });
}
exports.DisplayBookListTitle = DisplayBookListTitle;
function DisplayBookByID(req, res, next) {
    let id = req.params.id;
    book_1.default.findById({ _id: id })
        .then(function (data) {
        res.status(200).json(data);
    })
        .catch(function (err) {
        console.error(err);
    });
}
exports.DisplayBookByID = DisplayBookByID;
function AddBook(req, res, next) {
    console.log(req.body.bookID);
    let genres = SanitizeStringToArray(req.body.genres);
    let authors = SanitizeStringToArray(req.body.authors);
    let book = new book_1.default({
        bookID: req.body.bookID,
        title: req.body.title,
        authors: authors,
        genres: genres,
        country: req.body.country,
        description: req.body.description,
        publication: req.body.publication,
        publisher: req.body.publisher,
        pageCount: req.body.pageCount,
        language: req.body.language,
        isbn: req.body.isbn,
        imageURL: req.body.imageURL
    });
    book_1.default.create(book)
        .then(function () {
        res.json(book);
    })
        .catch(function (err) {
        console.error(err);
    });
}
exports.AddBook = AddBook;
function UpdateBook(req, res, next) {
    let id = req.params.id;
    let genres = SanitizeStringToArray(req.body.genres);
    let authors = SanitizeStringToArray(req.body.authors);
    let bookToUpdate = new book_1.default({
        _id: id,
        bookID: req.body.bookID,
        title: req.body.title,
        authors: authors,
        genres: genres,
        country: req.body.country,
        description: req.body.description,
        publication: req.body.publication,
        publisher: req.body.publisher,
        pageCount: req.body.pageCount,
        language: req.body.language,
        isbn: req.body.isbn,
        imageURL: req.body.imageURL
    });
    book_1.default.updateOne({ _id: id }, bookToUpdate)
        .then(function () {
        res.json(bookToUpdate);
    })
        .catch(function (err) {
        console.error(err);
    });
}
exports.UpdateBook = UpdateBook;
function DeleteBook(req, res, next) {
    let id = req.params.id;
    book_1.default.deleteOne({ _id: id })
        .then(function () {
        res.json(id);
    })
        .catch(function (err) {
        console.error(err);
    });
}
exports.DeleteBook = DeleteBook;
//# sourceMappingURL=book.js.map