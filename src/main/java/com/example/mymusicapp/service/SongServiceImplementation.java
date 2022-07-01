package com.example.mymusicapp.service;

import com.example.mymusicapp.model.Category;
import com.example.mymusicapp.model.Song;
import com.example.mymusicapp.repository.CategoryRepository;
import com.example.mymusicapp.repository.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SongServiceImplementation implements SongService{
    @Autowired
    private SongRepository songRepository;
    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Song saveSong(Song song) {
        return songRepository.save(song);
    }
    @Override
    public List<Song> getAllSongs() {
        return songRepository.findAll();
    }

    @Override
    public Category updateCategory(Category category) {
        return categoryRepository.save(category);
    }
    @Override
    public void deleteSong(int song_id) {
        songRepository.deleteById(song_id);
    }
    @Override
    public Song updateSong(Song song) {
        return songRepository.save(song);
    }

//    @Override
//    public List<Category> getAllCategories(){
//        return this.categoryRepository.findAll();
//    }

//    public void updateCategoryId(Category category){
//        return this.categoryRepository.save(category.getId())
//}


}
