import axios from "axios";
const ADD_SONG_API_URL = 'http://localhost:8080/song/add';

const addSong = (song_name, artist_name, song_url, rating, favorite, date_of_entry, date_of_last_edit, category_name, category_id ) => {
  return axios.post(ADD_SONG_API_URL, {
    song_name,
    artist_name,
    song_url,
    rating,
    favorite,
    date_of_entry,
    date_of_last_edit,
    category_name,
    category_id
  });
};

export default {
  addSong
};