import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Layout({ children }) {
    return (
        <div className="flex flex-col">
            <Header />
            <main className="min-h-screen m-4">
                {children}
            </main>
            <Footer />
        </div>
    )
}