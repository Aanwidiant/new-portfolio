export default function AboutPage() {
  return (
      <main className="pt-32 pb-16 min-h-screen">
        <div className="container text-justify">
          <div className="flex flex-wrap">
            <h2 className="w-full mb-6 text-3xl font-bold text-center text-dark dark:text-light lg:text-4xl">About <span
                className="text-primary">Me</span></h2>
            <div className="w-full px-4 mb-10 lg:w-1/2">
              <h4 className="mb-5 text-xl font-semibold text-dark dark:text-light lg:text-2xl">Selamat datang, perkenalkan saya Aan
                Widianto.</h4>
              <p className="text-base font-medium text-dark-etd dark:text-light-etd lg:text-lg">
                Saat ini, saya masih menjalani pendidikan sebagai mahasiswa kelas karyawan di Universitas Mercu Buana
                Yogyakarta, dalam program studi Teknik Informatika. Minat saya dalam pengembangan website mendorong saya
                untuk terus
                memperdalam pengetahuan dan keterampilan saya, meskipun saat ini saya menyadari bahwa pengalaman dan
                pengetahuan saya dalam web development masih terbatas karena latar belakang pendidikan saya sebelumnya
                tidak sepenuhnya
                sesuai. Namun, saya bertekad untuk terus belajar dan berusaha agar suatu hari nanti dapat bekerja
                sebagai web developer.
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <h4 className="mb-5 text-2xl font-bold text-dark dark:text-light lg:text-2xl">Visi saya.</h4>
              <p className="mb-5 text-base font-medium text-dark-etd dark:text-light-etd lg:text-lg">Menjadi seorang web developer yang
                handal dan berpengalaman, mampu menciptakan solusi web inovatif yang memberikan dampak positif bagi
                pengguna dan industri.</p>
              <p className="mb-3 text-base font-medium text-dark dark:text-light lg:text-lg">Ikuti saya di media sosial.</p>
              <div className="flex items-center">
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}
