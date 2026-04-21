import { useParams } from "react-router-dom"

export default function BlogPost() {
    const { blogPostSlug } = useParams();

    return (
        <>
            <h1>{blogPostSlug}</h1>
            <p>This is our blog post.</p>
        </>
    )
}