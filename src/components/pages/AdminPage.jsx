import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreationCharacterForm from "../CreationCharacterForm";


import "./adminPage.css";


const AdminPage = () => {
const [isDataSended,setIsDataSended]=useState(false);

const navigate = useNavigate();

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
        setIsDataSended(true);

        setTimeout(()=>{
            navigate("/")
        },4000)
        console.log("Insertion réussie")
    })
    .catch((err)=>{
        console.error(err)
    })
}
    return (
        <ul >
            
            
           {!isDataSended && <>
            <li>
            <h1 className="flex justify-center text-3xl p-6">Creéz votre personnage </h1>
            </li>
        
       
          <li>
             <CreationCharacterForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData}/>
            </li>
            </> 
        }
        
{isDataSended &&
    <li>
            <div className="progress-bar"></div>
            <p>L'oeuvre a bien été ajoutée à la base de donnée </p>
        </li>

}
        
        </ul>
      
    );
};

export default AdminPage;