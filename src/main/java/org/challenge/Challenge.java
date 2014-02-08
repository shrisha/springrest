package org.challenge;

import org.springframework.data.annotation.Id;

public class Challenge {

	@Id
	private String id;

	private String description;
	private int rating;

	public Challenge() {
	}
	
	public Challenge(String description) {
		super();
		this.description = description;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}
	
}
