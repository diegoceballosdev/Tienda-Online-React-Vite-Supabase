import { Link, NavLink } from "react-router";
import { navbarLinks } from "../../constants/links";
import { HiOutlineSearch, HiOutlineShoppingBag } from "react-icons/hi";
import { FaBarsStaggered } from "react-icons/fa6";
import { Logo } from "./Logo";

export const Navbar = () => {
    return (

        <header className="bg-white text-black py-4 flex items-center justify-between px-5 border-b border-slate-200 lg:px-12">

            <Logo />

            <nav className="space-x-4 hidden md:flex">
                {
                    navbarLinks.map(link => (
                        <NavLink
                            key={link.id}
                            to={link.href}
                            className={({ isActive }) => `${isActive ? 'text-cyan-600 underline' : ''} px-4 transition-all duration-300 font-medium hover:text-cyan-400 hover:underline`}
                        >
                            {link.title}
                        </NavLink>
                    ))
                }
            </nav>

            <div className="flex gap-4 items-center">
                <button>
                    <HiOutlineSearch size={24} />
                </button>

                <div className="relative">
                    <Link to="/account" className="border-2 border-slate-700 w-9 h-9 rounded-full grid place-items-center text-lg font-bold">
                        D
                    </Link>
                </div>

                <button className="relative">
                    <span className="absolute -bottom-2 -right-2 w-4 h-4 grid place-items-center bg-black-600 text-white rounded-full text-xs">0</span>
                    <HiOutlineShoppingBag size={24} />
                </button>

            </div>

            <button className="md:hidden">
                <FaBarsStaggered size={24}></FaBarsStaggered>
            </button>

        </header>
    );
}