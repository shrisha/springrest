package org.challenge;

import org.springframework.data.annotation.Id;

public class Acceptance {

	@Id
	private String id;
	
	private String challengeId;
	
	private String contentUrl;
	
	private String contentType;
	
	private String notes;
	
	/**
	 * x, y as doubles
	 */
	private double[] location;
	
	private int rating;

	public Acceptance() {}
	
	public Acceptance(String challengeId) {
		this.challengeId = challengeId;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getChallengeId() {
		return challengeId;
	}

	public void setChallengeId(String challengeId) {
		this.challengeId = challengeId;
	}

	public String getContentUrl() {
		return contentUrl;
	}

	public void setContentUrl(String contentUrl) {
		this.contentUrl = contentUrl;
	}

	public String getContentType() {
		return contentType;
	}

	public void setContentType(String contentType) {
		this.contentType = contentType;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public double[] getLocation() {
		return location;
	}

	public void setLocation(double[] location) {
		this.location = location;
	}
	
}
