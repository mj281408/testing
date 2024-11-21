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
import Heroiu from "./compontent/heroiu";
// import Advance from "./compontent/advanced";

function App() {
  const [activeTab, setActiveTab] = useState(1);
  const [dropdown, setDropdown] = useState(false);


  return (
    <>
      <Heroiu/>
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
