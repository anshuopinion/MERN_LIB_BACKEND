import HttpError from "../model/http-error.js";
import Book from "../model/book.js";
const DUMMUY_BOOKS = [
  {
    name: "bookName",
    author: "author",
    bookImage: {
      name: "name of image",
      url: "http://images.amazon.com/images/P/0596004605.01._SCMZZZZZZZ_.jpg",
    },
    issue: false,
    total_book: 45,
    bookid: 4554,
  },
];

export const getBooks = (req, res, next) => {
  res.status(200).json(DUMMUY_BOOKS);
};
export const getBook = (req, res, next) => {};

export const getBooksByStudentId = (req, res, next) => {};

export const createBook = async (req, res, next) => {
  const { name, author, totalBook, bookId } = req.body;
  const createdBook = new Book({
    name,
    author,
    bookImage:
      "http://images.amazon.com/images/P/0596004605.01._SCMZZZZZZZ_.jpg",
    totalBook,
    issue: false,
    bookId,
  });

  try {
    await createdBook.save();
  } catch (error) {
    return next(new HttpError("Book Creation  failed, please try again.", 500));
  }

  res.status(200).json(createdBook);
};

export const updateBook = (req, res, next) => {};

export const deleteBook = (req, res, next) => {};
