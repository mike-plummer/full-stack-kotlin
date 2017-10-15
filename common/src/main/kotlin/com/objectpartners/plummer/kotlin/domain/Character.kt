package com.objectpartners.plummer.kotlin.domain

data class Character(
        val id: Int,
        val name: String,
        val description: String,
        val house: House?,
        val importance: Int,
        val type: GoodOrBad?,
        val episodeId: Int
) : Resource
