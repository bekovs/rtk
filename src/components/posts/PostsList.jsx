import React from 'react';
import PostCard from './PostCard';

const PostsList = () => {
  return (
    <>
      <h2>Posts</h2>
      <div className='posts__list'>
        <PostCard />
      </div>
    </>
  );
};

export default PostsList;