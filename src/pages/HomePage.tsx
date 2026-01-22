import { Brands } from "../components/home/Brands";
import { FeatureGrid } from "../components/home/FeatureGrid";
import { ProductGrid } from "../components/home/ProductGrid";
import { prepareProducts } from '../helpers';
import { popularCelulares, recentCelulares } from '../data/initialData';

export const HomePage = () => {
    return (
        <>
            <FeatureGrid />

            <ProductGrid
                title='Nuevos Productos'
                products={prepareProducts(recentCelulares)}
            />

            <ProductGrid
                title='Productos Destacados'
                products={prepareProducts(popularCelulares)}
            />

            <Brands />

        </>
    );
}  