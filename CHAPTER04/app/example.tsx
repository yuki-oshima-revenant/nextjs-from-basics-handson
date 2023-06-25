import { getRamdomPhotos } from '@/lib/unsplash';
import Image from 'next/image';

export const Example1 = async () => {
    const randomPhotos = await getRamdomPhotos();
    return (
        <div>
            {randomPhotos.map((photo) => (
                <Image
                    id={photo.id}
                    src={photo.urls.small}
                    width={400}
                    height={photo.height * (400 / photo.width)}
                    alt={photo.description}
                />
            ))}
        </div>
    );
};

export const Example2 = async () => {
    const randomPhotos = await getRamdomPhotos();
    return (
        <div className="grid grid-cols-3 gap-4 w-[1200px] mx-auto">
            {[0, 1, 2].map((index) => (
                <div
                    key={randomPhotos[index].id}
                    className="mb-4 last:mb-0"
                >
                    <Image
                        className="cursor-pointer"
                        src={randomPhotos[index].urls.small}
                        width={400}
                        height={
                            randomPhotos[index].height *
                            (400 / randomPhotos[index].width)
                        }
                        alt={randomPhotos[index].description}
                    />
                </div>
            ))}
        </div>
    );
};

export const Example3 = async () => {
    const randomPhotos = await getRamdomPhotos();
    return (
        <div className="grid grid-cols-3 gap-4 w-[1200px] mx-auto">
            {[0, 1, 2].map((columnIndex) => (
                <div key={columnIndex}>
                    {randomPhotos.map((photo, photoIndex) => {
                        if (photoIndex % 3 === columnIndex) {
                            return (
                                <div
                                    key={photo.id}
                                    className="mb-4 last:mb-0"
                                >
                                    <Image
                                        className="cursor-pointer"
                                        src={photo.urls.small}
                                        width={400}
                                        height={
                                            photo.height *
                                            (400 / photo.width)
                                        }
                                        alt={photo.description}
                                    />
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            ))}
        </div>
    );
};
