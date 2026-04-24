// Alternative zu Styling in index.css
export default function Heading1({ text }) {
    return <h1 className="text-3xl md:text-4xl lg:text-5xl font-light pb-2">{text}</h1>
}