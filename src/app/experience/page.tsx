import LogoCarousel from '@/components/logo-carousel';
import ServiceCard from '@/components/service-card';

const services = [
    {
        id: 1,
        image: "/img/service/web_design.svg",
        title: "Website Design",
        description:
            "Merancang tampilan visual sebuah situs web agar menarik dan mudah dipahami oleh pengguna. Ini melibatkan pemilihan warna, layout, dan elemen desain untuk menciptakan pengalaman pengguna yang baik.",
    },
    {
        id: 2,
        image: "/img/service/web_development.svg",
        title: "Website Development",
        description:
            "Menciptakan situs web dengan membangun fungsi-fungsi interaktif dan pengaturan teknis. Ini meliputi pengembangan dari front-end dan back-end untuk menciptakan situs web yang responsif dan fungsional.",
    },
    {
        id: 3,
        image: "/img/service/web_consultation.svg",
        title: "Website Consultation",
        description:
            "Memberikan saran dan panduan tentang strategi, desain, dan pengembangan situs web. Melibatkan analisis kebutuhan, identifikasi masalah, dan memberikan rekomendasi untuk meningkatkan kinerja dan efektivitas situs web.",
    },
];

export default function ExperiencePage() {
    return (
        <main className="pt-28 pb-16 min-h-screen container space-y-16">
            <section className="w-full px-4 space-y-6">
                <div className="mx-auto text-center space-y-6">
                    <h2 className="w-full text-3xl font-bold text-center text-dark dark:text-light lg:text-4xl tracking-wider">My <span
                        className="text-primary">Services</span></h2>
                    <p className="font-medium text-md text-dark dark:text-light md:text-lg">Berikut ini adalah layanan yang saya tawarkan untuk membantu anda.</p>
                </div>
                <div className="w-full flex flex-wrap gap-y-6 justify-center">
                    {services.map((service) => (
                        <div key={service.id} className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <ServiceCard
                                image={service.image}
                                title={service.title}
                                description={service.description}
                            />
                        </div>
                    ))}
                </div>
            </section>
            <section className="w-full px-4 space-y-6">
                <div className="mx-auto text-center space-y-6">
                    <h2 className="w-full text-3xl font-bold text-center text-dark dark:text-light lg:text-4xl tracking-wider">My <span
                        className="text-primary">Skill</span></h2>
                    <p className="font-medium text-md text-dark dark:text-light md:text-lg">Berikut ini adalah teknologi yang telah saya pelajari dan gunakan.</p>
                </div>
                <div className="w-full flex justify-center items-center">
                    <LogoCarousel />
                </div>
            </section>
            <section className="w-full px-4 space-y-6">
                <div className="mx-auto text-center space-y-6">
                    <h2 className="w-full text-3xl font-bold text-center text-dark dark:text-light lg:text-4xl tracking-wider">My <span
                        className="text-primary">Portfolio</span></h2>
                    <p className="font-medium text-md text-dark dark:text-light md:text-lg">Berikut ini adalah beberapa project yang telah saya kerjakan.</p>
                </div>
                <div className="w-full flex justify-center items-center">
                </div>
            </section>
        </main>
    );
}
