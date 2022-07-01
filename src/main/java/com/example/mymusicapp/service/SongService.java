package com.example.mymusicapp.service;

import com.example.mymusicapp.model.Category;
import com.example.mymusicapp.model.Song;

import java.util.List;

public interface SongService {
    public Song saveSong(Song song);
    public List<Song> getAllSongs();
    public Song updateSong(Song song);
    public void deleteSong(int song_id);
    public Category updateCategory(Category category);
}
