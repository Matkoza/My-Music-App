package com.example.mymusicapp.service;

import com.example.mymusicapp.model.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface UserService extends UserDetailsService {
    public User saveUser(User user);
    public List<User> getAllUsers();
    public User updateUser(User user);
    public void deleteUser(int user_id);
    public UserDetails loadUserByUsername(String email);
    public UserDetails loadUserByEmail(String email);

}

