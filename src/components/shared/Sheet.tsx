import { useEffect, useRef } from 'react';
import { useGlobalStore } from '../../store/global.store';
import { Cart } from './Cart';
import { Search } from './Search';

export const Sheet = () => {

    const sheetContent = useGlobalStore(state => state.sheetContent);
    const closeSheet = useGlobalStore(state => state.closeSheet);
    const sheetRef = useRef<HTMLDivElement | null>(null); // Referencia al contenedor del Sheet

    // Efecto para manejar el cierre del Sheet al hacer clic fuera de él:
    useEffect(() => {
        document.body.style.overflow = 'hidden'; // Evitar scroll en el fondo cuando el Sheet está abierto

        // Función para manejar clics fuera del Sheet
        const handleOutsideClick = (event: MouseEvent) => { // Si el clic es fuera del Sheet, cerrarlo

            // Comprobar si el clic fue fuera del Sheet:
            if (sheetRef.current && !sheetRef.current.contains(event.target as Node)) {
                closeSheet();
            }
        };

        // Agregar event Listener
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.body.style.overflow = 'unset'; // Restaurar scroll al cerrar el Sheet
            document.removeEventListener('mousedown', handleOutsideClick); // Limpiar el event Listener
        };
    }, [closeSheet]);

    // Función para saber el componente a renderizar
    const renderContent = () => {
        switch (sheetContent) {
            case 'cart':
                return <Cart />;
            case 'search':
                return <Search />;
            default:
                return null;
        }
    };

    return (
        <div className='fixed inset-0 bg-black/50 z-50 flex justify-end animate-fade-in'>
            <div
                ref={sheetRef}
                className='bg-white text-black h-screen w-[500px] shadow-lg animate-slide-in'
            >
                {renderContent()}
            </div>
        </div>
    );
};