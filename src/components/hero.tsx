export default function Hero() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center">
                    <h1 className="text-center text-5xl font-bold">HIMAFORKA UAJY</h1>
                    <h2 className="text-center text-5xl font-bold">UNIVERSITAS ATMA JAYA YOGYAKARTA</h2>{' '}
                    <p className="py-6 text-center">
                        Lembaga kemahasiswaan terstruktur di tingkat program studi yang menampung, menyalurkan, serta
                        menjadi wadah aspirasi dan sarana pengembangan potensi mahasiswa Informatika Fakultas Teknologi
                        Industri Universitas Atma Jaya Yogyakarta. //{' '}
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="btn-primary btn">Read More</button>
                        <button className="btn-primary btn">Play Video</button>{' '}
                    </div>
                </div>
            </div>
        </div>
    );
}
