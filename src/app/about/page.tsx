import Timeline from "@/components/timeline";

export default function AboutPage() {
  const timelineItems = [
    // { date: '2006 - 2007', title: 'TK PGRI Jatimulyo', description: 'Menjalani pendidikan TK.'},
    // { date: '2007 - 2012', title: 'SD N 2 Jonggrangan', description: 'Pendidikan dasar di sekolah dasar.' },
    // { date: '2013 - 2015', title: 'SMP N 3 Pengasih', description: 'Sekolah menengah pertama.' },
    { date: '2016 - 2018', title: 'SMK N 2 Pengasih', description: 'Sekolah menengah kejuruan.' },
    { date: '2016 - 2018', title: 'Universitas Mercu Buana Yogyakarta', description: 'Sekolah menengah kejuruan.' },
  ];

  return (
    <main className="pt-32 pb-16 min-h-screen flex flex-col gap-y-12">
      <section>
        <div className="container text-justify">
          <div className="flex flex-wrap">
            <h2 className="w-full mb-6 text-3xl font-bold tracking-wider text-center text-dark dark:text-light lg:text-4xl">About <span
                className="text-primary">Me</span></h2>
            <div className="w-full px-4 mb-10 lg:w-1/2">
              <h4 className="mb-5 text-xl font-medium text-dark dark:text-light lg:text-2xl text-center">Selamat datang, perkenalkan saya Aan Widianto.</h4>
              <p className="text-dark-etd dark:text-light-etd lg:text-lg">
              Saat ini, saya bekerja sebagai junior developer di PT Belanja Pasti Indonesia, di mana saya berkontribusi dalam pengembangan web dan aplikasi Android. Saya juga masih menjalani pendidikan sebagai mahasiswa kelas karyawan di Universitas Mercu Buana Yogyakarta, dalam program studi Teknik Informatika. Minat saya dalam pengembangan website mendorong saya untuk terus memperdalam pengetahuan dan keterampilan saya, meskipun saya menyadari bahwa pengalaman saya dalam web development masih terbatas. Namun, pekerjaan saya di industri ini memberi saya kesempatan untuk belajar langsung dari pengalaman nyata dan bekerja dalam lingkungan yang gesit dan berorientasi tim.
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <h4 className="mb-5 text-xl font-medium text-dark dark:text-light lg:text-2xl text-center">Visi</h4>
              <p className="mb-5 text-dark-etd dark:text-light-etd lg:text-lg">Menjadi seorang web developer yang
                handal dan berpengalaman, mampu menciptakan solusi web inovatif yang memberikan dampak positif bagi
                pengguna dan industri.</p>
              <h4 className="mb-5 text-xl font-medium text-dark dark:text-light lg:text-2xl text-center">Misi</h4>
              <p className="mb-5 text-dark-etd dark:text-light-etd lg:text-lg">Terus belajar dan berkembang di dunia teknologi, serta berkontribusi pada pengembangan solusi web yang efektif dan efisien yang dapat mendukung kebutuhan pengguna dan bisnis.</p>
            </div>
          </div>
          <div className="px-4">
            <h4 className="text-center mb-5 text-xl font-medium text-dark dark:text-light lg:text-2xl">Motivasi</h4>
            <p className="mb-5 text-dark-etd dark:text-light-etd lg:text-lg">Saya termotivasi oleh tantangan untuk mengatasi masalah melalui pengembangan web dan percaya bahwa teknologi memiliki potensi besar untuk membawa perubahan positif dalam kehidupan banyak orang. Saya berusaha keras untuk selalu meningkatkan keterampilan saya dan siap untuk beradaptasi dengan teknologi terbaru.</p>
          </div>
        </div>
      </section>
      <section>
        <div className="container text-justify">
          <div className="flex flex-wrap">
            <h2 className="w-full mb-6 text-3xl font-bold tracking-wider text-center text-dark dark:text-light lg:text-4xl">My <span
                className="text-primary">Journey</span></h2>
            <div className="w-full px-4 lg:w-1/2 flex justify-center">
              <Timeline items={timelineItems} />
            </div>
            <div className="w-full px-4 lg:w-1/2">
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
