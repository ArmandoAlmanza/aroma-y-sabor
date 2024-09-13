import { FaGithub, FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="flex items-center justify-between p-5 border-t border-t-black">
            <p>Developed by @ArmandoAlmanza</p>
            <nav className="flex justify-evenly gap-4 items-center">
                <FaGithub className="text-xl" />
                <FaInstagram className="text-xl" />
            </nav>
        </footer>
    );
};

export default Footer;
