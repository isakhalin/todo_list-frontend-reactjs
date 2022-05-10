import React, {useEffect, useMemo, useRef, useState} from "react";
// import axios from 'axios'
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/buttons/MyButton";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import MyLoader from "./components/UI/Loader/MyLoader";
import {useFetching} from "./hooks/useFetching";
// import MyInput from "./components/UI/inputs/MyInput";
// import classes from "./components/UI/inputs/MyInput.module.css";
// import MySelect from "./components/UI/select/MySelect";
// import {findRenderedComponentWithType} from "react-dom/test-utils";
// import Counter from "./components/counter";
// import ClassCounter from "./components/ClassCounter";

// ЗАКЛАДКА: 1:52:50

function App() {

    // const [posts, setPosts] = useState([
    //     {id: 1, title: 'Тут должно быть название поста 02', body: 'Тут должно быть описание поста 03'},
    //     {id: 2, title: 'Тут должно быть название поста 01', body: 'Тут должно быть описание поста 04'},
    //     {id: 3, title: 'Тут должно быть название поста 04', body: 'Тут должно быть описание поста 02'},
    //     {id: 4, title: 'Тут должно быть название поста 03', body: 'Тут должно быть описание поста 01'}
    // ])

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    // const [isPostLoading, setIsPostsLoading] = useState(false);
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
    //
    // function editTitle(e) {
    //     // console.log(e.target.innerText)
    //     setTitle(value)
    // }
    //
    // const [title, setTitle] = useState('');
    // const [body, setBody] = useState('');
    // const bodyInputRef = useRef();
    // const [selectedSort, setSelectedSort] = useState('');
    // const [searchQuery, setSearchQuery] = useState('');
    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const posts = await PostService.getAll();
        setPosts(posts)
    })

    useEffect(fetchPosts, []);

    // const sortPosts = (sort) => {
    //     setSelectedSort(sort);
    //     //Функция localeCompare используется для сравнения строк
    // };

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
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
            <button onClick={fetchPosts}>Get Posts</button>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <MyButton
                style={{marginTop: '10px'}}
                onClick={() => setModal(true)}
            >
                Добавить пост
            </MyButton>

            {/*<hr style={{margin: '15px 0'}}/>*/}
            <PostFilter filter={filter} setFilter={setFilter}/>

            {isPostLoading
                ?
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><MyLoader/></div>
                :
                <PostList posts={sortedAndSearchedPosts} remove={removePost} title='Список постов про JavaScript'/>
            }


        </div>
    );
}

export default App;
