export default function Navigation() {
    return (
        <div className="navbar fixed bg-base-100 z-10">
            <div className="flex-1">
                <a className="btn-ghost btn gap-2 text-xl normal-case">
                    <div className="w-10 rounded-full">
                        <img alt="logo-himaforka" src="/img/LOGO_HIMAFORKA.png" />
                    </div>
                    <h2 className="text-sm font-bold text-[#242879]">HIMAFORKA UAJY</h2>
                </a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li className="text-[#242879] font-bold ">
                        <a>Beranda</a>
                    </li>

                    <li tabIndex={0}>
                        <a className="font-bold text-[#B0B0E4]">
                            Informasi
                            <svg
                                className="fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                            >
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                            </svg>
                        </a>
                        <ul className="p-2 bg-base-100">
                            <li>
                                <a>
                                    Berita
                                    <svg
                                        className="fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                    </svg>
                                </a>
                                <ul className="p-2 bg-base-100">
                                    <li>
                                        <a>Akademik</a>
                                    </li>
                                    <li>
                                        <a>Non-Akademik</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>Pengumuman</a>
                            </li>
                            <li>
                                <a>Umum</a>
                            </li>
                        </ul>
                    </li>
                    <li tabIndex={0}>
                        <a className="font-bold text-[#B0B0E4]">
                            Tentang
                            <svg
                                className="fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                            >
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                            </svg>
                        </a>
                        <ul className="p-2 bg-base-100">
                            <li>
                                <a>
                                    Deskripsi Bidang
                                    <svg
                                        className="fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                    </svg>
                                </a>
                                <ul className="p-2 bg-base-100">
                                    <li>
                                        <a>Akademik Prestasi</a>
                                    </li>
                                    <li>
                                        <a>Komunikasi dan Informasi</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>Struktur Organisasi</a>
                            </li>
                            <li>
                                <a>Sejaran dan Visi Misi</a>
                            </li>
                        </ul>
                    </li>
                    <li tabIndex={0}>
                        <a className="font-bold text-[#B0B0E4]">Galeri</a>
                    </li>
                    <li>
                        <a className="font-bold text-[#B0B0E4]">Kontak</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
