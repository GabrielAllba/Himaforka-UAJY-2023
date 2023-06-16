"use client";

import { useState } from "react";

export default function BelajarBersama() {
  const [kelompokStudi, setKelompokStudi] = useState("KS Design Grafis");

  return (
    <div>
      <div>
        <h2 className="py-4 text-center text-4xl font-bold">BELAJAR BERSAMA HIMAFORKA</h2>
        <p className="py-4 text-center font-bold text-[#FF8A00]">
          Mari mengenal kelompok studi dibawah naungan Himaforka UAJY
        </p>
      </div>
      <div className="flex justify-center ">
        <div className="tabs tabs-boxed flex justify-center ">
          {kelompokStudi == "KS Pemrograman" ? (
            <a className="tab tab-active hover:bg-accent">KS Pemrograman</a>
          ) : (
            <a className="tab" onClick={() => setKelompokStudi("KS Pemrograman")}>
              KS Pemrograman
            </a>
          )}

          {kelompokStudi == "KS Design Grafis" ? (
            <a className="tab tab-active hover:bg-accent">KS Design Grafis</a>
          ) : (
            <a className="tab" onClick={() => setKelompokStudi("KS Design Grafis")}>
              KS Design Grafis
            </a>
          )}

          {kelompokStudi == "KS Linux" ? (
            <a className="tab tab-active hover:bg-accent">KS Linux</a>
          ) : (
            <a className="tab" onClick={() => setKelompokStudi("KS Linux")}>
              KS Linux
            </a>
          )}

          {kelompokStudi == "KS Machine Learning" ? (
            <a className="tab tab-active hover:bg-accent">KS Machine Learning</a>
          ) : (
            <a className="tab" onClick={() => setKelompokStudi("KS Machine Learning")}>
              KS Machine Learning
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
