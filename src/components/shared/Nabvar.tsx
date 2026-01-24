import { Link, NavLink } from "react-router";
import { navbarLinks } from "../../constants/links";
import { HiOutlineSearch, HiOutlineShoppingBag } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { Logo } from "./Logo";
import { useGlobalStore } from "../../store/global.store";
import { useCartStore } from "../../store/cart.store";
import { FaRegUser } from "react-icons/fa";

export const Navbar = () => {

    const openSheet = useGlobalStore(state => state.openSheet);

    const totalItemsInCart = useCartStore(state => state.totalItemsInCart);

    const setActiveNavMobile = useGlobalStore(state => state.setActiveNavMobile);

    return (

        <header className="bg-white text-black py-4 flex items-center justify-between px-5 border-b border-slate-200 lg:px-12">

            <div className="flex gap-4">


                <button className="md:hidden" >
                    <SlMenu size={32} onClick={() => setActiveNavMobile(true)}></SlMenu>
                </button>
                <Logo />
            </div>

            <nav className="space-x-4 hidden md:flex">
                {
                    navbarLinks.map(link => (
                        <NavLink
                            key={link.id}
                            to={link.href}
                            className={({ isActive }) => `${isActive ? 'text-cyan-600' : ''} px-4 transition-all duration-300 font-bold hover:text-cyan-400`}
                        >
                            {link.title}
                        </NavLink>
                    ))
                }
            </nav>

            <div className="flex gap-4 items-center">
                <button onClick={() => openSheet('search')}>
                    <HiOutlineSearch size={24} />
                </button>

                <button className="relative" onClick={() => openSheet('cart')}>
                    <span className="absolute -bottom-2 -right-2 w-4 h-4 grid place-items-center bg-black text-white rounded-full text-xs">
                        {totalItemsInCart}
                    </span>
                    <HiOutlineShoppingBag size={24} />
                </button>

                <div className="relative">
                    <Link to="/account" className="w-9 h-9 rounded-full grid place-items-center text-lg font-bold">
                        <FaRegUser size={24} />
                    </Link>
                </div>

            </div>

        </header>
    );
}