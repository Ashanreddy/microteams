package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Faculty;
import com.example.demo.repository.FacultyRepository;

@RestController
@RequestMapping("/api/v1")
public class FacultyController {
	@Autowired
	private FacultyRepository facultyrepository;
	@GetMapping("/faculty")
	public List<Faculty> getAllFaculty(){
		return facultyrepository.findAll();
	}
}
