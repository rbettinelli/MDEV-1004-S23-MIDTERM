"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let bookSchema = new mongoose_1.Schema({
    bookID: Number,
    authors: [String],
    genres: [String],
    country: String,
    description: String,
    publication: String,
    publisher: String,
    pageCount: Number,
    language: String,
    isbn: String,
    imageURL: String
});
let Book = (0, mongoose_1.model)('books', bookSchema);
exports.default = Book;
//# sourceMappingURL=book.js.map