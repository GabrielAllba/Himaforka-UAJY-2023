"use client";

import { useState } from "react";

export default function Kenalikami() {
  const [anggota, setAnggota] = useState("Sumber Daya Manusia");

  return (
    <div className="container mx-auto py-8 ">
      <div>
        <h2 className="py-4 text-center text-4xl font-bold">KENALI KAMI</h2>
        <p className="py-4 text-center font-bold text-[#FF8A00]">
          Pada masa bakti 2022/2023, Himaforka memiliki 44 orang pengurus, dan bertanggungjawab atas
          kegiatan dari 3 Kelompok Studi.
        </p>
      </div>
      <div className="flex justify-center ">
        <div className="tabs tabs-boxed">
          {anggota == "Pengurus Harian" ? (
            <a className="tab tab-active hover:bg-accent">Pengurus Harian</a>
          ) : (
            <a className="tab" onClick={() => setAnggota("Pengurus Harian")}>
              Pengurus Harian
            </a>
          )}

          {anggota == "Sumber Daya Manusia" ? (
            <a className="tab tab-active hover:bg-accent">Sumber Daya Manusia</a>
          ) : (
            <a className="tab" onClick={() => setAnggota("Sumber Daya Manusia")}>
              Sumber Daya Manusia
            </a>
          )}

          {anggota == "Akademik dan Prestasi" ? (
            <a className="tab tab-active hover:bg-accent">Akademik dan Prestasi</a>
          ) : (
            <a className="tab" onClick={() => setAnggota("Akademik dan Prestasi")}>
              Akademik dan Prestasi
            </a>
          )}

          {anggota == "Komunikasi dan Informasi" ? (
            <a className="tab tab-active hover:bg-accent">Komunikasi dan Informasi</a>
          ) : (
            <a className="tab" onClick={() => setAnggota("Komunikasi dan Informasi")}>
              Komunikasi dan Informasi
            </a>
          )}

          {anggota == "Usaha Dana" ? (
            <a className="tab tab-active hover:bg-accent">Usaha Dana</a>
          ) : (
            <a className="tab" onClick={() => setAnggota("Usaha Dana")}>
              Usaha Dana
            </a>
          )}
        </div>
      </div>
      <div className="w-100 card m-auto flex-row justify-center gap-2 px-10 py-20">
        {anggota == "Pengurus Harian" && (
          <div className="card card-compact w-96 bg-base-100 text-center shadow-xl">
            <div className="card-body">
              <figure>
                <img src="img/informasi-terbaru-test.jpg" alt="ketua" />
              </figure>
              <h2 className="card-title text-center">Ignatius Axel</h2>
              <p>Ketua</p>
              <div className="card-actions justify-end">
                <button className="btn-primary btn">IG</button>
                <button className="btn-primary btn">I LOVE HIMA</button>
              </div>
            </div>
          </div>
        )}

        {anggota == "Sumber Daya Manusia" && <p>Sumber Daya Manusia</p>}

        {anggota == "Akademik dan Prestasi" && <p>Akademik dan Prestasi</p>}

        {anggota == "Komunikasi dan Informasi" && <p>Komunikasi dan Informasi</p>}

        {anggota == "Usaha Dana" && <p>Usaha Dana</p>}
      </div>
    </div>
  );
}
