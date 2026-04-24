import { Link, NavLink } from "react-router-dom";

export default function Header() {
    const links = [
        { target: "/", displayName: "Home" },
        { target: "/blog", displayName: "Blog" },
        { target: "/not-found", displayName: "Not Found" },
    ]
    
    return (
        <header>
            <nav>
                <ul>
                    {links.map(link => (
                        <li>
                            <NavLink 
                                to={link.target}
                                className={({ isActive }) => isActive ? "text-black cursor-default font-semibold" : "text-blue-500"}
                            >
                                {link.displayName}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}