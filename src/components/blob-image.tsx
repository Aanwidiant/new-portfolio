import React from 'react';

const BlobImage = () => {
    return (
        <div className="mx-auto mt-10 flex justify-center items-center">
            <svg
                className="mx-auto scale-90 md:scale-125 fill-primary"
                width="400"
                height="400"
                viewBox="0 0 280 318"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <clipPath id="heroClip">
                        <path d="M0 170.318 V0 L280 0 V297.564 C280 312.96 263.333 322.583 250 314.885 L10 176.321Z" />
                    </clipPath>
                </defs>
                <rect width="280" height="318" fill="none" />
                <path
                    d="M10 176.321C-3.33333 168.623 -3.33334 149.378 10 141.679L250 3.11545C263.333 -4.58258 280 5.03992 280 20.4359V297.564C280 312.96 263.333 322.583 250 314.885L10 176.321Z"
                    clipPath="url(#blobClip)"
                />
                <image
                    className="h-full"
                    id="imageBlob"
                    href="img/profile.png"
                    clipPath="url(#heroClip)"
                ></image>
            </svg>
        </div>
    );
};

export default BlobImage;