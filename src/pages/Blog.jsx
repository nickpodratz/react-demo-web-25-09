import { Link } from "react-router-dom"

export const posts = [
    {title: "First Post", slug: "first-post"},
    {title: "Second Post", slug: "second-post"},
    {title: "Third Post", slug: "third-post"},
]

export default function Blog() {
    return (
        <>
            <h1>Blog</h1>
            <ol>
                {posts.map(post => (
                    <li>
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </li>
                ))}
            </ol>
        </>
    )
}