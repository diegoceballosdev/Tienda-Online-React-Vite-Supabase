import { Link, NavLink, Outlet, useNavigate } from 'react-router';
import { signOut } from '../actions';
import { useUser } from '../hooks';
import { useEffect } from 'react';
import { supabase } from '../supabase/client';
import { Loader } from '../components/shared/Loader';

export const ClientLayout = () => {
	const { session, isLoading: isLoadingSession } = useUser();

	const navigate = useNavigate();

	// Si el usuario no está autenticado, redirigir al login:
	useEffect(() => {
		supabase.auth.onAuthStateChange(async (event, session) => {
			if (event === 'SIGNED_OUT' || !session) {
				navigate('/login');
			}
		});
	}, [navigate]);

	if (isLoadingSession) return <Loader />;

	const handleLogout = async () => {
		await signOut();
	};

	return (
		<div className='flex flex-col gap-5'>
			{/* Menú */}
			<nav className='flex justify-center gap-10 text-sm font-medium'>
				<NavLink
					to='/account/pedidos'
					className={({ isActive }) =>
						`${isActive ? 'underline' : 'hover:underline'}`
					}
				>
					Pedidos
				</NavLink>
				{/* TODO: LINK DASHBOARD */}
				<Link to='/dashboard'>
					Dashboard
				</Link>

				<button className='hover:underline' onClick={handleLogout}>
					Cerrar sesión
				</button>
			</nav>

			<main className='container mt-12 flex-1'>
				<Outlet />
			</main>
		</div>
	);
};