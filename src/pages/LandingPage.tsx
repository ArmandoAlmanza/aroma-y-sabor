import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="grid gap-5">
            <div className="grid place-items-center gap-6 p-5 bg-[url('/hero-mobile.jpg')] bg-cover h-80">
                <h1 className="text-[50px]">Aroma y Sabor</h1>
                <p className="italic">
                    El lugar donde el sabor y el estilo se encuentran
                </p>
                <Link to={"/"}>Menu</Link>
            </div>
        </div>
    );
};

export default LandingPage;
