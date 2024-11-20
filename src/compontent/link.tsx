export default function Links() {
  return (
    <>
      <div className="relative p-5 mb-2 bg-white dark:bg-[#1d1d1d] rounded-md shadow-md">
        <div className="flex justify-center gap-7 ">
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold text-orange-500">
              Total Links
            </span>
            <span className="text-xl font-semibold text-zinc-400">0</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold text-orange-500">Unique</span>
            <span className="text-xl font-semibold text-zinc-400">0</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold text-orange-500">Internal</span>
            <span className="text-xl font-semibold text-zinc-400">0</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold text-orange-500">External</span>
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
            <span>Export Incomplete Links</span>
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
            <span>Export Complete Links</span>
          </button>
        </div>
        <p className="mt-3 text-xl font-bold text-orange-500">Internal Links</p>
        <div className="pt-3 mt-3 text-sm font-semibold border-t border-black/5 dark:border-white/20">
          <p>
            https://tailwindcss.com/blog/2024-05-24-catalyst-application-layouts
          </p>
          <p>
            Anchor:
            <span className="font-normal">
              Introducing CatalystA modern application UI kit for React
            </span>
          </p>
        </div>
        <div className="pt-3 mt-3 text-sm font-semibold border-t border-black/5 dark:border-white/20">
          <p>
            https://tailwindcss.com/blog/2024-05-24-catalyst-application-layouts
          </p>
          <p>
            Anchor:
            <span className="font-normal">
              Introducing CatalystA modern application UI kit for React
            </span>
          </p>
        </div>
        <p className="mt-3 text-xl font-bold text-orange-500">External Links</p>
        <div className="pt-3 mt-3 text-sm font-semibold border-t border-black/5 dark:border-white/20">
          <p>
            https://tailwindcss.com/blog/2024-05-24-catalyst-application-layouts
          </p>
          <p>
            Anchor:
            <span className="font-normal">
              Introducing CatalystA modern application UI kit for React
            </span>
          </p>
        </div>
        <div className="pt-3 mt-3 text-sm font-semibold border-t border-black/5 dark:border-white/20">
          <p>
            https://tailwindcss.com/blog/2024-05-24-catalyst-application-layouts
          </p>
          <p>
            Anchor:
            <span className="font-normal">
              Introducing CatalystA modern application UI kit for React
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
