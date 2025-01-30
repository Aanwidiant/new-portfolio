import Image from 'next/image';

const LogoAnimation = () => {
    return (
        <div className="overflow-hidden">
            <div className="grid grid-cols-3 gap-4 animate-logoSequence">
                <div className="flex justify-center items-center">
                    <Image src="/path/to/html-logo.png" alt="HTML" width={50} height={50} />
                </div>
                <div className="flex justify-center items-center">
                    <Image src="/path/to/css-logo.png" alt="CSS" width={50} height={50} />
                </div>
                <div className="flex justify-center items-center">
                    <Image src="/path/to/js-logo.png" alt="JavaScript" width={50} height={50} />
                </div>
                {/* Tambahkan logo lainnya */}
            </div>
        </div>
    );
};

export default LogoAnimation;
