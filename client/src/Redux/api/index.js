import axios from 'axios';
const url = 'http://localhost:5000';

export const fetchPosts = (id) => axios.get(`${url}/chat/${id}`);
export const createPost = (id,post) => axios.post(`${url}/chat/${id}`, post);
export const createCallPI = (data)=> axios.post(`${url}/call`,data)
export const createEmailPI = (data)=> axios.post(`${url}/email`,data)
export const createSME = (data)=> axios.post(`${url}/addSME`,data)
// export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
