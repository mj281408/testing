export default function Header() {
    return (
        <>
            <header>
                <div className="py-2 font-medium text-white bg-secondary">
                    <div className="container">
                        <div className="flex justify-between">
                            <p>Flat 50% Off On Grocery Shop.</p>
                            <ul className="flex items-center gap-5">
                                <li>
                                    <a href="/">Help?</a>
                                </li>
                                <li>
                                    <a href="/">Track Order</a>
                                </li>
                                <li className="relative group">
                                    <a href="/" className="flex items-center gap-1"><span>Language</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    </a>
                                    <ol className="absolute font-normal bg-white text-secondary w-[120px] p-2 rounded-md border shadow-md text-sm translate-y-5 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-500">
                                        <li>
                                            <a href="/">Engslih</a>
                                        </li>
                                        <li>
                                            <a href="/">Hindi</a>
                                        </li>
                                        <li>
                                            <a href="/">Gujarti</a>
                                        </li>
                                    </ol>
                                </li>
                                <li className="relative group">
                                    <a href="/" className="flex items-center gap-1"><span>Currency</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    </a>
                                    <ol className="absolute font-normal bg-white text-secondary w-[120px] p-2 rounded-md border shadow-md text-sm translate-y-5 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-500">
                                        <li>
                                            <a href="/">USD</a>
                                        </li>
                                        <li>
                                            <a href="/">EUR</a>
                                        </li>
                                    </ol>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}