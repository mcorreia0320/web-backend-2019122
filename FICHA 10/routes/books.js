var express = require('express');
var bookController = require('../controllers/bookController')
var router = express.Router();

/* GET users listing. */
router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.delete('/:id', bookController.deleteBook);
router.post('/', bookController.createBook);
router.put('/:id', bookController.updateBook)

module.exports = router;
