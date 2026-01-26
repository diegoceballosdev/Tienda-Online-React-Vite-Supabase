import type { Color, Product, VariantProduct } from "../interfaces";

/* 
	- Intl.NumberFormat es la API estándar del navegador para formatear números por locale y estilo (moneda, porcentaje, etc.).
	- en-US + USD te asegura formato tipo: $1,234.56.
	- Si tu tienda es Argentina, después podés pasar a es-AR + ARS para $ 1.234,56
 */
export const formatPrice = (price: number) => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(price);
};

/* 
Función para preparar los productos. El objetivo es adaptar la estructura cruda (Product) a una estructura más útil para UIs, con menos datos y más procesados:
	1. Recorre todos los productos.
	2. Para cada producto:
		- mira sus variants
		- agrupa por color (sin repetir)
		- si hay varias variantes con el mismo color, conserva el precio mínimo de ese color
	3. saca el precio mínimo global del producto (mínimo entre colores)
	4. devuelve un objeto “enriquecido” con:
		- price calculado
		- colors simplificado para el UI
		- variants intactas
	Es una función pura (no usa estado, no toca DOM, no depende de React), y eso es excelente.
*/
export const prepareProducts = (products: Product[]) => {

	// Retornar el nuevo array de productos preparados.
	return products.map(product => {

		// Agrupar las variantes por color 
		const colors = product.variants.reduce( // reduce se usa para acumular valores en un array:
			(acc: Color[], variant: VariantProduct) => {
				const existingColor = acc.find( // Buscar si ya existe el color en el acumulador
					item => item.color === variant.color
				);

				if (existingColor) {
					// Si ya existe el color en el acumulador, actualizar el precio si el actual es menor:
					existingColor.price = Math.min(
						existingColor.price,
						variant.price
					);
				} 
				else { // Si no existe, añadir un nuevo color al acumulador:
					acc.push({ 
						color: variant.color,
						price: variant.price,
						name: variant.color_name,
					});
				}

				return acc; // Retornamos el acumulador actualizado
			},
			[]
		);

		// Obtener el precio más bajo de las variantes agrupadas
		const price = Math.min(...colors.map(item => item.price));

		// Devolver el producto formateado
		return {
			...product,
			price,
			colors: colors.map(({ name, color }) => ({ name, color })),
			variants: product.variants,
		};
	});
};

// Función para formatear la fecha a formato 3 de enero de 2022
export const formatDateLong = (date: string): string => {
	const dateObject = new Date(date);

	return dateObject.toLocaleDateString('es-ES', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
};

// Función para formatear la fecha a formato dd/mm/yyyy
export const formatDate = (date: string): string => {
	const dateObject = new Date(date);
	return dateObject.toLocaleDateString('es-ES', {
		year: 'numeric',
		month: '2-digit',
		day: 'numeric',
	});
};

// Función para obtener el estado del pedido en español
export const getStatus = (status: string): string => {
	switch (status) {
		case 'Pending':
			return 'Pendiente';
		case 'Paid':
			return 'Pagado';
		case 'Shipped':
			return 'Enviado';
		case 'Delivered':
			return 'Entregado';
		default:
			return status;
	}
};