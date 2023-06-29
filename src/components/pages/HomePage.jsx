import { useEffect, useState } from "react";
import RickAndMortyCard from "../RickAndMortyCard";

const HomePage = () => {

    const [data, setData] = useState([]);
    const [selectedValue, setSelectedValue] = useState("...");

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json())
            .then((res) => setData(res.results))
            .catch(() => console.error(err))
    }, [])

    function handleChange(e) {
        setSelectedValue(e.target.value)
    }

    return (
        <main className="flex flex-col p-6 justify-center max-w-sm mx-auto">
            <select className="flex p-6 justify-center" onChange={handleChange}>
                <option>...</option>
                {data
                    .map((el) => {
                        return (
                            <option key={el.id}>{el.name}</option>
                        )
                    })
                }
            </select>

            <ul className="flex-wrap space-y-4 justify-center shadow-sm p-6 space-x-3">
                {data
                    .filter((el) => selectedValue === "..." || selectedValue === el.name)
                    .map((el) => {
                        return (
                            <RickAndMortyCard key={el.id} id={el.id} name={el.name} image={el.image} />
                        )
                    })
                }
            </ul>

        </main>
    );
};

export default HomePage;