package org.challenge;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ChallengeRepository extends MongoRepository<Challenge, String> {

	public List<Challenge> findByQuestion(String question);

}
