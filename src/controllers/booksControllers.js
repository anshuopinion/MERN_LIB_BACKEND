import HttpError from "../model/http-error.js";
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

export const createBook = (req, res, next) => {
  const { name, author, total_book, bookid } = req.body;
  const book = {
    name,
    author,
    bookImage: {
      name: "name of image",
      url: "http://images.amazon.com/images/P/0596004605.01._SCMZZZZZZZ_.jpg",
    },
    issue: false,
    total_book,
    bookid,
  };

  DUMMUY_BOOKS.push(book);
  res.status(202).json({ message: "Book added to db" });
};

export const updateBook = (req,res,next) =>{

}

export const deleteBook = (req,res,next)=>{
  
}