package com.example.adapters;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface MongoRepository extends ReactiveCrudRepository<PersonDocument,String> {

}
