export default function SingleOutBlog({post }) {
    return(
        <>
             <div className="bg-white rounded-xl overflow-hidden" >
              <a href="#" className=" w-full h-[400px] overflow-hidden block relative">
                <img className="h-full w-full object-cover" src={post.selectedImage} />
                <p className="absolute top-2 right-2 bg-slate-100 px-4 capitalize py-2 rounded text-blue-950">{post.category}</p>
              </a>
              <div className="p-3">
                <h2 className="text-2xl text-blue-950 font-semibold">{post.heading}</h2>
                <ul className="flex justify-between">
                  <li>{post.createdAt}</li>
                  <li className="text-blue-950 font-bold"><a href="#">Read More..</a></li>
                </ul>
              </div>
            </div>
        </>
    )
}