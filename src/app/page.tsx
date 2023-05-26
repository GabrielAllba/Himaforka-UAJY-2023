import Hero from '@/components/hero';
import Informasiterbaru from '@/components/informasiterbaru';
import Whatwedo from '@/components/whatwedo';

const Home = () => {
    return (
        <main>
            <div className="flex min-h-screen flex-col items-center justify-center p-2">
                <Hero></Hero>
            </div>
            <Informasiterbaru></Informasiterbaru>
            <Whatwedo></Whatwedo>
        </main>
    );
};

export default Home;
