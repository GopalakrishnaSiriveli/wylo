import React from 'react';
import { useSelector } from 'react-redux';
import PostItem from './PostItems';
import './post.css'

const PostsDisplay = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <div className='container'> 
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsDisplay;
