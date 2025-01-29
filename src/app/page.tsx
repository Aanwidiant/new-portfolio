import Button from "@/components/button";
import Mail from "@/components/icons/mail";
import Download from "@/components/icons/download";

export default function Home() {
    return (
        <main className="flex pt-32 pb-16 min-h-screen ">
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
                            Ingin tahu lebih banyak tentang saya? Anda bisa mengunduh CV saya atau langsung menghubungi saya melalui 
                            <span className="font-semibold text-primary"> tombol dibawah ini!</span>
                        </p>
                        <div className="flex gap-x-4">
                            <Button href="/contact"><Mail className="fill-dark dark:fill-light group-hover:fill-light dark:group-hover:fill-dark transition duration-300 ease-in-out w-6 h-6"/>Hubungi Saya</Button>
                            <Button href="/doc/cv-aanwidiant.pdf" download={true}><Download className="fill-dark dark:fill-light group-hover:fill-light dark:group-hover:fill-dark transition duration-300 ease-in-out w-6 h-6"/>Unduh CV</Button>
                        </div>
                    </div>
                    <div className="self-center w-full px-4 lg:w-1/2">
                        <div className="mx-auto mt-10">
                            <svg className="mx-auto scale-90 svgBolb md:scale-125 fill-primary" width="400" height="400"
                                 viewBox="0 0 280 318" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <clipPath id="heroClip">
                                        <path
                                            d="M0 170.318 V0 L280 0 V297.564 C280 312.96 263.333 322.583 250 314.885 L10 176.321Z" />
                                    </clipPath>
                                </defs>
                                <rect width="400" height="400" fill="none" />
                                <path
                                    d="M10 176.321C-3.33333 168.623 -3.33334 149.378 10 141.679L250 3.11545C263.333 -4.58258 280 5.03992 280 20.4359V297.564C280 312.96 263.333 322.583 250 314.885L10 176.321Z"
                                    clipPath="url(#blobClip)" />
                                <image className="h-full" id="imageBlob" href="img/profile.png" clipPath="url(#heroClip)"></image>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
