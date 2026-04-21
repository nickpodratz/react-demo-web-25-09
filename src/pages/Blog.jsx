import { Link } from "react-router-dom"

export default function Blog() {
    return (
        <>
            <h1>Blog</h1>
            <ol className="list-decimal pl-6">
                <li>
                    <Link to="/blog/first-post">First Post</Link>
                </li>
                <li>
                    <Link to="/blog/second-post">Second Post</Link>
                </li>
                <li>
                    <Link to="/blog/third-post">Third Post</Link>
                </li>
            </ol>
        </>
    )
}