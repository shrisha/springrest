package org.challenge;

import org.springframework.data.annotation.Id;

public class Challenge {

	@Id
	private String id;

	private String question;
	private String answer;

	public Challenge() {
	}

	
	public Challenge(String question, String answer) {
		this.question = question;
		this.answer = answer;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	
}
