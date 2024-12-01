import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import avatar from "/avatar.png";
interface Props {
    navOpened: boolean;
    setNavOpened: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ navOpened, setNavOpened }: Props) => {
    const links = [
        {
            text: "Inicio",
            path: "/",
        },
        {
            text: "Menu",
            path: "/menu",
        },
        {
            text: "About us",
            path: "/about",
        },
        {
            text: "Blog",
            path: "/blog",
        },
    ];
    return (
        <nav
            className={clsx(
                "grid row-span-2 gap-5 items-start left-0 text-white z-50 w-full fixed h-[98%] text-center backdrop:blur-lg transition-[top] duration-500 px-7 py-10 sm:hidden bg-[#30333A]",
                {
                    "top-0": navOpened,
                    "-top-full": !navOpened,
                }
            )}
        >
            <FaXmark
                className="absolute right-4 top-6 text-4xl hover:text-purple-400 transition-colors duration-300 ease-in-out"
                onClick={() => setNavOpened(false)}
            />
            <div className="flex flex-col gap-4 items-start content-center flex-wrap">
                {links.map((link, i) => (
                    <Link
                        className="relative mx-auto text-gray-200 font-semibold text-xl transition-colors duration-300 after:content-[''] after:w-0 after:h-[2px] after:bg-purple-400 after:absolute after:left-0 after:-bottom-2 after:transition-[width] after:duration-300 hover:text-white hover:after:w-5"
                        to={link.path}
                        key={i}
                        onClick={() => setNavOpened(false)}
                    >
                        {link.text}
                    </Link>
                ))}
            </div>

            <article className="flex gap-3 w-full p-3 self-end">
                <img
                    src={avatar}
                    alt="userImage"
                    className="h-14 rounded-full border border-orange-500"
                />
                <div className="flex flex-col gap-2 items-start">
                    <span>Armando Almanza</span>
                    <span>armando.s.almanza@gmail.com</span>
                </div>
            </article>
        </nav>
    );
};

export default Navbar;
