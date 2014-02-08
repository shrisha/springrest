package org.challenge;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface AcceptanceRepository extends MongoRepository<Acceptance, String> {
	public List<Acceptance> findByChallengeId(String challengeId);
}
