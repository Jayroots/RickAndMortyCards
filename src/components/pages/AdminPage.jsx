import { useState } from "react";

const AdminPage = () => {
const[formData,setFormData]=useState({
    name:"",
    status:"",
    gender:"",
    species:"",
    image:""
});

const handleChange= (e)=>{
    setFormData((previousValue)=>({
        ...previousValue, [e.target.name]:e.target.value
    }))
}
const handleSubmit=(e)=>{
    e.preventDefault();
    fetch("http://localhost:5006/characters",{
        headers:{
            'Accept':"application/json",
            'Content-Type': "application/json",
        },
        method:"POST",
        body: JSON.stringify(formData)
    })
    .then(()=>{
        console.log("Insertion réussie")
    })
    .catch((err)=>{
        console.error(err)
    })
}
    return (
        <>
        <h1 className="flex justify-center text-3xl p-6">Creéz votre personnage </h1>
          <form className="flex flex-col p-6 space-y-4" action="">
            <input className="shadow-sm border-bg-violet max-w-sm p-6" name="name" onChange={handleChange} value={formData.name} type="text" placeholder="nom" />
            <input className="shadow-sm border-bg-violet max-w-sm p-6" name="status" onChange={handleChange} value={formData.status} type="text" placeholder="statut" />
            <input className="shadow-sm border-bg-violet max-w-sm p-6" name="gender" onChange={handleChange} value={formData.gender} type="text" placeholder="genre" />
            <input className="shadow-sm border-bg-violet max-w-sm p-6" name="species" onChange={handleChange} value={formData.species} type="text" placeholder="espèce" />
            <input className="shadow-sm border-bg-violet max-w-sm p-6" name="image" onChange={handleChange} value={formData.image} type="text" placeholder="Url de  l'image" />

            <button onClick={handleSubmit}>Submit</button>



        </form>
        
        </>
      
    );
};

export default AdminPage;