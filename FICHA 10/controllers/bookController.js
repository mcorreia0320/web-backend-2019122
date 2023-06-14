const {Loan, User, Book } = require('../sequelize');

exports.getAllBooks = (req,res,next) =>{
    Book.findAll().then(result =>{
        res.send(result);
    })
}
exports.getBookById = (req,res,next) =>{
    id = req.params.id;
    Book.findByPk(id).then(result =>{
        res.send(result);
    })
}
exports.createBook = (req,res,next)=>{
    Book.create({
        title: 'Las Cronicas de Narnia',
        author_name: 'Miguel Correia',
        publication_date: '2022-10-10',
        genre: 'Adventure',
        available_copies: 100
    }).then(result =>{
        res.send(result)
    })
}
exports.deleteBook = (req,res,next)=>{
    Book.destroy({
        where:{
            id: req.params.id
        }
    }).then(result =>{
        res.send('O livro com o ID: ' + req.params.id + ' foi eliminado e o numero de linhas afetadas foram ' + result)
    })
}
exports.updateBook = (req,res,next)=>{
    Book.update(
        {
        publication_date: '2023-01-10',
        available_copies: 50
        },

        { where: {id:req.params.id} }
    ).then(result =>{
        res.send('O livro com o ID: ' + req.params.id + ' foi atualizado e o numero de linhas afetadas foram ' + result)
    })
}
