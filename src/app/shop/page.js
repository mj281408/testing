'use client'
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Page() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10; // Number of products to display per page

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts();
    }, []);

    // Calculate the index of the last product on the current page
    const indexOfLastProduct = currentPage * productsPerPage;
    // Calculate the index of the first product on the current page
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    // Get the current products
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Calculate total pages
    const totalPages = Math.ceil(products.length / productsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    return (
        <>
            <section className="bg-[url(/images/shop-banner.png)] py-16 bg-cover">
                <div className='container text-center'>
                    <Image
                        width={80}
                        height={80}
                        className='mx-auto'
                        objectFit="cover"
                        src={`/images/f-logo.png`}
                        alt=""
                    />
                    <h2 className='py-2 text-6xl font-semibold'>Shop</h2>
                    <ul className='flex items-center justify-center gap-3 mt-3'>
                        <li className='font-semibold'><Link href="/">Home</Link></li>
                        <li><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black" />
                        </svg></li>
                        <li><Link href="/shop">Shop</Link></li>
                    </ul>
                </div>
            </section>
            <section className='py-16'>
                <div className="container">
                    <div className='grid grid-cols-4 gap-10'>
                        {
                            currentProducts.map((products,index)=>(                                
                        <div key={index}>
                            <Image
                                width={300}
                                height={300}
                                className='h-[200px] w-full object-contain'
                                src={products.image}
                                alt=""
                            />
                            <h3 className='font-medium'>{products.title}</h3>
                            <p className='text-lg font-semibold'>Rs.{products.price}</p>
                        </div>
                            ))
                        }
                    </div>
                    <div className="flex justify-between mt-4">
                        <button onClick={handlePrevPage} disabled={currentPage === 1} className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50">
                            Previous
                        </button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button onClick={handleNextPage} disabled={currentPage === totalPages} className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50">
                            Next
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}