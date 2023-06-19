// -------------------------------------------------------------
// - Robert Bettinelli - MDEV1004 - S2023 - MidTerm
// - 090003683@student.georgianc.on.ca
// -------------------------------------------------------------
// (Controllers) book.ts - As Provided in Class Instruction
// Personally entered and followed as pert of in class learning.
// -------------------------------------------------------------
// 06/19/2023 - RBettinelli - Header and Documentation Added
// -------------------------------------------------------------

import { Request, Response, NextFunction } from 'express';
import Book from '../Models/book';

// UTILITY
// Takes Array and removes spaces @ Front and End
function SanitizeStringToArray(unsanitizedString: String): string[]
{

    console.log(unsanitizedString);
    let unsanitizedArray: string[] = unsanitizedString.split(",");
    let sanitizedArray: string[] = Array<string>();
    for (const unsanitizedString of unsanitizedArray) 
    {
        sanitizedArray.push(unsanitizedString.trim());
    }
    return sanitizedArray;
}

// API FUNCTIONS

// Pull All Mongo Database Documents and Outputs.
export function DisplayBookList(req: Request, res: Response, next: NextFunction): void
{
    
    Book.find({})
    .sort({ bookID: 1 })
    .then(function(data)
    {
        res.status(200).json(data);
    })
    .catch(function(err)
    {
        console.error(err);
    });
}

// Pull All Mongo Titles Database Documents and Outputs.
export function DisplayBookListTitle(req: Request, res: Response, next: NextFunction): void
{
    Book.find({}, { bookID: 1, title: 1 })
    .sort({ movieID: 1 })
    .then(function(data)
    {
        res.status(200).json(data);
    })
    .catch(function(err)
    {
        console.error(err);
    });
}

// Find by ID in MongoDB and Outputs.
export function DisplayBookByID(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;
    Book.findById({_id: id})
    .then(function(data)
    {
        res.status(200).json(data)
    })
    .catch(function(err)
    {
        console.error(err);
    });
}

// Add to MongoDB and Returns Move output.
export function AddBook(req: Request, res: Response, next: NextFunction): void
{
    console.log(req.body.bookID);
    // This section will take in-line Entry and Splits then Sanitizes
    // For unlimited Array of items.
    let genres = SanitizeStringToArray(req.body.genres);
    let authors = SanitizeStringToArray(req.body.authors);

    // Populates movie with data from API. 
    let book = new Book({
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

    // Post Data.
    Book.create(book)
    .then(function()
    {
        res.json(book);
    })
    .catch(function(err)
    {
        console.error(err);
    });
}

// See ADD functionality Above with the addition it only updated by _id
export function UpdateBook(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;
    let genres = SanitizeStringToArray(req.body.genres);
    let authors = SanitizeStringToArray(req.body.authors);

    let bookToUpdate = new Book({
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

    Book.updateOne({_id: id}, bookToUpdate)
    .then(function()
    {
        res.json(bookToUpdate);
    })
    .catch(function(err)
    {
        console.error(err);
    });
}

// Delete based on _id
export function DeleteBook(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    Book.deleteOne({_id: id})
    .then(function()
    {
        res.json(id);
    })
    .catch(function(err)
    {
        console.error(err);
    });
}
