import LogoCarousel from '@/components/logo-carousel';

export default function ExperiencePage() {
    return (
        <main className="pt-28 pb-16 min-h-screen">
            <section>
                <div className="container">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-6 text-center">
                            <h2 className="w-full mb-6 text-3xl font-bold text-center text-thrid lg:text-4xl">My <span
                                className="text-primary">Skill</span></h2>
                            <p className="font-medium text-md text-thrid md:text-lg">Berikut ini adalah teknologi yang
                                saya telah
                                saya pelajari dan gunakan.</p>
                        </div>
                    </div>
                    <div className="w-full px-4 mx-auto">
                        {/*<LogoCarousel/>*/}
                    </div>
                </div>
            </section>
        </main>
    );
}
