import BlogPostListItem from "../components/BlogPostListItem"
import blogData from "../data/blog.json" with { type: "json" }

export default function Blog() {
    const presentationOptions = {
        highlighted: true,
        title: "BLOG!"
    }
    return (
        <>
            <h1>Blog</h1>
            <ol>
                {blogData.posts.map((post, index) => (
                    BlogPostListItem({
                        ...presentationOptions, 
                        ...post, 
                        highlighted: index === 2
                    })
                ))}
            </ol>
        </>
    )
}