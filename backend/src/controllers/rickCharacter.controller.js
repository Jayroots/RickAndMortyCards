const database = require("../datasource.js") ;

const getAllCharacters = (req,res)=>{
    database.query("SELECT * FROM rick_and_morty_character")
    .then(([result])=>{
        res.status(200).send(result)
    })
    .catch((err)=>{
        console.error("An error occured while retrieving data",err)
    })
}

const getCharacterById = (req,res)=>{
   const id = req.params.id;
   
    database.query("SELECT * FROM rick_and_morty_character WHERE id = ?", [id])
    .then(([result])=>{
        if (result.length){
            res.status(200).send(result)
        }else{res.status(404).send(`The character with the id ${id} probably doesn't exists`)}
    
    })
    .catch((err)=>{
        console.error("An error occured while retrieving data",err)
    })
}

module.exports = {
    getAllCharacters,
    getCharacterById,
}