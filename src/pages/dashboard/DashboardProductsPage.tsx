import { IoAddCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router';
import { TableProduct } from '../../components/dashboard';


export const DashboardProductsPage = () => {
	return (
		<div className='h-full flex flex-col gap-2'>

            <TableProduct />
		</div>
	);
};