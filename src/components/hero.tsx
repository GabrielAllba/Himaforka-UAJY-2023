export default function Hero() {
    return (
        <div className="hero min-h-screen bg-base-100 meshgrad">
            <div className="hero-content justify-center flex-col lg:flex-row-reverse">
                <div className="text-center">
                    <h1 className="text-center text-5xl font-bold">HIMAFORKA UAJY</h1>
                    <h2 className="text-center text-5xl font-bold">UNIVERSITAS ATMA JAYA YOGYAKARTA</h2>{' '}
                    <p className="py-6 text-center">
                        Lembaga kemahasiswaan terstruktur di tingkat program studi yang menampung, menyalurkan, serta
                        menjadi wadah aspirasi dan sarana pengembangan potensi mahasiswa Informatika Fakultas Teknologi
                        Industri Universitas Atma Jaya Yogyakarta. //{' '}
                    </p>
                    <div className="card m-auto w-100 justify-center py-4 flex-row flex-wrap items-center gap-4">
                        <div className="h-48 aspect-square card m-auto  flex-row">
                            <div className="card m-auto justify-center p-4 bg-base-100 shadow-xl">
                                <img className="aspect-square" src="img/LOGO_UAJY.png" alt="Shoes" />
                            </div>
                        </div>
                        <div className="card m-auto justify-center w-100 bg-base-100 shadow-xl py-4 flex-row gap-2 px-8">
                            <div className="card m-auto justify-center aspect-square w-1/3 p-4 bg-base-100 shadow-xl">
                                <img src="img/kelompok-studi/logo-ksdg-2022-2023.png" alt="Shoes" />
                            </div>
                            <div className="aspect-square card m-auto justify-center w-1/3 p-4 bg-base-100 shadow-xl">
                                <img src="img/kelompok-studi/logo-ksp-2022-2023.png" alt="Shoes" />
                            </div>
                            <div className="aspect-square card m-auto justify-center w-1/3 p-4 bg-base-100 shadow-xl">
                                <img src="img/kelompok-studi/logo-ksl-2022-2023.png" alt="Shoes" />
                            </div>
                        </div>
                        <div className="h-48 aspect-square card m-auto  flex-row">
                            <div className="card m-auto justify-center p-4 bg-base-100 shadow-xl">
                                <img className="aspect-square" src="img/LOGO_HIMAFORKA.png" alt="Shoes" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center gap-4 pt-8">
                        <button className="btn-primary btn bg-secondary hover:bg-accent text-white rounded-full">
                            Read More
                        </button>
                        <button className="btn-primary btn bg-white hover:bg-accent rounded-full shadow-lg">
                            Play Video
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
