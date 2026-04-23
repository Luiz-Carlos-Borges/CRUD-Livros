const livros = require("../data/livros")

const findAll = () => {
    return livros
}

const create = (newLivro) => {
    livros.push(newLivro)

    return newLivro
}
const tamanhoArray = livros.length
console.log(tamanhoArray)

const findById = (id) => {
    // for (let i = 0; i < livros.length; i++ ){
    //     if (livros[i].id == id){
    //       return livros[i] 
    //     }
    // }

    // return null

   return livros.find( livro => livro.id == id )
}

const update = (id, newLivro) => {
  const livro = livros.find( livro => livro.id == id )

    if (!livro){
        return undefined
    }

    //   livro = {
    //     id: livro.id,
    //    title: newLivro.title,
    //    author: newLivro.author
    //   }

    //   return livro
    // 

    if (newLivro.title){
        livro.title = newLivro.title
    }

    if (newLivro.author){
    livro.author = newLivro.author
    }

    return livro
}

const remove = (id) => {
    const index = livros.findIndex( livro => livro.id === id )

    const livro = livros[index]

    if (!livro){
        return undefined
    }
    
    livros.splice(index, 1)

    return livro
}

module.exports = {
    findAll,
    create,
    findById,
    update,
    remove}