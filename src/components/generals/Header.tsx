import { FaBars } from "react-icons/fa6";
import logo from "/logo.png";
import { useState } from "react";
import Navbar from "./Navbar";
const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    return (
        <header className="flex gap-4 px-5 py-2 justify-between items-center sticky top-0 bg-white border-b border-b-black">
            <div className="w-20 h-20 rounded-full overflow-hidden">
                <img
                    src={logo}
                    alt="Logo café"
                    className="object-cover w-full h-full"
                    style={{ clipPath: "inset(10% 10% 10% 10%)" }}
                />
            </div>
            <FaBars
                className="text-5xl hover:cursor-pointer"
                onClick={() => setMenuOpened(!menuOpened)}
            />
            <Navbar navOpened={menuOpened} setNavOpened={setMenuOpened} />
        </header>
    );
};

export default Header;
