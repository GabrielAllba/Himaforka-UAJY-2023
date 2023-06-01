"use client";

import { useState } from "react";

export default function Whatwedo() {
  const [kegiatan, setKegiatan] = useState("Sharing Alumni 2");

  return (
    <div className="container mx-auto py-8 ">
      <div>
        <h2 className="py-4 text-center text-4xl font-bold">WHAT WE DO</h2>
        <p className="py-4 text-center">Galeri kegiatan besar selama masa bakti 2021/2022</p>
      </div>
      <div className="flex justify-center ">
        <div className="tabs tabs-boxed">
          {kegiatan == "Sharing Alumni 1" ? (
            <a className="tab tab-active hover:bg-accent">Sharing Alumni 1</a>
          ) : (
            <a className="tab" onClick={() => setKegiatan("Sharing Alumni 1")}>
              Sharing Alumni 1
            </a>
          )}

          {kegiatan == "Sharing Alumni 2" ? (
            <a className="tab tab-active hover:bg-accent">Sharing Alumni 2</a>
          ) : (
            <a className="tab" onClick={() => setKegiatan("Sharing Alumni 2")}>
              Sharing Alumni 2
            </a>
          )}

          {kegiatan == "IFest#11" ? (
            <a className="tab tab-active hover:bg-accent">IFest#11</a>
          ) : (
            <a className="tab" onClick={() => setKegiatan("IFest#11")}>
              IFest#11
            </a>
          )}

          {kegiatan == "Evaluasi" ? (
            <a className="tab tab-active hover:bg-accent">Evaluasi</a>
          ) : (
            <a className="tab" onClick={() => setKegiatan("Evaluasi")}>
              Evaluasi
            </a>
          )}
        </div>
      </div>
      <div className="w-100 card m-auto flex-row justify-center gap-2 px-10 py-20">
        {kegiatan == "Sharing Alumni 1" && (
          <a href="" className="card bg-base-100 shadow-xl lg:card-side">
            <div className="card-body gap-4">
              <div>
                <h2 className="card-title font-bold text-[#FF8A00]">Sharing Alumni 1</h2>
                <p className="text-left text-[#BEBEE7]">Rabu, 8 Desember 2023</p>
              </div>
              <div className="w-100 h-1 bg-[#ff8a00]"></div>
              <div className="flex flex-wrap-reverse items-center justify-center  gap-8 lg:flex-nowrap">
                <div className="w-3/4 flex-col">
                  <div className="badge bg-[#FFE1BF] py-3 text-[#FF8A00] ">Akademik</div>
                  <p className="pt-4">
                    Halo semua! Berikut merupakan video after movie dari Sharing Alumni HIMAFORKA
                    UAJY dengan tema "Turning Ideas Into Design". <br></br>
                    <br></br>Bersama alumni Informatika UAJY I Putu Eka Juliantara, S.T. yang
                    dilakukan di ruang seminar. Pada sharing ini, peserta diperkenalkan mengenai
                    wawasan dan pengetahuan akan dunia kerja Sarjana Informatika khususnya dibidang
                    UI/UX.<br></br>
                    <br></br>
                    Halo semua! Berikut merupakan video after movie dari Sharing Alumni HIMAFORKA
                    UAJY dengan tema "Turning Ideas Into Design". <br></br>
                  </p>
                </div>

                <div className="w-100 lg:w-1/4">
                  <figure>
                    <img src="img/informasi-terbaru-test.jpg" alt="image" className="w-1/2" />
                  </figure>
                </div>
              </div>
            </div>
          </a>
        )}
        {kegiatan == "Sharing Alumni 2" && (
          <a href="" className="card bg-base-100 shadow-xl lg:card-side">
            <div className="card-body gap-4">
              <div>
                <h2 className="card-title font-bold text-[#FF8A00]">Sharing Alumni 2</h2>
                <p className="text-left text-[#BEBEE7]">Rabu, 8 Desember 2023</p>
              </div>
              <div className="w-100 h-1 bg-[#ff8a00]"></div>
              <div className="flex flex-wrap-reverse items-center justify-center  gap-8 lg:flex-nowrap">
                <div className="w-3/4 flex-col">
                  <div className="badge bg-[#FFE1BF] py-3 text-[#FF8A00] ">Akademik</div>
                  <p className="pt-4">
                    Halo semua! Berikut merupakan video after movie dari Sharing Alumni HIMAFORKA
                    UAJY dengan tema "Turning Ideas Into Design". <br></br>
                    <br></br>Bersama alumni Informatika UAJY I Putu Eka Juliantara, S.T. yang
                    dilakukan di ruang seminar. Pada sharing ini, peserta diperkenalkan mengenai
                    wawasan dan pengetahuan akan dunia kerja Sarjana Informatika khususnya dibidang
                    UI/UX.<br></br>
                    <br></br>
                    Halo semua! Berikut merupakan video after movie dari Sharing Alumni HIMAFORKA
                    UAJY dengan tema "Turning Ideas Into Design". <br></br>
                  </p>
                </div>

                <div className="w-100 lg:w-1/4">
                  <figure>
                    <img src="img/informasi-terbaru-test.jpg" alt="image" className="w-1/2" />
                  </figure>
                </div>
              </div>
            </div>
          </a>
        )}

        {kegiatan == "IFest#11" && (
          <a href="" className="card bg-base-100 shadow-xl lg:card-side">
            <div className="card-body gap-4">
              <div>
                <h2 className="card-title font-bold text-[#FF8A00]">IFest #11</h2>
                <p className="text-left text-[#BEBEE7]">Rabu, 8 Desember 2023</p>
              </div>
              <div className="w-100 h-1 bg-[#ff8a00]"></div>
              <div className="flex flex-wrap-reverse items-center justify-center  gap-8 lg:flex-nowrap">
                <div className="w-3/4 flex-col">
                  <div className="badge bg-[#FFE1BF] py-3 text-[#FF8A00] ">Akademik</div>
                  <p className="pt-4">
                    Halo semua! Berikut merupakan video after movie dari Sharing Alumni HIMAFORKA
                    UAJY dengan tema "Turning Ideas Into Design". <br></br>
                    <br></br>Bersama alumni Informatika UAJY I Putu Eka Juliantara, S.T. yang
                    dilakukan di ruang seminar. Pada sharing ini, peserta diperkenalkan mengenai
                    wawasan dan pengetahuan akan dunia kerja Sarjana Informatika khususnya dibidang
                    UI/UX.<br></br>
                    <br></br>
                    Halo semua! Berikut merupakan video after movie dari Sharing Alumni HIMAFORKA
                    UAJY dengan tema "Turning Ideas Into Design". <br></br>
                  </p>
                </div>

                <div className="w-100 lg:w-1/4">
                  <figure>
                    <img src="img/informasi-terbaru-test.jpg" alt="image" className="w-1/2" />
                  </figure>
                </div>
              </div>
            </div>
          </a>
        )}

        {kegiatan == "Evaluasi" && (
          <a href="" className="card bg-base-100 shadow-xl lg:card-side">
            <div className="card-body gap-4">
              <div>
                <h2 className="card-title font-bold text-[#FF8A00]">Evaluasi</h2>
                <p className="text-left text-[#BEBEE7]">Rabu, 8 Desember 2023</p>
              </div>
              <div className="w-100 h-1 bg-[#ff8a00]"></div>
              <div className="flex flex-wrap-reverse items-center justify-center  gap-8 lg:flex-nowrap">
                <div className="w-3/4 flex-col">
                  <div className="badge bg-[#FFE1BF] py-3 text-[#FF8A00] ">Akademik</div>
                  <p className="pt-4">
                    Halo semua! Berikut merupakan video after movie dari Sharing Alumni HIMAFORKA
                    UAJY dengan tema "Turning Ideas Into Design". <br></br>
                    <br></br>Bersama alumni Informatika UAJY I Putu Eka Juliantara, S.T. yang
                    dilakukan di ruang seminar. Pada sharing ini, peserta diperkenalkan mengenai
                    wawasan dan pengetahuan akan dunia kerja Sarjana Informatika khususnya dibidang
                    UI/UX.<br></br>
                    <br></br>
                    Halo semua! Berikut merupakan video after movie dari Sharing Alumni HIMAFORKA
                    UAJY dengan tema "Turning Ideas Into Design". <br></br>
                  </p>
                </div>

                <div className="w-100 lg:w-1/4">
                  <figure>
                    <img src="img/informasi-terbaru-test.jpg" alt="image" className="w-1/2" />
                  </figure>
                </div>
              </div>
            </div>
          </a>
        )}
      </div>
    </div>
  );
}
