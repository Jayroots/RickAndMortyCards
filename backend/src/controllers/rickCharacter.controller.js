const {findAll, findById, insertCharacter}=require('../models/rickCharacter.model.js');


const getAllCharacters = (req,res)=>{
   findAll()
    .then(([result])=>{
        res.status(200).send(result)
    })
    .catch((err)=>{
        console.error("An error occured while retrieving data",err)
    })
}

const getCharacterById = (req,res)=>{
   const id = req.params.id;
   
   findById(id)
    .then(([result])=>{
        if (result.length){
            res.status(200).send(result) 
        }else{res.status(404).send(`The character with the id ${id} probably doesn't exists`)}
    
    })
    .catch((err)=>{
        console.error("An error occured while retrieving data",err)
    })
}

const createCharacter=(req,res)=>{
    const{name, status, gender, species, image}=req.body;
    
    insertCharacter(name, status, gender, species, image)
    .then(([result])=>{
if(result.affectedRows){
    return res.status(201).send(`The character with the name ${name}has been created successfully`)
} return res.status(404).send("An error occured while creating character")
    })
    .catch((err)=>{
        console.error("Internal Server Error",err.message)
        res.status(500).send("Internal Server Error")
    })
};



module.exports = {
    getAllCharacters,
    getCharacterById,
    createCharacter,
}