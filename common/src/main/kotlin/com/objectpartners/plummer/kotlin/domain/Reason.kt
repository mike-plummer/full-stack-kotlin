package com.objectpartners.plummer.kotlin.domain

data class Reason(
        val text: String,
        val score: Int,
        val type: LoveOrHate
) : Resource
