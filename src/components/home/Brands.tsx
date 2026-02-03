const brands = [
	{
		image: '/img/brands/apple.png',
		alt: 'Apple',
	},
	{
		image: '/img/brands/samsung.jpg',
		alt: 'Samsung',
	},
	{
		image: '/img/brands/xiaomi-logo.webp',
		alt: 'Xiaomi',
	},
	{
		image: '/img/brands/realme-logo.webp',
		alt: 'Realme',
	},
	{
		image: '/img/brands/huawei-logo.png',
		alt: 'Huawei',
	},

	{
		image: '/img/brands/honor-logo.png',
		alt: 'Honor',
	},
];

export const Brands = () => {
	return (
		<div className='flex flex-col items-center gap-3 pt-16 pb-12'>
			<h2 className='text-3xl font-bold text-center mb-10 md:text-4xl lg:text-5xl tracking-tight text-slate-900'>Marcas que disponemos</h2>

			<p className='w-2/3 text-center text-sm md:text-lg'>
				Tenemos lo más moderno en tecnología y los últimos modelos de
				celulares disponibles
			</p>

			<div className='grid grid-cols-3 gap-6 mt-2 items-center md:grid-cols-6'>
				{brands.map((brand, index) => (
					<div key={index}>
						<img src={brand.image} alt={brand.alt} />
					</div>
				))}
			</div>
		</div>
	);
};