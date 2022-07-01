import axios from 'axios';

//${API_URL}
const API_URL = 'http://localhost:8080'
const GET_SONGS_REST_API_URL = 'http://localhost:8080/song/getAll';
const ADD_SONGS_REST_API_URL = 'http://localhost:8080/song/addSong';

const getSongs = () => {
    return axios.get(GET_SONGS_REST_API_URL);
}

const addSong = () => {
    try {
        return axios.get(ADD_SONGS_REST_API_URL);
    } catch (error) {
        console.log(error);
    }
}

export{getSongs, addSong};