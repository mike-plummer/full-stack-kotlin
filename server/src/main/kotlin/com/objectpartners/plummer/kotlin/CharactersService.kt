package com.objectpartners.plummer.kotlin

import com.objectpartners.plummer.kotlin.domain.Character
import com.objectpartners.plummer.kotlin.domain.House
import com.objectpartners.plummer.kotlin.validation.CharacterValidator
import org.springframework.stereotype.Component

@Component
open class CharactersService {
    companion object {
        val CHARACTERS: MutableList<Character> = parseCsv("/data.csv")
                .map { values -> Character(
                        values[0].toInt(),
                        values[1],
                        values[2],
                        toHouse(values[3]),
                        values[4].toInt(),
                        null,
                        values[5].toInt()
                ) }
                .toMutableList()

        private fun toHouse(house: String?): House {
            if (house === null) {
                return House.NONE
            }
            return House.valueOf(house.toUpperCase())
        }
    }

    fun getAll(): List<Character> {
        return CHARACTERS.sortedBy { character -> character.episodeId }
    }

    fun update(character: Character) {
        CharacterValidator(character).validate()

        CHARACTERS.removeIf({ c -> c.id == character.id })
        CHARACTERS.add(character)
    }

    fun create(character: Character) {
        CharacterValidator(character).validate()

        CHARACTERS.add(character)
    }
}
