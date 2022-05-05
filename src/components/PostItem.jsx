import React from 'react';
import MyButton from "./UI/buttons/MyButton";

const PostItem = (props) => {
    // console.log(props.post)
    // let [item, number, value] = {props};
    // console.log(props.post.title)
    // console.log(item)

    // const removeTargetPost = (e) => {
    //     console.log(e)
    //     // remove(e.target.id)
    // };

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
                <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;
