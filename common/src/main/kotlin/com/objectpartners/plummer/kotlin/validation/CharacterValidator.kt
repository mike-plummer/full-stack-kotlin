package com.objectpartners.plummer.kotlin.validation

import com.objectpartners.plummer.kotlin.domain.Character
import com.objectpartners.plummer.kotlin.domain.GoodOrBad
import com.objectpartners.plummer.kotlin.domain.House

class CharacterValidator(private val character: Character) {
    companion object {
        val GOOD = listOf(House.STARK)
        val BAD = listOf(House.BOLTON, House.FREY, House.GREYJOY, House.LANNISTER)
    }

    fun validate() {
        if (character.type == GoodOrBad.GOOD && BAD.contains(character.house)) {
            throw Exception("Nobody from house ${character.house} can be good")
        } else if (character.type == GoodOrBad.BAD && GOOD.contains(character.house)) {
            throw Exception("Nobody from house ${character.house} can be bad")
        } else if (!(1..10).contains(character.importance)) {
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
