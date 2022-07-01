package com.example.mymusicapp.controller;

import com.example.mymusicapp.payload.AuthRequest;
import com.example.mymusicapp.payload.RegisterRequest;
import com.example.mymusicapp.service.AuthService;
import com.example.mymusicapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;

@RestController
//@CrossOrigin
@RequestMapping("/api")
public class AuthController {

    @Autowired
    AuthService authenticationService;

    @Autowired
    UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest authenticationRequest) throws InvalidKeySpecException, NoSuchAlgorithmException {
        return ResponseEntity.ok(authenticationService.login(authenticationRequest));
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest) {
        return authenticationService.register(registerRequest);
    }



}