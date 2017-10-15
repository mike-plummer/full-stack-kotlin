package com.objectpartners.plummer.kotlin.validation

import com.objectpartners.plummer.kotlin.domain.Reason

fun isValidReason(reason: Reason): Boolean {
    return reason.reason.isNotBlank() &&
            (1..10).contains(reason.score)
}
