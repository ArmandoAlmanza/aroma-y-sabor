import { FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="grid gap-5">
            <section className="relative grid place-items-center gap-6 p-5 bg-[url('/hero-mobile.jpg')] bg-cover h-[400px]">
                <div className="absolute inset-0 bg-gray-400 opacity-50"></div>

                <h1 className="relative text-[50px] text-brown-dark text-center font-bold">
                    Aroma{" "}
                    <span className="text-brown-light font-bold">y Sabor</span>
                </h1>
                <p className="relative italic text-center text-lg">
                    El lugar donde el sabor y el estilo se encuentran
                </p>
                <Link
                    className="relative flex flex-row gap-2 items-center font-bold border-2 border-brown-dark py-4 px-5 hover:text-brown-light transition-[colors_border] ease-in-out duration-300 hover:border-brown-light"
                    to={"/"}
                >
                    Order now <FaBagShopping />
                </Link>
            </section>
            <section>
                <h2>Best Sellers</h2>
            </section>
        </div>
    );
};

export default LandingPage;
