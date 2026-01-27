interface Props {
	numberOfProducts: number;
}

export const ProductGridSkeleton = ({ numberOfProducts }: Props) => {
	return (
		<div className='my-20'>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-pulse'>
				{Array.from({ length: numberOfProducts }).map((_, index) => (
					<div key={index} className='space-y-4'>
                        <div className='bg-slate-200 rounded-3xl h-[300px] w-full' />
                        <div className="h-4 bg-slate-200 rounded w-3/4 mx-auto" />
                        <div className="h-4 bg-slate-200 rounded w-1/2 mx-auto" />
                    </div>
				))}
			</div>
		</div>
	);
};