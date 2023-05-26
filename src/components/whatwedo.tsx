export default function Whatwedo() {
    return (
        <div className="container mx-auto py-8 ">
            <div>
                <h2 className="py-4 text-center text-4xl font-bold">WHAT WE DO</h2>
                <p className="py-4 text-center">Galeri kegiatan besar selama masa bakti 2021/2022</p>
            </div>
            <div className="flex justify-center ">
                <div className="tabs tabs-boxed">
                    <a className="tab">Sharing Alumni 1</a>
                    <a className="tab tab-active hover:bg-accent">Sharing Alumni 2</a>
                    <a className="tab">IFest # 11</a>
                    <a className="tab">Evaluasi</a>
                </div>
            </div>
        </div>
    );
}
