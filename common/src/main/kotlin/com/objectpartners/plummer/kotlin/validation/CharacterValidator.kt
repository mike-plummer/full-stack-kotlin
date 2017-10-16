package com.objectpartners.plummer.kotlin.validation

import com.objectpartners.plummer.kotlin.domain.Character

class CharacterValidator(private val character: Character) {
    fun validate() {
        if (!(1..10).contains(character.importance)) {
            throw Exception("Importance must be between 1 and 10, inclusive")
        } else if (character.episodeId <= 0) {
            throw Exception("Episode ID must be a positive integer")
        } else if (character.id <= 0) {
            throw Exception("ID must be a positive integer")
        } else if (character.description.isBlank()) {
            throw Exception("Description must be provided")
        }else if (character.name.isBlank()) {
            throw Exception("Name must be provided")
        }
    }
}
