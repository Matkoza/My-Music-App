package com.example.mymusicapp.service;

import com.example.mymusicapp.model.User;
import com.example.mymusicapp.payload.AuthResponse;
import com.example.mymusicapp.payload.UserUpdateRequest;
import com.example.mymusicapp.repository.UserRepository;
import com.example.mymusicapp.security.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import java.util.List;

@Service
public class UserServiceImplementation implements UserService{
    @Autowired
    private UserRepository userRepository;

    @Autowired
    JwtUtils jwtUtils;

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }
    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    @Override
    public User updateUser(User user) {
        return userRepository.save(user);
    }
    @Override
    public void deleteUser(int user_id) {
        userRepository.deleteById(user_id);
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return (UserDetails) userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("User with that email does not exist"));
    }

    @Override
    public UserDetails loadUserByEmail(String email){
        return loadUserByUsername(email);
    }


    public ResponseEntity<?> updateUser(UserUpdateRequest userUpdateRequest) {
        User user = userRepository.getById(userUpdateRequest.getId());
        user.setName(userUpdateRequest.getName());
        user.setEmail(userUpdateRequest.getEmail());
        User updatedUser = userRepository.save(user);
        AuthResponse response = new AuthResponse(userUpdateRequest.getToken(),
                updatedUser.getId(),
                updatedUser.getName(),
                updatedUser.getSurname(),
                updatedUser.getEmail());
        return ResponseEntity.ok().body(response);
    }

}

