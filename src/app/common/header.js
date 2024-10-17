'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
    const [selectedOption, setSelectedOption] = useState('Vegetables');
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState('0px');
    const contentRef = useRef(null);
    const options = ['Vegetables', 'Cold Drinks', 'Fruits', 'Bakery'];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            setHeight(`${contentRef.current.scrollHeight}px`);
        } else {
            setHeight('0px');
        }
    }, [isOpen]);
    return (
        <>
            <header>
                <div className="py-2 font-medium text-white bg-secondary dark:bg-dark-secondary">
                    <div className="container">
                        <div className="flex justify-between">
                            <p>Flat 50% Off On Grocery Shop.</p>
                            <ul className="flex items-center gap-5">
                                <li>
                                    <Link href="/">Help?</Link>
                                </li>
                                <li>
                                    <Link href="/">Track Order</Link>
                                </li>
                                <li className="relative group">
                                    <Link href="/" className="flex items-center gap-1"><span>Language</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    </Link>
                                    <ol className="absolute font-normal bg-white text-secondary w-[120px] p-2 rounded-md border shadow-md text-sm translate-y-5 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-500">
                                        <li>
                                            <Link href="/">Engslih</Link>
                                        </li>
                                        <li>
                                            <Link href="/">Hindi</Link>
                                        </li>
                                        <li>
                                            <Link href="/">Gujarti</Link>
                                        </li>
                                    </ol>
                                </li>
                                <li className="relative group">
                                    <Link href="/" className="flex items-center gap-1"><span>Currency</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    </Link>
                                    <ol className="absolute font-normal bg-white text-secondary w-[120px] p-2 rounded-md border shadow-md text-sm translate-y-5 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-500">
                                        <li>
                                            <Link href="/">USD</Link>
                                        </li>
                                        <li>
                                            <Link href="/">EUR</Link>
                                        </li>
                                    </ol>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="py-4">
                    <div className="container">
                        <div className="flex items-stretch justify-between">
                            <Link href={"/"}>
                                <Image
                                    width={125}
                                    height={43}
                                    objectFit="cover"
                                    src={`/images/logo.png`}
                                    alt=""
                                />
                            </Link>
                            <div className="flex h-[45px] relative">
                                <div className="relative inline-block h-full text-left">
                                    <button
                                        className="flex h-full items-center justify-between w-[140px] px-4  font-medium border rounded-s-md border-border dark:border-border-dark text-decripation dark:text-dark-text"
                                        onClick={toggleDropdown}
                                    >
                                        {selectedOption}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`h-4 w-4 transform transition-transform stroke-decripation dark:stroke-dark-text duration-300 ${isOpen ? 'rotate-180' : ''
                                                }`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>
                                    <div
                                        ref={contentRef}
                                        style={{ height: height }}
                                        className="absolute w-full overflow-hidden transition-all duration-300"
                                    >
                                        <ul className="z-10 mt-2 font-medium bg-white border border-gray-200 rounded-md shadow-lg text-decripation dark:text-dark-text">
                                            {options.map((option) => (
                                                <li key={option} className="px-4 py-2">
                                                    <label className="flex items-center cursor-pointer hover:text-primary">
                                                        <input
                                                            type="radio"
                                                            name="dropdown"
                                                            value={option}
                                                            checked={selectedOption === option}
                                                            onChange={() => handleOptionClick(option)}
                                                            className="hidden mr-2"
                                                        />
                                                        {option}
                                                    </label>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <input type="search" className="h-full px-4 border w-[450px] border-s-0 border-border dark:border-border-dark rounded-e-md" placeholder="Search product..." />
                                <svg width="18" className="stroke-[#555] dark:stroke-border-dark absolute top-3 right-4" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="inherit" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M22 22L20 20" stroke="inherit" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-2 py-1 bg-white border md:px-0 border-border dark:border-border-dark dark:bg-dark-secondary">
                    <div className="container">
                        <div className="flex items-center gap-8">
                            <Link href={"/"} className="border bg-white dark:bg-dark-primary rounded-md border-border dark:border-border-dark w-[45px] h-[45px] flex justify-center items-center">
                                <svg class="svg-icon w-[25px] h-[25px]" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <path class="fill-[#6c7fd8]" d="M384 928H192a96 96 0 0 1-96-96V640a96 96 0 0 1 96-96h192a96 96 0 0 1 96 96v192a96 96 0 0 1-96 96zM192 608a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V640a32 32 0 0 0-32-32H192zM784 928H640a96 96 0 0 1-96-96V640a96 96 0 0 1 96-96h192a96 96 0 0 1 96 96v144a32 32 0 0 1-64 0V640a32 32 0 0 0-32-32H640a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h144a32 32 0 0 1 0 64zM384 480H192a96 96 0 0 1-96-96V192a96 96 0 0 1 96-96h192a96 96 0 0 1 96 96v192a96 96 0 0 1-96 96zM192 160a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32H192zM832 480H640a96 96 0 0 1-96-96V192a96 96 0 0 1 96-96h192a96 96 0 0 1 96 96v192a96 96 0 0 1-96 96zM640 160a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32H640z"></path>
                                </svg>
                            </Link>
                            <ul className="flex gap-8 font-semibold text-secondary dark:text-dark-secondary">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/">Categories</Link>
                                </li>
                                <li>
                                    <Link href="/">Products</Link>
                                </li>
                                <li>
                                    <Link href="/">Pages</Link>
                                </li>
                                <li>
                                    <Link href="/">Blog</Link>
                                </li>
                                <li>
                                    <Link href="/">Offers</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}