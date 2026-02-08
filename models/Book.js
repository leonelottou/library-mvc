let books = [];

class Book {
  constructor(id, title, author, year) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
  }

  static getAll() { return books; }
  static getById(id) { return books.find(b => b.id === id); }
  static create(book) { books.push(book); }
  static update(id, data) {
    const book = books.find(b => b.id === id);
    if (book) {
      book.title = data.title;
      book.author = data.author;
      book.year = data.year;
    }
  }
  static delete(id) {
    books = books.filter(b => b.id !== id);
  }
}

module.exports = Book;
