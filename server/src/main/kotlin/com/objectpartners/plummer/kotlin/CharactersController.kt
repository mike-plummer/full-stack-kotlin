package com.objectpartners.plummer.kotlin

import com.objectpartners.plummer.kotlin.domain.Character
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

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

    @PutMapping("/{id}")
    fun update(@PathVariable("id") id: Int, @RequestBody character: Character) {
        service.update(character)
    }

    @PostMapping
    fun create(@RequestBody character: Character) {
        service.create(character)
    }
}
