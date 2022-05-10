// Этот компонент отвечает за сортировку и фильтрацию постов. Возвращает список постов.

import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            // console.log('отработала сортировка')
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts;
    }, [sort, posts]);

    return sortedPosts;
};

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort)
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(el => el.title.toLowerCase().includes(query))
    }, [query, sortedPosts])

    return sortedAndSearchedPosts;
};