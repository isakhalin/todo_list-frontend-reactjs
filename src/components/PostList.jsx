import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {

    // let posts = props.posts;

    return (
        <div>
            <h1 className="posts__header">
                {title}
            </h1>
            {posts.map((post, idx) =>
                <PostItem remove={remove} number={idx + 1} post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;
