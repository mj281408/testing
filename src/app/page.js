
'use client'
import Image from 'next/image'
import Link from 'next/link';
import { act, useState } from 'react';


export default function Page() {
  const [activeTab, setActiveTab] = useState('store-1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <section className='py-10 md:py-20'>
        <div className="container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 *:rounded-2xl *:grid *:grid-cols-2 *:py-5 *:px-14">
            <div className="bg-[#f4dab4] items-center gap-5 relative overflow-hidden group">
              <div className='absolute w-full h-full bg-[#fbf2e5] rotate-[130deg] translate-x-16 group-hover:scale-110 duration-500 transition-all'></div>
              <div className='relative'>
                <Image
                  width={280}
                  height={280}
                  src={'/images/one.png'}
                  alt=""
                />
              </div>
              <div className='relative text-secondary'>
                <h2 className='font-semibold  text-[30px] leading-9'>Tasty Snack & Fast food</h2>
                <p className='text-[16px] py-3 poppins font-light'>The flavour of something special</p>
                <Link className='px-4 py-2 text-[14px] hover:border-primary hover:bg-primary inline-block hover:text-white duration-500 transition-all border rounded-md border-secondary poppins' href={"/"}>Shop Now</Link>
              </div>
            </div>
            <div className="bg-[#ffc6ce] items-center gap-5 relative overflow-hidden group">
              <div className='absolute w-full h-full bg-[#ffe8ee] rotate-[130deg] translate-x-16 group-hover:scale-110 duration-500 transition-all'></div>
              <div className='relative'>
                <Image
                  width={280}
                  height={280}
                  src={'/images/two.png'}
                  alt=""
                />
              </div>
              <div className='relative text-secondary'>
                <h2 className='font-semibold  text-[30px] leading-9'>Fresh Fruits & Vegetables</h2>
                <p className='text-[16px] py-3 poppins font-light'>A healthy meal for every one</p>
                <Link className='px-4 py-2 text-[14px] hover:border-primary hover:bg-primary inline-block hover:text-white duration-500 transition-all border rounded-md border-secondary poppins' href={"/"}>Shop Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <h2 className='text-[25px] font-bold  text-secondary text-center'>Top <span className='text-primary'>Vendors</span></h2>
          <p className='text-decripation font-light poppins text-[14px] text-center w-4/12 px-5 mx-auto'>Discover Our Trusted Partners: Excllence & Reliability in Every choice</p>
          <div className='grid grid-cols-7 pt-10'>
            <div className='col-span-3'>
              <div className='w-[550px] h-[550px] relative'>
                <Image
                  width={550}
                  height={550}
                  objectFit="cover"
                  className='rounded-3xl'
                  src={`${activeTab === "store-1"?"/images/img-1.jpg": activeTab ==="store-2"?"/images/img-2.jpg": activeTab === "store-3"?"/images/img-3.jpg":"/images/img-4.jpg"}`}
                  alt=""
                />
                <div className='w-[120px] h-[120px] bg-white absolute bottom-0 right-0 rounded-tl-3xl logo-box'>
                  <Image
                  className='border rounded-3xl border-border ms-[20px] mt-[20px]'
                    width={100}
                    height={100}
                    objectFit="cover"
                    src={`${activeTab === "store-1"?"/images/vendor-1.jpg": activeTab ==="store-2"?"/images/vendor-2.jpg": activeTab === "store-3"?"/images/vendor-3.jpg":"/images/vendor-4.jpg"}`}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className='col-span-4'>
              <ul className='flex flex-col gap-5'>
                <li onClick={()=>handleTabClick('store-1')} className={`${activeTab === "store-1" ?"border-primary":"border-border"} bg-[#f8f8fb] border  p-7 rounded-3xl`}>
                  <p className='flex justify-between'><span className={`font-bold ${activeTab ==="store-1"?"text-primary":"text-secondary"} text-[18px]`}>Mira Fashion Pvt. Ltd.</span><span className='font-medium text-decripation'>Sales - 587</span> </p>
                  <p className='pt-2 font-medium text-decripation'>Fruits (5) | Vegetables (30) | Snacks (09)</p>
                </li>
                <li onClick={()=>handleTabClick('store-2')} className={`${activeTab === "store-2" ?"border-primary":"border-border"} bg-[#f8f8fb] border  p-7 rounded-3xl`}>
                  <p className='flex justify-between'><span className={`font-bold ${activeTab ==="store-2"?"text-primary":"text-secondary"} text-[18px]`}>Eelna Fashion Pvt. Ltd.</span><span className='font-medium text-decripation'>Sales - 428</span> </p>
                  <p className='pt-2 font-medium text-decripation'>Fruits (5) | Vegetables (30) | Snacks (09)</p>
                </li>
                <li onClick={()=>handleTabClick('store-3')} className={`${activeTab === "store-3" ?"border-primary":"border-border"} bg-[#f8f8fb] border  p-7 rounded-3xl`}>
                  <p className='flex justify-between'><span className={`font-bold ${activeTab ==="store-3"?"text-primary":"text-secondary"} text-[18px]`}>Mario Fashion Pvt. Ltd.</span><span className='font-medium text-decripation'>Sales - 1024</span> </p>
                  <p className='pt-2 font-medium text-decripation'>Fruits (5) | Vegetables (30) | Snacks (09)</p>
                </li>
                <li onClick={()=>handleTabClick('store-4')} className={`${activeTab === "store-4" ?"border-primary":"border-border"} bg-[#f8f8fb] border  p-7 rounded-3xl`}>
                  <p className='flex justify-between'><span className={`font-bold ${activeTab ==="store-4"?"text-primary":"text-secondary"} text-[18px]`}>Maria Fashion Pvt. Ltd.</span><span className='font-medium text-decripation'>Sales - 210</span> </p>
                  <p className='pt-2 font-medium text-decripation'>Fruits (5) | Vegetables (30) | Snacks (09)</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className='py-10 md:py-20'>
        <div className='container'>
          <div className='relative'>
            <h2 className='absolute text-center text-secondary text-[28px] font-semibold inset-0 flex justify-center items-center z-20'><span className='px-8 py-2 bg-white rounded-full'>#Insta</span></h2>
          <div className='grid-cols-2 gap-5 *:group : *:relative *:overflow-hidden grid md:grid-cols-3 lg:grid-cols-6 *:rounded-3xl'>
            <div>
              <Image src={`/images/1.jpg`} alt='' className='object-cover w-full h-full' width={500} height={500} />
              <div className='absolute flex items-center justify-center transition-all duration-200 scale-[2.5] rotate-90 opacity-0 hover:scale-100 -inset-60 bg-black/50 hover:rotate-0 hover:opacity-100'>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill="#fff" />
                  <path d="M12 16.25C9.66 16.25 7.75 14.34 7.75 12C7.75 9.66 9.66 7.75 12 7.75C14.34 7.75 16.25 9.66 16.25 12C16.25 14.34 14.34 16.25 12 16.25ZM12 9.25C10.48 9.25 9.25 10.48 9.25 12C9.25 13.52 10.48 14.75 12 14.75C13.52 14.75 14.75 13.52 14.75 12C14.75 10.48 13.52 9.25 12 9.25Z" fill="#fff" />
                  <path d="M17 7.4999C16.87 7.4999 16.74 7.4699 16.62 7.4199C16.5 7.3699 16.39 7.2999 16.29 7.2099C16.2 7.1099 16.12 6.9999 16.07 6.8799C16.02 6.7599 16 6.6299 16 6.4999C16 6.3699 16.02 6.2399 16.07 6.1199C16.13 5.9899 16.2 5.8899 16.29 5.7899C16.34 5.7499 16.39 5.6999 16.44 5.6699C16.5 5.6299 16.56 5.5999 16.62 5.5799C16.68 5.5499 16.74 5.5299 16.81 5.5199C17.13 5.4499 17.47 5.5599 17.71 5.7899C17.8 5.8899 17.87 5.9899 17.92 6.1199C17.97 6.2399 18 6.3699 18 6.4999C18 6.6299 17.97 6.7599 17.92 6.8799C17.87 6.9999 17.8 7.1099 17.71 7.2099C17.61 7.2999 17.5 7.3699 17.38 7.4199C17.26 7.4699 17.13 7.4999 17 7.4999Z" fill="#fff" />
                </svg>
              </div>
            </div>            
            <div>
              <Image src={`/images/2.jpg`} alt='' className='object-cover w-full h-full' width={500} height={500} />
              <div className='absolute flex items-center justify-center transition-all duration-200 scale-[2.5] rotate-90 opacity-0 hover:scale-100 -inset-60 bg-black/50 hover:rotate-0 hover:opacity-100'>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill="#fff" />
                  <path d="M12 16.25C9.66 16.25 7.75 14.34 7.75 12C7.75 9.66 9.66 7.75 12 7.75C14.34 7.75 16.25 9.66 16.25 12C16.25 14.34 14.34 16.25 12 16.25ZM12 9.25C10.48 9.25 9.25 10.48 9.25 12C9.25 13.52 10.48 14.75 12 14.75C13.52 14.75 14.75 13.52 14.75 12C14.75 10.48 13.52 9.25 12 9.25Z" fill="#fff" />
                  <path d="M17 7.4999C16.87 7.4999 16.74 7.4699 16.62 7.4199C16.5 7.3699 16.39 7.2999 16.29 7.2099C16.2 7.1099 16.12 6.9999 16.07 6.8799C16.02 6.7599 16 6.6299 16 6.4999C16 6.3699 16.02 6.2399 16.07 6.1199C16.13 5.9899 16.2 5.8899 16.29 5.7899C16.34 5.7499 16.39 5.6999 16.44 5.6699C16.5 5.6299 16.56 5.5999 16.62 5.5799C16.68 5.5499 16.74 5.5299 16.81 5.5199C17.13 5.4499 17.47 5.5599 17.71 5.7899C17.8 5.8899 17.87 5.9899 17.92 6.1199C17.97 6.2399 18 6.3699 18 6.4999C18 6.6299 17.97 6.7599 17.92 6.8799C17.87 6.9999 17.8 7.1099 17.71 7.2099C17.61 7.2999 17.5 7.3699 17.38 7.4199C17.26 7.4699 17.13 7.4999 17 7.4999Z" fill="#fff" />
                </svg>
              </div>
            </div>            
            <div>
              <Image src={`/images/3.jpg`} alt='' className='object-cover w-full h-full' width={500} height={500} />
              <div className='absolute flex items-center justify-center transition-all duration-200 scale-[2.5] rotate-90 opacity-0 hover:scale-100 -inset-60 bg-black/50 hover:rotate-0 hover:opacity-100'>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill="#fff" />
                  <path d="M12 16.25C9.66 16.25 7.75 14.34 7.75 12C7.75 9.66 9.66 7.75 12 7.75C14.34 7.75 16.25 9.66 16.25 12C16.25 14.34 14.34 16.25 12 16.25ZM12 9.25C10.48 9.25 9.25 10.48 9.25 12C9.25 13.52 10.48 14.75 12 14.75C13.52 14.75 14.75 13.52 14.75 12C14.75 10.48 13.52 9.25 12 9.25Z" fill="#fff" />
                  <path d="M17 7.4999C16.87 7.4999 16.74 7.4699 16.62 7.4199C16.5 7.3699 16.39 7.2999 16.29 7.2099C16.2 7.1099 16.12 6.9999 16.07 6.8799C16.02 6.7599 16 6.6299 16 6.4999C16 6.3699 16.02 6.2399 16.07 6.1199C16.13 5.9899 16.2 5.8899 16.29 5.7899C16.34 5.7499 16.39 5.6999 16.44 5.6699C16.5 5.6299 16.56 5.5999 16.62 5.5799C16.68 5.5499 16.74 5.5299 16.81 5.5199C17.13 5.4499 17.47 5.5599 17.71 5.7899C17.8 5.8899 17.87 5.9899 17.92 6.1199C17.97 6.2399 18 6.3699 18 6.4999C18 6.6299 17.97 6.7599 17.92 6.8799C17.87 6.9999 17.8 7.1099 17.71 7.2099C17.61 7.2999 17.5 7.3699 17.38 7.4199C17.26 7.4699 17.13 7.4999 17 7.4999Z" fill="#fff" />
                </svg>
              </div>
            </div>            
            <div>
              <Image src={`/images/4.jpg`} alt='' className='object-cover w-full h-full' width={500} height={500} />
              <div className='absolute flex items-center justify-center transition-all duration-200 scale-[2.5] rotate-90 opacity-0 hover:scale-100 -inset-60 bg-black/50 hover:rotate-0 hover:opacity-100'>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill="#fff" />
                  <path d="M12 16.25C9.66 16.25 7.75 14.34 7.75 12C7.75 9.66 9.66 7.75 12 7.75C14.34 7.75 16.25 9.66 16.25 12C16.25 14.34 14.34 16.25 12 16.25ZM12 9.25C10.48 9.25 9.25 10.48 9.25 12C9.25 13.52 10.48 14.75 12 14.75C13.52 14.75 14.75 13.52 14.75 12C14.75 10.48 13.52 9.25 12 9.25Z" fill="#fff" />
                  <path d="M17 7.4999C16.87 7.4999 16.74 7.4699 16.62 7.4199C16.5 7.3699 16.39 7.2999 16.29 7.2099C16.2 7.1099 16.12 6.9999 16.07 6.8799C16.02 6.7599 16 6.6299 16 6.4999C16 6.3699 16.02 6.2399 16.07 6.1199C16.13 5.9899 16.2 5.8899 16.29 5.7899C16.34 5.7499 16.39 5.6999 16.44 5.6699C16.5 5.6299 16.56 5.5999 16.62 5.5799C16.68 5.5499 16.74 5.5299 16.81 5.5199C17.13 5.4499 17.47 5.5599 17.71 5.7899C17.8 5.8899 17.87 5.9899 17.92 6.1199C17.97 6.2399 18 6.3699 18 6.4999C18 6.6299 17.97 6.7599 17.92 6.8799C17.87 6.9999 17.8 7.1099 17.71 7.2099C17.61 7.2999 17.5 7.3699 17.38 7.4199C17.26 7.4699 17.13 7.4999 17 7.4999Z" fill="#fff" />
                </svg>
              </div>
            </div>            
            <div>
              <Image src={`/images/5.jpg`} alt='' className='object-cover w-full h-full' width={500} height={500} />
              <div className='absolute flex items-center justify-center transition-all duration-200 scale-[2.5] rotate-90 opacity-0 hover:scale-100 -inset-60 bg-black/50 hover:rotate-0 hover:opacity-100'>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill="#fff" />
                  <path d="M12 16.25C9.66 16.25 7.75 14.34 7.75 12C7.75 9.66 9.66 7.75 12 7.75C14.34 7.75 16.25 9.66 16.25 12C16.25 14.34 14.34 16.25 12 16.25ZM12 9.25C10.48 9.25 9.25 10.48 9.25 12C9.25 13.52 10.48 14.75 12 14.75C13.52 14.75 14.75 13.52 14.75 12C14.75 10.48 13.52 9.25 12 9.25Z" fill="#fff" />
                  <path d="M17 7.4999C16.87 7.4999 16.74 7.4699 16.62 7.4199C16.5 7.3699 16.39 7.2999 16.29 7.2099C16.2 7.1099 16.12 6.9999 16.07 6.8799C16.02 6.7599 16 6.6299 16 6.4999C16 6.3699 16.02 6.2399 16.07 6.1199C16.13 5.9899 16.2 5.8899 16.29 5.7899C16.34 5.7499 16.39 5.6999 16.44 5.6699C16.5 5.6299 16.56 5.5999 16.62 5.5799C16.68 5.5499 16.74 5.5299 16.81 5.5199C17.13 5.4499 17.47 5.5599 17.71 5.7899C17.8 5.8899 17.87 5.9899 17.92 6.1199C17.97 6.2399 18 6.3699 18 6.4999C18 6.6299 17.97 6.7599 17.92 6.8799C17.87 6.9999 17.8 7.1099 17.71 7.2099C17.61 7.2999 17.5 7.3699 17.38 7.4199C17.26 7.4699 17.13 7.4999 17 7.4999Z" fill="#fff" />
                </svg>
              </div>
            </div>            
            <div>
              <Image src={`/images/6.jpg`} alt='' className='object-cover w-full h-full' width={500} height={500} />
              <div className='absolute flex items-center justify-center transition-all duration-200 scale-[2.5] rotate-90 opacity-0 hover:scale-100 -inset-60 bg-black/50 hover:rotate-0 hover:opacity-100'>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill="#fff" />
                  <path d="M12 16.25C9.66 16.25 7.75 14.34 7.75 12C7.75 9.66 9.66 7.75 12 7.75C14.34 7.75 16.25 9.66 16.25 12C16.25 14.34 14.34 16.25 12 16.25ZM12 9.25C10.48 9.25 9.25 10.48 9.25 12C9.25 13.52 10.48 14.75 12 14.75C13.52 14.75 14.75 13.52 14.75 12C14.75 10.48 13.52 9.25 12 9.25Z" fill="#fff" />
                  <path d="M17 7.4999C16.87 7.4999 16.74 7.4699 16.62 7.4199C16.5 7.3699 16.39 7.2999 16.29 7.2099C16.2 7.1099 16.12 6.9999 16.07 6.8799C16.02 6.7599 16 6.6299 16 6.4999C16 6.3699 16.02 6.2399 16.07 6.1199C16.13 5.9899 16.2 5.8899 16.29 5.7899C16.34 5.7499 16.39 5.6999 16.44 5.6699C16.5 5.6299 16.56 5.5999 16.62 5.5799C16.68 5.5499 16.74 5.5299 16.81 5.5199C17.13 5.4499 17.47 5.5599 17.71 5.7899C17.8 5.8899 17.87 5.9899 17.92 6.1199C17.97 6.2399 18 6.3699 18 6.4999C18 6.6299 17.97 6.7599 17.92 6.8799C17.87 6.9999 17.8 7.1099 17.71 7.2099C17.61 7.2999 17.5 7.3699 17.38 7.4199C17.26 7.4699 17.13 7.4999 17 7.4999Z" fill="#fff" />
                </svg>
              </div>
            </div>            
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
