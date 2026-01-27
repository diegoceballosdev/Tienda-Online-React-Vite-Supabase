import { BiWorld } from 'react-icons/bi';
import { FaHammer } from 'react-icons/fa6';
import { HiMiniReceiptRefund } from 'react-icons/hi2';
import { MdLocalShipping } from 'react-icons/md';

export const FeatureGrid = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 mb-16 lg:grid-cols-4 lg:gap-6'>
            <div className='flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition'>
                <MdLocalShipping size={40} className='text-indigo-600 shrink-0' />

                <div className='space-y-1'>
                    <p className='font-semibold text-slate-900'>Envío gratis</p>
                    <p className='text-sm text-slate-600'>En todos nuestros productos</p>
                </div>
            </div>

            <div className='flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition'>
                <HiMiniReceiptRefund size={40} className='text-indigo-600 shrink-0' />

                <div className='space-y-1'>
                    <p className='font-semibold text-slate-900'>Devoluciones</p>
                    <p className='text-sm text-slate-600'>
                        Devuelve el equipo si no te satisface la compra dentro de
                        72 horas
                    </p>
                </div>
            </div>

            <div className='flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition'>
                <FaHammer size={40} className='text-indigo-600 shrink-0' />

                <div className='space-y-1'>
                    <p className='font-semibold text-slate-900'>Soporte 24/7</p>
                    <p className='text-sm text-slate-600'>
                        Soporte técnico en cualquier momento
                    </p>
                </div>
            </div>

            <div className='flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition'>
                <BiWorld size={40} className='text-indigo-600 shrink-0' />

                <div className='space-y-1'>
                    <p className='font-semibold text-slate-900'>Garantía</p>
                    <p className='text-sm text-slate-600'>
                        Garantía de 1 año en todos los equipos
                    </p>
                </div>
            </div>
        </div>
    );
};
