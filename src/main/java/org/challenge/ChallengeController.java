package org.challenge;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/challenge")
public class ChallengeController {

	@Autowired
	private ChallengeRepository challengeRepository;
	
	@RequestMapping
	public @ResponseBody List<Challenge> list() {
		List<Challenge> challenges = this.challengeRepository.findAll();
		return challenges;
	}

	@RequestMapping(value="/{id}", method= RequestMethod.GET)
	public @ResponseBody Challenge get(@PathVariable("id") String id) {
		Challenge challenge = this.challengeRepository.findOne(id);
		return challenge;
	}

	@RequestMapping(method = RequestMethod.POST)
	public @ResponseBody String create(@RequestBody Challenge challenge) {
		challenge = this.challengeRepository.save(challenge);
		return challenge.getId();
	}
	
	@RequestMapping(method = RequestMethod.PUT)
	public @ResponseBody Challenge update(@RequestBody Challenge challenge) {
		challenge = this.challengeRepository.save(challenge);
		return challenge;
	}
	
	@RequestMapping(value="/init", method= RequestMethod.GET)
	public @ResponseBody Challenge init() {
		Challenge challenge = new Challenge("Drink 3 Large Coffees in 5 Minutes");
		challenge = this.challengeRepository.save(challenge);
		return challenge;
	}
}
