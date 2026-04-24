import { NavLink } from "react-router-dom";

export default function Header() {
    const links = [
        { target: "/", displayName: "Home" },
        { target: "/blog", displayName: "Blog" },
        { target: "/not-found", displayName: "Not Found" },
    ]
    
    return (
        <header>
            <nav className="flex gap-4 p-4">
                {links.map((link, index) => (
                    <NavLink
                        to={link.target}
                        className={({ isActive }) => `
                            ${isActive ? 
                                "text-black cursor-default font-semibold" : 
                                "text-blue-500"} 
                            ${index === 0 && 
                                "mr-auto"}
                        `}
                    >
                        {link.displayName}
                    </NavLink>
                ))}
            </nav>
        </header>
    )
}