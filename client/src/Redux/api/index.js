import axios from 'axios';
const url = 'http://localhost:5000';

export const fetchPosts = (id) => axios.get(`${url}/chat/${id}`);
export const createPost = (id,post) => axios.post(`${url}/chat/${id}`, post);
export const likePost = (id) => axios.patch(`${url}/chat/${id}`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);