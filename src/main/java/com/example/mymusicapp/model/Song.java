package com.example.mymusicapp.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import javax.persistence.*;

@Entity
@Table(name = "song")
public class Song {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "song_name")
    private String song_name;
    @Column(name = "artist_name")
    private String artist_name;
    @Column(name = "song_url")
    private String song_url;
    @Column(name = "rating")
    private int rating;
    @Column(name = "favorite")
    private boolean favorite;
    @JsonFormat(pattern = "yyyy-MM-dd", shape = JsonFormat.Shape.STRING)
    @Column(name = "date_of_entry")
    private String date_of_entry;
    @JsonFormat(pattern = "yyyy-MM-dd", shape = JsonFormat.Shape.STRING)
    @Column(name = "date_of_last_edit")
    private String date_of_last_edit;
    @Column(name = "category_name")
    private String category_name;
    @Column(name = "category_id")
    private String category_id;

    public String getCategory_id() {
        return category_id;
    }

    public void setCategory_id(String category_id) {
        this.category_id = category_id;
    }

    public Song(){
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSong_name() {
        return song_name;
    }

    public void setSong_name(String song_name) {
        this.song_name = song_name;
    }

    public String getArtist_name() {
        return artist_name;
    }

    public void setArtist_name(String artist_name) {
        this.artist_name = artist_name;
    }

    public String getSong_url() {
        return song_url;
    }

    public void setSong_url(String song_url) {
        this.song_url = song_url;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public boolean isFavorite() {
        return favorite;
    }

    public void setFavorite(boolean favorite) {
        this.favorite = favorite;
    }

    public String getDate_of_entry() {
        return date_of_entry;
    }

    public void setDate_of_entry(String date_of_entry) {
        this.date_of_entry = date_of_entry;
    }

    public String getDate_of_last_edit() {
        return date_of_last_edit;
    }

    public void setDate_of_last_edit(String date_of_last_edit) {
        this.date_of_last_edit = date_of_last_edit;
    }

    public String getCategory_name() {
        return category_name;
    }

    public void setCategory_name(String category_name) {
        this.category_name = category_name;
    }

}

