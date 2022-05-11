// Компонент загружает список постов с сервера.

import axios from 'axios';

export default class PostService {
    static async getAll() {
            const response = await axios.get('https://1jsonplaceholder.typicode.com/posts');
            return response.data;
    }
}