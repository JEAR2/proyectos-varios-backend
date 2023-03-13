package com.example.adapters;

import com.example.models.Person;
import com.example.models.gateway.PersonRepository;
import reactor.core.publisher.Mono;

public class MongoPersonRepository implements PersonRepository {

    private final MongoRepository mongoRepository;

    public MongoPersonRepository(MongoRepository mongoRepository) {
        this.mongoRepository = mongoRepository;
    }

    @Override
    public Mono<Person> save(Person person) {
        PersonDocument personDocument = new PersonDocument();
        personDocument.setId(person.getId());
        personDocument.setName(person.getName());
        personDocument.setAge(person.getAge());
        return mongoRepository.save(personDocument).map(personD->{
            var personM = new Person();
            personM.setId(personD.getId());
            personM.setName(personD.getName());
            personM.setAge(personD.getAge());
            return personM;
        });
    }
}
