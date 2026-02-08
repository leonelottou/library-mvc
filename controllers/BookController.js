const fs = require('fs');
const path = require('path');
const Book = require('../models/Book');

const BookController = {
  index: (req, res) => {
    const books = Book.getAll();

    // Charger le template HTML
    let template = fs.readFileSync(path.join(__dirname, '../views/index.html'), 'utf8');

    // Générer les lignes de la table
    const rows = books.map(b => `
      <tr>
        <td>${b.title}</td>
        <td>${b.author}</td>
        <td>${b.year}</td>
        <td>
          <a class="btn btn-sm btn-warning" href="/edit/${b.id}">Modifier</a>
          <a class="btn btn-sm btn-danger" href="/delete/${b.id}">Supprimer</a>
        </td>
      </tr>
    `).join('');

    // Injecter les lignes dans le template
    template = template.replace('{{BOOKS}}', rows);

    res.send(template);
  },

  createForm: (req, res) => {
    const template = fs.readFileSync(path.join(__dirname, '../views/add.html'), 'utf8');
    res.send(template);
  },

  create: (req, res) => {
    const { title, author, year } = req.body;
    const id = Date.now();
    Book.create(new Book(id, title, author, year));
    res.redirect('/');
  },

  editForm: (req, res) => {
    const book = Book.getById(parseInt(req.params.id));
    if (!book) return res.send('Livre non trouvé');
    let template = fs.readFileSync(path.join(__dirname, '../views/edit.html'), 'utf8');
    template = template
      .replace('{{ID}}', book.id)
      .replace('{{TITLE}}', book.title)
      .replace('{{AUTHOR}}', book.author)
      .replace('{{YEAR}}', book.year);
    res.send(template);
  },

  update: (req, res) => {
    const { id } = req.params;
    Book.update(parseInt(id), req.body);
    res.redirect('/');
  },

  delete: (req, res) => {
    const { id } = req.params;
    Book.delete(parseInt(id));
    res.redirect('/');
  }
};

module.exports = BookController;
