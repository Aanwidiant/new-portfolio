'use client';
import React, { useState } from 'react';
import Mail from '@/components/icons/mail';
import Location from '@/components/icons/location';
import SocialMedia from '@/components/social-media';

export default function ContactPage() {
    const [message, setMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => setIsModalOpen(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    return (
        <main className="pt-28 pb-16 container lg:min-h-screen space-y-4">
            <h2 className="w-full text-3xl font-bold text-center text-dark dark:text-light lg:text-4xl tracking-wider">My <span
                className="text-primary">Contact</span>
            </h2>
            <p className="font-medium text-center md:text-lg text-dark dark:text-light">Berikut beberapa cara
                menghubungi saya.</p>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full lg:w-1/2 p-4 rounded-lg bg-light dark:bg-dark space-y-3">
                    <h3 className="md:text-lg text-dark dark:text-light">Hubungi saya melalui form berikut
                        ini.</h3>
                    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-y-3">
                        <label htmlFor="name" className="font-semibold text-primary">
                            Nama
                        </label>
                        <input type="text" id="name" name="nama"
                               className="w-full p-3 rounded-md text-dark dark:text-light focus:outline-none focus:ring-primary focus:ring-2 border border-dark-etd dark:border-light-etd bg-light-etd dark:bg-dark-etd"
                               required placeholder="Masukkan nama anda" />
                        <label htmlFor="email" className="font-semibold text-primary">
                            Email
                        </label>
                        <input type="email" id="email" name="email"
                               className="w-full p-3 rounded-md text-dark dark:text-light focus:outline-none focus:ring-primary focus:ring-2 border border-dark-etd dark:border-light-etd bg-light-etd dark:bg-dark-etd"
                               required placeholder="Masukkan alamat email anda" />
                        <label htmlFor="message" className="font-semibold text-primary">
                            Pesan
                        </label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            id="message"
                            name="pesan"
                            className="w-full p-3 rounded-md text-dark dark:text-light focus:outline-none focus:ring-primary focus:ring-2 border border-dark-etd dark:border-light-etd bg-light-etd dark:bg-dark-etd"
                            rows={3}
                            required
                            placeholder="Tulis pesan anda disini"
                        ></textarea>
                        <div className="w-full flex justify-end">
                            <button type="submit"
                                    className="px-8 py-2 mt-2 text-base font-semibold transition duration-300 ease-in-out text-white bg-primary rounded-md hover:shadow-md hover:shadow-primary w-fit">
                                Kirim
                            </button>
                        </div>
                    </form>
                </div>
                <div className="w-full h-fit lg:w-1/2 ">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-y-3 bg-light dark:bg-dark p-4 rounded-lg">
                            <h3 className="md:text-lg text-dark dark:text-light">Atau bisa hubungi saya
                                melalui:</h3>
                            <div className="flex gap-x-3">
                                <Mail className="fill-dark dark:fill-light w-8 h-8" />
                                <p className="text-dark dark:text-light">aanwidianto01@gmail.com</p>
                            </div>
                            <div className="flex gap-x-3">
                                <Location className="fill-dark dark:fill-light w-8 h-8 flex-shrink-0" />
                                <p className="flex flex-wrap text-dark dark:text-light">Talunombo RT 36/ RW 17,
                                    Sidomulyo, Pengasih, Kulon Progo, Yogyakarta</p>
                            </div>
                        </div>
                        <div className="bg-light dark:bg-dark p-4 rounded-lg space-y-3">
                            <p className="md:text-lg text-dark dark:text-light">Serta ikuti saya di media
                                sosial.</p>
                            <div className="flex items-center">
                                <SocialMedia size="large" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
