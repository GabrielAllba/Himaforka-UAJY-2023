import Hero from '@/components/hero';
import Image from 'next/image';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-2">
            <Hero></Hero>
        </main>
    );
}
