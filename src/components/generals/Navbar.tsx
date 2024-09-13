import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface Props {
    navOpened: boolean;
    setNavOpened: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ navOpened, setNavOpened }: Props) => {
    return (
        <nav
            className={clsx(
                "flex flex-col gap-5 items-start left-0 text-white z-50 w-full fixed h-full text-center backdrop:blur-lg transition-[top] duration-500 px-7 py-10 sm:hidden bg-[#30333A]",
                {
                    "top-20": navOpened,
                    "-top-full": !navOpened,
                }
            )}
        >
            <FaXmark
                className="absolute right-10 top-5 text-4xl hover:text-purple-400 transition-colors duration-300 ease-in-out"
                onClick={() => setNavOpened(false)}
            />
            <Link to={"/"}>Hola</Link>
        </nav>
    );
};

export default Navbar;
