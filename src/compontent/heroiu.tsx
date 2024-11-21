import { useState } from "react";
import Offcanvas from "./offcanvas";

export default function Heroiu() {
  const [isChecked, setIsChecked] = useState(false);
  const [setting, setSetting] = useState(false);
  const [webList, setWebList] = useState(false);
  const [mainTab, setMainTab] = useState(false);
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
      <button
        onClick={toggleOffcanvas1}
        className="fixed z-20 flex items-center justify-center bg-white rounded-full shadow-xl size-14 left-5 bottom-5"
      >
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
        {mainTab ? (
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
                    <a href="">Go to Website</a>
                  </li>
                  <li className="hover:bg-gray-200">
                    <a href="">Account Settings</a>
                  </li>
                  <li className="hover:bg-gray-200">
                    <a href="">Logout</a>
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
                          setMainTab(false);
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
        ) : (
          <>
            <div className="px-3">
              <p onClick={()=>{setMainTab(true)}} className="flex items-center gap-2 pt-3 text-xs font-bold cursor-pointer text-zinc-700">
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
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>PROJECTS</span>
              </p>
              <div className="flex items-center justify-between gap-2 py-4">
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
                <button>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 4.3125C6.93281 4.3125 7.6875 5.06719 7.6875 6C7.6875 6.93281 6.93281 7.6875 6 7.6875C5.06719 7.6875 4.3125 6.93281 4.3125 6C4.3125 5.06719 5.06719 4.3125 6 4.3125ZM4.3125 1.875C4.3125 2.80781 5.06719 3.5625 6 3.5625C6.93281 3.5625 7.6875 2.80781 7.6875 1.875C7.6875 0.942188 6.93281 0.1875 6 0.1875C5.06719 0.1875 4.3125 0.942188 4.3125 1.875ZM4.3125 10.125C4.3125 11.0578 5.06719 11.8125 6 11.8125C6.93281 11.8125 7.6875 11.0578 7.6875 10.125C7.6875 9.19219 6.93281 8.4375 6 8.4375C5.06719 8.4375 4.3125 9.19219 4.3125 10.125Z"
                      fill="#6B7280"
                    />
                  </svg>
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
           {
            tab2=== 1 &&(
                <div className="py-8 font-semibold text-center text-gray-500">
                <p className="text-sm">0 active heurio</p>
                <p className="text-xs text-gray-400">Switch to Comment View to add one</p>
            </div>
            )
           }
           {
            tab2=== 2 &&(
                <div className="py-8 font-semibold text-center text-gray-500">
                <p className="text-sm">0 resolved heurio</p>
                <p className="text-xs text-gray-400">Use resolve to hide an active heurio</p>
            </div>
            )
           }            
          </>
        )}
      </Offcanvas>
      <Offcanvas isOpen={isOffcanvas2Open} isLeft={true}>
        <p>This is the content of Offcanvas 1.</p>
      </Offcanvas>
    </div>
  );
}
