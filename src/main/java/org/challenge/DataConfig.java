package org.challenge;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.SimpleMongoDbFactory;

import com.mongodb.MongoURI;

@Profile("heroku")
@Configuration
public class DataConfig {

	@Bean
	public MongoDbFactory mongoDbFactory() throws Exception {
		MongoURI mongoURI = new MongoURI(System.getenv("MONGOHQ_URL"));
		return new SimpleMongoDbFactory(mongoURI);
	}

	@Bean
	public MongoTemplate mongoTemplate() throws Exception {
		return new MongoTemplate(mongoDbFactory());
	}
}
