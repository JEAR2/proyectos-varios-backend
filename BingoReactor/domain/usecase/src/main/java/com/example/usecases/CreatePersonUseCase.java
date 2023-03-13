package com.example.usecases;

import com.example.models.Person;
import com.example.models.gateway.PersonRepository;
import reactor.core.publisher.Mono;

import java.util.function.Function;

public class CreatePersonUseCase implements Function<Person, Mono<Person>> {
    private final PersonRepository personRepository;

    public CreatePersonUseCase(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    @Override
    public Mono<Person> apply(Person person) {
        return personRepository.save(person);
    }
}
