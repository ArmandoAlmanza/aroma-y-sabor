interface Props {
    title: string;
    price: number;
    uri: string;
}

const ProductCardMenu = ({ title, price, uri }: Props) => {
    return (
        <div className="grid place-items-center gap-2 border-b border-b-black w-full last-of-type:border-b-0 py-4">
            <img className="h-32 w-auto" src={uri} alt="product image" />
            <p className="text-xl font-bold">{title}</p>
            <p className="text-lg">
                $ <span className="text-yellow-500">{price}</span>{" "}
            </p>
            <button className="bg-brown-light px-4 py-2 rounded-xl font-bold">
                Add to Order
            </button>
        </div>
    );
};

export default ProductCardMenu;
