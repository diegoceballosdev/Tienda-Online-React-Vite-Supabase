import { useState } from 'react';
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router';

import { formatPrice } from '../../helpers';
import type { VariantProduct } from '../../interfaces';
import { Tag } from '../shared/Tag';
import { useCartStore } from '../../store/cart.store';
import { toast } from 'react-hot-toast';

interface Props {
    img: string;
    name: string;
    price: number;
    slug: string;
    colors: { name: string; color: string }[];
    variants: VariantProduct[];
}

/*
    Componente que muestra la tarjeta de un producto individual:

    useState (estado local):
    - activeColor vive solo dentro de esta card.
    - empieza en colors[0] (primer color disponible).
    - la idea es: cuando el usuario elige otro color, llamás setActiveColor(color).

    “Estado derivado” (no guardarlo) pues selectedVariant y stock no necesitan useState:
    - se calculan a partir de activeColor + variants
    - eso es correcto: se llama derived state (estado derivado), y es una buena práctica no duplicarlo.
*/

export const CardProduct = ({ img, name, price, slug, colors, variants, }: Props) => {

    const addItem = useCartStore(state => state.addItem);

    const [activeColor, setActiveColor] = useState<{ name: string; color: string; }>(colors[0]);

    const handleAddClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); // Evitar la navegación al hacer clic en el enlace

        if (selectedVariant && selectedVariant.stock > 0) {
            addItem({
                variantId: selectedVariant.id,
                productId: slug,
                name,
                image: img,
                color: activeColor.name,
                storage: selectedVariant.storage,
                price: selectedVariant.price,
                quantity: 1,
                slug: slug,
            });
            toast.success('Producto añadido al carrito');
        } else {
            // Aquí podrías mostrar un mensaje de error o notificación al usuario
            toast.error('Producto agotado, no se puede añadir al carrito.');
        }
    };

    // Identificar la variante seleccionada según el color activo
    const selectedVariant = variants.find(
        variant => variant.color === activeColor.color
    );

    const stock = selectedVariant?.stock || 0;

    return (
        <div className='flex flex-col gap-6 relative'>
            <Link
                to={`/celulares/${slug}`}
                className='flex relative group overflow-hidden '
            >
                <div className='flex h-[350px] w-full items-center justify-center py-2 lg:h-[250px]'>
                    <img
                        src={img}
                        alt={name}
                        className='object-contain h-full w-full'
                    />

                </div>
            </Link>

            <div className='flex flex-col gap-2 items-center'>
                <p className='text-[15px] font-medium'>{name}</p>
                <p className='text-[15px] font-medium'>{formatPrice(price)}</p>

                <div className='flex gap-3'>
                    {colors.map(color => (
                        <span
                            key={color.color}
                            className={`grid place-items-center w-5 h-5 rounded-full cursor-pointer ${activeColor.color === color.color
                                ? 'border border-black'
                                : ''
                                }`}
                            onClick={() => setActiveColor(color)}
                        >
                            <span
                                className='w-[14px] h-[14px] rounded-full'
                                style={{
                                    backgroundColor: color.color,
                                }}
                            />
                        </span>
                    ))}
                </div>
                <button
                    className=' bottom-0 bg-white w-[200px] pt-2 rounded-3xl flex items-center justify-center gap-1 text-sm font-medium hover:text-slate-400'
                    onClick={handleAddClick}>
                    <FaCartPlus size={16} /> Agregar al carrito
                </button>
            </div>

            <div className='absolute top-2 left-2'>
                {stock === 0 && <Tag contentTag="agotado" />}
            </div>
        </div>
    );
};