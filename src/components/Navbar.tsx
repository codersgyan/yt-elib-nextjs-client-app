import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="border-b">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4">
                <div>
                    <Link href={'/'}>
                        <div className="flex items-center gap-1">
                            <div className="relative">
                                <Hexagon />
                                <BookIcon />
                            </div>
                            <span className="text-xl font-bold uppercase tracking-tight text-primary-500">
                                Coders Book
                            </span>
                        </div>
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <button className="h-10 rounded-md border border-primary-500 px-4 py-2 text-sm font-medium text-primary-500 transition-all hover:border-primary-100 hover:bg-primary-100 active:border-primary-200 active:bg-primary-200">
                        Sign in
                    </button>
                    <button className="h-10 rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-primary-600 active:bg-primary-700">
                        Sign up
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

const Hexagon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="45"
        height="45"
        viewBox="0 0 24 24"
        fill="#ce7041"
        stroke="#ce7041"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-hexagon">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    </svg>
);

const BookIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#fff"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="#ce7041"
        className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 transform">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
        />
    </svg>
);
