import Timeline from '@/components/timeline';

export default function AboutPage() {
    const eduBackground = [
        {
            date: '2015 - 2018',
            title: 'SMK N 2 Pengasih',
            description: 'Teknik Pemesinan',
            logo: '/img/stewa.png',
        },
        {
            date: '2022 - Sekarang',
            title: 'Universitas Mercu Buana Yogyakarta',
            description: 'Informatika',
            logo: '/img/umby.png',
        },
    ];

    const employHistory = [
        {
            date: '2018 - 2022',
            title: 'PT DENSO Indonesia Fajar Plant',
            description: 'Operator produksi',
            logo: '/img/denso.png',
        },
        {
            date: '2022 - 2024',
            title: 'Sukses Mandiri Alumunium Kaca',
            description: 'Tukang',
            logo: '/img/sukses-mandiri.png',
        },
        {
            date: '2024 - Sekarang',
            title: 'PT Belanja Pasti Indonesia',
            description: 'Junior Developer',
            logo: '/img/belanja-pasti.jpg',
        },
    ];

    return (
        <main className="pt-32 pb-16 min-h-screen flex flex-col gap-y-12">
            <section>
                <div className="container text-justify space-y-4">
                    <div className="flex flex-wrap space-y-4">
                        <h2 className="w-full text-3xl font-bold tracking-wider text-center text-dark dark:text-light lg:text-4xl">About <span
                            className="text-primary">Me</span></h2>
                        <div className="w-full px-4 lg:w-1/2 space-y-4">
                            <h4 className="text-lg font-medium text-dark dark:text-light lg:text-xl">Selamat
                                datang, perkenalkan saya Aan Widianto.</h4>
                            <p className="text-dark-etd dark:text-light-etd lg:text-lg">
                                Saat ini, saya bekerja sebagai junior developer di PT Belanja Pasti Indonesia, di mana
                                saya berkontribusi dalam pengembangan web dan aplikasi Android. Saya juga masih
                                menjalani pendidikan sebagai mahasiswa kelas karyawan di Universitas Mercu Buana
                                Yogyakarta, dalam program studi Teknik Informatika. Minat saya dalam pengembangan
                                website mendorong saya untuk terus memperdalam pengetahuan dan keterampilan saya,
                                meskipun saya menyadari bahwa pengalaman saya dalam web development masih terbatas.
                                Namun, pekerjaan saya di industri ini memberi saya kesempatan untuk belajar langsung
                                dari pengalaman nyata dan bekerja dalam lingkungan yang gesit dan berorientasi tim.
                            </p>
                        </div>
                        <div className="w-full px-4 lg:w-1/2 space-y-4">
                            <h4 className="text-lg font-medium text-dark dark:text-light lg:text-xl">Visi</h4>
                            <p className="text-dark-etd dark:text-light-etd lg:text-lg">Menjadi seorang web
                                developer yang
                                handal dan berpengalaman, mampu menciptakan solusi web inovatif yang memberikan dampak
                                positif bagi
                                pengguna dan industri.</p>
                            <h4 className="text-lg font-medium text-dark dark:text-light lg:text-xl">Misi</h4>
                            <p className="text-dark-etd dark:text-light-etd lg:text-lg">Terus belajar dan
                                berkembang di dunia teknologi, serta berkontribusi pada pengembangan solusi web yang
                                efektif dan efisien yang dapat mendukung kebutuhan pengguna dan bisnis.</p>
                        </div>
                    </div>
                    <div className="px-4 space-y-4">
                        <h4 className="text-center text-lg font-medium text-dark dark:text-light lg:text-xl">Motivasi</h4>
                        <p className="text-dark-etd dark:text-light-etd lg:text-lg">Saya termotivasi oleh tantangan
                            untuk mengatasi masalah melalui pengembangan web dan percaya bahwa teknologi memiliki
                            potensi besar untuk membawa perubahan positif dalam kehidupan banyak orang. Saya berusaha
                            keras untuk selalu meningkatkan keterampilan saya dan siap untuk beradaptasi dengan
                            teknologi terbaru.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="container text-justify">
                    <div className="flex flex-wrap gap-y-3">
                        <h2 className="w-full mb-6 text-3xl font-bold tracking-wider text-center text-dark dark:text-light lg:text-4xl">My <span
                            className="text-primary">Journey</span></h2>
                        <div className="w-full px-4 lg:w-1/2 flex flex-col items-center">
                            <p className="text-lg font-medium py-3 text-dark dark:text-light">Riwayat Pendidikan</p>
                            <Timeline items={eduBackground} />
                        </div>
                        <div className="w-full px-4 lg:w-1/2 flex flex-col items-center">
                            <p className="text-lg font-medium py-3 text-dark dark:text-light">Riwayat Pekerjaan</p>
                            <Timeline items={employHistory} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
