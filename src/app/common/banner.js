import Image from 'next/image'
import Link from 'next/link';

export default function Banner() {
    return (
        <section className="bg-[#FBEBB5]">
            <div className="container">
                <div className="grid items-center grid-cols-2">
                    <div>
                        <h2 className='font-semibold text-7xl/normal'>Rocket single seater</h2>
                        <Link className='text-xl font-semibold underline underline-offset-8' href={`/shop`}>Shop Now</Link>
                    </div>
                    <div>
                        <Image
                            width={853}
                            height={853}
                            objectFit="cover"
                            src={`/images/banner-img.png`}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}