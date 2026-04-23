import { Link } from "react-router-dom"

export default function BlogPostListItem({ slug, title, highlighted }) {
    return (
        <li key={slug} >
            <Link to={`/blog/${slug}`} className={highlighted && "text-red-500"}>{title}</Link>
        </li>
    )
}