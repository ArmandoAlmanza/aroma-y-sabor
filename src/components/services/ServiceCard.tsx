import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface Props {
    title: string;
    body: string;
    bg?: string;
}

const ServiceCard = ({ title, body, bg }: Props) => {
    return (
        <article
            className={twMerge(
                clsx("p-4 gap-2 grid place-items-center bg-purple-200", bg)
            )}
        >
            <header className="font-semibold text-center">{title}</header>
            <p className="text-sm">{body}</p>
        </article>
    );
};

export default ServiceCard;
