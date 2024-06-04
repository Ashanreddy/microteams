package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity

public class User {
	@Id
	private String username;

	private String name;

	private String password;
	private String role;
	private String token;

	public User() {
		super();
	}

	public User(String name, String password, String role, String token) {
		super();
		this.name = name;
		this.password = password;
		this.role = role;
		this.token = token;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

}
