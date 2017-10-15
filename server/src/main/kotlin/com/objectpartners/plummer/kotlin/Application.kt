package com.objectpartners.plummer.kotlin

import com.fasterxml.jackson.module.kotlin.KotlinModule
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

    @Bean
    open fun kotlinModule(): KotlinModule {
        return KotlinModule()
    }
}

fun main(args: Array<String>) {
    SpringApplication.run(Application::class.java)
}
