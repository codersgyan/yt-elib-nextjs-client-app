import Banner from '@/app/(home)/components/Banner';
import Image from 'next/image';
import BookList from './components/BookList';
import { Suspense } from 'react';
import Loading from '@/components/Loading';

export default async function Home() {
    return (
        <>
            <Banner />
            <Suspense fallback={<Loading />}>
                <BookList />
            </Suspense>
        </>
    );
}
