'use client'
import { useState } from "react";

export default function AddBlog({onAdd  }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  let newDate = new Date()
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  
  const handleHeadingChange = (event) => {
    setCreatedAt(newDate.getDate() + newDate.getMonth() + newDate.getFullYear())
    setHeading(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.textContent);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      heading,
      content,
      selectedImage,
      category ,
      createdAt,
    };
    await onAdd(newPost);
    setHeading('');
    setContent('');
    setSelectedImage(null);
    setCategory([]);
    console.log("createdAt",createdAt)
    const contentEditableDiv = document.querySelector('.content-editable');
    contentEditableDiv.textContent = '';
  };
  return (
    <>
      <div className="py-24 bg-slate-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-5">
            <div className="relative">
              <h2 className="text-3xl mb-3 font-bold text-blue-950 absolute left-4 bg-slate-100 -top-[18px]">Preview:</h2>
              <div className="border h-full border-blue-950 rounded-xl p-5">
                <>
                  <img className="w-full" src={selectedImage ? `${selectedImage}` : `https://dummyimage.com/600x400/000/fff`} alt="Selected" />
                  <h1 className="text-5xl font-bold">{heading}</h1>
                  <p>{content}</p>
                </>
              </div>
            </div>
            <form className="mx-auto"  onSubmit={handleSubmit}>
              <input id="inputfile" className="hidden" type="file" onChange={handleImageChange} accept="image/png, image/gif, image/jpeg" />
              <label className="inline-block cursor-pointer" htmlFor="inputfile">
                <svg width="60" className="inline-block border-2  border-blue-950 rounded-full" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 30H45" className="stroke-blue-950" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 30H45" className="stroke-blue-950" stroke="black" strokeOpacity="0.2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M30 45V15" className="stroke-blue-950" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M30 45V15" className="stroke-blue-950" stroke="black" strokeOpacity="0.2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="ps-2 text-blue-950">Blog Banner</span>
              </label>
              <select id="category" value={category} onChange={handleCategoryChange} className="block border mt-5 px-2  border-blue-950 rounded-xl w-full py-2 bg-transparent outline-none">
                <option value="">Select category...</option>
                <option value="technology">Technology</option>
                <option value="travel">Travel</option>
                <option value="food">Food</option>
                {/* Add more categories as needed */}
              </select>
              <input value={heading} onChange={handleHeadingChange} className="block w-full py-4 bg-transparent outline-none text-5xl" autoFocus={true} placeholder="Blog Heading ..." />
              <div onInput={handleContentChange} className={`min-h-96 content-editable outline-none w-full py-4 bg-transparent after:absolute ${content ? ``:`after:content-['Blog_Content_...']`}`} contentEditable></div>
              <button type="submit" className="bg-blue-950 text-white px-5 py-3 rounded-xl my-5 block">Publish</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
