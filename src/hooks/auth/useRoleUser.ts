import { useQuery } from "@tanstack/react-query";
import { getUserRole } from "../../actions";

export const useRoleUser = (userId: string) => {

    const { data, error} = useQuery({
        queryKey: ['rol-user'],
        queryFn: async () => await getUserRole(userId),
        enabled: !!userId, // Solo ejecutar la consulta si userId está definido
    });

    return { data, error, isLoading: !data && !error };
};