import { Search } from '@/lib/component/Search';
import { getRamdomPhotos } from '@/lib/unsplash';

const Home = async () => {
    const randomPhotos = await getRamdomPhotos();
    return (
        <div>
            <Search randomPhotos={randomPhotos}></Search>
        </div>
    );
};

export default Home;
