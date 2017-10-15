package com.objectpartners.plummer.kotlin.validation

import com.objectpartners.plummer.kotlin.domain.Character
import com.objectpartners.plummer.kotlin.domain.GoodOrBad
import com.objectpartners.plummer.kotlin.domain.House

object HOUSE_CATEGORIES {
    val GOOD = listOf(House.STARK)
    val BAD = listOf(House.BOLTON, House.FREY, House.GREYJOY, House.LANNISTER)
}

fun isInvalid(character: Character): Boolean {
    return character.type == GoodOrBad.GOOD && HOUSE_CATEGORIES.BAD.contains(character.house) ||
            character.type == GoodOrBad.BAD && HOUSE_CATEGORIES.GOOD.contains(character.house) ||
            !(1..10).contains(character.importance) ||
            character.episodeId === null ||
            character.name === null ||
            character.id === null ||
            character.importance === null ||
            character.description === null
}
