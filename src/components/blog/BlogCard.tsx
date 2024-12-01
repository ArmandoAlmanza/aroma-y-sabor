import { Link } from "react-router-dom";
import pattern from "/pattern.webp";

interface Props {
    title: string;
    body: string;
    hearts: number;
    id: number;
    bg?: string;
}

const BlogCard = ({ title, body, bg, hearts, id }: Props) => {
    return (
        <article className="border border-black grid gap-5">
            <img
                src={bg ? bg : pattern}
                alt="header photo"
                className="h-[150px] w-full"
            />
            <header className="px-5">
                <h1 className="font-bold text-[25px]">{title}</h1>
            </header>
            <body className="px-5">
                <p>{body.substring(0, 160)}...</p>
            </body>
            <footer className="px-5 flex flex-row justify-between mb-5">
                <p>
                    <span className="text-xl text-red-700">❤</span> {hearts}
                </p>
                <Link className="text-blue-600" to={`/blog/${id}`}>
                    See complete
                </Link>
            </footer>
        </article>
    );
};

export default BlogCard;
