import { useState } from 'react';
import { LuLoader } from 'react-icons/lu';
import { Link, Navigate } from 'react-router';
import { useLogin, useUser } from '../hooks';
import { Loader } from '../components/shared/Loader';

export const LoginPage = () => {
	const [email, setEmail] = useState('admin@gmail.com');
	const [password, setPassword] = useState('12341234');

	const { mutate, isPending } = useLogin();
	const { session, isLoading } = useUser();

	const onLogin = (e: React.FormEvent) => {
		e.preventDefault();
		mutate({ email, password });
	};

	// Si está cargando la session, mostrar loader:
	if (isLoading) return <Loader />;

	// Si hay una session en cache, redirigir al home:
	if (session) return <Navigate to='/' />;

	return (
		<div className='h-full flex flex-col items-center mt-12 gap-5'>
			<h1 className='text-4xl font-bold capitalize'>
				Iniciar sesión
			</h1>

			<p className='text-sm font-medium'>
				¡Que bueno tenerte de vuelta!
			</p>

			{isPending ? (
				<div className='w-full h-full flex justify-center mt-20'>
					<LuLoader className='animate-spin' size={60} />
				</div>
			) : (
				<>
					<form
						className='flex flex-col items-center gap-4 w-full mt-10 sm:w-[400px] lg:w-[500px]'
						onSubmit={onLogin}
					>
						<input
							type='email'
							placeholder='Ingresa tu correo electrónico'
							className='border border-slate-200 text-black px-5 py-4 placeholder:text-black text-sm rounded-full w-full'
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>

						<input
							type='password'
							placeholder='Ingresa tu contraseña'
							className='border border-slate-200 text-black px-5 py-4 placeholder:text-black text-sm rounded-full w-full'
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>

						<button className='bg-indigo-600 hover:bg-indigo-400 text-white uppercase font-semibold tracking-widest text-xs py-4 rounded-full mt-5 w-full'>
							Iniciar sesión
						</button>
					</form>

					<p className='text-sm text-stone-800'>
						¿No tienes una cuenta?
						<Link to='/registro' className='underline ml-2 hover:text-indigo-600'>
							Regístrate
						</Link>
					</p>
				</>
			)}
		</div>
	);
};