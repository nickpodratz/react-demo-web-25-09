import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:blog-post-slug" element={<BlogPost />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    )
}