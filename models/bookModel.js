const db = require('./conn');
bcrypt = require('bcryptjs');

class BookModel {
  constructor(id, title, author, publish_year, category) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.publish_year = publish_year;
    this.category = category;
  }
  static async getAllBooks() {
    try {
      const response = await db.any(`SELECT *
          FROM books;`);
      console.log(response);
      return response;
    } catch (error) {
      console.error('error: ', error);
      return error;
    }
  }
  static async getById(id) {
    try {
      const res = await db.any(`SELECT *
      FROM books
      WHERE books.id = ${id};`);
      console.log(res);
      return res;
    } catch (error) {
      console.error('ERROR: ', error);
    }
  }
  static async getRevById(id) {
    try {
      const res = await db.any(`SELECT *
      FROM reviews
      WHERE reviews.bookid = ${id};`);
      console.log(res);
      return res;
    } catch (error) {
      console.error('ERROR: ', error);
    }
  }
  static async addReview(bookid, revtitle, review) {
    try {
      const res = await db.one(
        `INSERT INTO reviews (reviewerid, bookid, revtitle, review) VALUES ($1, $2, $3, $4) RETURNING id`,
        [3, bookid, revtitle, review]
      );
      return res;
    } catch (error) {
      console.error('ERROR: ', error);
      return error;
    }
  }
}

module.exports = BookModel;
