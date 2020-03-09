const db = require('./conn'),
  bcrypt = require('bcryptjs');

class User {
  constructor(id, first_name, last_name, username, email, password) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.username = username;
    this.email = email;
    this.password = password;
  }

  checkPassword(hashedPassword) {
    return bcrypt.compareSync(this.password, hashedPassword);
  }

  async addUser() {
    try {
      const response = await db.one(
        `INSERT INTO users (first_name, last_name, username, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING id;`,
        [
          this.first_name,
          this.last_name,
          this.username,
          this.email,
          this.password
        ]
      );
      return response;
    } catch (error) {
      console.error('ERROR: ', error);
      return error;
    }
  }
  async loginUser() {
    try {
      const response = await db.one(
        `SELECT id, first_name, last_name, password FROM users WHERE email = $1;`,
        [this.email, this.password]
      );

      const isValid = this.checkPassword(response.password);

      if (!!isValid) {
        const { id, first_name, last_name } = response;
        return { isValid, id, first_name, last_name };
      } else {
        return { isValid };
      }
    } catch (error) {
      console.error('ERROR: ', error);
      return error;
    }
  }
}

module.exports = User;
