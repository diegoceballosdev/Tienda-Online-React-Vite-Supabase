import { BiChevronRight } from 'react-icons/bi';
import { Link } from 'react-router';
import { socialLinks } from '../../constants/links';

export const Footer = () => {
	return (
		<footer className='py-20 bg-slate-950 px-8 lg:px-24 flex flex-col md:flex-row justify-between gap-16 text-slate-400 text-sm'>
			<div className="flex flex-col gap-6 flex-1">
                <Link
                    to='/'
                    className="text-2xl font-black tracking-tight text-white italic"
                >
                    CEL<span className="text-indigo-500">TECH</span>
                </Link>
                <p className="max-w-xs leading-relaxed text-slate-500">
                    La tecnología más avanzada al alcance de tu mano con los mejores precios del mercado.
                </p>
            </div>

			<div className='flex flex-col gap-6 flex-1'>
				<p className='font-bold text-white uppercase tracking-widest text-xs'>
					Newsletter
				</p>
				<p className='text-slate-500'>
					Recibe promociones exclusivas y lanzamientos.
				</p>

				<div className='bg-slate-900 border border-slate-800 flex items-center gap-2 p-1.5 rounded-2xl focus-within:ring-2 focus-within:ring-indigo-500/50 transition-all'>
					<input
						type='email'
						placeholder='Tu correo electrónico'
						className='pl-3 bg-transparent text-white w-full focus:outline-none placeholder:text-slate-600'
					/>
					<button className='bg-indigo-600 hover:bg-indigo-500 p-2.5 rounded-xl text-white transition-colors'>
						<BiChevronRight size={20} />
					</button>
				</div>
			</div>

			<div className='flex flex-col gap-6 flex-1'>
				<p className='font-bold text-white uppercase tracking-widest text-xs'>
					Explorar
				</p>
				<nav className='flex flex-col gap-3'>
					<Link to='/celulares' className="hover:text-indigo-400 transition-colors">Todos los Productos</Link>
					<Link to='#' className='hover:text-indigo-400 transition-colors'>Políticas de privacidad</Link>
					<Link to='#' className='hover:text-indigo-400 transition-colors'>Términos de uso</Link>
				</nav>
			</div>

			<div className='flex flex-col gap-6 flex-1'>
				<p className='font-bold text-white uppercase tracking-widest text-xs'>
					Síguenos
				</p>
				<div className='grid grid-cols-4 gap-2'>
					{socialLinks.map(link => (
						<a
							key={link.id}
							href={link.href}
							target='_blank'
							rel='noreferrer'
							className='aspect-square border border-slate-800 rounded-xl flex items-center justify-center transition-all hover:bg-white hover:text-slate-950 hover:-translate-y-1'
						>
							{link.icon}
						</a>
					))}
				</div>
			</div>
		</footer>
	);
};