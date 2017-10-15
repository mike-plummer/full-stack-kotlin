package com.objectpartners.plummer.kotlin

import com.objectpartners.plummer.kotlin.domain.LoveOrHate
import com.objectpartners.plummer.kotlin.domain.Reason
import org.springframework.stereotype.Component

@Component
open class ReasonsService {
    companion object {
        val REASONS: List<Reason> = parseCsv("/data.csv")
                .map { values -> Reason(values[0], values[1].toInt(), LoveOrHate.valueOf(values[2]) ) }
    }

    fun getAllReasons(): List<Reason> {
        return REASONS
    }
}
