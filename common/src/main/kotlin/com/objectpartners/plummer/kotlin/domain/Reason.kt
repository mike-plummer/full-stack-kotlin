package com.objectpartners.plummer.kotlin.domain

data class Reason(
        val reason: String,
        val score: Int,
        val type: LoveOrHate
) : Resource
