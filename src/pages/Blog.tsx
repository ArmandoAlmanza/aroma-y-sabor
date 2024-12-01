import BlogCard from "../components/blog/BlogCard";
import entries from "../components/blog/entries.json";
const Blog = () => {
    return (
        <main className="grid gap-4">
            <h2 className="px-4 text-[35px] font-semibold ">Blog</h2>
            <section className="grid px-5 gap-4 mb-5">
                {entries.map((entrie, i) => (
                    <BlogCard key={i} {...entrie} />
                ))}
            </section>
        </main>
    );
};

export default Blog;
