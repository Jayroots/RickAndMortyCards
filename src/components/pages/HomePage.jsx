import { useEffect, useState } from "react";
import RickAndMortyCard from "../RickAndMortyCard";

const HomePage = () => {

    const [data, setData] = useState([]);
    const [selectedValue, setSelectedValue] = useState("...");

    useEffect(() => {
        fetch("http://localhost:5006/characters")
            .then((response) => response.json())
            .then((res) => setData(res))
            .catch((err) => console.error(err))
    }, [])

    function handleChange(e) {
        setSelectedValue(e.target.value)
    }

    return (
        <main className="flex flex-col p-6 justify-center max-w-sm mx-auto">
            <select className="flex p-6 justify-center" onChange={handleChange}>
                <option>...</option>
                {data && data
                    .map((el) => {
                        return (
                            <option key={el.id}>{el.name}</option>
                        )
                    })
                }
            </select>

            <ul className="flex-wrap space-y-4 justify-center shadow-sm p-6 space-x-3">
                {data && data
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