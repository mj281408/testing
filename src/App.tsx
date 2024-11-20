import { useState } from "react";
import "./App.css";
import Overview from "./compontent/overview";
import Heading from "./compontent/Heading";
import Links from "./compontent/link";
import Images from "./compontent/images";
import Schema from "./compontent/schema";
import Social from "./compontent/social";
import WordCouter from "./compontent/wordcounter";
import TitleChange from "./compontent/titlechange";
import DecChange from "./compontent/decchange";
import EditAlt from "./compontent/editalt";
// import Advance from "./compontent/advanced";

function App() {
  const [activeTab, setActiveTab] = useState(1);
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <div>
        <button className="fixed flex items-center justify-center bg-white rounded-full shadow-xl size-14 left-5 bottom-5">
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
        <button className="fixed flex items-center justify-center bg-white rounded-full shadow-xl size-12 left-28 bottom-5">
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
        <button className="fixed flex items-center justify-center bg-white rounded-full shadow-xl size-12 left-44 bottom-5">
          <svg
            width="22"
            height="22"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3530_2)">
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
        <button className="fixed flex items-center justify-center bg-white rounded-full shadow-xl size-14 right-5 bottom-5">
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
        <img src="web.png" alt="" />
      </div>
      <div className="w-[680px] h-[956.75px] bg-[#F5ECE4] dark:bg-[#292929] p-4 relative text-black dark:text-[#cbd5e1]">
        <div className="py-5 rounded-md">
          <ul className="flex justify-between gap-2 text-sm font-semibold">
            <li>
              <button
                onClick={() => {
                  setActiveTab(1);
                }}
                className={`flex items-center gap-1 border-b-2 pb-1 ${
                  activeTab === 1
                    ? "text-orange-500 border-orange-500"
                    : " text-zinc-800 border-transparent dark:text-orange-50"
                }`}
              >
                <span>Overview</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveTab(2);
                }}
                className={`flex items-center gap-1 border-b-2 pb-1 ${
                  activeTab === 2
                    ? "text-orange-500 border-orange-500"
                    : " text-zinc-800 border-transparent dark:text-orange-50"
                }`}
              >
                <span>Heading</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveTab(7);
                }}
                className={`flex items-center gap-1 border-b-2 pb-1 ${
                  activeTab === 7
                    ? "text-orange-500 border-orange-500"
                    : " text-zinc-800 border-transparent dark:text-orange-50"
                }`}
              >
                <span>Word Counter</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveTab(3);
                }}
                className={`flex items-center gap-1 border-b-2 pb-1 ${
                  activeTab === 3
                    ? "text-orange-500 border-orange-500"
                    : " text-zinc-800 border-transparent dark:text-orange-50"
                }`}
              >
                <span>Links</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveTab(4);
                }}
                className={`flex items-center gap-1 border-b-2 pb-1 ${
                  activeTab === 4
                    ? "text-orange-500 border-orange-500"
                    : " text-zinc-800 border-transparent dark:text-orange-50"
                }`}
              >
                <span>Images</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveTab(5);
                }}
                className={`flex items-center gap-1 border-b-2 pb-1 ${
                  activeTab === 5
                    ? "text-orange-500 border-orange-500"
                    : " text-zinc-800 border-transparent dark:text-orange-50"
                }`}
              >
                <span>Schema</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveTab(6);
                }}
                className={`flex items-center gap-1 border-b-2 pb-1 ${
                  activeTab === 6
                    ? "text-orange-500 border-orange-500"
                    : " text-zinc-800 border-transparent dark:text-orange-50"
                }`}
              >
                <span>Social</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setDropdown(true);
                }}
                className={`flex items-center gap-1 ${
                  activeTab === 8
                    ? "text-orange-500 border-orange-500"
                    : "text-[#F5ECE4]"
                }`}
              >
                <svg
                  className={`fill-zinc-800 dark:fill-orange-50`}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.16699 1.04183C4.50866 1.04183 4.79199 1.32516 4.79199 1.66683L4.79199 10.8335C4.79199 11.1752 4.50866 11.4585 4.16699 11.4585C3.82533 11.4585 3.54199 11.1752 3.54199 10.8335L3.54199 1.66683C3.54199 1.32516 3.82533 1.04183 4.16699 1.04183Z"
                    fill="inherit"
                  />
                  <path
                    d="M4.16699 13.5418C4.50866 13.5418 4.79199 13.8252 4.79199 14.1668L4.79199 18.3335C4.79199 18.6752 4.50866 18.9585 4.16699 18.9585C3.82533 18.9585 3.54199 18.6752 3.54199 18.3335L3.54199 14.1668C3.54199 13.8252 3.82533 13.5418 4.16699 13.5418Z"
                    fill="inherit"
                  />
                  <path
                    d="M10 1.04183C10.3417 1.04183 10.625 1.32516 10.625 1.66683L10.625 5.8335C10.625 6.17516 10.3417 6.4585 10 6.4585C9.65833 6.4585 9.375 6.17516 9.375 5.8335L9.375 1.66683C9.375 1.32516 9.65833 1.04183 10 1.04183Z"
                    fill="inherit"
                  />
                  <path
                    d="M10 8.54183C10.3417 8.54183 10.625 8.82516 10.625 9.16683L10.625 18.3335C10.625 18.6752 10.3417 18.9585 10 18.9585C9.65833 18.9585 9.375 18.6752 9.375 18.3335L9.375 9.16683C9.375 8.82516 9.65833 8.54183 10 8.54183Z"
                    fill="inherit"
                  />
                  <path
                    d="M15.833 1.04183C16.1747 1.04183 16.458 1.32516 16.458 1.66683L16.458 10.8335C16.458 11.1752 16.1747 11.4585 15.833 11.4585C15.4913 11.4585 15.208 11.1752 15.208 10.8335L15.208 1.66683C15.208 1.32516 15.4913 1.04183 15.833 1.04183Z"
                    fill="inherit"
                  />
                  <path
                    d="M15.833 13.5418C16.1747 13.5418 16.458 13.8252 16.458 14.1668L16.458 18.3335C16.458 18.6752 16.1747 18.9585 15.833 18.9585C15.4913 18.9585 15.208 18.6752 15.208 18.3335L15.208 14.1668C15.208 13.8252 15.4913 13.5418 15.833 13.5418Z"
                    fill="inherit"
                  />
                  <path
                    d="M14.1667 10.2085L17.5 10.2085C17.8417 10.2085 18.125 10.4918 18.125 10.8335C18.125 11.1752 17.8417 11.4585 17.5 11.4585L14.1667 11.4585C13.825 11.4585 13.5417 11.1752 13.5417 10.8335C13.5417 10.4918 13.825 10.2085 14.1667 10.2085Z"
                    fill="inherit"
                  />
                  <path
                    d="M2.49967 10.2085L5.83301 10.2085C6.17467 10.2085 6.45801 10.4918 6.45801 10.8335C6.45801 11.1752 6.17467 11.4585 5.83301 11.4585L2.49967 11.4585C2.15801 11.4585 1.87467 11.1752 1.87467 10.8335C1.87467 10.4918 2.15801 10.2085 2.49967 10.2085Z"
                    fill="inherit"
                  />
                  <path
                    d="M8.33366 8.5415L11.667 8.5415C12.0087 8.5415 12.292 8.82484 12.292 9.1665C12.292 9.50817 12.0087 9.7915 11.667 9.7915L8.33366 9.7915C7.99199 9.7915 7.70866 9.50817 7.70866 9.1665C7.70866 8.82484 7.99199 8.5415 8.33366 8.5415Z"
                    fill="inherit"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
        {activeTab === 1 ? (
          <Overview
            onEditClick={() => setActiveTab(8)}
            onEditClick2={() => setActiveTab(9)}
          />
        ) : (
          <></>
        )}
        {activeTab === 2 ? <Heading /> : <></>}
        {activeTab === 3 ? <Links /> : <></>}
        {activeTab === 4 ? <Images editAlt={() => setActiveTab(10)} /> : <></>}
        {activeTab === 5 ? <Schema /> : <></>}
        {activeTab === 6 ? <Social /> : <></>}
        {activeTab === 7 ? <WordCouter /> : <></>}
        {activeTab === 8 ? <TitleChange Back={() => setActiveTab(1)} /> : <></>}
        {activeTab === 9 ? <DecChange Back={() => setActiveTab(1)} /> : <></>}
        {activeTab === 10 ? <EditAlt Back={() => setActiveTab(4)} /> : <></>}
        {/* {activeTab === 7 ? <Advance /> : <></>} */}
        {dropdown ? (
          <div className="bg-white dark:bg-[#1d1d1d] border rounded-md border-[#9ca3af] dark:border-white/20 absolute p-4 w-[320px] top-5 left-0 right-0 mx-auto">
            <svg
              onClick={() => {
                setDropdown(false);
              }}
              className="cursor-pointer ms-auto"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6063 10L16.5152 6.09102C16.9949 5.61133 16.9949 4.83359 16.5152 4.35352L15.6465 3.48477C15.1668 3.00508 14.3891 3.00508 13.909 3.48477L10 7.39375L6.09102 3.48477C5.61133 3.00508 4.83359 3.00508 4.35352 3.48477L3.48477 4.35352C3.00508 4.8332 3.00508 5.61094 3.48477 6.09102L7.39375 10L3.48477 13.909C3.00508 14.3887 3.00508 15.1664 3.48477 15.6465L4.35352 16.5152C4.8332 16.9949 5.61133 16.9949 6.09102 16.5152L10 12.6063L13.909 16.5152C14.3887 16.9949 15.1668 16.9949 15.6465 16.5152L16.5152 15.6465C16.9949 15.1668 16.9949 14.3891 16.5152 13.909L12.6063 10Z"
                fill="#b3b0c6"
              />
            </svg>
            <h2 className="pb-3 text-2xl font-semibold text-center text-green-600">
              Settings
            </h2>
            <p className="text-xs font-semibold text-center text-zinc-400">
              To enable features such as Hreflang analysis, PAA(People also
              asked), nofollow link highlighting and status code display, Google
              requires we ask you for additional permissions. The Detailed SEO
              extension does not store or save your data in any way.
            </p>
            <button className="block w-full py-2 mt-3 text-2xl font-bold text-center text-white bg-green-600 rounded-md">
              Save
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default App;
