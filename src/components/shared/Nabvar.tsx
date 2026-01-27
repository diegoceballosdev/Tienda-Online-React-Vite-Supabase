import { Link, NavLink } from "react-router";
import { navbarLinks } from "../../constants/links";
import { HiOutlineSearch, HiOutlineShoppingBag } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { Logo } from "./Logo";
import { useGlobalStore } from "../../store/global.store";
import { useCartStore } from "../../store/cart.store";
import { FaRegUser } from "react-icons/fa";
import { useCustomer, useUser } from "../../hooks";
import { LuLoader } from "react-icons/lu";

export const Navbar = () => {

    const openSheet = useGlobalStore(state => state.openSheet);

    const totalItemsInCart = useCartStore(state => state.totalItemsInCart);

    const setActiveNavMobile = useGlobalStore(state => state.setActiveNavMobile);

    const { session, isLoading } = useUser();

    const userId = session?.user.id;

    const { data: customer } = useCustomer(userId!);

    return (

        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
            <div className="py-4 flex items-center justify-between px-4 sm:px-6 lg:px-12">
                <div className="flex items-center gap-4">
                    <button className="md:hidden p-2 -m-2 rounded-lg hover:bg-slate-100 active:bg-slate-200 transition" >
                        <SlMenu size={32} onClick={() => setActiveNavMobile(true)}></SlMenu>
                    </button>
                    <Logo />
                </div>

                <nav className="space-x-1 hidden md:flex">
                    {
                        navbarLinks.map(link => (
                            <NavLink
                                key={link.id}
                                to={link.href}
                                className={({ isActive }) =>
                                    `${isActive ? 'text-indigo-600' : 'text-slate-700'} px-4 py-2 rounded-full transition-all duration-200 text-lg font-semibold hover:text-indigo-600`
                                }
                            >
                                {link.title}
                            </NavLink>
                        ))
                    }
                </nav>

                <div className="flex gap-2 sm:gap-3 items-center">
                    <button
                        onClick={() => openSheet('search')}
                        className="p-2 rounded-full hover:bg-slate-100 active:bg-slate-200 transition text-slate-700 hover:text-slate-900"
                    >
                        <HiOutlineSearch size={24} />
                    </button>

                    <button
                        className="relative p-2 rounded-full hover:bg-slate-100 active:bg-slate-200 transition text-slate-700 hover:text-slate-900"
                        onClick={() => openSheet('cart')}
                    >
                        <span className="absolute -bottom-1 -right-1 min-w-5 h-5 px-1 grid place-items-center bg-indigo-600 text-white rounded-full text-[11px] font-semibold ring-2 ring-white">
                            {totalItemsInCart}
                        </span>
                        <HiOutlineShoppingBag size={24} />
                    </button>

                    {
                        isLoading ? (
                            <LuLoader className="animate-spin text-slate-600" size={24} />
                        ) : session ? (
                            <div className="relative">
                                <Link
                                    to="/account"
                                    className="text-slate-900 border border-slate-200 bg-white w-10 h-10 rounded-full grid place-items-center text-lg font-bold shadow-sm hover:shadow transition hover:border-indigo-200 hover:ring-2 hover:ring-indigo-100"
                                >
                                    {customer && customer.full_name[0].toUpperCase()}
                                </Link>
                            </div>
                        ) : (
                            <div>
                                <Link
                                    to="/login"
                                    className="w-10 h-10 rounded-full grid place-items-center text-lg font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition"
                                >
                                    <FaRegUser size={24} />
                                </Link>
                            </div>
                        )
                    }

                </div>
            </div>
        </header>
    );
};
