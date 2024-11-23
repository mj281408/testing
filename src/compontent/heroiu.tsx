import { useState } from "react";
import Offcanvas from "./offcanvas";

export default function Heroiu() {
  const [isChecked, setIsChecked] = useState(false);
  const [setting, setSetting] = useState(false);
  const [setting2, setSetting2] = useState(false);
  const [setting3, setSetting3] = useState(false);
  const [setting4, setSetting4] = useState(false);
  const [webList, setWebList] = useState(false);
  const [screen, setScreen] = useState(false);
  const [screensize, setScreensize] = useState(false);
  const [mainTab, setMainTab] = useState(1);
  const [mainTab2, setMainTab2] = useState(1);
  const [tab, setTab] = useState(1);
  const [tab2, setTab2] = useState(1);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  const [isOffcanvas1Open, setIsOffcanvas1Open] = useState(false);
  const [isOffcanvas2Open, setIsOffcanvas2Open] = useState(false);

  const toggleOffcanvas1 = () => setIsOffcanvas1Open(!isOffcanvas1Open);
  const toggleOffcanvas2 = () => setIsOffcanvas2Open(!isOffcanvas2Open);
  return (
    <div>
      <button onClick={()=>{setScreen(!screen)}} className="fixed flex items-center justify-center gap-1 px-4 py-2 text-sm font-bold text-gray-600 bg-white rounded-full shadow-lg right-2 top-2">
        <span>1920 x 919</span>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.1992 5.11328H7.30548H3.79923C3.19923 5.11328 2.89923 5.83828 3.32423 6.26328L6.56173 9.50078C7.08048 10.0195 7.92423 10.0195 8.44298 9.50078L9.67423 8.26953L11.6805 6.26328C12.0992 5.83828 11.7992 5.11328 11.1992 5.11328Z"
            fill="#6B7280"
          />
        </svg>
      </button>
     {
      screen?(
        <div className="fixed right-2 top-12 bg-white border rounded-md w-[280px] overflow-y-auto h-[550px]">
        <h2 className="p-3 text-xs font-bold text-gray-700 border-b">
          SCREEN RESOLUTION
        </h2>
        <ul className="*:p-3 text-sm font-semibold text-gray-700 border-b">
          <li className="py-1">
            <button>My display</button>
          </li>
          <li className={`py-1 ${screensize ? "bg-sky-50" : "bg-white"}`}>
            <button
              onClick={() => {
                setScreensize(!screensize);
              }}
              className="flex items-center justify-between w-full gap-1"
            >
              <span>Custom</span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.1992 5.11328H7.30548H3.79923C3.19923 5.11328 2.89923 5.83828 3.32423 6.26328L6.56173 9.50078C7.08048 10.0195 7.92423 10.0195 8.44298 9.50078L9.67423 8.26953L11.6805 6.26328C12.0992 5.83828 11.7992 5.11328 11.1992 5.11328Z"
                  fill="#6B7280"
                />
              </svg>
            </button>
            {screensize ? (
              <>
                <div className="flex items-center gap-3 py-3 text-xs">
                  <label>Width</label>
                  <input className="w-[60px] p-2 rounded-md" type="number" />
                  <label>Height</label>
                  <input className="w-[60px] p-2 rounded-md" type="number" />
                </div>
                <button className="w-full py-2 text-gray-300 bg-gray-200 rounded-md">
                  Apply
                </button>
              </>
            ) : (
              <></>
            )}
          </li>
        </ul>
        <h2 className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gray-500">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.6327 1.66797H5.34102C3.31602 1.66797 1.66602 3.31797 1.66602 5.34297V10.7596V10.9263C1.66602 12.9596 3.31602 14.6013 5.34102 14.6013H8.54102C8.99935 14.6013 9.37435 14.9763 9.37435 15.4346V16.243C9.37435 16.7013 8.99935 17.0763 8.54102 17.0763H6.52435C6.18268 17.0763 5.89935 17.3596 5.89935 17.7013C5.89935 18.043 6.17435 18.3346 6.52435 18.3346H13.4827C13.8243 18.3346 14.1077 18.0513 14.1077 17.7096C14.1077 17.368 13.8243 17.0846 13.4827 17.0846H11.466C11.0077 17.0846 10.6327 16.7096 10.6327 16.2513V15.443C10.6327 14.9846 11.0077 14.6096 11.466 14.6096H14.641C16.6743 14.6096 18.316 12.9596 18.316 10.9346V10.768V5.3513C18.3077 3.31797 16.6577 1.66797 14.6327 1.66797Z"
              fill="#6B7080"
            />
          </svg>
          <span>Desktop</span>
        </h2>
        <ul className="p-3 space-y-3 text-sm font-semibold text-gray-600 border-b">
          <li>
            <button className="flex items-center justify-between w-full">
              <span>4k</span>
              <span>3840x 2160</span>
            </button>
          </li>
          <li>
            <button className="flex items-center justify-between w-full">
              <span>Full HD</span>
              <span>1920 x 1080</span>
            </button>
          </li>
          <li>
            <button className="flex items-center justify-between w-full">
              <span>Surface Book</span>
              <span>1500 x 1000</span>
            </button>
          </li>
          <li>
            <button className="flex items-center justify-between w-full">
              <span>Mackbook Air</span>
              <span>1280 x 832</span>
            </button>
          </li>
          <li>
            <button className="flex items-center justify-between w-full">
              <span>Macbook Pro 14"</span>
              <span>1512 x 982</span>
            </button>
          </li>
          <li>
            <button className="flex items-center justify-between w-full">
              <span>Macbook Pro 16"</span>
              <span>1728 x 1117</span>
            </button>
          </li>
          <li>
            <button className="flex items-center justify-between w-full">
              <span>Laptop S</span>
              <span>1024 x 768</span>
            </button>
          </li>
          <li>
            <button className="flex items-center justify-between w-full">
              <span>Laptop M</span>
              <span>1366 x 768</span>
            </button>
          </li>
        </ul>
        <h2 className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gray-500">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3608_7)">
              <path
                d="M17.0254 0.726562H3.27539C2.24023 0.726562 1.40039 1.56641 1.40039 2.60156V18.8516C1.40039 19.8867 2.24023 20.7266 3.27539 20.7266H17.0254C18.0605 20.7266 18.9004 19.8867 18.9004 18.8516V2.60156C18.9004 1.56641 18.0605 0.726562 17.0254 0.726562ZM10.1504 19.4766C9.45898 19.4766 8.90039 18.918 8.90039 18.2266C8.90039 17.5352 9.45898 16.9766 10.1504 16.9766C10.8418 16.9766 11.4004 17.5352 11.4004 18.2266C11.4004 18.918 10.8418 19.4766 10.1504 19.4766Z"
                fill="#6B7280"
              />
            </g>
            <defs>
              <clipPath id="clip0_3608_7">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(0.150391 0.726562)"
                />
              </clipPath>
            </defs>
          </svg>
          <span>Tablet</span>
        </h2>
        <ul className="p-3 space-y-3 text-sm font-semibold text-gray-600 border-b">
          <li>
            <button className="flex items-center justify-between w-full">
              <span>iPad Pro 12.9"</span>
              <span>1024 x 1366</span>
            </button>
          </li>
          <li>
            <button className="flex items-center justify-between w-full">
              <span>iPad Pro 11"</span>
              <span>834 x 1194</span>
            </button>
          </li>
          <li>
            <button className="flex items-center justify-between w-full">
              <span>iPad mini</span>
              <span>768 x 1024</span>
            </button>
          </li>
        </ul>
        <h2 className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gray-500">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3608_7)">
              <path
                d="M17.0254 0.726562H3.27539C2.24023 0.726562 1.40039 1.56641 1.40039 2.60156V18.8516C1.40039 19.8867 2.24023 20.7266 3.27539 20.7266H17.0254C18.0605 20.7266 18.9004 19.8867 18.9004 18.8516V2.60156C18.9004 1.56641 18.0605 0.726562 17.0254 0.726562ZM10.1504 19.4766C9.45898 19.4766 8.90039 18.918 8.90039 18.2266C8.90039 17.5352 9.45898 16.9766 10.1504 16.9766C10.8418 16.9766 11.4004 17.5352 11.4004 18.2266C11.4004 18.918 10.8418 19.4766 10.1504 19.4766Z"
                fill="#6B7280"
              />
            </g>
            <defs>
              <clipPath id="clip0_3608_7">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(0.150391 0.726562)"
                />
              </clipPath>
            </defs>
          </svg>
          <span>Tablet</span>
        </h2>
        <ul className="p-3 space-y-3 text-sm font-semibold text-gray-600 border-b">
          <li>
            <button className="flex items-center justify-between w-full">
              <span>iPhone 14 & 15 Pro Max</span>
              <span>430 x 932</span>
            </button>
          </li>
          <li>
            <button className="flex items-center justify-between w-full">
              <span>iPhone 14 & 15 Pro</span>
              <span>393 x 852</span>
            </button>
          </li>
          <li>
            <button className="flex items-center justify-between w-full">
              <span>iPhone 13 & 14</span>
              <span>390 x 844</span>
            </button>
          </li>
          <li>
            <button className="flex items-center justify-between w-full">
              <span>iPhone 14 Plus</span>
              <span>428 x 926</span>
            </button>
          </li>
          <li>
            <button className="flex items-center justify-between w-full">
              <span>iPhone 13 mini</span>
              <span>375 x 812</span>
            </button>
          </li>
          <li>
            <button className="flex items-center justify-between w-full">
              <span>iPhone SE</span>
              <span>320 x 568</span>
            </button>
          </li>
          <li>
            <button className="flex items-center justify-between w-full">
              <span>iPhone 8 Plus</span>
              <span>414 x 736</span>
            </button>
          </li>
          <li>
            <button className="flex items-center justify-between w-full">
              <span>iPhone 8</span>
              <span>375 x 667</span>
            </button>
          </li>
          <li>
            <button className="flex items-center justify-between w-full">
              <span>Google Pixel 2 XL</span>
              <span>411 x 823</span>
            </button>
          </li>
          <li>
            <button className="flex items-center justify-between w-full">
              <span>Google Pixel 2</span>
              <span>411 x 731</span>
            </button>
          </li>
          <li>
            <button className="flex items-center justify-between w-full">
              <span>Android</span>
              <span>360 x 640</span>
            </button>
          </li>
        </ul>
      </div>
      ):<></>
     }
      <button
        onClick={toggleOffcanvas1}
        className="fixed z-20 flex items-center justify-center bg-white rounded-full shadow-xl size-14 left-5 bottom-5"
      >
        {isOffcanvas1Open ? (
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5463 6.63604L12.7279 10.4544L8.90955 6.63604C8.21375 5.94025 7.05975 5.94025 6.36396 6.63604C5.66817 7.33183 5.66817 8.48583 6.36396 9.18162L10.1823 13L6.36396 16.8184C5.66817 17.5142 5.66817 18.6682 6.36396 19.364C7.05975 20.0598 8.21375 20.0598 8.90955 19.364L12.7279 15.5456L16.5463 19.364C17.2421 20.0598 18.3961 20.0598 19.0919 19.364C19.7877 18.6682 19.7877 17.5142 19.0919 16.8184L15.2735 13L19.0919 9.18162C19.7877 8.48583 19.7877 7.33183 19.0919 6.63604C18.3961 5.94025 17.2421 5.94025 16.5463 6.63604Z"
              fill="#292D32"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.4704 16.83L18.8604 19.99C18.9604 20.82 18.0704 21.4 17.3604 20.97L13.9004 18.91C13.6604 18.77 13.6004 18.47 13.7304 18.23C14.2304 17.31 14.5004 16.27 14.5004 15.23C14.5004 11.57 11.3604 8.59 7.50038 8.59C6.71038 8.59 5.94038 8.71 5.22038 8.95C4.85038 9.07 4.49038 8.73 4.58038 8.35C5.49038 4.71 8.99038 2 13.1704 2C18.0504 2 22.0004 5.69 22.0004 10.24C22.0004 12.94 20.6104 15.33 18.4704 16.83Z"
              fill="#292D32"
            />
            <path
              d="M13 15.2298C13 16.4198 12.56 17.5198 11.82 18.3898C10.83 19.5898 9.26 20.3598 7.5 20.3598L4.89 21.9098C4.45 22.1798 3.89 21.8098 3.95 21.2998L4.2 19.3298C2.86 18.3998 2 16.9098 2 15.2298C2 13.4698 2.94 11.9198 4.38 10.9998C5.27 10.4198 6.34 10.0898 7.5 10.0898C10.54 10.0898 13 12.3898 13 15.2298Z"
              fill="#292D32"
            />
          </svg>
        )}
      </button>
      <button className="fixed z-20 flex items-center justify-center bg-white rounded-full shadow-xl size-12 left-28 bottom-5">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.1391 2.95907L7.10914 5.95907C1.03914 7.98907 1.03914 11.2991 7.10914 13.3191L9.78914 14.2091L10.6791 16.8891C12.6991 22.9591 16.0191 22.9591 18.0391 16.8891L21.0491 7.86907C22.3891 3.81907 20.1891 1.60907 16.1391 2.95907ZM16.4591 8.33907L12.6591 12.1591C12.5091 12.3091 12.3191 12.3791 12.1291 12.3791C11.9391 12.3791 11.7491 12.3091 11.5991 12.1591C11.3091 11.8691 11.3091 11.3891 11.5991 11.0991L15.3991 7.27907C15.6891 6.98907 16.1691 6.98907 16.4591 7.27907C16.7491 7.56907 16.7491 8.04907 16.4591 8.33907Z"
            fill="#292D32"
          />
        </svg>
      </button>
      <button className="fixed z-20 flex items-center justify-center bg-white rounded-full shadow-xl size-12 left-44 bottom-5">
        <svg
          width="22"
          height="22"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_3530_2)">
            <path
              d="M15.9479 9.05232C18.8652 11.9727 18.8252 16.6548 15.9655 19.5303C15.9601 19.5362 15.9537 19.5426 15.9479 19.5484L12.6666 22.8297C9.77258 25.7237 5.06414 25.7233 2.17053 22.8297C-0.723511 19.9361 -0.723511 15.2271 2.17053 12.3336L3.98235 10.5218C4.46282 10.0413 5.29026 10.3606 5.31506 11.0396C5.3467 11.905 5.50188 12.7743 5.78821 13.6139C5.88518 13.8982 5.81589 14.2126 5.60349 14.425L4.96448 15.064C3.59602 16.4325 3.5531 18.6607 4.90808 20.0426C6.27644 21.438 8.52556 21.4463 9.90442 20.0675L13.1857 16.7867C14.5622 15.4102 14.5564 13.1853 13.1857 11.8145C13.005 11.6342 12.8229 11.494 12.6807 11.3961C12.5801 11.327 12.4971 11.2354 12.4382 11.1285C12.3793 11.0217 12.3462 10.9025 12.3415 10.7806C12.3222 10.2646 12.505 9.73293 12.9127 9.32522L13.9407 8.29714C14.2103 8.02756 14.6332 7.99446 14.9458 8.21262C15.3038 8.4626 15.6391 8.74358 15.9479 9.05232ZM22.8295 2.17039C19.9359 -0.723267 15.2274 -0.723657 12.3334 2.17039L9.05212 5.45164C9.04626 5.4575 9.03992 5.46384 9.03455 5.4697C6.17488 8.34529 6.13479 13.0274 9.05212 15.9477C9.36085 16.2565 9.69615 16.5374 10.0541 16.7874C10.3667 17.0055 10.7897 16.9724 11.0592 16.7029L12.0872 15.6748C12.4949 15.2671 12.6778 14.7354 12.6584 14.2194C12.6537 14.0975 12.6206 13.9783 12.5618 13.8715C12.5029 13.7646 12.4198 13.673 12.3192 13.6039C12.177 13.506 11.995 13.3658 11.8143 13.1855C10.4435 11.8147 10.4378 9.58982 11.8143 8.21331L15.0955 4.93254C16.4744 3.55369 18.7235 3.56199 20.0919 4.95745C21.4468 6.33928 21.404 8.56751 20.0355 9.93596L19.3965 10.575C19.1841 10.7874 19.1148 11.1018 19.2117 11.3861C19.4981 12.2257 19.6532 13.095 19.6849 13.9604C19.7097 14.6394 20.5371 14.9587 21.0176 14.4782L22.8294 12.6664C25.7235 9.77292 25.7235 5.06394 22.8295 2.17039Z"
              fill="#292D32"
            />
          </g>
          <defs>
            <clipPath id="clip0_3530_2">
              <rect width="25" height="25" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <button
        onClick={toggleOffcanvas2}
        className="fixed z-20 flex items-center justify-center bg-white rounded-full shadow-xl size-14 right-5 bottom-5"
      >
        {isOffcanvas2Open ? (
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5463 6.63604L12.7279 10.4544L8.90955 6.63604C8.21375 5.94025 7.05975 5.94025 6.36396 6.63604C5.66817 7.33183 5.66817 8.48583 6.36396 9.18162L10.1823 13L6.36396 16.8184C5.66817 17.5142 5.66817 18.6682 6.36396 19.364C7.05975 20.0598 8.21375 20.0598 8.90955 19.364L12.7279 15.5456L16.5463 19.364C17.2421 20.0598 18.3961 20.0598 19.0919 19.364C19.7877 18.6682 19.7877 17.5142 19.0919 16.8184L15.2735 13L19.0919 9.18162C19.7877 8.48583 19.7877 7.33183 19.0919 6.63604C18.3961 5.94025 17.2421 5.94025 16.5463 6.63604Z"
              fill="#292D32"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 4.84969V16.7397C22 17.7097 21.21 18.5997 20.24 18.7197L19.93 18.7597C18.29 18.9797 15.98 19.6597 14.12 20.4397C13.47 20.7097 12.75 20.2197 12.75 19.5097V5.59969C12.75 5.22969 12.96 4.88969 13.29 4.70969C15.12 3.71969 17.89 2.83969 19.77 2.67969H19.83C21.03 2.67969 22 3.64969 22 4.84969Z"
              fill="#292D32"
            />
            <path
              d="M10.7083 4.70969C8.87828 3.71969 6.10828 2.83969 4.22828 2.67969H4.15828C2.95828 2.67969 1.98828 3.64969 1.98828 4.84969V16.7397C1.98828 17.7097 2.77828 18.5997 3.74828 18.7197L4.05828 18.7597C5.69828 18.9797 8.00828 19.6597 9.86828 20.4397C10.5183 20.7097 11.2383 20.2197 11.2383 19.5097V5.59969C11.2383 5.21969 11.0383 4.88969 10.7083 4.70969ZM4.99828 7.73969H7.24828C7.65828 7.73969 7.99828 8.07969 7.99828 8.48969C7.99828 8.90969 7.65828 9.23969 7.24828 9.23969H4.99828C4.58828 9.23969 4.24828 8.90969 4.24828 8.48969C4.24828 8.07969 4.58828 7.73969 4.99828 7.73969ZM7.99828 12.2397H4.99828C4.58828 12.2397 4.24828 11.9097 4.24828 11.4897C4.24828 11.0797 4.58828 10.7397 4.99828 10.7397H7.99828C8.40828 10.7397 8.74828 11.0797 8.74828 11.4897C8.74828 11.9097 8.40828 12.2397 7.99828 12.2397Z"
              fill="#292D32"
            />
          </svg>
        )}
      </button>
      <div
        className={`fixed left-0 right-0 flex items-center justify-center w-16 h-8 mx-auto rounded-full shadow-xl bottom-5 ${
          isChecked ? "bg-sky-500" : "bg-gray-200"
        }`}
      >
        <input
          className="opacity-0"
          type="checkbox"
          id="myCheckbox"
          checked={isChecked}
          onChange={toggleCheckbox}
        />
        <button
          onClick={toggleCheckbox}
          className={`flex items-center justify-center shadow-lg scale-150 bg-white rounded-full cursor-pointer absolute transition-all duration-500 size-8 ${
            isChecked ? "left-[calc(100%_-_30px)]" : "left-0"
          }`}
        >
          {isChecked ? (
            <svg
              id="mySvg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.75 13.9H16.9038C16.7057 13.9 16.5121 13.9588 16.3476 14.069L14.09 15.58C13.73 15.82 13.31 15.93 12.9 15.93C12.55 15.93 12.2 15.85 11.88 15.67C11.3982 15.4153 11.0443 14.9475 10.8705 14.423C10.7313 14.0029 10.4537 13.6136 10.0537 13.4244C9.59444 13.2073 9.18043 12.9204 8.83 12.57C7.97 11.71 7.5 10.5 7.5 9.15V5.25V5C7.5 4.44772 7.05228 4 6.5 4C3.8 4 2 5.35 2 8.5V13.9C2 17.05 3.8 18.4 6.5 18.4H10.25V21.25H7.4C6.99 21.25 6.65 21.59 6.65 22C6.65 22.41 6.99 22.75 7.4 22.75H14.6C15.01 22.75 15.35 22.41 15.35 22C15.35 21.59 15.01 21.25 14.6 21.25H11.75V18.4H15.5C17.8954 18.4 19.5824 17.3374 19.9326 14.898C20.011 14.3513 19.5523 13.9 19 13.9H18.75Z"
                fill="#0ea5e9"
              />
              <path
                d="M18.75 2H12.25C10.76 2 9.64 2.76 9.2 4C9.07 4.38 9 4.8 9 5.25V9.15C9 10.12 9.32 10.94 9.89 11.51C10.46 12.08 11.28 12.4 12.25 12.4V13.79C12.25 14.3 12.83 14.61 13.26 14.33L16.15 12.4H18.75C19.2 12.4 19.62 12.33 20 12.2C21.24 11.76 22 10.64 22 9.15V5.25C22 3.3 20.7 2 18.75 2ZM12.62 8C12.2 8 11.87 7.66 11.87 7.25C11.87 6.84 12.2 6.5 12.62 6.5C13.04 6.5 13.37 6.84 13.37 7.25C13.37 7.66 13.04 8 12.62 8ZM15.44 8C15.02 8 14.69 7.66 14.69 7.25C14.69 6.84 15.03 6.5 15.44 6.5C15.85 6.5 16.19 6.84 16.19 7.25C16.19 7.66 15.85 8 15.44 8ZM18.25 8C17.83 8 17.5 7.66 17.5 7.25C17.5 6.84 17.84 6.5 18.25 6.5C18.66 6.5 19 6.84 19 7.25C19 7.66 18.66 8 18.25 8Z"
                fill="#0ea5e9"
              />
              <path
                d="M22 5.25V9.15C22 10.64 21.24 11.76 20 12.2C19.62 12.33 19.2 12.4 18.75 12.4H16.15L13.26 14.33C12.83 14.61 12.25 14.3 12.25 13.79V12.4C11.28 12.4 10.46 12.08 9.89 11.51C9.32 10.94 9 10.12 9 9.15V5.25C9 4.8 9.07 4.38 9.2 4C9.64 2.76 10.76 2 12.25 2H18.75C20.7 2 22 3.3 22 5.25Z"
                fill="#0ea5e9"
              />
            </svg>
          ) : (
            <svg
              width="12"
              height="12"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3539_2)">
                <path
                  d="M3.29524 0.171806L23.597 9.54192C25.9393 10.6352 25.1585 14.0707 22.66 14.0707H14.0706V22.6601C14.0706 25.1586 10.6351 25.9399 9.54182 23.5971L0.171705 3.29534C-0.609057 1.42083 1.42122 -0.609444 3.29524 0.171806Z"
                  fill="#292D32"
                />
              </g>
              <defs>
                <clipPath id="clip0_3539_2">
                  <rect
                    width="25"
                    height="25"
                    fill="white"
                    transform="matrix(-1 0 0 1 25 0)"
                  />
                </clipPath>
              </defs>
            </svg>
          )}
        </button>
      </div>
      <img src="web.png" alt="" />
      <Offcanvas isOpen={isOffcanvas1Open} isLeft={false}>
        {mainTab === 1 && (
          <>
            <div className="flex items-center justify-between gap-2 p-3">
              <div className="overflow-hidden rounded-full size-7 shrink-0">
                <img
                  src="https://lh3.googleusercontent.com/a/ACg8ocKzSCVS32Qze7q_j2eJFSePFdbdb3Qgp8AbN2XMKEGZWeMUrw=s96-c"
                  alt=""
                />
              </div>
              <div className="me-auto">
                <h2 className="text-sm font-semibold">Jenny's Project</h2>
                <button
                  onClick={() => {
                    setWebList(!webList);
                  }}
                  className={`flex items-center gap-1 text-sm font-semibold ${
                    webList ? `text-sky-500` : `text-zinc-600`
                  }`}
                >
                  <span>on company.com</span>
                  <svg
                    className={
                      webList ? "fill-sky-500 rotate-180" : "fill-[#292D32]"
                    }
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z"
                      fill="inherit"
                    />
                  </svg>
                </button>
              </div>
              <a
                href="#"
                className={`flex shrink-0 justify-center items-center  bg-sky-500 size-8 rounded-md`}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8 4.8H7.2V1.2C7.2 0.544 6.656 0 6 0C5.344 0 4.8 0.544 4.8 1.2V4.8H1.2C0.544 4.8 0 5.344 0 6C0 6.656 0.544 7.2 1.2 7.2H4.8V10.8C4.8 11.456 5.344 12 6 12C6.656 12 7.2 11.456 7.2 10.8V7.2H10.8C11.456 7.2 12 6.656 12 6C12 5.344 11.456 4.8 10.8 4.8Z"
                    fill="#fff"
                  />
                </svg>
              </a>
              <button
                onClick={() => {
                  setSetting(!setting);
                }}
                className="relative flex items-center justify-center text-left size-5"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3553_6)">
                    <path
                      d="M6.58203 4.70703C7.51484 4.70703 8.26953 5.46172 8.26953 6.39453C8.26953 7.32734 7.51484 8.08203 6.58203 8.08203C5.64922 8.08203 4.89453 7.32734 4.89453 6.39453C4.89453 5.46172 5.64922 4.70703 6.58203 4.70703ZM4.89453 2.26953C4.89453 3.20234 5.64922 3.95703 6.58203 3.95703C7.51484 3.95703 8.26953 3.20234 8.26953 2.26953C8.26953 1.33672 7.51484 0.582031 6.58203 0.582031C5.64922 0.582031 4.89453 1.33672 4.89453 2.26953ZM4.89453 10.5195C4.89453 11.4523 5.64922 12.207 6.58203 12.207C7.51484 12.207 8.26953 11.4523 8.26953 10.5195C8.26953 9.58672 7.51484 8.83203 6.58203 8.83203C5.64922 8.83203 4.89453 9.58672 4.89453 10.5195Z"
                      fill="#B0B0B0"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3553_6">
                      <rect
                        width="12"
                        height="12"
                        fill="white"
                        transform="translate(0.582031 0.394531)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <ul
                  className={`absolute bg-white border rounded-md top-full left-full w-[150px] *:py-1.5 *:px-2 text-gray-600 text-sm font-semibold py-2 *:transition-all *:duration-500 ${
                    setting ? `block` : `hidden`
                  }`}
                >
                  <li className="hover:bg-gray-200">
                    <a href="#">Go to Website</a>
                  </li>
                  <li className="hover:bg-gray-200">
                    <a href="#">Account Settings</a>
                  </li>
                  <li className="hover:bg-gray-200">
                    <a href="#">Logout</a>
                  </li>
                </ul>
              </button>
            </div>
            <div className="h-full overflow-y-auto">
              {webList ? (
                <div>
                  <ul className="border-b divide-y">
                    <li className="p-4 text-sm font-semibold hover:bg-gray-100 text-zinc-700">
                      <a href="#" className="flex items-center gap-3">
                        {" "}
                        <img
                          className="object-contain size-5"
                          src="https://cdn.houstonitdevelopers.com/image/fevicon.png"
                          alt=""
                        />{" "}
                        <span>houstonitdeveloper.com</span>
                      </a>
                    </li>
                    <li className="p-4 text-sm font-semibold hover:bg-gray-100 text-zinc-700">
                      <a href="#" className="flex items-center gap-3">
                        {" "}
                        <img
                          className="object-contain size-5"
                          src="https://www.semrush.com/__static__/apple-touch-icon.a7f1927cca17.png"
                          alt=""
                        />{" "}
                        <span>semrush.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              ) : (
                <div>
                  <div className="flex *:w-full text-sm font-semibold *:py-2 border-b">
                    <button
                      onClick={() => {
                        setTab(1);
                      }}
                      className={`border-b-2 ${
                        tab === 1
                          ? "border-sky-500 text-sky-500"
                          : "text-gray-700 border-transparent"
                      }`}
                    >
                      Active(1)
                    </button>
                    <button
                      onClick={() => {
                        setTab(2);
                      }}
                      className={`border-b-2 ${
                        tab === 2
                          ? "border-sky-500 text-sky-500"
                          : "text-gray-700 border-transparent"
                      }`}
                    >
                      Archived(0)
                    </button>
                  </div>
                  {tab === 1 && (
                    <>
                      <div
                        onClick={() => {
                          setMainTab(2);
                        }}
                        className="p-3 border-b cursor-pointer hover:bg-gray-100"
                      >
                        <p className="font-semibold text-sm/4 text-sky-500">
                          Project - Nov 23
                        </p>
                        <span className="font-semibold text-gray-600 text-xs/4">
                          a day ago
                        </span>
                        <div className="mt-1 overflow-hidden rounded-full size-4 shrink-0">
                          <img
                            src="https://lh3.googleusercontent.com/a/ACg8ocKzSCVS32Qze7q_j2eJFSePFdbdb3Qgp8AbN2XMKEGZWeMUrw=s96-c"
                            alt=""
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </>
        )}
        {mainTab === 2 && (
          <>
            <div className="px-3">
              <p
                onClick={() => {
                  setMainTab(1);
                }}
                className="flex items-center gap-2 pt-3 text-xs font-bold cursor-pointer text-zinc-700"
              >
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 9.02273L1 5.01136L5 1"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>PROJECTS</span>
              </p>
              <div className="flex items-center justify-between gap-2 py-2">
                <div className="size-6">
                  <img
                    src="https://static.semrush.com/semblog-next-static/favicon/favicon.ico"
                    alt=""
                  />
                </div>
                <div className="me-auto">
                  <p className="text-sm font-semibold text-gray-800">
                    Untitled Project - Nov 20
                  </p>
                  <p className="flex items-center gap-1 text-xs font-semibold text-gray-500">
                    <span>Plans & Pricing | Semrush</span>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.1992 5.11328H7.30548H3.79923C3.19923 5.11328 2.89923 5.83828 3.32423 6.26328L6.56173 9.50078C7.08048 10.0195 7.92423 10.0195 8.44298 9.50078L9.67423 8.26953L11.6805 6.26328C12.0992 5.83828 11.7992 5.11328 11.1992 5.11328Z"
                        fill="#292D32"
                      />
                    </svg>
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSetting2(!setting2);
                  }}
                  className="relative flex items-center justify-center text-left size-5"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3553_6)">
                      <path
                        d="M6.58203 4.70703C7.51484 4.70703 8.26953 5.46172 8.26953 6.39453C8.26953 7.32734 7.51484 8.08203 6.58203 8.08203C5.64922 8.08203 4.89453 7.32734 4.89453 6.39453C4.89453 5.46172 5.64922 4.70703 6.58203 4.70703ZM4.89453 2.26953C4.89453 3.20234 5.64922 3.95703 6.58203 3.95703C7.51484 3.95703 8.26953 3.20234 8.26953 2.26953C8.26953 1.33672 7.51484 0.582031 6.58203 0.582031C5.64922 0.582031 4.89453 1.33672 4.89453 2.26953ZM4.89453 10.5195C4.89453 11.4523 5.64922 12.207 6.58203 12.207C7.51484 12.207 8.26953 11.4523 8.26953 10.5195C8.26953 9.58672 7.51484 8.83203 6.58203 8.83203C5.64922 8.83203 4.89453 9.58672 4.89453 10.5195Z"
                        fill="#B0B0B0"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3553_6">
                        <rect
                          width="12"
                          height="12"
                          fill="white"
                          transform="translate(0.582031 0.394531)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <ul
                    className={`absolute bg-white border rounded-md top-full left-full w-[200px] *:py-1.5 *:px-2 text-gray-600 text-sm font-semibold py-2 *:transition-all *:duration-500 ${
                      setting2 ? `block` : `hidden`
                    }`}
                  >
                    <li className="hover:bg-gray-200 ">
                      <a href="#">Open in Heurio app</a>
                    </li>
                    <li className="hover:bg-gray-200 ">
                      <a href="#">Copy project link</a>
                    </li>
                    <li className="hover:bg-gray-200 ">
                      <a href="#">Project details</a>
                    </li>
                    <li className="hover:bg-gray-200 ">
                      <a href="#">Rename page</a>
                    </li>
                    <li className="hover:bg-gray-200 ">
                      <a href="#">Export project</a>
                    </li>
                    <li className="hover:bg-gray-200 ">
                      <a href="#" className="text-orange-600">
                        Delete page
                      </a>
                    </li>
                    <li className="border-t hover:bg-gray-200 ">
                      <a href="#">Archive project</a>
                    </li>
                    <li className="hover:bg-gray-200 ">
                      <a href="#" className="text-orange-600">
                        Delete project
                      </a>
                    </li>
                  </ul>
                </button>
              </div>
            </div>
            <div className="flex *:w-full text-sm font-semibold *:py-2 border-b">
              <button
                onClick={() => {
                  setTab2(1);
                }}
                className={`border-b-2 ${
                  tab2 === 1
                    ? "border-sky-500 text-sky-500"
                    : "text-gray-700 border-transparent"
                }`}
              >
                Active(1)
              </button>
              <button
                onClick={() => {
                  setTab2(2);
                }}
                className={`border-b-2 ${
                  tab2 === 2
                    ? "border-sky-500 text-sky-500"
                    : "text-gray-700 border-transparent"
                }`}
              >
                Resolved(0)
              </button>
            </div>
            {tab2 === 1 && (
              <>
                <div
                  className="relative z-30 p-3 border-b cursor-pointer"
                  onClick={() => {
                    setMainTab(3);
                  }}
                >
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      <div className="relative z-20 flex items-center justify-center text-xs font-semibold text-center text-white border-2 border-white rounded-full size-6 bg-sky-500">
                        <span>1</span>
                      </div>
                      <div className="relative z-10 overflow-hidden -translate-x-2 border-2 border-transparent rounded-full size-6 shrink-0">
                        <img
                          src="https://lh3.googleusercontent.com/a/ACg8ocKzSCVS32Qze7q_j2eJFSePFdbdb3Qgp8AbN2XMKEGZWeMUrw=s96-c"
                          alt=""
                        />
                      </div>
                    </div>
                    <p className="text-sm font-semibold">
                      Jenny{" "}
                      <span className="text-xs text-gray-500">
                        a few seconds ago
                      </span>
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    Lorem ipsum
                  </p>
                </div>
                <div className="py-8 font-semibold text-center text-gray-500">
                  <p className="text-sm">0 active heurio</p>
                  <p className="text-xs text-gray-400">
                    Switch to Comment View to add one
                  </p>
                </div>
              </>
            )}
            {tab2 === 2 && (
              <div className="py-8 font-semibold text-center text-gray-500">
                <p className="text-sm">0 resolved heurio</p>
                <p className="text-xs text-gray-400">
                  Use resolve to hide an active heurio
                </p>
              </div>
            )}
          </>
        )}
        {mainTab === 3 && (
          <>
            <div className="px-3">
              <p
                onClick={() => {
                  setMainTab(2);
                }}
                className="flex items-center gap-2 pt-3 text-xs font-bold cursor-pointer text-zinc-700"
              >
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 9.02273L1 5.01136L5 1"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>BACK</span>
                <span className="flex items-center gap-2 ms-auto">
                  <svg
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.25992 9.28016C5.06992 9.28016 4.87992 9.21016 4.72992 9.06016L1.19992 5.53016C0.909922 5.24016 0.909922 4.76016 1.19992 4.47016L4.72992 0.940156C5.01992 0.650156 5.49992 0.650156 5.78992 0.940156C6.07992 1.23016 6.07992 1.71016 5.78992 2.00016L2.78992 5.00016L5.78992 8.00016C6.07992 8.29016 6.07992 8.77016 5.78992 9.06016C5.64992 9.21016 5.45992 9.28016 5.25992 9.28016Z"
                      fill="#292D32"
                    />
                  </svg>
                  <span> 1/1</span>
                  <svg
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.739687 9.28016C0.549687 9.28016 0.359688 9.21016 0.209688 9.06016C-0.0803125 8.77016 -0.0803125 8.29016 0.209688 8.00016L3.20969 5.00016L0.209688 2.00016C-0.0803125 1.71016 -0.0803125 1.23016 0.209688 0.940156C0.499687 0.650156 0.979688 0.650156 1.26969 0.940156L4.79969 4.47016C5.08969 4.76016 5.08969 5.24016 4.79969 5.53016L1.26969 9.06016C1.11969 9.21016 0.929687 9.28016 0.739687 9.28016Z"
                      fill="#292D32"
                    />
                  </svg>
                </span>
              </p>
              <div className="flex items-center justify-between gap-2 py-2">
                <div className="flex items-center justify-center font-semibold text-white rounded-full size-6 bg-sky-500">
                  1
                </div>
                <div className="me-auto">
                  <p className="text-sm font-semibold text-gray-800">Jenny</p>
                  <p className="flex items-center gap-1 text-xs font-semibold text-gray-500">
                    an hour ago
                  </p>
                </div>
                <input
                  className="size-4"
                  style={{ accentColor: "#0ea5e9" }}
                  type="checkbox"
                />
                <button
                  onClick={() => {
                    setSetting3(!setting3);
                  }}
                  className="relative flex items-center justify-center text-left size-5"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3553_6)">
                      <path
                        d="M6.58203 4.70703C7.51484 4.70703 8.26953 5.46172 8.26953 6.39453C8.26953 7.32734 7.51484 8.08203 6.58203 8.08203C5.64922 8.08203 4.89453 7.32734 4.89453 6.39453C4.89453 5.46172 5.64922 4.70703 6.58203 4.70703ZM4.89453 2.26953C4.89453 3.20234 5.64922 3.95703 6.58203 3.95703C7.51484 3.95703 8.26953 3.20234 8.26953 2.26953C8.26953 1.33672 7.51484 0.582031 6.58203 0.582031C5.64922 0.582031 4.89453 1.33672 4.89453 2.26953ZM4.89453 10.5195C4.89453 11.4523 5.64922 12.207 6.58203 12.207C7.51484 12.207 8.26953 11.4523 8.26953 10.5195C8.26953 9.58672 7.51484 8.83203 6.58203 8.83203C5.64922 8.83203 4.89453 9.58672 4.89453 10.5195Z"
                        fill="#B0B0B0"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3553_6">
                        <rect
                          width="12"
                          height="12"
                          fill="white"
                          transform="translate(0.582031 0.394531)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <ul
                    className={`absolute bg-white border rounded-md top-full left-full w-[200px] *:py-1.5 *:px-2 text-gray-600 text-sm font-semibold py-2 *:transition-all *:duration-500 ${
                      setting3 ? `block` : `hidden`
                    }`}
                  >
                    <li className="hover:bg-gray-200 ">
                      <a href="#">Open in Heurio app</a>
                    </li>
                    <li className="hover:bg-gray-200 ">
                      <a href="#">Copy project link</a>
                    </li>
                    <li className="border-t hover:bg-gray-200">
                      <a href="#" className="text-orange-600">
                        Delete Heurio
                      </a>
                    </li>
                  </ul>
                </button>
              </div>
            </div>
            <div className="flex *:w-full text-sm font-semibold *:py-2 border-b">
              <button
                onClick={() => {
                  setTab2(1);
                }}
                className={`border-b-2 ${
                  tab2 === 1
                    ? "border-sky-500 text-sky-500"
                    : "text-gray-700 border-transparent"
                }`}
              >
                <svg
                  className={`mx-auto ${
                    tab2 === 1 ? "fill-sky-500" : "fill-[#292D32]"
                  }`}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.4704 16.83L18.8604 19.99C18.9604 20.82 18.0704 21.4 17.3604 20.97L13.9004 18.91C13.6604 18.77 13.6004 18.47 13.7304 18.23C14.2304 17.31 14.5004 16.27 14.5004 15.23C14.5004 11.57 11.3604 8.59 7.50038 8.59C6.71038 8.59 5.94038 8.71 5.22038 8.95C4.85038 9.07 4.49038 8.73 4.58038 8.35C5.49038 4.71 8.99038 2 13.1704 2C18.0504 2 22.0004 5.69 22.0004 10.24C22.0004 12.94 20.6104 15.33 18.4704 16.83Z"
                    fill="inherit"
                  />
                  <path
                    d="M13 15.2298C13 16.4198 12.56 17.5198 11.82 18.3898C10.83 19.5898 9.26 20.3598 7.5 20.3598L4.89 21.9098C4.45 22.1798 3.89 21.8098 3.95 21.2998L4.2 19.3298C2.86 18.3998 2 16.9098 2 15.2298C2 13.4698 2.94 11.9198 4.38 10.9998C5.27 10.4198 6.34 10.0898 7.5 10.0898C10.54 10.0898 13 12.3898 13 15.2298Z"
                    fill="inherit"
                  />
                </svg>
              </button>
              <button
                onClick={() => {
                  setTab2(2);
                }}
                className={`border-b-2 ${
                  tab2 === 2
                    ? "border-sky-500 text-sky-500"
                    : "text-gray-700 border-transparent"
                }`}
              >
                <svg
                  className={`mx-auto ${
                    tab2 === 2 ? "fill-sky-500" : "fill-[#292D32]"
                  }`}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 1.96875H8C4 1.96875 2 3.96875 2 7.96875V12.9688C2 17.9688 4 18.9688 8 18.9688H8.5C8.78 18.9688 9.14 19.1488 9.3 19.3688L10.8 21.3688C11.46 22.2488 12.54 22.2488 13.2 21.3688L14.7 19.3688C14.89 19.1188 15.19 18.9688 15.5 18.9688H16C20 18.9688 22 16.9688 22 12.9688V7.96875C22 3.96875 20 1.96875 16 1.96875ZM8.53 12.1687C8.82 12.4587 8.82 12.9387 8.53 13.2287C8.38 13.3787 8.19 13.4487 8 13.4487C7.81 13.4487 7.62 13.3787 7.47 13.2287L5.47 11.2287C5.18 10.9387 5.18 10.4587 5.47 10.1687L7.47 8.16875C7.76 7.87875 8.24 7.87875 8.53 8.16875C8.82 8.45875 8.82 8.93875 8.53 9.22875L7.06 10.6987L8.53 12.1687ZM13.69 8.65875L11.69 13.3287C11.57 13.6087 11.29 13.7787 11 13.7787C10.9 13.7787 10.8 13.7587 10.7 13.7188C10.32 13.5588 10.14 13.1187 10.31 12.7287L12.31 8.05875C12.47 7.67875 12.91 7.49875 13.3 7.66875C13.68 7.83875 13.85 8.27875 13.69 8.65875ZM18.53 11.2287L16.53 13.2287C16.38 13.3787 16.19 13.4487 16 13.4487C15.81 13.4487 15.62 13.3787 15.47 13.2287C15.18 12.9387 15.18 12.4587 15.47 12.1687L16.94 10.6987L15.47 9.22875C15.18 8.93875 15.18 8.45875 15.47 8.16875C15.76 7.87875 16.24 7.87875 16.53 8.16875L18.53 10.1687C18.82 10.4587 18.82 10.9387 18.53 11.2287Z"
                    fill="inherit"
                  />
                </svg>
              </button>
            </div>
            {tab2 === 1 && (
              <>
                <div className="p-3">
                  <button className="w-full py-2.5 text-sm font-semibold text-white rounded-md bg-sky-500">
                    Copy link
                  </button>
                  <p className="pt-3 text-sm font-semibold">Note</p>
                  <textarea
                    className="block w-full p-2 border border-transparent rounded-md hover:border-gray-300"
                    placeholder="add a comment"
                  >
                    description
                  </textarea>
                  <p className="pt-3 pb-1 text-sm font-semibold">Suggestion</p>
                  <textarea
                    className="block w-full p-2 border border-transparent rounded-md hover:border-gray-300"
                    placeholder="add your suggestion"
                  ></textarea>
                  <img
                    className="w-full mt-3 rounded-md"
                    src="https://www.semrush.com/company/static/images/two-employees.0ff52a3ec01087df745d350d9cc482e4.webp"
                    alt=""
                  />
                  <ul className="flex flex-wrap gap-2 my-2 text-sm font-semibold text-gray-500">
                    <li className="flex items-center gap-1 p-1 border rounded-full pe-2">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22 12C22 6.49 17.51 2 12 2C6.49 2 2 6.49 2 12C2 14.9 3.25 17.51 5.23 19.34C5.23 19.35 5.23 19.35 5.22 19.36C5.32 19.46 5.44 19.54 5.54 19.63C5.6 19.68 5.65 19.73 5.71 19.77C5.89 19.92 6.09 20.06 6.28 20.2C6.35 20.25 6.41 20.29 6.48 20.34C6.67 20.47 6.87 20.59 7.08 20.7C7.15 20.74 7.23 20.79 7.3 20.83C7.5 20.94 7.71 21.04 7.93 21.13C8.01 21.17 8.09 21.21 8.17 21.24C8.39 21.33 8.61 21.41 8.83 21.48C8.91 21.51 8.99 21.54 9.07 21.56C9.31 21.63 9.55 21.69 9.79 21.75C9.86 21.77 9.93 21.79 10.01 21.8C10.29 21.86 10.57 21.9 10.86 21.93C10.9 21.93 10.94 21.94 10.98 21.95C11.32 21.98 11.66 22 12 22C12.34 22 12.68 21.98 13.01 21.95C13.05 21.95 13.09 21.94 13.13 21.93C13.42 21.9 13.7 21.86 13.98 21.8C14.05 21.79 14.12 21.76 14.2 21.75C14.44 21.69 14.69 21.64 14.92 21.56C15 21.53 15.08 21.5 15.16 21.48C15.38 21.4 15.61 21.33 15.82 21.24C15.9 21.21 15.98 21.17 16.06 21.13C16.27 21.04 16.48 20.94 16.69 20.83C16.77 20.79 16.84 20.74 16.91 20.7C17.11 20.58 17.31 20.47 17.51 20.34C17.58 20.3 17.64 20.25 17.71 20.2C17.91 20.06 18.1 19.92 18.28 19.77C18.34 19.72 18.39 19.67 18.45 19.63C18.56 19.54 18.67 19.45 18.77 19.36C18.77 19.35 18.77 19.35 18.76 19.34C20.75 17.51 22 14.9 22 12ZM16.94 16.97C14.23 15.15 9.79 15.15 7.06 16.97C6.62 17.26 6.26 17.6 5.96 17.97C4.44 16.43 3.5 14.32 3.5 12C3.5 7.31 7.31 3.5 12 3.5C16.69 3.5 20.5 7.31 20.5 12C20.5 14.32 19.56 16.43 18.04 17.97C17.75 17.6 17.38 17.26 16.94 16.97Z"
                          fill="#6B7280"
                        />
                        <path
                          d="M12 6.92969C9.93 6.92969 8.25 8.60969 8.25 10.6797C8.25 12.7097 9.84 14.3597 11.95 14.4197C11.98 14.4197 12.02 14.4197 12.04 14.4197C12.06 14.4197 12.09 14.4197 12.11 14.4197C12.12 14.4197 12.13 14.4197 12.13 14.4197C14.15 14.3497 15.74 12.7097 15.75 10.6797C15.75 8.60969 14.07 6.92969 12 6.92969Z"
                          fill="#6B7280"
                        />
                      </svg>
                      <span>Unassigned</span>
                    </li>
                    <li className="flex items-center gap-1 p-1 border rounded-full pe-2">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.9688 2C6.44875 2 1.96875 6.48 1.96875 12C1.96875 17.52 6.44875 22 11.9688 22C17.4888 22 21.9688 17.52 21.9688 12C21.9688 6.48 17.4988 2 11.9688 2ZM11.9987 16.23C9.65875 16.23 7.76875 14.34 7.76875 12C7.76875 9.66 9.65875 7.77 11.9987 7.77C14.3387 7.77 16.2287 9.66 16.2287 12C16.2287 14.34 14.3387 16.23 11.9987 16.23Z"
                          fill="#6B7280"
                        />
                      </svg>
                      <span>Neutral</span>
                    </li>
                    <li className="flex items-center gap-1 p-1 border rounded-full pe-2">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM6.85 9.44C7.27 8.47 8.06 7.72 9.15 7.38V6.58C9.15 6.17 9.49 5.83 9.9 5.83C10.31 5.83 10.65 6.17 10.65 6.58V7.17H13.36V6.58C13.36 6.17 13.7 5.83 14.11 5.83C14.52 5.83 14.86 6.17 14.86 6.58V7.37C15.95 7.71 16.74 8.46 17.16 9.43C17.3 9.76 17.06 10.14 16.7 10.14H7.31C6.95 10.14 6.71 9.77 6.85 9.44ZM17.5 14.17C17.5 16.37 16 18.17 13.5 18.17H10.5C8 18.17 6.5 16.37 6.5 14.17V11.64C6.5 11.36 6.72 11.14 7 11.14H17C17.28 11.14 17.5 11.36 17.5 11.64V14.17Z"
                          fill="#6B7280"
                        />
                      </svg>
                      <span>Due Date</span>
                    </li>
                  </ul>
                </div>
                <div className="p-3 text-sm font-semibold border-t border-b">
                  <h3 className="pb-2 text-gray-600">Guideline</h3>
                  <select className="block w-full p-2 text-gray-600 border rounded-md outline-none">
                    <option>option1</option>
                    <option>option1</option>
                    <option>option1</option>
                    <option>option1</option>
                    <option>option1</option>
                  </select>
                </div>
                <div className="p-3 text-sm font-semibold">
                  <h3 className="text-gray-600">Comments</h3>
                  <textarea
                    className="block w-full p-1 border rounded-md outline-none"
                    name=""
                    id=""
                  ></textarea>
                </div>
              </>
            )}
            {tab2 === 2 && (
              <>
                <div className="px-2 py-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
                    <svg
                      width="20"
                      height="20"
                      className="shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 2V5"
                        stroke="#4b5563"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16 2V5"
                        stroke="#4b5563"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.5 9.08997H20.5"
                        stroke="#4b5563"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                        stroke="#4b5563"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.9955 13.7H12.0045"
                        stroke="#4b5563"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.29431 13.7H8.30329"
                        stroke="#4b5563"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.29431 16.7H8.30329"
                        stroke="#4b5563"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>11:39, 22 November 2024 </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
                    <svg
                      width="20"
                      height="20"
                      className="shrink-0"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.3333 1.86722L10.6667 3.20055C10.275 3.27555 10 3.61723 10 4.01723V8.33389C10 8.79222 10.375 9.16722 10.8333 9.16722H17.5C17.9583 9.16722 18.3333 8.79222 18.3333 8.33389V2.68389C18.3333 2.15889 17.85 1.76722 17.3333 1.86722Z"
                        fill="#4B5563"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.3333 18.132L10.6667 16.7987C10.275 16.7237 10 16.382 10 15.982V11.6654C10 11.207 10.375 10.832 10.8333 10.832H17.5C17.9583 10.832 18.3333 11.207 18.3333 11.6654V17.3154C18.3333 17.8404 17.85 18.232 17.3333 18.132Z"
                        fill="#4B5563"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.32433 3.80161L2.32433 4.85994C1.941 4.94327 1.66602 5.28494 1.66602 5.67661V8.33495C1.66602 8.79328 2.04102 9.16828 2.49935 9.16828H7.49935C7.95768 9.16828 8.33268 8.79328 8.33268 8.33495V4.60995C8.33268 4.08495 7.841 3.68494 7.32433 3.80161Z"
                        fill="#4B5563"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.32433 16.1987L2.32433 15.1404C1.941 15.057 1.66602 14.7154 1.66602 14.3237V11.6654C1.66602 11.207 2.04102 10.832 2.49935 10.832H7.49935C7.95768 10.832 8.33268 11.207 8.33268 11.6654V15.3904C8.33268 15.9154 7.841 16.3154 7.32433 16.1987Z"
                        fill="#4B5563"
                      />
                    </svg>
                    <span> Windows </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
                    <svg
                      width="20"
                      height="20"
                      className="shrink-0"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_3592_10)">
                        <path
                          d="M5.44922 8.49633L2.46484 3.91039C4.32422 1.59789 7.11328 0.324456 9.96484 0.312737C11.6172 0.301019 13.3047 0.722894 14.8398 1.60961C16.5352 2.59399 17.8242 4.00805 18.6445 5.63305L10.625 5.21117C8.35547 5.07836 6.19531 6.35571 5.44922 8.49633ZM6.73437 10.0002C6.73437 11.8049 8.19531 13.2659 10 13.2659C11.8047 13.2659 13.2656 11.8049 13.2656 10.0002C13.2656 8.19555 11.8047 6.73461 10 6.73461C8.19531 6.73461 6.73437 8.19164 6.73437 10.0002ZM19.0352 6.51586L13.5781 6.79711C15.0586 8.52758 15.082 11.0237 13.8359 12.9377L9.45703 19.6721C11.2734 19.7698 13.1445 19.3713 14.8398 18.387C19.0352 15.9651 20.7344 10.887 19.0352 6.51586ZM5.53516 11.8596L1.89063 4.69164C0.894531 6.21508 0.3125 8.04321 0.3125 10.0002C0.3125 14.844 3.85938 18.8557 8.49609 19.5666L10.9844 14.6916C8.73438 15.1135 6.5625 13.8791 5.53516 11.8596Z"
                          fill="#4B5563"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3592_10">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>chrome 131 </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
                    <svg
                      width="20"
                      height="20"
                      className="shrink-0"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.491 1.66797H6.50768C3.47435 1.66797 1.66602 3.4763 1.66602 6.50964V13.4846C1.66602 16.5263 3.47435 18.3346 6.50768 18.3346H13.4827C16.516 18.3346 18.3243 16.5263 18.3243 13.493V6.50964C18.3327 3.4763 16.5243 1.66797 13.491 1.66797ZM15.6243 8.33464C15.6243 8.6763 15.341 8.95964 14.9993 8.95964C14.6577 8.95964 14.3743 8.6763 14.3743 8.33464V6.50964L6.50768 14.3763H8.33268C8.67435 14.3763 8.95768 14.6596 8.95768 15.0013C8.95768 15.343 8.67435 15.6263 8.33268 15.6263H4.99935C4.91602 15.6263 4.83268 15.6096 4.75768 15.5763C4.60768 15.5096 4.48268 15.393 4.41602 15.2346C4.39102 15.1596 4.37435 15.0846 4.37435 15.0013V11.668C4.37435 11.3263 4.65768 11.043 4.99935 11.043C5.34102 11.043 5.62435 11.3263 5.62435 11.668V13.493L13.491 5.6263H11.666C11.3243 5.6263 11.041 5.34297 11.041 5.0013C11.041 4.65964 11.3243 4.3763 11.666 4.3763H14.9993C15.0827 4.3763 15.1577 4.39297 15.241 4.4263C15.391 4.49297 15.516 4.60964 15.5827 4.76797C15.6077 4.84297 15.6243 4.91797 15.6243 5.0013V8.33464Z"
                        fill="#4B5563"
                      />
                    </svg>
                    <span>1903x953 px </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
                    <svg
                      width="20"
                      height="20"
                      className="shrink-0"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.99935 1.66797C5.39935 1.66797 1.66602 5.4013 1.66602 10.0013C1.66602 14.6013 5.39935 18.3346 9.99935 18.3346C14.5993 18.3346 18.3327 14.6013 18.3327 10.0013C18.3327 5.4013 14.5993 1.66797 9.99935 1.66797ZM7.10768 11.2263C7.34935 11.468 7.34935 11.868 7.10768 12.1096C6.98268 12.2346 6.82435 12.293 6.66602 12.293C6.50768 12.293 6.34935 12.2346 6.22435 12.1096L4.55768 10.443C4.31602 10.2013 4.31602 9.8013 4.55768 9.55964L6.22435 7.89297C6.46602 7.6513 6.86602 7.6513 7.10768 7.89297C7.34935 8.13464 7.34935 8.53464 7.10768 8.7763L5.88268 10.0013L7.10768 11.2263ZM11.4077 8.3013L9.74102 12.193C9.64102 12.4263 9.40768 12.568 9.16602 12.568C9.08268 12.568 8.99935 12.5513 8.92435 12.518C8.60768 12.3846 8.45768 12.018 8.59935 11.693L10.266 7.8013C10.3993 7.48463 10.766 7.33464 11.0827 7.4763C11.3993 7.61797 11.541 7.98464 11.4077 8.3013ZM15.441 10.443L13.7743 12.1096C13.6493 12.2346 13.491 12.293 13.3327 12.293C13.1743 12.293 13.016 12.2346 12.891 12.1096C12.6493 11.868 12.6493 11.468 12.891 11.2263L14.116 10.0013L12.891 8.7763C12.6493 8.53464 12.6493 8.13464 12.891 7.89297C13.1327 7.6513 13.5327 7.6513 13.7743 7.89297L15.441 9.55964C15.6827 9.8013 15.6827 10.2013 15.441 10.443Z"
                        fill="#4B5563"
                      />
                    </svg>
                    <span>
                      body&gt; div:eq(1)&gt; main#root-content&gt; div&gt;
                      div#pricing&gt; section:eq(2)&gt;
                      div#custom-request-container&gt; button&gt; span{" "}
                    </span>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </Offcanvas>
      <Offcanvas isOpen={isOffcanvas2Open} isLeft={true}>
        {mainTab2 === 1 && (
          <>
            <div>
              <div className="flex items-center justify-between gap-2 p-3 border-b">
                <div className="me-auto">
                  <h2 className="font-semibold text-gray-700">Guidelines</h2>
                </div>
                <a
                  href="#"
                  className={`flex shrink-0 justify-center items-center  bg-sky-500 size-8 rounded-md`}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.544 6.656 0 6 0C5.344 0 4.8 0.544 4.8 1.2V4.8H1.2C0.544 4.8 0 5.344 0 6C0 6.656 0.544 7.2 1.2 7.2H4.8V10.8C4.8 11.456 5.344 12 6 12C6.656 12 7.2 11.456 7.2 10.8V7.2H10.8C11.456 7.2 12 6.656 12 6C12 5.344 11.456 4.8 10.8 4.8Z"
                      fill="#fff"
                    />
                  </svg>
                </a>
                <button
                  onClick={() => {
                    setSetting4(!setting4);
                  }}
                  className="relative flex items-center justify-center text-left size-5"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3553_6)">
                      <path
                        d="M6.58203 4.70703C7.51484 4.70703 8.26953 5.46172 8.26953 6.39453C8.26953 7.32734 7.51484 8.08203 6.58203 8.08203C5.64922 8.08203 4.89453 7.32734 4.89453 6.39453C4.89453 5.46172 5.64922 4.70703 6.58203 4.70703ZM4.89453 2.26953C4.89453 3.20234 5.64922 3.95703 6.58203 3.95703C7.51484 3.95703 8.26953 3.20234 8.26953 2.26953C8.26953 1.33672 7.51484 0.582031 6.58203 0.582031C5.64922 0.582031 4.89453 1.33672 4.89453 2.26953ZM4.89453 10.5195C4.89453 11.4523 5.64922 12.207 6.58203 12.207C7.51484 12.207 8.26953 11.4523 8.26953 10.5195C8.26953 9.58672 7.51484 8.83203 6.58203 8.83203C5.64922 8.83203 4.89453 9.58672 4.89453 10.5195Z"
                        fill="#B0B0B0"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3553_6">
                        <rect
                          width="12"
                          height="12"
                          fill="white"
                          transform="translate(0.582031 0.394531)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <ul
                    className={`absolute bg-white border rounded-md top-full right-0 w-[200px] *:py-1.5 *:px-2 text-gray-600 text-sm font-semibold py-2 *:transition-all *:duration-500 ${
                      setting4 ? `block` : `hidden`
                    }`}
                  >
                    <li className="hover:bg-gray-200">
                      <a href="#">Add custom Guideline</a>
                    </li>
                    <li className="hover:bg-gray-200">
                      <a href="#">Change project guideline</a>
                    </li>
                    <li className="border-t hover:bg-gray-200">
                      <a href="#">how to use guidelines?</a>
                    </li>
                  </ul>
                </button>
              </div>
              <div
                className="p-3 border-b cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setMainTab2(2);
                }}
              >
                <h3 className="text-sm font-semibold text-gray-900">
                  Amélie Boucher's
                </h3>
                <p className="text-xs text-gray-600">
                  {" "}
                  The 12 Ergonomic Criteria{" "}
                </p>
              </div>
              <div
                className="p-3 border-b cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setMainTab2(2);
                }}
              >
                <h3 className="text-sm font-semibold text-gray-900">
                  Amélie Boucher's
                </h3>
                <p className="text-xs text-gray-600">
                  {" "}
                  The 12 Ergonomic Criteria{" "}
                </p>
              </div>
            </div>
          </>
        )}
        {mainTab2 === 2 && (
          <>
            <div>
              <div className="px-3">
                <p
                  onClick={() => {
                    setMainTab2(1);
                  }}
                  className="flex items-center gap-2 pt-3 text-xs font-bold cursor-pointer text-zinc-700"
                >
                  <svg
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 9.02273L1 5.01136L5 1"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>GUIDELINES</span>
                </p>
              </div>
              <div className="flex justify-between p-3 border-b">
                <p className="text-sm font-semibold text-gray-700">
                  Amélie Boucher's
                </p>
                <button
                  onClick={() => {
                    setSetting4(!setting4);
                  }}
                  className="relative flex items-center justify-center text-left size-5"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3553_6)">
                      <path
                        d="M6.58203 4.70703C7.51484 4.70703 8.26953 5.46172 8.26953 6.39453C8.26953 7.32734 7.51484 8.08203 6.58203 8.08203C5.64922 8.08203 4.89453 7.32734 4.89453 6.39453C4.89453 5.46172 5.64922 4.70703 6.58203 4.70703ZM4.89453 2.26953C4.89453 3.20234 5.64922 3.95703 6.58203 3.95703C7.51484 3.95703 8.26953 3.20234 8.26953 2.26953C8.26953 1.33672 7.51484 0.582031 6.58203 0.582031C5.64922 0.582031 4.89453 1.33672 4.89453 2.26953ZM4.89453 10.5195C4.89453 11.4523 5.64922 12.207 6.58203 12.207C7.51484 12.207 8.26953 11.4523 8.26953 10.5195C8.26953 9.58672 7.51484 8.83203 6.58203 8.83203C5.64922 8.83203 4.89453 9.58672 4.89453 10.5195Z"
                        fill="#B0B0B0"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3553_6">
                        <rect
                          width="12"
                          height="12"
                          fill="white"
                          transform="translate(0.582031 0.394531)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <ul
                    className={`absolute bg-white border rounded-md top-full right-0 w-[200px] *:py-1.5 *:px-2 text-gray-600 text-sm font-semibold py-2 *:transition-all *:duration-500 ${
                      setting4 ? `block` : `hidden`
                    }`}
                  >
                    <li className="hover:bg-gray-200">
                      <a href="#">Set as global guideline</a>
                    </li>
                    <li className="hover:bg-gray-200">
                      <a href="#">Learn more</a>
                    </li>
                  </ul>
                </button>
              </div>
              <div
                className="relative p-3 border-b cursor-pointer hover:bg-gray-100 group"
                onClick={() => {
                  setMainTab2(2);
                }}
              >
                <h3 className="text-sm font-semibold text-gray-900">
                  1. Architecture
                </h3>
                <p className="text-xs text-gray-600">
                  {" "}
                  The site is well organized.{" "}
                </p>
                <svg
                  className="absolute opacity-0 right-2 top-2 group-hover:opacity-100"
                  width="15"
                  height="15"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.0025 8.67688C6.45261 8.67688 6.8175 8.31199 6.8175 7.86188C6.8175 7.41176 6.45261 7.04688 6.0025 7.04688C5.55239 7.04688 5.1875 7.41176 5.1875 7.86188C5.1875 8.31199 5.55239 8.67688 6.0025 8.67688Z"
                    fill="#0EA5E9"
                  />
                  <path
                    d="M8.325 4.72H3.675C3.635 4.72 3.6 4.72 3.56 4.72V4.14C3.56 2.675 3.975 1.7 6 1.7C8.165 1.7 8.44 2.755 8.44 3.675C8.44 3.87 8.595 4.025 8.79 4.025C8.985 4.025 9.14 3.87 9.14 3.675C9.14 1.9 8.085 1 6 1C3.185 1 2.86 2.79 2.86 4.14V4.765C1.46 4.94 1 5.65 1 7.395V8.325C1 10.375 1.625 11 3.675 11H8.325C10.375 11 11 10.375 11 8.325V7.395C11 5.345 10.375 4.72 8.325 4.72ZM6 9.37C5.165 9.37 4.49 8.69 4.49 7.86C4.49 7.025 5.17 6.35 6 6.35C6.83 6.35 7.51 7.03 7.51 7.86C7.51 8.695 6.835 9.37 6 9.37Z"
                    fill="#0EA5E9"
                  />
                </svg>
              </div>
            </div>
          </>
        )}
      </Offcanvas>
    </div>
  );
}
