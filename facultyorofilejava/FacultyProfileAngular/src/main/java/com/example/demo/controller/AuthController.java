package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Faculty;
import com.example.demo.model.User;
import com.example.demo.repository.FacultyRepository;
import com.example.demo.service.AuthService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {
	@Autowired
	private AuthService authService;

	@PostMapping("/register")
	public User Register(@RequestBody User user) {

		return authService.register(user);

	}

	@PostMapping("/login")
	public User login(@RequestBody User user) {

		return authService.login(user);
	}

	@Autowired
	private FacultyRepository facultyrepository;

	@GetMapping("/faculty")
	public List<Faculty> getAllFaculty() {
		return facultyrepository.findAll();
	}

	@PostMapping("/faculty")
	public Faculty createFaculty(@RequestBody Faculty faculty) {
		return facultyrepository.save(faculty);
	}
	@GetMapping("/faculty/{id}")
	public ResponseEntity<Faculty> getFacultyById(@PathVariable Long id){
		Faculty faculty = facultyrepository.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("faculty not exist with id:" +id));
		
		return ResponseEntity.ok(faculty);
	}
	@PutMapping("/faculty/{id}")
	public ResponseEntity<Faculty> updateFaculty(@PathVariable Long id, @RequestBody Faculty facultydetails){
		Faculty faculty = facultyrepository.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("faculty not exist with id:" +id));
		faculty.setFirstName(facultydetails.getFirstName());
		faculty.setLastName(facultydetails.getLastName());
		faculty.setEmail(facultydetails.getEmail());
		faculty.setPhoneNumber(facultydetails.getPhoneNumber());
		faculty.setExperience(facultydetails.getExperience());
		faculty.setQualification(facultydetails.getQualification());
		faculty.setResearchPublications(facultydetails.getResearchPublications());
		faculty.setResearchGuidance(facultydetails.getResearchGuidance());
		faculty.setAchievements(facultydetails.getAchievements());
		Faculty updateFaculty = facultyrepository.save(faculty);
		return ResponseEntity.ok(updateFaculty);
	}
	@DeleteMapping("/faculty/{id}")
	public ResponseEntity<Map<String, Boolean>> DeleyteFaculty(@PathVariable Long id){
		Faculty faculty = facultyrepository.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("faculty not exist with id:" +id));
		facultyrepository.delete(faculty);
		Map<String,Boolean>response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
