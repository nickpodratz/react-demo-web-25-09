import { Link } from "react-router-dom"

export default function Blog() {
    return (
        <>
            <h1>Blog</h1>
            <ul>
                <li>
                    <Link to="/blog/first-article">First Article</Link>
                    <Link to="/blog/second-article">Second Article</Link>
                    <Link to="/blog/third-article">Third Article</Link>
                </li>
            </ul>
        </>
    )
}