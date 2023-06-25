export type Photo = {
    id: string;
    created_at: string;
    width: number;
    height: number;
    color: string;
    description: string;
    urls: {
        raw: string;
        full: string;
        regular: string;
        small: string;
        thumb: string;
    };
    links: {
        self: string;
        html: string;
        download: string;
    };
};

export type PhotoSearchResponse = {
    total: number;
    total_pages: number;
    results: Photo[];
};
