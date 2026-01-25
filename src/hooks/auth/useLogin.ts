import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signIn } from '../../actions';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

export const useLogin = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

    // Mutation para el inicio de sesión:
	const { mutate, isPending } = useMutation({
		mutationFn: signIn, // Función que realiza el inicio de sesión
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