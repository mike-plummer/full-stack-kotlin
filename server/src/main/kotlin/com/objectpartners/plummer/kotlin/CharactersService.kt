package com.objectpartners.plummer.kotlin

import com.objectpartners.plummer.kotlin.domain.Character
import com.objectpartners.plummer.kotlin.domain.House
import org.springframework.stereotype.Component

@Component
open class CharactersService {
    companion object {
        val CHARACTERS: List<Character> = parseCsv("/data.csv")
                .map { values -> Character(
                        values[0].toInt(),
                        values[1],
                        values[2],
                        toHouse(values[3]),
                        values[4].toInt(),
                        null,
                        values[5].toInt()
                ) }

        private fun toHouse(house: String?): House? {
            if (house === null) {
                return null
            }
            return House.valueOf(house.toUpperCase())
        }
    }

    fun getAll(): List<Character> {
        return CHARACTERS
    }
}
