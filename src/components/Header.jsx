import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-black cursor-default font-semibold" : "text-blue-500"} >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" className={({ isActive }) => isActive ? "text-black cursor-default font-semibold" : "text-blue-500"}>Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/not-found" className={({ isActive }) => isActive ? "text-black cursor-default font-semibold" : "text-blue-500"}>Not Found</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}