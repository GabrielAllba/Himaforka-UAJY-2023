export default function Hero() {
    return (
        <div className="meshgrad hero min-h-screen bg-base-100">
            <div className="hero-content flex-col justify-center lg:flex-row-reverse">
                <div className="text-center">
                    <h1 className="text-center text-5xl font-bold">HIMAFORKA UAJY</h1>
                    <h2 className="text-center text-5xl font-bold">UNIVERSITAS ATMA JAYA YOGYAKARTA</h2>{' '}
                    <p className="py-6 text-center">
                        Lembaga kemahasiswaan terstruktur di tingkat program studi yang menampung, menyalurkan, serta
                        menjadi wadah aspirasi dan sarana pengembangan potensi mahasiswa Informatika Fakultas Teknologi
                        Industri Universitas Atma Jaya Yogyakarta. //{' '}
                    </p>
                    <div className="w-100 card m-auto flex-row flex-wrap items-center justify-center gap-4 py-4">
                        <div className="card m-auto aspect-square h-48  flex-row">
                            <div className="card m-auto justify-center bg-base-100 p-4 shadow-xl">
                                <img alt="Shoes" className="aspect-square" src="/img/LOGO_UAJY.png" />
                            </div>
                        </div>
                        <div className="w-100 card m-auto flex-row justify-center gap-2 bg-base-100 px-8 py-4 shadow-xl">
                            <div className="card m-auto aspect-square w-1/3 justify-center bg-base-100 p-4 shadow-xl">
                                <img alt="Shoes" src="/img/kelompok-studi/logo-ksdg-2022-2023.png" />
                            </div>
                            <div className="card m-auto aspect-square w-1/3 justify-center bg-base-100 p-4 shadow-xl">
                                <img alt="Shoes" src="/img/kelompok-studi/logo-ksp-2022-2023.png" />
                            </div>
                            <div className="card m-auto aspect-square w-1/3 justify-center bg-base-100 p-4 shadow-xl">
                                <img alt="Shoes" src="/img/kelompok-studi/logo-ksl-2022-2023.png" />
                            </div>
                        </div>
                        <div className="card m-auto aspect-square h-48  flex-row">
                            <div className="card m-auto justify-center bg-base-100 p-4 shadow-xl">
                                <img alt="Shoes" className="aspect-square" src="/img/LOGO_HIMAFORKA.png" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center gap-4 pt-8">
                        <button className="btn-primary btn rounded-full bg-secondary text-white hover:bg-accent">
                            Read More
                        </button>
                        <button className="btn-primary btn rounded-full bg-white shadow-lg hover:bg-accent">
                            Play Video
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
