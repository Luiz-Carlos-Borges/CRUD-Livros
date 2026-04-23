const livroModel = require("../models/livroModel")

const getAllLivros = (req, res) => {
    const livros = livroModel.findAll()

   return res.send(livros)
}

const createLivro = (req,res) =>{
     const { title, author } = req.body
    
    //const title = req.body.title
    
    //const newLivro = {
    // title:title,
    // author:author
    //}

    const newLivro = {
        id : Date.now(),
        title,
        author
    }

    const createdLivro = livroModel.create(newLivro)
    
    res.status(201).json(createdLivro)
}

const getLivroById = (req, res) =>{
    const id = req.params.id

    const livro = livroModel.findById(id)

    if ( !livro ) {
        res.status(404).json({
            message: "Livro não encontrado."
        })
    }

    return res.json(livro)
}

const updateLivro = (req, res) => {
    const {id} = req.params

    const {
        title,
        author
    } = req.body

    const LivroToUpdate = {
        title: title,
        author: author
    }

   const updatedLivro = livroModel.update(id, LivroToUpdate)
    
    if ( !updatedLivro ) {
        res.status(404).json({
            message: "Livro não encontrado."
        })
    }

   return res.json(updatedLivro)
}

const deleteLivro = (req, res) =>{
    const id = Number(req.params.id) 

    const livro = livroModel.remove(id)

       if ( !livro ) {
        res.status(404).json({
            message: "Livro não encontrado."
        })
    }

   return res.json(livro)
}

module.exports = {
    getAllLivros,
    createLivro,
    getLivroById,
    updateLivro,
    deleteLivro
}