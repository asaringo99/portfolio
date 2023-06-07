// pages/_app.tsx
import Head from 'next/head';
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import LoadingScreen from './LoadingScreen';
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = (url: string) => setLoading(true);
        const handleComplete = (url: string) => setLoading(false);

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    }, [router]);

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            {loading ? <LoadingScreen /> : <Component {...pageProps} />}
        </>
    );
}

export default MyApp;
