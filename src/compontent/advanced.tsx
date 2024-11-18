export default function Advance() {
  return (
    <>
      <div className="relative p-5 my-2 bg-white dark:bg-[#1d1d1d] rounded-md shadow-md">
        <p className="text-sm text-zinc-400">
          The links below take you to each service for the current website
          you're on e.g. if you're on Google, clicking SimilarWeb will take you
          to the Google page on their site
        </p>
        <div className="grid grid-cols-2 pt-2">
          <div>
            <p className="flex items-center gap-1 mt-px font-semibold dark:text-zinc-400 text-[#374151]">
              <img
                width={16}
                height={15}
                className="shrink-0"
                src={`https://ahrefs.com/favicon.ico`}
                alt=""
              />
              <span>Ahrefs</span>
            </p>
            <p className="flex items-center gap-1 mt-px font-semibold dark:text-zinc-400 text-[#374151]">
              <img
                width={16}
                height={15}
                className="shrink-0"
                src={`https://archive.org/favicon.ico`}
                alt=""
              />
              <span>Archive.org</span>
            </p>
            <p className="flex items-center gap-1 mt-px font-semibold dark:text-zinc-400 text-[#374151]">
              <img
                width={16}
                height={15}
                className="shrink-0"
                src={`https://majestic.com/favicon.ico`}
                alt=""
              />
              <span>Majestic</span>
            </p>
            <p className="flex items-center gap-1 mt-px font-semibold dark:text-zinc-400 text-[#374151]">
              <img
                width={16}
                height={15}
                className="shrink-0"
                src={`https://moz.com/favicon.ico`}
                alt=""
              />
              <span>Moz</span>
            </p>
            <p className="flex items-center gap-1 mt-px font-semibold dark:text-zinc-400 text-[#374151]">
              <img
                width={16}
                height={15}
                className="shrink-0"
                src={`https://developers.google.com/favicon.ico`}
                alt=""
              />
              <span>PageSpeed Insights</span>
            </p>
            <p className="flex items-center gap-1 mt-px font-semibold dark:text-zinc-400 text-[#374151]">
              <img
                width={16}
                height={15}
                className="shrink-0"
                src={`https://www.semrush.com/m/images/favicon.ico`}
                alt=""
              />
              <span>Semrush</span>
            </p>
            <p className="flex items-center gap-1 mt-px font-semibold dark:text-zinc-400 text-[#374151]">
              <img
                width={16}
                height={15}
                className="shrink-0"
                src={`https://www.similarweb.com/favicon.ico`}
                alt=""
              />
              <span>SimilarWeb</span>
            </p>
            <p className="flex items-center gap-1 mt-px font-semibold dark:text-zinc-400 text-[#374151]">
              <img
                width={16}
                height={15}
                className="shrink-0"
                src={`https://developers.google.com/favicon.ico`}
                alt=""
              />
              <span>Rich Data Testing</span>
            </p>
            <p className="flex items-center gap-1 mt-px font-semibold dark:text-zinc-400 text-[#374151]">
              <img
                width={16}
                height={15}
                className="shrink-0"
                src={`https://www.whois.com/favicon.ico`}
                alt=""
              />
              <span>Whois</span>
            </p>
            <p className="text-xl font-bold text-[#7c74ff] mt-5">Tools</p>
            <p className="pt-2 text-sm font-semibold dark:text-zinc-400 text-[#374151]">
              Perform an -inurl:https search Perform a site:domain.com search
              Highlight Nofollow links
            </p>
          </div>
          <div>
            <p className="text-md font-semibold text-[#646464] dark:text-zinc-300 mb-2">
              Change User Agent
            </p>
            <select className="w-full bg-[#f4f3ff] dark:bg-[#334155]  rounded-md py-2 px-4 outline-none border border-[#7c74ff] text-xs">
              <option>Default</option>
              <option>Googlebot</option>
              <option>Internet Exploerer 8</option>
              <option>Microsoft Edge</option>
              <option>Safari</option>
              <option>Chorme</option>
              <option>Opera</option>
            </select>
            <p className="text-md font-semibold text-[#646464] dark:text-zinc-300 mb-2 mt-7">
              Enable PAA Extracting
            </p>
            <p className="text-xs text-zinc-400">
              When enabled, this will allow you to extract the contents of "Also
              asked" question boxes in Google's search results.
            </p>
            <p className="text-md font-semibold text-[#646464] dark:text-zinc-300 mb-2 mt-7">
              Dark Mode
            </p>
            <p className="bg-[#f4f3ff] dark:bg-[#334155] text-[#7c74ff] text-xs p-4 rounded-md">
              <span className="font-semibold">Did you know?</span> Anywhere on
              the web, if you Right Click you'll see a custom menu item just for
              this extension.
            </p>
          </div>
        </div>
        <p className="text-xs text-center text-zinc-400">
          This extension was developed by SEOs at <a href="#">company.com</a>{" "}
          and is 100% free, forever.
        </p>
      </div>
    </>
  );
}
