import React, {useRef, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/buttons/MyButton";
import MyInput from "./components/UI/inputs/MyInput";
import classes from "./components/UI/inputs/MyInput.module.css";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
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

    // const [title, setTitle] = useState('');
    // const [body, setBody] = useState('');

    // const bodyInputRef = useRef();

    const [selectedSort, setSelectedSort] = useState('');

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    //получаем post из дочернего компонента
    const removePost = (post) => {
        setPosts(posts.filter(e => e.id !== post.id));
    }

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
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <MySelect
                value={selectedSort}
                onChange={sort => setSelectedSort(sort)}
                options={
                    [
                        {value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По описанию'},
                        {value: 'value3', name: 'По дате'},
                    ]
                }
                defaultValue='Сортировка по'
            />

            {posts.length
                ?
                <PostList posts={posts} remove={removePost} title='Список постов про JavaScript'/>
                :
                <h3 style={{textAlign: 'center', color: 'red'}}>
                    На данный момент нет ни одной задачи, либо мы о них просто не знаем.
                </h3>
            }
        </div>
    );
}

export default App;
