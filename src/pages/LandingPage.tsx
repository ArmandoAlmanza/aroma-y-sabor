import { FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Carousel from "../components/carousel/Carousel";
import Card from "../components/carousel/Card";

const LandingPage = () => {
    const data = [
        {
            title: "Card 1",
            description: "This is card 1",
            image: "/avatar.png",
        },
        {
            title: "Card 2",
            description: "This is card 2",
            image: "/avatar.png",
        },
        {
            title: "Card 3",
            description: "This is card 3",
            image: "/avatar.png",
        },
    ];
    return (
        <div className="grid gap-5">
            <section className="grid place-items-center gap-6">
                <h1 className="text-[50px] text-brown-dark text-center font-bold">
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
            <section className="container mx-auto px-2">
                <h2 className="text-[35px] font-semibold ">Best Sellers</h2>
                <div>
                    <Carousel>
                        {data.map((card, index) => (
                            <Card key={index} {...card} />
                        ))}
                    </Carousel>
                </div>
            </section>

            <section>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta repellendus quasi doloribus corporis officiis
                    repudiandae quae ipsam nemo earum cupiditate fuga fugit
                    ipsa, veritatis unde, velit, eum eligendi. Eum, labore!
                    Magni ullam ex iusto soluta at laudantium eos iure. Repellat
                    inventore incidunt omnis perspiciatis! Saepe, magnam nihil
                    optio recusandae velit quas laborum voluptatem, itaque
                    tenetur et quae autem labore nam? Delectus aspernatur sequi,
                    aut voluptatem repudiandae porro quod tempora quos.
                    Reiciendis necessitatibus earum nulla amet molestias. Labore
                    iste unde officiis reprehenderit earum quia dolore aut modi
                    eligendi. Earum, natus pariatur? Quae, quasi minus? Quae,
                    distinctio. Sed porro deleniti repudiandae? Sint deleniti
                    magnam quisquam similique impedit odio modi quo, ea dolorum
                    animi maiores repudiandae consequatur, aliquam, quasi harum
                    provident accusantium iure? Est voluptate sequi ab voluptas
                    consequatur modi aperiam dignissimos qui culpa natus
                    ratione, pariatur quaerat ipsa voluptatum unde quibusdam
                    exercitationem veritatis? Quisquam labore tenetur asperiores
                    placeat excepturi. Quam, veritatis exercitationem?
                    Architecto quo explicabo quae modi ullam at officiis fugit
                    minus asperiores est voluptate, a veritatis. Earum minima
                    facere qui laborum fugiat, officiis porro velit atque
                    perferendis, odio delectus eaque neque.
                </p>
            </section>
        </div>
    );
};

export default LandingPage;
