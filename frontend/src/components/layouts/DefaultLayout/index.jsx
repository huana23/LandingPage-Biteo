import Header from "./Header";
import Footer from "./Footer";



// max-w-screen-2xl mx-auto px-6 lg:px-10 w-full


function DefaultLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-surface text-on-surface">
        <Header />

        <main className="flex-1">
            {children}
        </main>

        <Footer />
    </div>
  );
}

export default DefaultLayout;