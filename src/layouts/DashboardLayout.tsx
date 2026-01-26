import { Outlet, useNavigate } from 'react-router';
import { Sidebar } from '../components/dashboard';
import { supabase } from '../supabase/client';
import { useEffect } from 'react';

export const DashboardLayout = () => {

    const navigate = useNavigate();

    // Redirigir si el usuario no está autenticado:
    useEffect(() => {
        supabase.auth.onAuthStateChange(async (event, session) => {
            if (event === 'SIGNED_OUT' || !session) {
                navigate('/login');
            }
        });
    }, [navigate]);

    return (
        <div className='flex bg-gray-100 min-h-screen font-montserrat'>
            <Sidebar />

            <main className='container m-5 mt-7 flex-1 text-slate-800 ml-[140px] lg:ml-[270px]'>
                <Outlet />
            </main>
        </div>
    );
};