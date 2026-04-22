import { useParams } from "react-router-dom"
import Blog, { posts } from "./Blog"

export default function BlogPost() {
    const { blogPostSlug } = useParams();

    const post = posts.find(post => post.slug === blogPostSlug)

    return (
        <>
            <h1>{post.title}</h1>
            <p>This is our blog post.</p>
        </>
    )
}