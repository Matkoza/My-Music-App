import styles from "./Forms.module.css"
import { Link } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import SongService from "../utils/SongService";
import { useState, useRef } from "react";

function AddSongForm() {
  const form = useRef();
  const checkBtn = useRef();

  const [song_name, setSongName] = useState("");
  const [artist_name, setArtistName] = useState("");
  const [song_url, setSongUrl] = useState("");
  const [rating, setRating] = useState("");
  const [favorite, setFavorite] = useState(false);
  const [date_of_entry, setDateOfEntry] = useState("");
  const [date_of_last_edit, setDateOfLastEdit] = useState("");
  const [category_name, setCategoryName] = useState("");
  const [category_id, setCategoryId] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeSongName = (e) => {
    const songName = e.target.value;
    setSongName(songName);
  };

  const onChangeArtistName = (e) => {
      const artist = e.target.value;
      setArtistName(artist);
    };

  const onChangeSongUrl = (e) => {
    const songUrl = e.target.value;
    setSongUrl(songUrl);
  };

  const onChangeRating = (e) => {
    const rating = e.target.value;
    setRating(rating);
  };
  const onChangeFavorite = (e) => {
    const favorite = e.target.value;
    setFavorite(favorite);
  };
  const onChangeDateOfEntry = (e) => {
    const entryDate = e.target.value;
    setDateOfEntry(entryDate);
  };
  const onChangeDateOfLastEdit = (e) => {
    const editDate = e.target.value;
    setDateOfLastEdit(editDate);
  };
  const onChangeCategoryName = (e) => {
    const categoryName = e.target.value;
    setCategoryName(categoryName);
  };
  const onChangeCategoryId = (e) => {
    const categoryId = e.target.value;
    setCategoryId(categoryId);
  };

  const handleSong = (e) => {
  
    if (checkBtn.current.context._errors.length === 0) {
      SongService.add(song_name, artist_name, song_url, rating, favorite, date_of_entry, date_of_last_edit, category_name, category_id).then(
        (response) => {
          setMessage(response.data);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
    <Form className={styles.formContainer} onSubmit={handleSong} ref={form}>
      <div className={styles.formTitle}>
        <p>Add Song</p>
      </div>
      <div className={styles.formSection}>
        <p>Song Name</p>
        <Input 
          className={styles.formInput}
          type="text"
          name="song_name"
          value={song_name}
          onChange={onChangeSongName}
          //validations={[Validations.required, Validations.validName]}
        />
      </div>
      <div className={styles.formSection}>
        <p>Artist Name</p>
        <Input 
          className={styles.formInput}
          type="text"
          name="artist_name"
          value={artist_name}
          onChange={onChangeArtistName}
          //validations={[Validations.required, Validations.validSurname]}
        />
      </div>
      <div className={styles.formSection}>
        <p>Song Url</p>
        <Input 
          className={styles.formInput}
          type="text"
          name="song_url"
          value={song_url}
          onChange={onChangeSongUrl}
          //validations={[Validations.required, Validations.validEmail]}
        />
      </div>
      <div className={styles.formSection}>
        <p>Rating</p>
        <Input 
          className={styles.formInput}
          type="text"
          name="rating"
          value={rating}
          onChange={onChangeRating}
          //validations={[Validations.required, Validations.validPassword]}
        />
      </div>
      <div className={styles.formSection}>
        <p>Favorite</p>
        <Input 
          className={styles.formInput}
          type="checkbox"
          name="favorite"
          value={favorite}
          onChange={onChangeFavorite}
          //validations={[Validations.required, Validations.validPassword]}
        />
      </div>
      <div className={styles.formSection}>
        <p>Date of Entry</p>
        <Input 
          className={styles.formInput}
          type="text"
          name="date_of_entry"
          value={date_of_entry}
          onChange={onChangeDateOfEntry}
          //validations={[Validations.required, Validations.validPassword]}
        />
      </div>
      <div className={styles.formSection}>
        <p>Date of Last Edit</p>
        <Input 
          className={styles.formInput}
          type="text"
          name="date_of_last_edit"
          value={date_of_last_edit}
          onChange={onChangeDateOfLastEdit}
          //validations={[Validations.required, Validations.validPassword]}
        />
      </div>
      <div className={styles.formSection}>
        <p>Category Name</p>
        <Input 
          className={styles.formInput}
          type="text"
          name="category_name"
          value={category_name}
          onChange={onChangeCategoryName}
          //validations={[Validations.required, Validations.validPassword]}
        />
      </div>
      <div className={styles.formSection}>
        <p>Category Id</p>
        <Input 
          className={styles.formInput}
          type="text"
          name="category_id"
          value={category_id}
          onChange={onChangeCategoryId}
          //validations={[Validations.required, Validations.validPassword]}
        />
      </div>
      <CheckButton className={styles.formSubmitButton} ref={checkBtn}> Add Song </CheckButton>
    </Form>
  );
}

export default AddSongForm;