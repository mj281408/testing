'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function HeaderBlue() {
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
                            <div className="flex items-center gap-3">
                            <button className="flex items-center gap-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1605 11.62C12.1305 11.62 12.1105 11.62 12.0805 11.62C12.0305 11.61 11.9605 11.61 11.9005 11.62C9.00055 11.53 6.81055 9.25 6.81055 6.44C6.81055 3.58 9.14055 1.25 12.0005 1.25C14.8605 1.25 17.1905 3.58 17.1905 6.44C17.1805 9.25 14.9805 11.53 12.1905 11.62C12.1805 11.62 12.1705 11.62 12.1605 11.62ZM12.0005 2.75C9.97055 2.75 8.31055 4.41 8.31055 6.44C8.31055 8.44 9.87055 10.05 11.8605 10.12C11.9105 10.11 12.0505 10.11 12.1805 10.12C14.1405 10.03 15.6805 8.42 15.6905 6.44C15.6905 4.41 14.0305 2.75 12.0005 2.75Z" fill="#6c7fd8"/>
<path d="M12.1696 22.55C10.2096 22.55 8.23961 22.05 6.74961 21.05C5.35961 20.13 4.59961 18.87 4.59961 17.5C4.59961 16.13 5.35961 14.86 6.74961 13.93C9.74961 11.94 14.6096 11.94 17.5896 13.93C18.9696 14.85 19.7396 16.11 19.7396 17.48C19.7396 18.85 18.9796 20.12 17.5896 21.05C16.0896 22.05 14.1296 22.55 12.1696 22.55ZM7.57961 15.19C6.61961 15.83 6.09961 16.65 6.09961 17.51C6.09961 18.36 6.62961 19.18 7.57961 19.81C10.0696 21.48 14.2696 21.48 16.7596 19.81C17.7196 19.17 18.2396 18.35 18.2396 17.49C18.2396 16.64 17.7096 15.82 16.7596 15.19C14.2696 13.53 10.0696 13.53 7.57961 15.19Z" fill="#6c7fd8"/>
</svg>
<p className="font-semibold text-left text-secondary">
    <span className="block text-xs">Account</span>
    <span className="block text-sm">Login</span>
</p>
                            </button>
<button>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 21.6501C11.69 21.6501 11.39 21.6101 11.14 21.5201C7.32 20.2101 1.25 15.5601 1.25 8.6901C1.25 5.1901 4.08 2.3501 7.56 2.3501C9.25 2.3501 10.83 3.0101 12 4.1901C13.17 3.0101 14.75 2.3501 16.44 2.3501C19.92 2.3501 22.75 5.2001 22.75 8.6901C22.75 15.5701 16.68 20.2101 12.86 21.5201C12.61 21.6101 12.31 21.6501 12 21.6501ZM7.56 3.8501C4.91 3.8501 2.75 6.0201 2.75 8.6901C2.75 15.5201 9.32 19.3201 11.63 20.1101C11.81 20.1701 12.2 20.1701 12.38 20.1101C14.68 19.3201 21.26 15.5301 21.26 8.6901C21.26 6.0201 19.1 3.8501 16.45 3.8501C14.93 3.8501 13.52 4.5601 12.61 5.7901C12.33 6.1701 11.69 6.1701 11.41 5.7901C10.48 4.5501 9.08 3.8501 7.56 3.8501Z" fill="#6c7fd8"/>
</svg>
</button>
<button>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.19 17.75H7.53999C6.54999 17.75 5.59999 17.33 4.92999 16.6C4.25999 15.87 3.92 14.89 4 13.9L4.83 3.94C4.86 3.63 4.74999 3.33001 4.53999 3.10001C4.32999 2.87001 4.04 2.75 3.73 2.75H2C1.59 2.75 1.25 2.41 1.25 2C1.25 1.59 1.59 1.25 2 1.25H3.74001C4.47001 1.25 5.15999 1.56 5.64999 2.09C5.91999 2.39 6.12 2.74 6.23 3.13H18.72C19.73 3.13 20.66 3.53 21.34 4.25C22.01 4.98 22.35 5.93 22.27 6.94L21.73 14.44C21.62 16.27 20.02 17.75 18.19 17.75ZM6.28 4.62L5.5 14.02C5.45 14.6 5.64 15.15 6.03 15.58C6.42 16.01 6.95999 16.24 7.53999 16.24H18.19C19.23 16.24 20.17 15.36 20.25 14.32L20.79 6.82001C20.83 6.23001 20.64 5.67001 20.25 5.26001C19.86 4.84001 19.32 4.60999 18.73 4.60999H6.28V4.62Z" fill="#6c7fd8"/>
<path d="M16.25 22.75C15.15 22.75 14.25 21.85 14.25 20.75C14.25 19.65 15.15 18.75 16.25 18.75C17.35 18.75 18.25 19.65 18.25 20.75C18.25 21.85 17.35 22.75 16.25 22.75ZM16.25 20.25C15.97 20.25 15.75 20.47 15.75 20.75C15.75 21.03 15.97 21.25 16.25 21.25C16.53 21.25 16.75 21.03 16.75 20.75C16.75 20.47 16.53 20.25 16.25 20.25Z" fill="#6c7fd8"/>
<path d="M8.25 22.75C7.15 22.75 6.25 21.85 6.25 20.75C6.25 19.65 7.15 18.75 8.25 18.75C9.35 18.75 10.25 19.65 10.25 20.75C10.25 21.85 9.35 22.75 8.25 22.75ZM8.25 20.25C7.97 20.25 7.75 20.47 7.75 20.75C7.75 21.03 7.97 21.25 8.25 21.25C8.53 21.25 8.75 21.03 8.75 20.75C8.75 20.47 8.53 20.25 8.25 20.25Z" fill="#6c7fd8"/>
<path d="M21 8.75H9C8.59 8.75 8.25 8.41 8.25 8C8.25 7.59 8.59 7.25 9 7.25H21C21.41 7.25 21.75 7.59 21.75 8C21.75 8.41 21.41 8.75 21 8.75Z" fill="#6c7fd8"/>
</svg>
</button>
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
                            <ul className="flex gap-8 font-semibold text-secondary dark:text-dark-text">
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