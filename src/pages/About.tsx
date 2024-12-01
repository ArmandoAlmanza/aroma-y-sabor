import ServiceCard from "../components/services/ServiceCard";
import person from "/persona.jpg";

const About = () => {
    return (
        <main className="grid gap-4">
            <h2 className="px-4 text-[35px] font-semibold ">About us</h2>
            <img src={person} alt="Image of the owner" />
            <p className="px-4">
                Aroma y Sabor es el resultado del sueño de Montserrat Dávalos,
                una joven que, aunque su carrera estaba en el mundo de las
                finanzas sintió una pasión especial por el café. Durante sus
                años en la universidad, solía visitar diferentes cafeterías,
                observando lo que las hacía únicas y soñando con abrir algún día
                su propio lugar. Después de graduarse en finanzas, Montserrat
                trabajó durante varios años en el mundo corporativo, pero nunca
                dejó de lado su gran sueño. Ahorro tras ahorro, dedicaba sus
                ratos libres a aprender todo lo que podía sobre el negocio del
                café, desde la selección de los mejores granos hasta las
                técnicas de tostado. Fue en uno de sus viajes a Chiapas cuando
                encontró la chispa que necesitaba para dar el salto y abrir su
                propia cafetería.
            </p>
            <section className="mb-4">
                <h2 className="px-4 text-[35px] font-semibold">
                    Our Services
                </h2>
                <div className="grid grid-cols-3">
                    <ServiceCard
                        title="Lugar de Trabajo"
                        body="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        bg="bg-cyan-200"
                    />
                    <ServiceCard
                        title="+ Calidad - Precio"
                        body="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    />
                    <ServiceCard
                        title="Gran ambiente"
                        body="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        bg="bg-brown-light"
                    />
                </div>
            </section>
        </main>
    );
};

export default About;
