import React from 'react';
import PostItem from "./PostItem";
import {TransitionGroup, CSSTransition} from 'react-transition-group'

const PostList = ({posts, title, remove}) => {

    if (!posts.length) {
        return (
            <h3 style={{textAlign: 'center', color: 'red'}}>
                На данный момент нет ни одной задачи, либо мы о них просто не знаем.
            </h3>
        )
    }

    return (
        <div>
            <h1 className="posts__header">
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((post, idx) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames='post'
                    >
                        <PostItem remove={remove} number={idx + 1} post={post}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;
