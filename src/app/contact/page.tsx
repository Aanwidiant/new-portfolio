'use client'
import { useEffect, useState } from 'react';
import Mail from '@/components/icons/mail';
import Location from '@/components/icons/location';
import SocialMedia from '@/components/social-media';
import Notification from '@/components/notification';
import Button from '@/components/button'
import Spinner from '@/components/icons/spinner';

interface Profile {
    name: string;
    address: string;
    email: string;
    social_links: SocialLink;
}

interface SocialLink {
    github: string;
    linkedin: string;
    instagram: string;
    facebook: string;
    twitter: string;
}


export default function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const message = formData.get('message') as string;

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Gagal mengirim pesan');
            }

            setIsSuccess(true);
            setName('');
            setEmail('');
            setMessage('');

            const formElement = e.currentTarget as HTMLFormElement;
            if (formElement) {
                formElement.reset();
            }
        } catch (error) {
            console.error('Kesalahan dalam pengiriman email:', error);
            setIsSuccess(false);
        } finally {
            setIsLoading(false);
            setIsModalOpen(true);
        }
    };

    const [profileData, setProfileData] = useState<Profile | null>(null);

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const response = await fetch('/api/user');
                if (response.ok) {
                    const data = await response.json();
                    setProfileData(data);
                } else {
                    console.error('Profile data not found');
                }
            } catch (error) {
                console.error('Error fetching hero content:', error);
            }
        };

        fetchProfileData();
    }, []);

    if (!profileData) {
        return <div>Loading...</div>;
    }

    return (
        <main className="pt-28 pb-16 container lg:min-h-screen space-y-6 w-full">
            <h2 className="w-full text-3xl font-bold text-center lg:text-4xl tracking-wider">My <span
                className="text-primary">Contact</span>
            </h2>
            <p className="font-medium text-center md:text-lg">Berikut beberapa cara
                menghubungi saya.</p>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full lg:w-1/2 p-4 rounded-lg bg-light dark:bg-dark space-y-3">
                    <h3 className="md:text-lg">Hubungi saya melalui form berikut
                        ini.</h3>
                    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-y-3">
                        <label htmlFor="name" className="font-semibold text-primary">
                            Nama
                        </label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            id="name"
                            name="name"
                            className="w-full p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-2 border border-dark-etd dark:border-light-etd focus:border-none bg-light-etd dark:bg-dark-etd"
                            required
                            placeholder="Masukkan nama anda"
                        />
                        <label htmlFor="email" className="font-semibold text-primary">
                            Email
                        </label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-3 rounded-md  focus:outline-none focus:ring-primary focus:ring-2 border border-dark-etd dark:border-light-etd focus:border-none bg-light-etd dark:bg-dark-etd"
                            required
                            placeholder="Masukkan alamat email anda"
                        />
                        <label htmlFor="message" className="font-semibold text-primary">
                            Pesan
                        </label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            id="message"
                            name="message"
                            className="w-full p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-2 border border-dark-etd dark:border-light-etd focus:border-none bg-light-etd dark:bg-dark-etd"
                            rows={3}
                            required
                            placeholder="Tulis pesan anda disini"
                        ></textarea>
                        <div className="w-full flex justify-end">
                            <Button type='submit' disabled={isLoading}>{isLoading ? (
                                <>
                                    <Spinner className="w-7 h-7 fill-dark dark:fill-light animate-spin" /> Mengirim
                                </>
                            ) : (
                                "Kirim"
                            )}</Button>
                        </div>
                    </form>
                </div>
                <div className="w-full h-fit lg:w-1/2 ">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-y-3 bg-light dark:bg-dark p-4 rounded-lg">
                            <h3 className="md:text-lg ">Atau bisa hubungi saya
                                melalui:</h3>
                            <div className="flex gap-x-3 items-center">
                                <Mail className="fill-dark dark:fill-light w-8 h-8" />
                                <p className="">{profileData.email}</p>
                            </div>
                            <div className="flex gap-x-3 items-center">
                                <Location className="fill-dark dark:fill-light w-8 h-8 flex-shrink-0" />
                                <p className="flex flex-wrap ">{profileData.address}</p>
                            </div>
                        </div>
                        <div className="bg-light dark:bg-dark p-4 rounded-lg space-y-3">
                            <p className="md:text-lg ">Serta ikuti saya di media
                                sosial.</p>
                            <div className="flex items-center">
                                <SocialMedia size="large" links={profileData.social_links} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <Notification
                    type={isSuccess ? "success" : "error"}
                    message={isSuccess ? "Pesan berhasil dikirim!" : "Gagal mengirim pesan!"}
                    description={isSuccess ? "Terima kasih telah menghubungi saya." : "Terjadi kesalahan, silakan coba lagi nanti."}
                    duration={4000}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </main >
    );
}
