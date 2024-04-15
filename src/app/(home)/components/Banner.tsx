import React from 'react';
import Image from 'next/image';

const Banner = () => {
    return (
        <div className="mx-auto max-w-7xl py-10">
            <div className="relative">
                <Image
                    src={'/paper-bg.jpg'}
                    alt="billboard"
                    className="h-72 w-full rounded-lg"
                    height={0}
                    width={0}
                    sizes="100vw"
                />
                <div className="absolute inset-0 h-full w-full rounded-lg bg-gray-950 opacity-30" />
                <Image
                    src={'/book.png'}
                    alt="billboard"
                    className="absolute bottom-0 right-5"
                    height={0}
                    width={0}
                    sizes="100vw"
                    style={{ width: 'auto', height: '18rem' }}
                />
                <h3 className="absolute left-10 top-1/2 w-full max-w-3xl -translate-y-1/2 text-5xl font-semibold tracking-tight text-white">
                    Connect, Share and Trade Your Favourite Reads...
                </h3>
            </div>
        </div>
    );
};

export default Banner;
