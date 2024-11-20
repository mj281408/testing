import React from 'react';

interface EditAltProps {
  Back: () => void;
}

const EditAlt: React.FC<EditAltProps> = ({ Back }) => {
  return (
    <div className="relative p-5 mb-2 bg-white dark:bg-[#1d1d1d] rounded-md shadow-md">
      <button className="flex items-center w-full gap-1 mb-2">
        <svg
          onClick={Back}
          className="fill-[#292929] dark:fill-[#cbd5e1]"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.01643 7.31204L9.71028 1.61848C9.98479 1.34397 10.4301 1.34397 10.7046 1.61848L11.3688 2.28264C11.643 2.55686 11.6433 3.001 11.3699 3.27581L6.85735 7.8092L11.3697 12.3429C11.6433 12.6177 11.6427 13.0618 11.3685 13.3361L10.7043 14.0002C10.4298 14.2747 9.9845 14.2747 9.70999 14.0002L4.01643 8.30637C3.74192 8.03186 3.74192 7.58655 4.01643 7.31204Z"
            fill="inherit"
          />
        </svg>
        <span onClick={Back}>Edit alt text</span>
        <svg
          className="ms-auto fill-orange-500"
          width="16"
          height="16"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_112_2)">
            <path
              d="M14.417 20.3572L13.6357 21.9197L12.0732 22.7009L13.6357 23.4822L14.417 25.0447L15.1982 23.4822L16.7607 22.7009L15.1982 21.9197L14.417 20.3572ZM21.4482 17.2322L20.1465 19.8362L17.542 21.1384L20.1465 22.4407L21.4482 25.0447L22.75 22.4407L25.3545 21.1384L22.75 19.8362L21.4482 17.2322ZM4.26074 10.9822L5.5625 8.37817L8.16699 7.07593L5.5625 5.77368L4.26074 3.16968L2.95898 5.77368L0.354492 7.07593L2.95898 8.37817L4.26074 10.9822ZM0.8125 20.4436L4.95557 24.5867C5.26025 24.8923 5.66016 25.0447 6.06006 25.0447C6.45996 25.0447 6.85986 24.8923 7.16504 24.5867L24.8965 6.85523C25.5068 6.24487 25.5068 5.25562 24.8965 4.64575L20.7534 0.502686C20.4482 0.19751 20.0483 0.0451665 19.6489 0.0451665C19.249 0.0451665 18.8491 0.19751 18.5439 0.502686L0.8125 18.2346C0.202149 18.844 0.202149 19.8337 0.8125 20.4436ZM7.80322 15.1101L10.2891 17.5959L6.06055 21.8245L3.57471 19.3386L7.80322 15.1101Z"
              fill="inherit"
            />
          </g>
          <defs>
            <clipPath id="clip0_112_2">
              <rect
                width="25"
                height="25"
                fill="white"
                transform="translate(0.354492 0.045166)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
      <img
        className="object-contain w-full mx-auto mb-5 h-44"
        src="https://thevanillaroom.co.uk/wp-content/uploads/2023/12/900px-Image-Placeholder.jpg"
        alt="Placeholder"
      />
      <textarea
        className="block w-full px-4 py-2 bg-white border h-40 rounded-md outline-none border-black/20 dark:bg-[#292929] dark:border-white/20 placeholder:text-black/20 dark:placeholder:text-white/20"
        placeholder="Write your alt text for image"
      ></textarea>
    </div>
  );
};

export default EditAlt;

