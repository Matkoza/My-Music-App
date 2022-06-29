package com.example.mymusicapp.controller;

import com.example.mymusicapp.model.User;
import com.example.mymusicapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public String add(@RequestBody User user){
        userService.saveUser(user);
        return "New user is added!";
    }

    @GetMapping("/getAll")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @PutMapping("/update")
    public String update(@RequestBody User user){
        userService.updateUser(user);
        return "User updated";
    }
    @DeleteMapping("/delete/{user_id}")
    public void deleteSong(@PathVariable("user_id") int user_id){
        userService.deleteUser(user_id);
    }
}
