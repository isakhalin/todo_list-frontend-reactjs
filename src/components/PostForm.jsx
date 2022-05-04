import React, {useState} from 'react';
import MyInput from "./UI/inputs/MyInput";
import MyButton from "./UI/buttons/MyButton";

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        // console.log({title: title})
        // console.log(bodyInputRef.current.value)
        // const newPost = {
        //     id: Date.now(),
        //     title: post.title,
        //     body: post.body
        // }
        // setPosts([...posts, {...post, id: Date.now()}]);
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);
        setPost({title: '', body: ''});
    };

    return (
        <form>
            {/*Управляемый компонент*/}
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Название поста"
            />

            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Описание поста"
            />

            {/*<input ref={bodyInputRef} type="text"/>*/}
            {/*Неуправляему компонент*/}
            {/*<MyInput*/}
            {/*    ref={bodyInputRef}*/}
            {/*    type="text"*/}
            {/*    placeholder="Описание поста"*/}
            {/*/>*/}
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;