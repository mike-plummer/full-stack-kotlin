package com.objectpartners.plummer.kotlin

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.Bean
import org.springframework.web.cors.CorsConfiguration

@SpringBootApplication
open class Application {
    @Bean
    open fun corsConfiguration(): CorsConfiguration {
        val config = CorsConfiguration()
        config.applyPermitDefaultValues()
        return config
    }
}

fun main(args: Array<String>) {
    SpringApplication.run(Application::class.java)
}
