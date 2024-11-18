import { useState } from "react";

export default function DecChange({Back}) {
  const [text, setText] = useState("");

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;

  const isMetaDescriptionInvalid = charCount < 70 || charCount > 155;

  return (
    <div className="relative p-5 my-2 bg-white dark:bg-[#1d1d1d] rounded-md shadow-md">
      <button onClick={Back} className="flex items-center gap-1 mb-2"><svg className="fill-[#141414]  dark:fill-[#cbd5e1]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.01643 7.31204L9.71028 1.61848C9.98479 1.34397 10.4301 1.34397 10.7046 1.61848L11.3688 2.28264C11.643 2.55686 11.6433 3.001 11.3699 3.27581L6.85735 7.8092L11.3697 12.3429C11.6433 12.6177 11.6427 13.0618 11.3685 13.3361L10.7043 14.0002C10.4298 14.2747 9.9845 14.2747 9.70999 14.0002L4.01643 8.30637C3.74192 8.03186 3.74192 7.58655 4.01643 7.31204Z" fill="inherit"/>
</svg>
  <span>Edit Description</span>
</button>
      <textarea
        className="block w-full px-4 py-2 bg-white border h-40 rounded-md outline-none border-black/20 dark:bg-[#141414] dark:border-white/20 placeholder:text-black/20 dark:placeholder:text-white/20"
        placeholder="Write your description Here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div className="flex justify-center pt-4 gap-7">
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold text-[#7c74ff]">Words</span>
          <span className="text-xl font-semibold text-zinc-400">
            {wordCount}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold text-[#7c74ff]">Characters</span>
          <span className="text-xl font-semibold text-zinc-400">
            {charCount}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-xl font-bold text-[#7c74ff]">
          Meta Description
        </span>
        <span className={`text-xl font-semibold text-zinc-400`}>
          <span
            className={`${
              isMetaDescriptionInvalid ? "text-red-500" : "text-green-400"
            }`}
          >
            {charCount}
          </span>
          /155
        </span>
      </div>
      <p className="mb-3 text-sm text-zinc-500">More than 70 and less than 155 Characters</p>
    </div>
  );
}
