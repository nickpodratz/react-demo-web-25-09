import { Link } from "react-router-dom"
import Center from "../components/Center"

export default function NotFound() {
    return (
        <Center>
            <h1>Not Found</h1>
            <p>Check your URL!</p>
            <Link to="/">Go back to home</Link>
        </Center>
    )
}