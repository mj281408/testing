import Image from "next/image";
import Link from "next/link";

export default function Header() {
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
                <div>
                    <div className="container">
                        <div className="flex">
                            <Link href={"/"}>
                                <Image
                                    width={125}
                                    height={43}
                                    objectFit="cover"
                                    src={`/images/logo.png`}
                                    alt=""
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            
        </>
    )
}