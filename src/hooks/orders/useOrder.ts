import { useQuery } from '@tanstack/react-query';
import { getOrderById } from '../../actions';

export const useOrder = (orderId: number) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['order', orderId],
		queryFn: () => getOrderById(orderId),
		enabled: !!orderId, // Solo ejecutar si orderId es válido (ni null ni falso)
		retry: false, // No reintentar en caso de error
	});

	return {
		data,
		isLoading,
		isError,
	};
};