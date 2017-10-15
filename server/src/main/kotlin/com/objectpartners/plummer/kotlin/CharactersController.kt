package com.objectpartners.plummer.kotlin

import com.objectpartners.plummer.kotlin.domain.Character
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@CrossOrigin
@RequestMapping("/characters")
open class CharactersController {

    @Autowired
    lateinit var service: CharactersService

    @GetMapping
    fun getAll(): List<Character> {
        return service.getAll()
    }
}

