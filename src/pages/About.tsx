export const AboutPage = () => {
	return (
		<div className='space-y-10 max-w-3xl mx-auto'>
			<h1 className='text-center text-4xl md:text-5xl font-bold tracking-tight mb-2 text-slate-900 mb-10'>
				Nuestra empresa
			</h1>

			<img
				src='/img/about-img.jpg'
				alt='Imagen de fondo'
				className='h-[320px] md:h-[460px] object-cover rounded-3xl border border-slate-200 shadow-sm mx-auto '
			/>

			<div className='max-w-3xl mx-auto flex flex-col gap-5 tracking-tight leading-7 text-sm md:text-base font-medium text-slate-700'>
				<p className='text-slate-700'>
					CelTech es una tienda en línea que se dedica a la
					venta de celulares, fundada en 2021. Nuestro objetivo es
					ofrecer a nuestros clientes la mejor calidad y precio en
					celulares. Contamos con un equipo de profesionales que se
					encargan de seleccionar los mejores productos para ti.
				</p>

				<p className='text-slate-700'>
					En CelTech podrás encontrar una amplia variedad de
					celulares de las mejores marcas. Además, contamos con
					promociones y descuentos exclusivos para que puedas comprar
					tu celular al mejor precio.
				</p>

				<h2 className='text-2xl md:text-3xl font-bold tracking-tight mt-6 mb-1 text-slate-900'>
					¡No esperes más y compra tu celular en CelTech!
				</h2>

				<p className='text-slate-700'>
					Para más información, no dudes en ponerte en contacto con
					nosotros, a través de nuestro correo electrónico:{' '}
					<a
						href='mailto:correo@CelTech.com'
						className='font-semibold text-indigo-600 hover:text-indigo-500 underline underline-offset-4 decoration-indigo-200 hover:decoration-indigo-300 transition'
					>
						correo@celtech.com
					</a>{' '}
					o llamado al{' '}
					<a
						href='tel:333333333'
						className='font-semibold text-indigo-600 hover:text-indigo-500 underline underline-offset-4 decoration-indigo-200 hover:decoration-indigo-300 transition'
					>
						652452342
					</a>
				</p>
			</div>
		</div>
	);
};
