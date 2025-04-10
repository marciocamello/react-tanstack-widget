import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';

interface Item {
    id: number;
    name: string;
}

interface HomeData {
    items: Item[];
}

// Example API call function
const fetchData = async (): Promise<HomeData> => {
    // This would typically be a real API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                items: [
                    { id: 1, name: 'Item 1' },
                    { id: 2, name: 'Item 2' },
                    { id: 3, name: 'Item 3' },
                ],
            });
        }, 500);
    });
};

export const HomePage: React.FC = () => {
    // Using TanStack Query for data fetching
    const { data, isLoading, error } = useQuery<HomeData>({
        queryKey: ['home-data'],
        queryFn: fetchData,
    });

    if (isLoading) {
        return <div className="flex justify-center items-center p-8 text-gray-500">
            <div className="animate-pulse">Loading data...</div>
        </div>;
    }

    if (error) {
        return <div className="p-6 text-red-500 text-center bg-red-50 rounded-md">
            <p className="font-semibold">Error loading data</p>
            <p className="text-sm mt-2">Please try again later</p>
        </div>;
    }

    return (
        <div className="home-page">
            <h1 className="text-3xl font-bold text-primary mb-4">Widget Home</h1>
            <p className="text-gray-600 mb-6">This is a demo widget using TanStack Router and TanStack Query</p>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Data from Query:</h2>
                <ul className="divide-y divide-gray-200">
                    {data?.items.map((item: Item) => (
                        <li key={item.id} className="py-3 flex items-center justify-between">
                            <span className="font-medium">{item.name}</span>
                            <Link
                                to="/details"
                                search={{ id: item.id }}
                                className="text-secondary hover:underline px-3 py-1 rounded-md hover:bg-secondary/10 transition-colors"
                            >
                                View Details
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};