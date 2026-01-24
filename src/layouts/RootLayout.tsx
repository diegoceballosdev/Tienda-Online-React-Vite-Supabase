import { Outlet, useLocation } from "react-router";
import { Navbar } from "../components/shared/Nabvar";
import { Footer } from "../components/shared/Footer";
import { Banner } from "../components/home/Banner";
import { Newsletter } from "../components/home/Newsletter";
import { Sheet } from "../components/shared/Sheet";
import { useGlobalStore } from "../store/global.store";
import { NavbarMobile } from "../components/shared/NavbarMobile";

export const RootLayout = () => {

    const { pathname } = useLocation(); // Obtener la ruta actual
    
    const isSheetOpen = useGlobalStore(state => state.isSheetOpen);

    const activeNavMobile = useGlobalStore(state => state.activeNavMobile);

    return (

        <div className="h-screen flex flex-col">
            <Navbar />

            {pathname === "/" && <Banner /> }

            <main className="container my-8 flex-1 mx-auto px-2">

                <Outlet />

            </main>

            {pathname === "/" && <Newsletter /> }

            {isSheetOpen && <Sheet />} 

            {activeNavMobile && <NavbarMobile />} 

            <Footer />

        </div>
    )
};