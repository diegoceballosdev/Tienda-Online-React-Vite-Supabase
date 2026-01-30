import { NavLink } from 'react-router';
import { dashboardLinks } from '../../constants/links';
import { Logo } from '../shared/Logo';
import { IoLogOutOutline } from 'react-icons/io5';
import { signOut } from '../../actions';

export const Sidebar = () => {
    const handleLogout = async () => {
        await signOut();
    };

    return (
        <div className='z-10 fixed h-full top-0 left-0 w-[100px]  lg:w-[230px] bg-gray-700 text-white flex flex-col gap-10 items-center p-5 '>

            {/* fixed es para que el sidebar quede fijo en la pantalla mientras se hace scroll
                - el ancho w-[120px] tiene 20px que el margin [140px] del dashboard product, para incrustarse alli 
                - es igual con el w-[250px] */}

            <Logo isDashboard={true} />

            <nav className='w-full space-y-5 flex-1'>
                {dashboardLinks.map(link => (
                    <NavLink
                        key={link.id}
                        to={link.href}
                        className={({ isActive }) =>
                            `flex items-center justify-center gap-3 pl-0 py-3 transition-all duration-300 rounded-md ${isActive
                                ? 'text-indigo-100 bg-indigo-600'
                                : 'text-white hover:text-indigo-100'
                            } lg:pl-5 lg:justify-start`
                        }
                    >
                        {link.icon}
                        <p className='font-semibold hidden lg:block hover:text-indigo-400'>
                            {link.title}
                        </p>
                    </NavLink>
                ))}

                <hr className='border border-amber-50' />

                <button
                    className='bg-red-400 hover:bg-red-500 w-full py-[10px] rounded-md flex items-center justify-center gap-2 font-semibold text-sm'
                    onClick={handleLogout}
                >
                    <span className='hidden lg:block'>Cerrar sesión</span>
                    <IoLogOutOutline size={20} className='inline-block' />
                </button>
            </nav>

        </div>
    );
};