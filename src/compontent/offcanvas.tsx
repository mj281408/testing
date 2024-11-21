import React from "react";

interface OffcanvasProps {
  isOpen: boolean;
  isLeft: boolean;
  children: React.ReactNode;
}

const Offcanvas: React.FC<OffcanvasProps> = ({
  isOpen,
  isLeft,
  children,
}) => {
  return (
    <div
      className={`fixed top-0 ${isLeft?'right-0 border-l':'left-0 border-r'} w-[300px] h-full bg-white shadow-lg z-10 ${isLeft?isOpen?"translate-x-0" : "translate-x-full":isOpen?"translate-x-0" : "-translate-x-full"}`}
      style={{
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <div className="">{children}</div>
    </div>
  );
};

export default Offcanvas;
