package com.objectpartners.plummer.kotlin

import com.objectpartners.plummer.kotlin.domain.Reason
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@CrossOrigin
@RequestMapping("/reasons")
open class ReasonsController {

    @Autowired
    lateinit var service: ReasonsService

    @GetMapping
    fun getAll(): List<Reason> {
        return service.getAllReasons()
    }
}

