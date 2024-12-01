import { FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="grid gap-5">
            <section className="grid place-items-center gap-6">
                <h1 className="text-[45px] text-brown-dark text-center font-bold px-2">
                    Aroma y Sabor
                </h1>
                <div className="-z-50 relative bg-[url('/hero-mobile.jpg')] bg-cover h-[200px] bg-center w-full grid place-content-center">
                    <div className="absolute inset-0 bg-gray-400 opacity-50"></div>
                    <p className="relative text-center text-xl text-white font-bold italic">
                        El lugar donde el sabor y el estilo se encuentran
                    </p>
                </div>
                <Link
                    className="flex flex-row gap-2 items-center font-bold border-2 border-brown-dark py-4 px-5 hover:text-brown-light transition-[colors_border] ease-in-out duration-300 hover:border-brown-light shadow-xl"
                    to={"/"}
                >
                    Order now <FaBagShopping />
                </Link>
            </section>
            <section></section>
            <section className="bg-[url(/pattern.webp)] bg-center bg-cover bg-repeat h-[300px] grid place-items-center gap-5 place-content-center px-4">
                <h2 className="px-4 text-[30px] font-semibold ">
                    We have a newsletter!
                </h2>
                <p>
                    if you want to know special recipes or know more about the
                    world of coffee, <strong>subscribe for free!</strong>
                </p>
                <div className="flex">
                    <input
                        type="text"
                        className="px-3 py-2 bg-brown-light font-bold"
                        placeholder="armando@correo.com"
                    />
                    <button className="px-3 py-2 font-bold bg-brown-dark text-white rounded-tr-xl rounded-br-xl">
                        Subscribe
                    </button>
                </div>
            </section>

            <section className="p-5 grid gap-2">
                <h2 className="px-4 text-[35px] font-semibold ">
                    Visit our Blog!
                </h2>

                <p>
                    If you want to know some recieps and tips for make your'e
                    dailly coffe our blog is the best place to find it
                </p>
                <Link
                    className="bg-brown-light px-4 py-2 rounded-xl font-bold text-center"
                    to="/blog"
                >
                    Visit
                </Link>
            </section>
        </div>
    );
};

export default LandingPage;
