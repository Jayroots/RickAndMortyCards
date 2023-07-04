import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AdminPage from "../pages/AdminPage";
import RickAndMortyDetails from "../RickAndMortyDetails"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/character/:id" element={<RickAndMortyDetails />} />



        </Routes>
    );
};

export default Router;