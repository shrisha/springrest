package org.challenge;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.authentication.UserCredentials;
import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.SimpleMongoDbFactory;

import com.mongodb.Mongo;
import com.mongodb.ServerAddress;

@Configuration
public class DataConfig {

	@Bean
	public MongoDbFactory mongoDbFactory() throws Exception {
		UserCredentials userCredentials = new UserCredentials("dbuser", "dbpass");
		ServerAddress serverAddress = new ServerAddress("troup.mongohq.com", 10087);
		return new SimpleMongoDbFactory(new Mongo(serverAddress), "app22039103",
				userCredentials);
	}

	@Bean
	public MongoTemplate mongoTemplate() throws Exception {
		return new MongoTemplate(mongoDbFactory());
	}
}
