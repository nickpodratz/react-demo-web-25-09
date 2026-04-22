import { Link } from "react-router-dom"
import blogData from "../data/blog.json" with { type: "json" }

export default function Blog() {
    return (
        <>
            <h1>Blog</h1>
            <ol>
                {blogData.posts.map(post => (
                    <li>
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </li>
                ))}
            </ol>
        </>
    )
}