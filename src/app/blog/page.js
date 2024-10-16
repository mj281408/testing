
'use client'
import { useState } from 'react';
import SingleOutBlog from '../common/single-out-blog';
import AddBlog from '../addblog/page';
export default function Blog() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      heading: 'First Blog Post',
      content: 'This is the first blog post. Welcome to our blog!',
      category:'category-1',
      selectedImage:`https://images.pexels.com/photos/10255583/pexels-photo-10255583.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`,
    },
    {
      id: 2,
      heading: 'Second Blog Post',
      content: 'This is the second blog post. Hope you enjoy it!',
      category:'category-1',
      selectedImage:`https://images.pexels.com/photos/21336648/pexels-photo-21336648/free-photo-of-the-eclipse-of-the-sun-is-seen-in-this-black-and-white-photo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`,
    },
    {
      id: 3,
      heading: 'Third Blog Post',
      content: 'This is the third blog post. Happy reading!', 
      category:'category-1',
      selectedImage:`https://images.pexels.com/photos/20777489/pexels-photo-20777489/free-photo-of-australian-shepherd.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`,
    }
  ]);

  const handleAddPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  return (
    <>
      
      <div className="py-24 bg-slate-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {posts.map((post) => (
                <SingleOutBlog key={post.id} post={post}/>
            ))}
          </div>
        </div>
      </div>
      <div>
      <AddBlog onAdd={handleAddPost} />
      </div>
    </>
  );
}
