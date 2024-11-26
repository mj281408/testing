import Link from "next/link";
import Image from 'next/image'

export default function Service() {
    return (
        <section className="bg-[#FAF4F4] py-16">
            <div className="container">
            <div className="grid items-end grid-cols-2">
                <div>
                    <Image
                        width={500}
                        height={500}
                        objectFit="cover"
                        src={`/images/img-1.png`}
                        alt=""
                    />
                    <h2 className="pb-5 text-3xl font-semibold">Side table</h2>
                    <Link className="text-xl font-semibold underline underline-offset-4" href={`/shop`}>View More</Link>
                </div>
                <div>
                    <Image
                        width={500}
                        height={500}
                        objectFit="cover"
                        src={`/images/img-2.png`}
                        alt=""
                    />
                    <h2 className="pb-5 text-3xl font-semibold">Side table</h2>
                    <Link className="text-xl font-semibold underline underline-offset-4" href={`/shop`}>View More</Link>
                </div>
            </div>
            </div>
        </section>
    );
}