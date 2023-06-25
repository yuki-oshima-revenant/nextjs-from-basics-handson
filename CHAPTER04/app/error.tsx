'use client';

import { FunctionComponent, useEffect } from 'react';
import { VscRefresh } from 'react-icons/vsc';

const Error: FunctionComponent<{
    error: Error;
    reset: () => void;
}> = ({ error, reset }) => {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className=" w-60 mx-auto py-12">
            <div className="text-2xl font-bold mb-4">
                エラーが発生しました
            </div>
            <div className="text-center">
                <button
                    className="bg-gray-700 py-2 px-4 text-2xl"
                    onClick={() => reset()}
                >
                    <VscRefresh />
                </button>
            </div>
        </div>
    );
};

export default Error;
