import { useParams } from "react-router-dom"
import Blog from "./Blog"
import blogData from "../data/blog.json" with { type: "json" }

export default function BlogPost() {
    const { blogPostSlug } = useParams();

    const post = blogData.posts.find(post => post.slug === blogPostSlug)

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </>
    )
}