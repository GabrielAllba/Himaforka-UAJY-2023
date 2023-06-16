'use client';

export default function Footer() {
    return (
        <footer className="footer p-10 bg-[#1A1C4C] text-white">
            <div className="text-white">
                <div className="w-10 rounded-full py-2">
                    <img alt="logo-himaforka" src="/img/LOGO_HIMAFORKA.png" />
                </div>
                <p className="text-white font-bold">HIMAFORKA UAJY</p>
                <p className="text-[#7D81D7]">Providing reliable tech since 1992</p>
            </div>
            <div>
                <span className="footer-title text-white opacity-100">Services</span>

                <a className="link link-hover text-[#7D81D7]">Branding</a>
                <a className="link link-hover text-[#7D81D7]">Design</a>
                <a className="link link-hover text-[#7D81D7]">Marketing</a>
                <a className="link link-hover text-[#7D81D7]">Advertisement</a>
            </div>
            <div>
                <span className="footer-title text-white opacity-100">Services</span>
                <a className="link link-hover text-[#7D81D7]">About us</a>
                <a className="link link-hover text-[#7D81D7]">Contact</a>
                <a className="link link-hover text-[#7D81D7]">Jobs</a>
                <a className="link link-hover text-[#7D81D7]">Press kit</a>
            </div>
            <div>
                <span className="footer-title text-white opacity-100">Services</span>
                <a className="link link-hover text-[#7D81D7]">Terms of use</a>
                <a className="link link-hover text-[#7D81D7]">Privacy policy</a>
                <a className="link link-hover text-[#7D81D7]">Cookie policy</a>
            </div>
        </footer>
    );
}
