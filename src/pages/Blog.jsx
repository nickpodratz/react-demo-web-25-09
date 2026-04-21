import { Link } from "react-router-dom"

export default function Blog() {
    return (
        <>
            <h1>Blog</h1>
            <ol className="list-decimal pl-6">
                <li>
                    <Link to="/blog/first-article">First Article</Link>
                </li>
                <li>
                    <Link to="/blog/second-article">Second Article</Link>
                </li>
                <li>
                    <Link to="/blog/third-article">Third Article</Link>
                </li>
            </ol>
        </>
    )
}