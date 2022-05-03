import React from 'react';

const PostItem = (props) => {
    // console.log(props.post)
    // let [item, number, value] = {props};
    // console.log(props.post.title)
    // console.log(item)

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                {/*<button>Редактировать</button>*/}
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;
