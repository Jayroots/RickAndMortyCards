

const CreationCharacterForm = ({handleChange,handleSubmit,formData}) => {
    return (
        <form className="flex flex-col p-6 space-y-4" action="">
        <input className="shadow-sm border-bg-violet max-w-sm p-6" name="name" onChange={handleChange} value={formData.name} type="text" placeholder="nom" />
        <input className="shadow-sm border-bg-violet max-w-sm p-6" name="status" onChange={handleChange} value={formData.status} type="text" placeholder="statut" />
        <input className="shadow-sm border-bg-violet max-w-sm p-6" name="gender" onChange={handleChange} value={formData.gender} type="text" placeholder="genre" />
        <input className="shadow-sm border-bg-violet max-w-sm p-6" name="species" onChange={handleChange} value={formData.species} type="text" placeholder="espèce" />
        <input className="shadow-sm border-bg-violet max-w-sm p-6" name="image" onChange={handleChange} value={formData.image} type="text" placeholder="Url de  l'image" />

        <button onClick={handleSubmit}>Submit</button>



    </form>
    );
};

export default CreationCharacterForm;