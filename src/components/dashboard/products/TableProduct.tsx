import { useState } from 'react';
import { FaEllipsis } from 'react-icons/fa6';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { Link } from 'react-router';
import { useDeleteProduct, useProducts } from '../../../hooks';
import { Loader } from '../../shared/Loader';
import { formatDate, formatPrice } from '../../../helpers';
import { Pagination } from '../../shared/Pagination';
import { CellTableProduct } from './CellTableProduct';
import { IoAddCircleOutline } from 'react-icons/io5';

const tableHeaders = [
	'',
	'Nombre',
	'Variante',
	'Precio',
	'Stock',
	'Fecha de creación',
	'',
];

export const TableProduct = () => {

	const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(
		null
	);

	const [selectedVariants, setSelectedVariants] = useState<{
		[key: string]: number;
	}>({});

	const [page, setPage] = useState(1);

	const { products, isLoading, totalProducts } = useProducts({
		page,
	});

	const { mutate, isPending } = useDeleteProduct();

	const handleMenuToggle = (index: number) => {
		if (openMenuIndex === index) {
			setOpenMenuIndex(null);
		} else {
			setOpenMenuIndex(index);
		}
	};

	const handleVariantChange = (
		productId: string,
		variantIndex: number
	) => {
		setSelectedVariants({
			...selectedVariants,
			[productId]: variantIndex,
		});
	};

	const handleDeleteProduct = (id: string) => {
		mutate(id); // Eliminar el producto
		setOpenMenuIndex(null); // Cerrar el menú después de eliminar
	};

	if (!products || isLoading || !totalProducts || isPending)
		return <Loader />;

	return (
		<div className='flex flex-col flex-1 rounded-lg p-5 bg-white'>

			<div className='flex flex-col md:flex-row justify-between items-center'>
				<div className='self-start'>
					<h1 className='font-bold text-xl'>Productos</h1>
					<p className='text-sm mt-1 mb-4 font-regular text-gray-500'>
						Gestiona tus productos y mira las estadísticas de tus ventas
					</p>
				</div>
				<div className='flex items-center self-start justify-end mb-4'>
					<Link
						to='/dashboard/productos/new'
						className='bg-indigo-600 text-white flex items-center self-end justify-end py-[6px] px-2 rounded-md text-sm gap-1 font-semibold mb-2'
					>
						<IoAddCircleOutline className='inline-block' />
						Nuevo Producto
					</Link>
				</div>
			</div>

			{/* Tabla */}
			<div className='w-full h-full mb-6 overflow-scroll'>
				<table className='text-sm w-full caption-bottom'>
					<thead className='border-b border-gray-200 pb-3'>
						<tr className='text-sm font-bold'>
							{tableHeaders.map((header, index) => (
								<th key={index} className='h-12 px-4 text-left'>
									{header}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{products.map((product, index) => {
							const selectedVariantIndex =
								selectedVariants[product.id] ?? 0;
							const selectedVariant =
								product.variants[selectedVariantIndex] || {};

							return (
								<tr key={index} className='bg-neutral-primary border-b border-default'>
									<td className="px-6 py-4">
										<img
											src={
												product.images[0] ||
												'https://ui.shadcn.com/placeholder.svg'
											}
											alt='Imagen Product'
											loading='lazy'
											decoding='async'
											className='w-16 h-16 aspect-square rounded-md object-contain'
										/>
									</td>
									<CellTableProduct content={product.name} />
									<td className="px-6 py-4">
										<select
											className='border border-gray-300 rounded-md p-1 w-full'
											onChange={e =>
												handleVariantChange(
													product.id,
													Number(e.target.value)
												)
											}
											value={selectedVariantIndex}
										>
											{product.variants.map(
												(variant, variantIndex) => (
													<option
														key={variant.id}
														value={variantIndex}
													>
														{variant.color_name} - {variant.storage}
													</option>
												)
											)}
										</select>
									</td>
									<CellTableProduct
										content={formatPrice(selectedVariant?.price)}
									/>
									<CellTableProduct
										content={(selectedVariant.stock || 0).toString()}
									/>
									<CellTableProduct
										content={formatDate(product.created_at)}
									/>
									<td className='relative '>
										<button
											className='text-slate-900 border border-gray-400 p-1 rounded-full hover:bg-gray-100 cursor-pointer'
											onClick={() => handleMenuToggle(index)}
										>
											<FaEllipsis />
										</button>
										{openMenuIndex === index && (
											<div
												className='absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-xl z-10 w-[120px]'
												role='menu'
											>
												<Link
													to={`/dashboard/productos/editar/${product.slug}`}
													className='flex items-center gap-1 w-full text-left px-4 py-2 text-xs font-medium text-gray-700 hover:bg-indigo-100'
												>
													Editar
													<HiOutlineExternalLink
														size={13}
														className='inline-block'
													/>
												</Link>
												<button
													className=' block w-full text-left px-4 py-2 text-xs font-medium text-gray-700 hover:bg-indigo-100'
													onClick={() =>
														handleDeleteProduct(product.id)
													}
												>
													Eliminar
												</button>
											</div>
										)}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>

			{/* Controles de paginación */}
			<Pagination
				page={page}
				setPage={setPage}
				totalItems={totalProducts}
			/>
		</div>
	);
};