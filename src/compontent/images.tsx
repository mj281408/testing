import React from 'react';

interface ImagesProps {
  editAlt: () => void;
}

const Images: React.FC<ImagesProps> = ({ editAlt }) => {
  return (
    <>
      <div className="relative p-5 mb-2 bg-white dark:bg-[#1d1d1d] rounded-md shadow-md">
        <div className="flex justify-center gap-7 ">
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold text-orange-500">Images</span>
            <span className="text-xl font-semibold text-zinc-400">0</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold text-orange-500">
              Without Alt
            </span>
            <span className="text-xl font-semibold text-zinc-400">0</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold text-orange-500">
              Keyword-Stuffed
            </span>
            <span className="text-xl font-semibold text-zinc-400">0</span>
          </div>
        </div>
        <div className="flex items-center my-3 text-sm justify-center *:bg-zinc-300 *:dark:bg-[#292929]  *:dark:text-[#cbd5e1] *:rounded-md *:px-4 *:py-1.5 font-semibold gap-4">
          <button className="flex items-center gap-2">
            <svg
              className="fill-[#292929]  dark:fill-[#cbd5e1]"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3501_5018)">
                <path
                  d="M6.32812 0H8.67188C9.06152 0 9.375 0.313477 9.375 0.703125V5.625H11.9443C12.4658 5.625 12.7266 6.25488 12.3574 6.62402L7.90137 11.083C7.68164 11.3027 7.32129 11.3027 7.10156 11.083L2.63965 6.62402C2.27051 6.25488 2.53125 5.625 3.05273 5.625H5.625V0.703125C5.625 0.313477 5.93848 0 6.32812 0ZM15 11.0156V14.2969C15 14.6865 14.6865 15 14.2969 15H0.703125C0.313477 15 0 14.6865 0 14.2969V11.0156C0 10.626 0.313477 10.3125 0.703125 10.3125H5.00098L6.43652 11.748C7.02539 12.3369 7.97461 12.3369 8.56348 11.748L9.99902 10.3125H14.2969C14.6865 10.3125 15 10.626 15 11.0156ZM11.3672 13.5938C11.3672 13.2715 11.1035 13.0078 10.7812 13.0078C10.459 13.0078 10.1953 13.2715 10.1953 13.5938C10.1953 13.916 10.459 14.1797 10.7812 14.1797C11.1035 14.1797 11.3672 13.916 11.3672 13.5938ZM13.2422 13.5938C13.2422 13.2715 12.9785 13.0078 12.6562 13.0078C12.334 13.0078 12.0703 13.2715 12.0703 13.5938C12.0703 13.916 12.334 14.1797 12.6562 14.1797C12.9785 14.1797 13.2422 13.916 13.2422 13.5938Z"
                  fill="inherit"
                />
              </g>
              <defs>
                <clipPath id="clip0_3501_5018">
                  <rect width="15" height="15" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>Export Incomplete Images</span>
          </button>
          <button className="flex items-center gap-2">
            <svg
              className="fill-[#292929]  dark:fill-[#cbd5e1]"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3501_5018)">
                <path
                  d="M6.32812 0H8.67188C9.06152 0 9.375 0.313477 9.375 0.703125V5.625H11.9443C12.4658 5.625 12.7266 6.25488 12.3574 6.62402L7.90137 11.083C7.68164 11.3027 7.32129 11.3027 7.10156 11.083L2.63965 6.62402C2.27051 6.25488 2.53125 5.625 3.05273 5.625H5.625V0.703125C5.625 0.313477 5.93848 0 6.32812 0ZM15 11.0156V14.2969C15 14.6865 14.6865 15 14.2969 15H0.703125C0.313477 15 0 14.6865 0 14.2969V11.0156C0 10.626 0.313477 10.3125 0.703125 10.3125H5.00098L6.43652 11.748C7.02539 12.3369 7.97461 12.3369 8.56348 11.748L9.99902 10.3125H14.2969C14.6865 10.3125 15 10.626 15 11.0156ZM11.3672 13.5938C11.3672 13.2715 11.1035 13.0078 10.7812 13.0078C10.459 13.0078 10.1953 13.2715 10.1953 13.5938C10.1953 13.916 10.459 14.1797 10.7812 14.1797C11.1035 14.1797 11.3672 13.916 11.3672 13.5938ZM13.2422 13.5938C13.2422 13.2715 12.9785 13.0078 12.6562 13.0078C12.334 13.0078 12.0703 13.2715 12.0703 13.5938C12.0703 13.916 12.334 14.1797 12.6562 14.1797C12.9785 14.1797 13.2422 13.916 13.2422 13.5938Z"
                  fill="inherit"
                />
              </g>
              <defs>
                <clipPath id="clip0_3501_5018">
                  <rect width="15" height="15" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>Export Complete Images</span>
          </button>
        </div>
        <div>
          <p className="mt-5 text-xl font-bold text-orange-500"> Image List</p>
          <div className="flex gap-3 pt-3 mt-3 text-sm font-semibold border-t border-black/5 dark:border-white/20">
          <img className="w-14 h-14 shrink-0" src="https://thevanillaroom.co.uk/wp-content/uploads/2023/12/900px-Image-Placeholder.jpg" alt="" />
           <div className="w-full">
           <p className="flex items-start justify-between">
              <span className="break-words">
                https://lh3.googleusercontent.com/a/default-user=s64-c
              </span>
              <span className="text-red-500 shrink-0">Without alt</span>
            </p>
            <span className="flex justify-between pt-1">
              <span>
                Alt:
                <span className="font-normal ps-1"></span>
              </span>
              <svg
                width="15"
                onClick={editAlt}
                className="cursor-pointer fill-[#292929] dark:fill-[#cbd5e1]"
                height="15"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3523_2)">
                  <path
                    d="M19.4483 5.55078L17.6475 7.35156C17.4639 7.53516 17.167 7.53516 16.9834 7.35156L12.6475 3.01562C12.4639 2.83203 12.4639 2.53516 12.6475 2.35156L14.4483 0.550781C15.1788 -0.179688 16.3663 -0.179688 17.1006 0.550781L19.4483 2.89844C20.1827 3.62891 20.1827 4.81641 19.4483 5.55078ZM11.1006 3.89844L0.842824 14.1562L0.0146994 18.9023C-0.0985818 19.543 0.460012 20.0977 1.10064 19.9883L5.84673 19.1562L16.1045 8.89844C16.2881 8.71484 16.2881 8.41797 16.1045 8.23438L11.7686 3.89844C11.5811 3.71484 11.2842 3.71484 11.1006 3.89844ZM4.84673 13.2773C4.63189 13.0625 4.63189 12.7187 4.84673 12.5039L10.8624 6.48828C11.0772 6.27344 11.4209 6.27344 11.6358 6.48828C11.8506 6.70313 11.8506 7.04687 11.6358 7.26172L5.62017 13.2773C5.40532 13.4922 5.06157 13.4922 4.84673 13.2773ZM3.43657 16.5625H5.31157V17.9805L2.79204 18.4219L1.5772 17.207L2.01861 14.6875H3.43657V16.5625Z"
                    fill="inherit"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_3523_2">
                    <rect width="20" height="20" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </span>
           </div>
          </div>
          <div className="flex gap-3 pt-3 mt-3 text-sm font-semibold border-t border-black/5 dark:border-white/20">
          <img className="w-14 h-14 shrink-0" src="https://thevanillaroom.co.uk/wp-content/uploads/2023/12/900px-Image-Placeholder.jpg" alt="" />
           <div className="w-full">
           <p className="flex items-start justify-between">
              <span className="break-words">
                https://lh3.googleusercontent.com/a/default-user=s64-c
              </span>
              <span className="text-red-500 shrink-0">Keyword-Stuffed alt</span>
            </p>
            <span className="flex justify-between pt-1">
              <span>
                Alt:
                <span className="font-normal ps-1">
                  Introducing CatalystA modern application UI kit for React
                </span>
              </span>
              <svg
                width="15"
                onClick={editAlt}
                className="cursor-pointer fill-[#292929] dark:fill-[#cbd5e1]"
                height="15"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3523_2)">
                  <path
                    d="M19.4483 5.55078L17.6475 7.35156C17.4639 7.53516 17.167 7.53516 16.9834 7.35156L12.6475 3.01562C12.4639 2.83203 12.4639 2.53516 12.6475 2.35156L14.4483 0.550781C15.1788 -0.179688 16.3663 -0.179688 17.1006 0.550781L19.4483 2.89844C20.1827 3.62891 20.1827 4.81641 19.4483 5.55078ZM11.1006 3.89844L0.842824 14.1562L0.0146994 18.9023C-0.0985818 19.543 0.460012 20.0977 1.10064 19.9883L5.84673 19.1562L16.1045 8.89844C16.2881 8.71484 16.2881 8.41797 16.1045 8.23438L11.7686 3.89844C11.5811 3.71484 11.2842 3.71484 11.1006 3.89844ZM4.84673 13.2773C4.63189 13.0625 4.63189 12.7187 4.84673 12.5039L10.8624 6.48828C11.0772 6.27344 11.4209 6.27344 11.6358 6.48828C11.8506 6.70313 11.8506 7.04687 11.6358 7.26172L5.62017 13.2773C5.40532 13.4922 5.06157 13.4922 4.84673 13.2773ZM3.43657 16.5625H5.31157V17.9805L2.79204 18.4219L1.5772 17.207L2.01861 14.6875H3.43657V16.5625Z"
                    fill="inherit"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_3523_2">
                    <rect width="20" height="20" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </span>
           </div>
          </div>
          <div className="flex gap-3 pt-3 mt-3 text-sm font-semibold border-t border-black/5 dark:border-white/20">
          <img className="w-14 h-14 shrink-0" src="https://thevanillaroom.co.uk/wp-content/uploads/2023/12/900px-Image-Placeholder.jpg" alt="" />
            <div className="w-full">
            <p className="flex items-start justify-between">
              <span className="break-words">
                https://lh3.googleusercontent.com/a/default-user=s64-c
              </span>
              <span className="text-green-500 shrink-0">Completed</span>
            </p>
            <span className="flex justify-between pt-1">
              <span>
                Alt:
                <span className="font-normal ps-1">
                  Introducing CatalystA modern application UI kit for React
                </span>
              </span>
              <svg
                width="15"
                onClick={editAlt}
                className="cursor-pointer fill-[#292929] dark:fill-[#cbd5e1]"
                height="15"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3523_2)">
                  <path
                    d="M19.4483 5.55078L17.6475 7.35156C17.4639 7.53516 17.167 7.53516 16.9834 7.35156L12.6475 3.01562C12.4639 2.83203 12.4639 2.53516 12.6475 2.35156L14.4483 0.550781C15.1788 -0.179688 16.3663 -0.179688 17.1006 0.550781L19.4483 2.89844C20.1827 3.62891 20.1827 4.81641 19.4483 5.55078ZM11.1006 3.89844L0.842824 14.1562L0.0146994 18.9023C-0.0985818 19.543 0.460012 20.0977 1.10064 19.9883L5.84673 19.1562L16.1045 8.89844C16.2881 8.71484 16.2881 8.41797 16.1045 8.23438L11.7686 3.89844C11.5811 3.71484 11.2842 3.71484 11.1006 3.89844ZM4.84673 13.2773C4.63189 13.0625 4.63189 12.7187 4.84673 12.5039L10.8624 6.48828C11.0772 6.27344 11.4209 6.27344 11.6358 6.48828C11.8506 6.70313 11.8506 7.04687 11.6358 7.26172L5.62017 13.2773C5.40532 13.4922 5.06157 13.4922 4.84673 13.2773ZM3.43657 16.5625H5.31157V17.9805L2.79204 18.4219L1.5772 17.207L2.01861 14.6875H3.43657V16.5625Z"
                    fill="inherit"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_3523_2">
                    <rect width="20" height="20" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Images;