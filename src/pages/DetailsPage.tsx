import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link, useSearch } from '@tanstack/react-router';

interface ItemDetails {
    id: number;
    name: string;
    description: string;
    createdAt: string;
}

// Example API call function for fetching details
const fetchItemDetails = async (id: number): Promise<ItemDetails> => {
    // This would typically be a real API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id,
                name: `Item ${id}`,
                description: `This is the detailed description for item ${id}`,
                createdAt: new Date().toISOString(),
            });
        }, 500);
    });
};

export const DetailsPage: React.FC = () => {
    // Get the ID from the URL search parameters - fix: provide the required argument to useSearch
    const search = useSearch({ from: '/details' });
    const id = search?.id ? Number(search.id) : undefined;

    // Using TanStack Query for data fetching
    const { data, isLoading, error } = useQuery<ItemDetails>({
        queryKey: ['item-details', id],
        queryFn: () => fetchItemDetails(id as number),
        enabled: !!id,
    });

    if (!id) {
        return (
            <div className="p-6 bg-amber-50 text-amber-800 rounded-lg text-center">
                <p className="font-medium">No item ID provided.</p>
                <Link to="/" className="mt-4 inline-block text-secondary hover:underline">Back to home</Link>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="flex justify-center items-center p-8 text-gray-500">
                <div className="animate-pulse">Loading item details...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-6 bg-red-50 text-red-500 rounded-lg text-center">
                <p className="font-medium">Error loading details.</p>
                <Link to="/" className="mt-4 inline-block text-secondary hover:underline">Back to home</Link>
            </div>
        );
    }

    return (
        <div className="details-page">
            <h1 className="text-3xl font-bold text-primary mb-4">{data?.name} Details</h1>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6">
                <div className="space-y-4">
                    <div className="flex">
                        <span className="font-semibold w-32 text-gray-700">ID:</span>
                        <span>{data?.id}</span>
                    </div>

                    <div className="flex">
                        <span className="font-semibold w-32 text-gray-700">Description:</span>
                        <span>{data?.description}</span>
                    </div>

                    <div className="flex">
                        <span className="font-semibold w-32 text-gray-700">Created:</span>
                        <span>{data?.createdAt && new Date(data.createdAt).toLocaleString()}</span>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mt-6">
                <Link
                    to="/"
                    className="inline-flex items-center text-secondary hover:underline px-4 py-2 rounded-md hover:bg-secondary/10 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to home
                </Link>
            </div>
        </div>
    );
};