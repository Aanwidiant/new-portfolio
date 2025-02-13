'use client'
import { useEffect, useState } from 'react';
import Navigasi from '@/components/navigasi';
import Link from 'next/link';
import SocialMedia from '@/components/social-media';
import Mail from '@/components/icons/mail';
import Location from '@/components/icons/location';
import Skeleton from '@/components/skeleton';

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

export default function Footer() {
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
                            {profileData?.email ? (
                                <p>{profileData.email}</p>
                            ) : (
                                <Skeleton className="w-1/2 h-3.5 lg:h-4" />
                            )}

                        </div>
                        <div className="flex gap-x-3">
                            <Location className="fill-dark dark:fill-light flex-shrink-0 w-6 h-6" />
                            {profileData?.address ? (
                                <p className="w-3/4">{profileData.address}</p>
                            ) : (
                                <div className='space-y-3 w-3/4'>
                                    <Skeleton className="w-full h-3.5 lg:h-4" />
                                    <Skeleton className="w-full h-3.5 lg:h-4" />
                                </div>
                            )}

                        </div>
                    </div>
                </div>
                <div className="w-full px-4 mb-10 md:w-1/3">
                    <h3 className="mb-5 text-xl font-semibold">Ikuti Saya</h3>
                    {profileData?.social_links ? (
                        <SocialMedia links={profileData.social_links} />
                    ) : (
                        <div className='flex gap-x-3'>
                            <Skeleton className="w-9 h-9" />
                            <Skeleton className="w-9 h-9" />
                            <Skeleton className="w-9 h-9" />
                            <Skeleton className="w-9 h-9" />
                            <Skeleton className="w-9 h-9" />
                        </div>
                    )}
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
