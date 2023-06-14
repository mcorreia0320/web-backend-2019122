const {Loan, User, Book } = require('../sequelize');

exports.getAllLoans = (req,res,next) =>{
    Loan.findAll({include: [User, Book]}).then(result =>{
        res.send(result);
    })
}
exports.getLoanById = (req,res,next) =>{
    id = req.params.id;
    Loan.findByPk(id).then(result =>{
        res.send(result);
    })
}
exports.createLoan = (req,res,next)=>{
    Loan.create({
        loan_date: '2019-04-10',
        return_date: '2019-05-10'
    }).then(result =>{
        res.send(result)
    })
}
exports.deleteLoan = (req,res,next)=>{
    Loan.destroy({
        where:{
            id: req.params.id
        }
    }).then(result =>{
        res.send('O loan com o ID: ' + req.params.id + ' foi eliminado e o numero de linhas afetadas foram ' + result)
    })
}
exports.updateLoan = (req,res,next)=>{
    Loan.update(
        {
            loan_date: '2019-06-10',
            return_date: '2019-10-12'
        },

        { where: {id:req.params.id} }
    ).then(result =>{
        res.send('O loan com o ID: ' + req.params.id + ' foi atualizado e o numero de linhas afetadas foram ' + result)
    })
}
