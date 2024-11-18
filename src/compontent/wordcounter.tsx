import { useState } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;

  const isMetaTitleInvalid = charCount < 1 || charCount > 65;
  const isMetaDescriptionInvalid = charCount < 70 || charCount > 155;

  return (
    <div className="relative p-5 my-2 bg-white dark:bg-[#1d1d1d] rounded-md shadow-md">
      <textarea
        className="block w-full px-4 py-2 bg-white border h-40 rounded-md outline-none border-black/20 dark:bg-[#141414] dark:border-white/20 placeholder:text-black/20 dark:placeholder:text-white/20"
        placeholder="Write Here"
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
      <div className="flex items-center gap-4 pt-4">
        <span className="text-xl font-bold text-[#7c74ff]">Meta Title</span>
        <span className={`text-xl font-semibold text-zinc-400`}>
          <span
            className={`${
              isMetaTitleInvalid ? "text-red-500" : "text-green-400"
            }`}
          >
            {charCount}
          </span>
          /65
        </span>
      </div>
      <p className="mb-3 text-sm text-zinc-500">Less than 65 Characters</p>
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
