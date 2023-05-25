var express = require('express');
var loanController = require('../controllers/ loansController')
var router = express.Router();

/* GET users listing. */
router.get('/', loanController.getAllLoans);
router.get('/:id', loanController.getLoanById);
router.delete('/:id', loanController.deleteLoan);
router.post('/', loanController.createLoan);
router.put('/:id', loanController.updateLoan)

module.exports = router;
