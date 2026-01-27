import { Outlet, useLocation } from "react-router";
import { Navbar } from "../components/shared/Nabvar";
import { Footer } from "../components/shared/Footer";
import { Banner } from "../components/home/Banner";
import { Newsletter } from "../components/home/Newsletter";
import { Sheet } from "../components/shared/Sheet";
import { useGlobalStore } from "../store/global.store";
import { NavbarMobile } from "../components/shared/NavbarMobile";

export const RootLayout = () => {
    const { pathname } = useLocation();
    const isSheetOpen = useGlobalStore(state => state.isSheetOpen);
    const activeNavMobile = useGlobalStore(state => state.activeNavMobile);

    return (
        <div className="min-h-screen flex flex-col bg-slate-50/50 text-slate-900 antialiased">
            <Navbar />

            {pathname === "/" && <Banner /> }

            <main className="container flex-1 mx-auto px-4 sm:px-6 lg:px-8 my-10">
                <Outlet />
            </main>

            {pathname === "/" && <Newsletter /> }

            {isSheetOpen && <Sheet />} 

            {activeNavMobile && <NavbarMobile />} 

            <Footer />
        </div>
    )
};