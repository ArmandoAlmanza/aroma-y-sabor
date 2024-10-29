import ProductCardMenu from "../components/menu/ProductCardMenu";
import data from "../components/menu/drinks.json";
const Menu = () => {
    return (
        <main className="p-4 grid gap-4">
            <h2 className="text-[35px] font-semibold ">Our Products</h2>
            <h3 className="text-[25px] font-semibold ">Drinks</h3>
            <div className="grid place-items-center gap-4 max-h-[500px] overflow-scroll">
                {data.map((product, i) => (
                    <ProductCardMenu
                        key={i}
                        title={product.name}
                        price={product.price}
                        uri={product.image}
                    />
                ))}
            </div>

            <h3 className="text-[25px] font-semibold ">Desserts</h3>
            <div className="grid place-items-center gap-4 max-h-[500px] overflow-scroll">
                {data.map((product, i) => (
                    <ProductCardMenu
                        key={i}
                        title={product.name}
                        price={product.price}
                        uri={product.image}
                    />
                ))}
            </div>
        </main>
    );
};

export default Menu;
