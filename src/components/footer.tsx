import Navigasi from '@/components/navigasi';
import Link from 'next/link';
import SocialMedia from '@/components/social-media';
import Mail from '@/components/icons/mail';
import Location from '@/components/icons/location';

export default function Footer() {
    return (
        <footer className="pt-10 bg-light dark:bg-dark">
            <div className="container flex flex-wrap">
                <div className="w-full px-4 mb-10 md:w-1/3">
                    <h2 className="mb-5 flex gap-x-3 items-center">
                        <Link href="/" className="text-2xl lg:text-3xl italic font-semibold text-primary">
                            Aan <span className='text-dark dark:text-light'>Widianto</span>
                        </Link>
                    </h2>
                    <div className="flex flex-col gap-y-2.5">
                        <h3 className="text-xl font-semibold">Hubungi Saya</h3>
                        <div className="flex gap-x-3">
                            <Mail className="fill-dark dark:fill-light w-6 h-6" />
                            <p>aanwidianto01@gmail.com</p>
                        </div>
                        <div className="flex gap-x-3">
                            <Location className="fill-dark dark:fill-light w-6 h-6" />
                            <div className="flex flex-col gap-y-2">
                                <p>Talunombo RT 36/ RW 17, Sidomulyo</p>
                                <p>Pengasih, Kulon Progo</p>
                                <p>Yogyakarta</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 mb-10 md:w-1/3">
                    <h3 className="mb-5 text-xl font-semibold">Ikuti Saya</h3>
                    <SocialMedia />
                </div>
                <div className="w-full px-4 mb-10 md:w-1/3">
                    <h3 className="flex flex-col mb-5 text-xl font-semibold">Tautan Menu</h3>
                    <Navigasi layout="footer" />
                </div>
                <div className="w-full p-5 border-t border-dark-etd dark:border-light-etd">
                    <p className="text-xs font-medium text-center text-dark-etd dark:text-light-etd">
                        Copyright &#169; 2025 All rights reserved | created by <span className="font-bold text-dark-fg">Aan Widianto</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
