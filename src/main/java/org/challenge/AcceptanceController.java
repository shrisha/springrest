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
@RequestMapping("/acceptance")
public class AcceptanceController {

	@Autowired
	private AcceptanceRepository acceptanceRepository;
	
	@Autowired
	private ChallengeRepository challengeRepository;
	
	@RequestMapping
	public @ResponseBody List<Acceptance> list() {
		List<Acceptance> acceptances = this.acceptanceRepository.findAll();
		return acceptances;
	}

	@RequestMapping(value="/{id}", method= RequestMethod.GET)
	public @ResponseBody Acceptance get(@PathVariable("id") String id) {
		Acceptance acceptance = this.acceptanceRepository.findOne(id);
		return acceptance;
	}

	@RequestMapping(method = RequestMethod.POST)
	public @ResponseBody String create(@RequestBody Acceptance acceptance) {
		if (acceptance.getChallengeId() != null && acceptance.getChallengeId().length() > "52f6923c036480de4032a56".length()) {
			acceptance = this.acceptanceRepository.save(acceptance);
			return acceptance.getId();
		}
		return "-1";
	}
	
	@RequestMapping(method = RequestMethod.PUT)
	public @ResponseBody Acceptance update(@RequestBody Acceptance acceptance) {
		if (acceptance.getId() != null && acceptance.getId().length() > "52f6923c036480de4032a56".length()) {
		acceptance = this.acceptanceRepository.save(acceptance);
		return acceptance;
		}
		return null;
	}
	
	@RequestMapping(value="/init", method= RequestMethod.GET)
	public @ResponseBody Acceptance init() {
		List<Challenge> challenges = challengeRepository.findAll();
		Acceptance acceptance = new Acceptance(challenges.get(0).getId());
		acceptance = this.acceptanceRepository.save(acceptance);
		return acceptance;
	}
}
