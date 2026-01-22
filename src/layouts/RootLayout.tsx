import { Outlet, useLocation } from "react-router";
import { Navbar } from "../components/shared/Nabvar";
import { Footer } from "../components/shared/Footer";
import { Banner } from "../components/home/Banner";
import { Newsletter } from "../components/home/Newsletter";

export const RootLayout = () => {

    const { pathname } = useLocation(); // Obtener la ruta actual
    console.log(pathname); // Depuración

    return (

        <div className="h-screen flex flex-col">
            <Navbar />

            {pathname === "/" && <Banner /> }

            <main className="container my-8 flex-1 mx-auto">

                <Outlet />

            </main>

            {pathname === "/" && <Newsletter /> }

            <Footer />

        </div>
    )
};