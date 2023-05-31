'use client';

import { useState } from 'react';

export default function Whatwedo() {
    const [kegiatan, setKegiatan] = useState('Sharing Alumni 2');

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

                    {kegiatan == 'Sharing Alumni 2' ? (
                        <a className="tab tab-active hover:bg-accent">Sharing Alumni 2</a>
                    ) : (
                        <a className="tab" onClick={() => setKegiatan('Sharing Alumni 2')}>
                            Sharing Alumni 2
                        </a>
                    )}

                    {kegiatan == 'IFest#11' ? (
                        <a className="tab tab-active hover:bg-accent">IFest#11</a>
                    ) : (
                        <a className="tab" onClick={() => setKegiatan('IFest#11')}>
                           IFest#11
                        </a>
                    )}

                    {kegiatan == 'Evaluasi' ? (
                        <a className="tab tab-active hover:bg-accent">Evaluasi</a>
                    ) : (
                        <a className="tab" onClick={() => setKegiatan('Evaluasi')}>
                            Evaluasi
                        </a>
                    )}
                </div> 
            </div>
            <div className="card m-auto justify-center w-100 py-20 flex-row gap-2 px-10">
                {kegiatan == 'Sharing Alumni 1' && 
                <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img src="img/informasi-terbaru-test.jpg" alt="image" className="rounded-xl" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold text-[#FF8A00]">Sharing Alumni 1</h2>
                            <p className="text-left text-[#BEBEE7]">Rabu, 8 Desember 2023</p>
                            <p className='text-justify'>
                                Halo semua!
                                Berikut merupakan video after movie dari Sharing Alumni HIMAFORKA UAJY dengan tema "Turning Ideas Into Design".
                                Bersama alumni Informatika UAJY I Putu Eka Juliantara, S.T. yang dilakukan di ruang seminar.
                                Pada sharing ini, peserta diperkenalkan mengenai wawasan dan pengetahuan akan dunia kerja Sarjana Informatika khususnya dibidang UI/UX.
                            </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">MORE</button>
                            </div>
                        </div>
                    </div>
                    }

                    {kegiatan == 'Sharing Alumni 2' && 
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title font-bold text-[#FF8A00]">Sharing Alumni 2</h2>
                            <p className="text-left text-[#BEBEE7]">Rabu, 8 Desember 2023</p>   
                            <p className='text-justify'>
                                Halo semua!
                                Berikut merupakan video after movie dari Sharing Alumni HIMAFORKA UAJY dengan tema "Turning Ideas Into Design".
                                Bersama alumni Informatika UAJY I Putu Eka Juliantara, S.T. yang dilakukan di ruang seminar.
                                Pada sharing ini, peserta diperkenalkan mengenai wawasan dan pengetahuan akan dunia kerja Sarjana Informatika khususnya dibidang UI/UX.
                            </p>
                            <figure><img src="img/informasi-terbaru-test.jpg" alt="image" className="rounded-xl w-80 flex-none" /></figure>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">MORE</button>
                            </div>
                        </div>
                    </div>
                    }

                {kegiatan == 'IFest#11' && <p>IFest#11</p>}

                {kegiatan == 'Evaluasi' && <p>Evaluasi</p>}
            </div>
            
        </div>
    );
}
