package com.example.models.gateway;

import com.example.models.Person;
import reactor.core.publisher.Mono;

public interface PersonRepository {

    Mono<Person> save(Person person);
}
