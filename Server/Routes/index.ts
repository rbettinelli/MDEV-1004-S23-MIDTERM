// -------------------------------------------------------------
// - Robert Bettinelli - MDEV1004 - S2023 - MidTerm
// - 090003683@student.georgianc.on.ca
// -------------------------------------------------------------
// (Routes) index.ts - As Provided in Class Instruction
// Personally entered and followed as pert of in class learning.
// -------------------------------------------------------------
// 06/19/2023 - RBettinelli - Header and Documentation Added
// -------------------------------------------------------------

import express, { response } from 'express';
let router = express.Router();

import {DisplayBookList, DisplayBookByID, AddBook, UpdateBook, DeleteBook, DisplayBookListTitle } from '../Controllers/book';

// Book List Route
router.get('/list', function(req, res, next) {
  DisplayBookList(req, res, next);
});

// Book List movieID & Titles Route
router.get('/listTitle', function(req, res, next) {
  DisplayBookListTitle(req, res, next);
});

// Book Find By ID Route
router.get('/find/:id', function(req, res, next) {
  DisplayBookByID(req, res, next);
});

// Book Add Document Route
router.post('/add', function(req, res, next) {
  AddBook(req, res, next);
});

// Book Delete By ID Route
router.delete('/delete/:id', function(req, res, next) {
  DeleteBook(req, res, next);
});

// Book Update Document By ID Route
router.put('/update/:id', function(req, res, next) {
  UpdateBook(req, res, next);
});

export default router;