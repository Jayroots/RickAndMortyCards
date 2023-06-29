import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav >
            <ul className="w-full flex space-x-10 text-white bg-violet-700 justify-center text-4xl p-6  mx-auto" >
                <li>
                    <NavLink to="/">
                        <h2>Rick And Morty</h2>
                    </NavLink>

                </li>
                <li>
                    <NavLink to="/contact">
                        <h2>Contact Us</h2>
                    </NavLink>

                </li>


            </ul>

        </nav>
    );
};

export default NavBar;