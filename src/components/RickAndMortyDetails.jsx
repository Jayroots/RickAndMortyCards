import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RickAndMortyDetails = () => {

    const [data, setData] = useState(undefined);

    const { id } = useParams();


    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
            .then((res) => setData(res))
            .catch(() => console.error(err))
    }, []);

    return (
        <ul>
            {data !== undefined &&

                <li className=" max-w-sm mx-auto center border-2 rounded-xl shadow-sm p-6">

                    <img className="rounded-md mx-auto	" src={data.image} alt={data.name} />
                    <p className="p-6 text-center text-2xl">My name :{data.name}</p>
                    <p className="p-6 text-center text-2xl">My status :{data.status}</p>
                    <p className="p-6 text-center text-2xl">My gender :{data.gender}</p>
                    <p className="p-6 text-center text-2xl">My origin :{data.origin.name}</p>



                </li>

            }

        </ul>
    );
};

export default RickAndMortyDetails;