import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import deviceStore from '../store/deviceStore';

const BrandBar = () => {
    const { brands, selectedBrand, setSelectedBrand } = deviceStore();

    return (
        <div className="d-flex">
            {brands.map((brand) => {
                return (
                    <Card
                        style={{ cursor: 'pointer' }}
                        key={brand.id}
                        onClick={() => setSelectedBrand(brand)}
                        border={
                            brand.id === selectedBrand.id ? 'danger' : 'light'
                        }
                        className="p-3"
                    >
                        {brand.name}
                    </Card>
                );
            })}
        </div>
    );
};

export default BrandBar;
