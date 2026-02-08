const express = require('express');
const router = express.Router();
const BookController = require('../controllers/BookController');

router.get('/', BookController.index);
router.get('/add', BookController.createForm);
router.post('/add', BookController.create);
router.get('/edit/:id', BookController.editForm);
router.post('/edit/:id', BookController.update);
router.get('/delete/:id', BookController.delete);

module.exports = router;
