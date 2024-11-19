export default function Heading() {
  return (
    <>
      <div className="relative p-5 mb-2 bg-white dark:bg-[#1d1d1d] rounded-md shadow-md">
        <button className="absolute right-5 px-3 py-1.5 font-semibold rounded-md bg-zinc-300 dark:bg-[#292929]  dark:text-[#cbd5e1] flex items-center gap-2">
          <svg
            className="fill-[#292929]  dark:fill-[#cbd5e1]"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z"
              fill="inherit"
            />
            <path
              d="M17.0998 2H12.8998C9.81668 2 8.37074 3.09409 8.06951 5.73901C8.00649 6.29235 8.46476 6.75 9.02167 6.75H11.0998C15.2998 6.75 17.2498 8.7 17.2498 12.9V14.9781C17.2498 15.535 17.7074 15.9933 18.2608 15.9303C20.9057 15.629 21.9998 14.1831 21.9998 11.1V6.9C21.9998 3.4 20.5998 2 17.0998 2Z"
              fill="inherit"
            />
          </svg>
          <span>Copy</span>
        </button>
        <div className="flex items-center gap-2 mb-2">
          <span className="flex items-center justify-center text-xs font-bold text-orange-500 bg-orange-100 rounded-md w-9 h-9">
            &lt;H1&gt;
          </span>
          <p>Helo</p>
        </div>
        <div className="flex items-center gap-2 mb-2 ms-4">
          <span className="flex items-center justify-center text-xs font-bold text-orange-500 scale-95 bg-orange-100 rounded-md w-9 h-9">
            &lt;H2&gt;
          </span>
          <p>Helo</p>
        </div>
        <div className="flex items-center gap-2 mb-2 ms-8">
          <span className="flex items-center justify-center text-xs font-bold text-orange-500 scale-95 bg-orange-100 rounded-md w-9 h-9">
            &lt;H3&gt;
          </span>
          <p className="text-sm">Helo</p>
        </div>
        <div className="flex items-center gap-2 mb-2 ms-12">
          <span className="flex items-center justify-center text-xs font-bold text-orange-500 scale-95 bg-orange-100 rounded-md w-9 h-9">
            &lt;H4&gt;
          </span>
          <p className="text-sm">Helo</p>
        </div>
        <div className="flex items-center gap-2 mb-2 ms-14">
          <span className="flex items-center justify-center text-xs font-bold text-orange-500 scale-75 bg-orange-100 rounded-md w-9 h-9">
            &lt;H5&gt;
          </span>
          <p className="text-xs">Helo</p>
        </div>
        <div className="flex items-center gap-2 mb-2 ms-16">
          <span className="flex items-center justify-center text-xs font-bold text-orange-500 scale-75 bg-orange-100 rounded-md w-9 h-9">
            &lt;H6&gt;
          </span>
          <p className="text-xs">Helo</p>
        </div>
      </div>
      <div className="p-5 mb-2 bg-white dark:bg-[#1d1d1d] rounded-md shadow-md">
        <div className="flex gap-6 pb-2 border-b border-black/5">
          <p className="flex flex-col items-center">
            <span className="font-semibold">H1</span>
            <span className="text-xs text-zinc-400">0</span>
          </p>
          <p className="flex flex-col items-center">
            <span className="font-semibold">H2</span>
            <span className="text-xs text-zinc-400">0</span>
          </p>
          <p className="flex flex-col items-center">
            <span className="font-semibold">H3</span>
            <span className="text-xs text-zinc-400">0</span>
          </p>
          <p className="flex flex-col items-center">
            <span className="font-semibold">H4</span>
            <span className="text-xs text-zinc-400">0</span>
          </p>
          <p className="flex flex-col items-center">
            <span className="font-semibold">H5</span>
            <span className="text-xs text-zinc-400">0</span>
          </p>
          <p className="flex flex-col items-center">
            <span className="font-semibold">H6</span>
            <span className="text-xs text-zinc-400">0</span>
          </p>
          <p className="flex flex-col items-center">
            <span className="font-semibold">Images</span>
            <span className="text-xs text-zinc-400">0</span>
          </p>
          <p className="flex flex-col items-center">
            <span className="font-semibold">Links</span>
            <span className="text-xs text-zinc-400">0</span>
          </p>
        </div>
        <p className="flex gap-5 pt-2 text-sm text-zinc-400">
          <span>Robots.txt</span>
          <span>Sitemap.xml</span>
        </p>
      </div>
    </>
  );
}
