import { NavLink } from "react-router-dom";

const RickAndMortyCard = ({ id, name, image }) => {
    return (
        <li className="center border-2 rounded-xl shadow-sm">
            <NavLink to={`/character/${id}`}>

                <img className="flex rounded-md mx-auto	" src={image} alt={name} />
                <p className="p-6 text-center text-2xl">{name}</p>
            </NavLink>

        </li>
    );
};

export default RickAndMortyCard;