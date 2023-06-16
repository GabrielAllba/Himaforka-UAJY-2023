import Navigation from '@/components/navigation';
import { ReactNode } from 'react';

import './globals.css';
import Footer from '@/components/footer';

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Navigation></Navigation>
                {children}
                <Footer></Footer>
            </body>
        </html>
    );
}
