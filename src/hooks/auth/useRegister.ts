import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signUp } from '../../actions';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

export const useRegister = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

    // Maneja la mutación para el registro de usuario:
	const { mutate, isPending } = useMutation({
		mutationFn: signUp, // Función que realiza el registro
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['user'] }); // Refresca los datos del usuario
			navigate('/');
		},
		onError: err => {
			toast.error(err.message, {
				position: 'bottom-right',
			});
		},
	});

	return {
		mutate,
		isPending,
	};
};