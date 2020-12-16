import HttpError from "../model/http-error";
import Book from "../model/Book";
import User from "../model/User";
import { RequestHandler } from "express";

export const getBooks: RequestHandler = async (req, res, next) => {
  try {
    const books: object = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    return next(new HttpError("Unable to fetch all books", 500));
  }
};
export const getBook: RequestHandler = async (req, res, next) => {
  const bid: string = req.params.bid;

  try {
    const book = await Book.findById(bid);
    if (!book) return next(new HttpError("wrong book id", 422));
    res.status(200).json(book);
  } catch (error) {
    return next(new HttpError("Unable to fetch book, Try again later", 500));
  }
};

export const getBooksByStudentId: RequestHandler = (req, res, next) => {};

export const createBook: RequestHandler = async (req, res, next) => {
  const { name, author, total_books, book_id } = req.body;
  const createdBook = new Book({
    name,
    author,
    book_image:
      "http://images.amazon.com/images/P/0596004605.01._SCMZZZZZZZ_.jpg",
    total_books,
    issue: false,
    book_id,
  });

  try {
    await createdBook.save();
  } catch (error) {
    return next(new HttpError("Book Creation  failed, please try again.", 500));
  }

  res.status(200).json(createdBook);
};

export const updateBook: RequestHandler = async (req, res, next) => {
  const { name, author, book_id, total_books } = req.body;
  const bid = req.params.bid;

  try {
    const book = await Book.findById(bid);

    if (!book) return next(new HttpError("Book Not Found", 404));

    if (book) {
      name && (book.name = name);
      author && (book.author = author);
      book_id && (book.book_id = book_id);
      total_books && (book.total_books = total_books);
    }
    try {
      await book.save();
      res.status(200).json(book);
    } catch (error) {
      return next(
        new HttpError("Could not Update Book,someting went wrong", 500)
      );
    }
  } catch (error) {
    return next(
      new HttpError("Some thing went wrong, could not find book", 500)
    );
  }
};

export const deleteBook: RequestHandler = async (req, res, next) => {
  const bid = req.params.bid;
  try {
    const book = await Book.findByIdAndDelete(bid);
    if (!book) {
      return next(new HttpError("book not found ,invalid id", 404));
    } else {
      res.status(204).json(book);
    }
  } catch (error) {
    return next(new HttpError("Unable to delete , Some thing went wrong", 500));
  }
};
export const issueBook: RequestHandler = async (req, res, next) => {
  const bookId = req.params.bid;
  const studentId = req.params.id;

  try {
    // getStudent from student id
    const student = await User.findById(studentId).populate("data");
    if (!student) return next(new HttpError("Student Not Found", 404));
    // getBook from book id
    const book = await Book.findById(bookId);
    if (!book) return next(new HttpError("Book Not Found", 404));

    try {
      student.data.requestedBooks.push(book);
      await student.data.save();
      res.status(201).json({ message: "Book requested" });
    } catch (error) {
      return next(
        new HttpError(
          "Unable to add book to request array,something went wrong",
          500
        )
      );
    }
  } catch (error) {
    new HttpError("Unable to Issue Book, Something went Wrong", 500);
  }
};
