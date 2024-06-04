package com.example.demo.service;

import java.security.SecureRandom;
import java.util.Base64;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@Service
public class AuthService {
	@Autowired
    private UserRepository userRepository;

    public AuthService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}

	private static final SecureRandom secureRandom = new SecureRandom();
    private static final Base64.Encoder base64enocder = Base64.getUrlEncoder();


    public User register(User user) {
        
        if(checkUserExist(user)== true)
            return null;

        user.setToken(generateToken());

        return userRepository.save(user);

    }

    private String generateToken() {

        byte[] token = new byte[24];
        secureRandom.nextBytes(token);
        return base64enocder.encodeToString(token);

    }

    private boolean checkUserExist(User user) {
        User existingUser = userRepository.findById(user.getUsername()).orElse(null);

        if(existingUser == null)
            return false;
        return true;
    }

    public User login(User user) {
        User existingUser = userRepository.findById(user.getUsername()).orElse(null);

        if(existingUser != null && existingUser.getUsername().equals(user.getUsername()) &&
                existingUser.getPassword().equals(user.getPassword()) &&
                existingUser.getRole().equals(user.getRole())) {
            existingUser.setPassword("");
            return existingUser;
        }

        return null;

    }
}
