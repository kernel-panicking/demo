// appfront/src/api/api.js
import axiosInstance from './index'

const axios = axiosInstance

export const getBooks = () => {return axios.get(`http://localhost:8000/api/books/`)}

export const postBook = (bookTitle, bookAuthor, bookDescription) => {return axios.post(`http://localhost:8000/api/books/`, {'title': bookTitle, 'author': bookAuthor, 'description': bookDescription})}
