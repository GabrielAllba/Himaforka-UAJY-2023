'use client';

import { useState } from 'react';

export default function Whatwedo() {
    const [kegiatan, setKegiatan] = useState('Sharing Alumni 1');

    return (
        <div className="container mx-auto py-8 ">
            <div>
                <h2 className="py-4 text-center text-4xl font-bold">WHAT WE DO</h2>
                <p className="py-4 text-center">Galeri kegiatan besar selama masa bakti 2021/2022</p>
            </div>
            <div className="flex justify-center ">
                <div className="tabs tabs-boxed">
                    {kegiatan == 'Sharing Alumni 1' ? (
                        <a className="tab tab-active hover:bg-accent">Sharing Alumni 1</a>
                    ) : (
                        <a className="tab" onClick={() => setKegiatan('Sharing Alumni 1')}>
                            Sharing Alumni 1
                        </a>
                    )}

                    {kegiatan == 'IFest#11' ? (
                        <a className="tab tab-active hover:bg-accent">IFest#11</a>
                    ) : (
                        <a className="tab" onClick={() => setKegiatan('IFest#11')}>
                            IFest#11
                        </a>
                    )}
                </div>
            </div>
            <div className="flex justify-center ">
                {kegiatan == 'Sharing Alumni 1' && <p>SA 1</p>}

                {kegiatan == 'IFest#11' && <p>IFest#11</p>}
            </div>
        </div>
    );
}
