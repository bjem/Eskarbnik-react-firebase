import React from 'react';
import PostSummary from './PostSummary';

const PostList = ({posts, deletePost}) => {
    return (
        <div>
            { posts && posts.map(post =>{
                return (
                    <PostSummary deletePost={deletePost} post={post} key={post.id} />
                )
            })}
        </div>
    )
}

export default PostList;