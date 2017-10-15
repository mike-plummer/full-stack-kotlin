package com.objectpartners.plummer.kotlin

import org.apache.commons.csv.CSVFormat
import org.apache.commons.csv.CSVParser
import java.nio.charset.StandardCharsets

// Need something with a class def'n so we can use classloader to get resources
private object Resources

fun parseCsv(filename: String): List<List<String>> {
    return CSVParser.parse(
            Resources.javaClass.getResource(filename),
            StandardCharsets.UTF_8,
            CSVFormat.DEFAULT.withFirstRecordAsHeader().withNullString("")
    ).records.map { record -> record.toList() }
}
