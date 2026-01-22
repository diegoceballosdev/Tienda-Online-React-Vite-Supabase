import { useQuery } from  "@tanstack/react-query";
import { getFilteredProducts } from "../../actions";

export const useFilteredProducts = ({ page, brands }: { page: number; brands: string[] }) => { 

    const { data, isLoading } = useQuery({
        queryKey: ['filteredProducts', { page, brands }], // la queryKey debe ser unica para cada combinacion de parametros
        queryFn: () => getFilteredProducts({ page, brands }), // llamamos a la accion que obtiene los productos filtrados
        retry : false,
    });

    return {
        data: data?.data, // usamos el punto data porque la accion devuelve un objeto con data y count
        isLoading,
        totalProducts: data?.count ?? 0, // total de productos para el paginador
    };
}   