'use client';

import { Photo } from '@/lib/type';
import Image from 'next/image';
import { FunctionComponent } from 'react';

export const PhotoList: FunctionComponent<{
    photos: Photo[];
}> = ({ photos }) => {
    return (
        <div className="grid grid-cols-3 gap-4 w-[1200px] mx-auto">
            {[0, 1, 2].map((columnIndex) => (
                <div key={columnIndex}>
                    {photos.map((photo, photoIndex) => {
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
                                        onClick={() => {
                                            window.open(
                                                photo.links
                                                    .html,
                                                '_blank'
                                            );
                                        }}
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
