import Button from '@/components/button';
import Mail from '@/components/icons/mail';
import Download from '@/components/icons/download';
import BlobImage from '@/components/blob-image';

export default function Home() {
    return (
        <main className="flex pt-28 pb-16 h-fit lg:min-h-screen ">
            <div className="container">
                <div className="flex flex-wrap gap-y-10">
                    <div className="self-center flex flex-col gap-y-4 w-full px-4 lg:w-1/2">
                        <p className="text-base font-semibold text-dark dark:text-light md:text-2xl">Halo semua,
                            saya</p>
                        <h1 className="block text-4xl font-bold text-primary lg:text-5xl">
                            Aan <span className="text-dark dark:text-light">Widianto</span>
                        </h1>
                        <h2 className="text-lg font-medium text-dark dark:text-light lg:text-2xl">Mahasiswa & Web
                            Developer</h2>
                        <p className="font-light leading-relaxed text-dark dark:text-light lg:text-lg">
                            Saya adalah mahasiswa teknik informatika yang tertarik dan mendalami pengembangan website.
                            Ingin tahu lebih banyak tentang saya? Anda bisa mengunduh CV saya atau langsung menghubungi
                            saya melalui
                            <span className="font-semibold text-primary"> tombol dibawah ini!</span>
                        </p>
                        <div className="flex gap-x-4">
                            <Button href="/contact"><Mail
                                className="fill-dark dark:fill-light group-hover:fill-light dark:group-hover:fill-dark transition duration-300 ease-in-out w-6 h-6" />Hubungi
                                Saya</Button>
                            <Button href="/doc/cv-aanwidiant.pdf" download={true}><Download
                                className="fill-dark dark:fill-light group-hover:fill-light dark:group-hover:fill-dark transition duration-300 ease-in-out w-6 h-6" />Unduh
                                CV</Button>
                        </div>
                    </div>
                    <div className="self-center w-full px-4 lg:w-1/2">
                        <BlobImage />
                    </div>
                </div>
            </div>
        </main>
    );
}
