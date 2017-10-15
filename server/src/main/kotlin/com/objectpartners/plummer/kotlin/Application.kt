package com.objectpartners.plummer.kotlin

import com.objectpartners.plummer.kotlin.domain.Resource
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication

@SpringBootApplication
open class Application

fun main(args: Array<String>) {
    SpringApplication.run(Application::class.java)

    val dto = Resource("")
}
