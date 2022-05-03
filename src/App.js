import React, {useRef, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/buttons/MyButton";
import MyInput from "./components/UI/inputs/MyInput";
import classes from "./components/UI/inputs/MyInput.module.css";
// import Counter from "./components/counter";
// import ClassCounter from "./components/ClassCounter";


function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Тут должно быть название поста про JS', body: 'Тут должно быть описание поста'},
        {id: 2, title: 'Тут должно быть название поста про JS', body: 'Тут должно быть описание поста'},
        {id: 3, title: 'Тут должно быть название поста про JS', body: 'Тут должно быть описание поста'},
        {id: 4, title: 'Тут должно быть название поста про JS', body: 'Тут должно быть описание поста'}
    ])

    // const [likes, setLikes] = useState(0)
    // const [value, setValue] = useState('Some string')
    // const [title, setTitle] = useState('This\'s New App')

    // function increment() {
    //     setLikes(likes + 1)
    // }
    //
    // function decrement() {
    //     setLikes(likes - 1)
    // }

    // function editTitle(e) {
    //     // console.log(e.target.innerText)
    //     setTitle(value)
    // }

    const [post, setPost] = useState({title: '', body: ''})

    // const [title, setTitle] = useState('');
    // const [body, setBody] = useState('');

    // const bodyInputRef = useRef();

    const addNewPost = (e) => {
        e.preventDefault()
        // console.log({title: title})
        // console.log(bodyInputRef.current.value)
        // const newPost = {
        //     id: Date.now(),
        //     title: post.title,
        //     body: post.body
        // }
        setPosts([...posts, {...post, id: Date.now()}]);
        setPost({title: '', body: ''});
    };

    return (
        <div className="App">
            {/*<h1>{title}</h1>*/}
            {/*<h2>Total likes: {likes} </h2>*/}
            {/*<h2>{value}</h2>*/}
            {/*<input*/}
            {/*    type="text"*/}
            {/*    value={value}*/}
            {/*    onChange={event => setValue(event.target.value)}*/}
            {/*/>*/}
            {/*<button onClick={increment}>Increment</button>*/}
            {/*<button onClick={decrement}>Decrement</button>*/}
            {/*<button onClick={editTitle}>Edit Title</button>*/}
            {/*<Counter/>*/}
            {/*<hr/>*/}
            {/*<ClassCounter/>*/}
            {/*<hr/>*/}
            {/*<PostItem post={}/>*/}
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
            <PostList posts={posts} title='Список постов про JavaScript'/>
        </div>
    );
}

export default App;
