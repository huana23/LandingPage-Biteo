import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function AdminLayout({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative min-h-screen lg:flex">
            {/* Sidebar */}
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

            {/* Main content */}
            <main className="flex-1 flex flex-col min-w-0">
                <Header setIsOpen={setIsOpen} />
                {children}
                <Footer />
            </main>
        </div>
    );
}

export default AdminLayout;