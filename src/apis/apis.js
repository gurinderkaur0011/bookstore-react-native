import axios from 'axios';

const BASE_URL = 'http://ec2-65-0-27-49.ap-south-1.compute.amazonaws.com:1337';

export async function getBooksList(offset = 0, limit = 5) {
  return axios
    .get(`${BASE_URL}/api/books?limit=${limit}&offset=${offset}`)
    .then(response => response.data);
}

export async function getBookById(id) {
  return axios(`${BASE_URL}/api/books/${id}`).then(response => response.data);
}
