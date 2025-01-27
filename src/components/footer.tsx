import Navigasi from "@/components/navigasi";
import Link from "next/link";
import SocialMedia from "@/components/social-media";
import Mail from "@/components/icons/mail";
import Location from "@/components/icons/location";

export default function Footer() {
  return (
    <footer className="pt-10 bg-footer text-dark-fg">
      <div className="container flex flex-wrap">
        <div className="w-full px-4 mb-10 font-medium md:w-1/3">
          <h2 className="mb-5 flex gap-x-3 items-center">
            <Link href="/" className="text-2xl lg:text-3xl italic font-semibold text-dark-fg">
              Aan Widianto
            </Link>
          </h2>
          <div className="flex flex-col gap-y-2.5">
            <h3 className="text-xl font-semibold">Hubungi Saya</h3>
            <div className="flex gap-x-3 text-base font-normal">
              <Mail className="fill-white w-6 h-6" />
              <p>aanwidianto01@gmail.com</p>
            </div>
            <div className="flex gap-x-3">
              <Location className="fill-white w-6 h-6" />
              <div className="flex flex-col gap-y-2 text-base font-normal">
                <p>Talunombo RT 36/ RW 17, Sidomulyo</p>
                <p>Pengasih, Kulon Progo</p>
                <p>Yogyakarta</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-4 mb-10 md:w-1/3">
          <h3 className="mb-5 text-xl font-semibold">Ikuti Saya</h3>
          <SocialMedia fillColor="fill-white" />
        </div>
        <div className="w-full px-4 mb-10 md:w-1/3">
          <h3 className="flex flex-col mb-5 text-xl font-semibold">Tautan Menu</h3>
          <Navigasi layout="footer" />
        </div>
        <div className="w-full p-5 border-t border-gray">
          <p className="text-xs font-medium text-center text-gray">
            Copyright &#169; 2025 All rights reserved | created by <span className="font-bold text-dark-fg">Aan Widianto</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
