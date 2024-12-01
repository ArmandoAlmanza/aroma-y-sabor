import { useParams } from "react-router-dom";
import pattern from "/pattern.webp";
import entries from "./entries.json";
import avatar from "/avatar.png";
interface BlogEntry {
    title: string;
    body: string;
    hearts: number;
    id: number;
    bg?: string;
}
const CompleteEntrie = () => {
    const { id } = useParams();
    const entry: BlogEntry | undefined = entries.find(
        (item: BlogEntry) => item.id === parseInt(id || "", 10)
    );

    function randomDate(start: Date, end: Date) {
        return new Date(
            start.getTime() + Math.random() * (end.getTime() - start.getTime())
        );
    }
    function formatDate(date: Date): string {
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Los meses empiezan en 0
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    }
    const pubDate = randomDate(new Date(2012, 0, 1), new Date());

    if (!entry) {
        return <p>Entry not found</p>;
    }

    const { title, body, bg, hearts } = entry;

    return (
        <article className="grid gap-5">
            <img
                src={bg ? bg : pattern}
                alt="header photo"
                className="h-[150px] w-full"
            />
            <header className="px-5">
                <h1 className="font-bold text-[25px]">{title}</h1>
                <p>Publication date: {formatDate(pubDate)}</p>
                <p>
                    <span className="text-xl text-red-700">❤</span> {hearts}
                </p>
            </header>
            <body className="px-5">
                <p>{body}</p>
            </body>
            <footer className="px-5">
                <h2 className="text-xl font-semibold">Author:</h2>
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
            </footer>
        </article>
    );
};

export default CompleteEntrie;
