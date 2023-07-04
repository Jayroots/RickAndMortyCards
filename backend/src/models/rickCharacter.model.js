const database = require("../datasource.js") ;

const findAll = async ()=>{
   return await database.query("SELECT * FROM rick_and_morty_character");
};

const findById = async (id)=>{
    return await  database.query("SELECT * FROM rick_and_morty_character WHERE id = ?", [id]);
};

const insertCharacter = async (name, status, gender, species, image)=>{
    return await database.query("INSERT INTO rick_and_morty_character(name, status, gender, species, image)VALUES(?,?,?,?,?)",
    [name, status, gender, species, image])
};

module.exports ={
findAll,
findById,
insertCharacter,
};