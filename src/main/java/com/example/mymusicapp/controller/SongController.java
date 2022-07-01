package com.example.mymusicapp.controller;

import com.example.mymusicapp.model.Song;
import com.example.mymusicapp.service.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/song")
public class SongController {
    @Autowired
    private SongService songService;

    @PostMapping("/add")
    public String add(@RequestBody Song song){
        songService.saveSong(song);
        return "New song is added!";
    }

    @GetMapping("/getAll")
    public List<Song> getAllSongs(){
        return songService.getAllSongs();
    }

    @PutMapping("/update")
    public String update(@RequestBody Song song){
        songService.updateSong(song);
        return "Song updated";
    }
    @DeleteMapping("/delete/{song_id}")
    public void deleteSong(@PathVariable("song_id") int song_id){
        songService.deleteSong(song_id);
    }
}
