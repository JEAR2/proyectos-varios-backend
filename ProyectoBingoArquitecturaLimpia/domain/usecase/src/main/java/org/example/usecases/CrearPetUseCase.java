package org.example.usecases;

import org.example.model.Pet;
import reactor.core.publisher.Mono;
import java.util.function.Function;

public class CrearPetUseCase implements Function<Pet,Mono<Pet>> {
    @Override
    public Mono<Pet> apply(Pet pet) {
        return null;
    }
}
