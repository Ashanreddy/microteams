package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "faculty_list")
public class Faculty {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String firstName;
	private String lastName;
	private String email;
	private String phoneNumber;

	private int Experience;
	private String Qualification;
	private String researchPublications;

	private String researchGuidance;

	private String achievements;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getResearchPublications() {
		return researchPublications;
	}

	public void setResearchPublications(String researchPublications) {
		this.researchPublications = researchPublications;
	}

	public String getResearchGuidance() {
		return researchGuidance;
	}

	public void setResearchGuidance(String researchGuidance) {
		this.researchGuidance = researchGuidance;
	}

	public String getAchievements() {
		return achievements;
	}

	public void setAchievements(String achievements) {
		this.achievements = achievements;
	}

	public int getExperience() {
		return Experience;
	}

	public void setExperience(int experience) {
		Experience = experience;
	}

	public String getQualification() {
		return Qualification;
	}

	public void setQualification(String qualification) {
		Qualification = qualification;
	}

	public Faculty() {
		super();
	}

	public Faculty(String firstName, String lastName, String email, String phoneNumber, int Experience,
			String Qualification, String researchPublications, String researchGuidance, String achievements) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.Experience = Experience;
		this.Qualification = Qualification;
		this.researchPublications = researchPublications;
		this.researchGuidance = researchGuidance;
		this.achievements = achievements;
	}

}
