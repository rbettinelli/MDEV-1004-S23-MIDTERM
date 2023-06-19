// -------------------------------------------------------------
// - Robert Bettinelli - MDEV1004 - S2023 - MidTerm
// - 090003683@student.georgianc.on.ca
// -------------------------------------------------------------
// (Models) book.ts - As Provided in Class Instruction
// Personally entered and followed as pert of in class learning.
// -------------------------------------------------------------
// 06/19/2023 - RBettinelli - Header and Documentation Added
// -------------------------------------------------------------

import { Schema, model } from "mongoose";

// Movie interface for Collecting data in specific types. 
interface IBook {
    bookID: number,
    title: string,
    authors: string[],
    genres: string[],
    country: string,
    description: string,
    publication: string,
    publisher: string,
    pageCount: number,
    language: string,
    isbn: string,
    imageURL: string
}

// Mongo DB schema Setup
let bookSchema = new Schema<IBook>({
    bookID: Number,
    title: String,
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

// Build Model Object as Interface utilizing Schema. 
let Book = model<IBook>('books', bookSchema);

export default Book;
