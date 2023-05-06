export default function Navigation() {
    return (
        <nav className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn-ghost btn gap-2 text-xl normal-case">
                    <div className="w-10 rounded-full">
                        <img alt="logo-himaforka" src="/img/LOGO_HIMAFORKA.png" />
                    </div>
                    <h2 className="text-sm">HIMAFORKA UAJY</h2>
                </a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a>Beranda</a>
                    </li>
                    <li tabIndex={0}>
                        <a>
                            Tentang
                            <svg
                                className="fill-current"
                                height="20"
                                viewBox="0 0 24 24"
                                width="20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                            </svg>
                        </a>
                        <ul className="bg-base-100 p-2">
                            <li tabIndex={1}>
                                <a>
                                    Struktur Organisasi
                                    <svg
                                        className="fill-current"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        width="20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                    </svg>
                                </a>
                                <ul className="bg-base-100 p-2">
                                    <li>
                                        <a>Masa Bakti 2020/2021</a>
                                    </li>
                                    <li>
                                        <a>Masa Bakti 2021/2022</a>
                                    </li>
                                    <li>
                                        <a>Masa Bakti 2022/2023</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>Sejarah dan Visi-Misi</a>
                            </li>
                            <li>
                                <a>
                                    Deskripsi Bidang
                                    <svg
                                        className="fill-current"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        width="20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                    </svg>
                                </a>
                                <ul className="bg-base-100 p-2">
                                    <li>
                                        <a>Deskripsi Singkat</a>
                                    </li>
                                    <li>
                                        <a>Akademik dan Prestasi</a>
                                    </li>
                                    <li>
                                        <a>Komunikasi dan Informasi</a>
                                    </li>
                                    <li>
                                        <a>Usaha Dana</a>
                                    </li>
                                    <li>
                                        <a>Sumber Daya Manusia</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a>
                            Informasi
                            <svg
                                className="fill-current"
                                height="20"
                                viewBox="0 0 24 24"
                                width="20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                            </svg>
                        </a>
                        <ul className="bg-base-100 p-2">
                            <li tabIndex={2}>
                                <ul className="bg-base-100 p-2">
                                    <li>
                                        <a>Pengumuman</a>
                                    </li>
                                    <li>
                                        <a>Umum</a>
                                    </li>
                                    <li>
                                        <a>
                                            Berita
                                            <svg
                                                className="fill-current"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                width="20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                            </svg>
                                        </a>
                                        <ul className="bg-base-100 p-2">
                                            <li tabIndex={2}>
                                                <ul className="bg-base-100 p-2">
                                                    <li>
                                                        <a>Akademik</a>
                                                    </li>
                                                    <li>
                                                        <a>Non-Akademik</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li tabIndex={0}>
                        <a>
                            Galeri
                            <svg
                                className="fill-current"
                                height="20"
                                viewBox="0 0 24 24"
                                width="20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                            </svg>
                        </a>
                        <ul className="bg-base-100 p-2">
                            <li>
                                <a>Himaforka &apos;20-21&apos;</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
