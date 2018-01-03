package com.shardis.web.controllers

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

import java.time.LocalDate
import java.time.LocalDateTime

@RestController
@RequestMapping("/api/sample")
class SampleController {

    @GetMapping("/date")
    fun currentDate(): LocalDate {
        return LocalDate.now()
    }

    @GetMapping("/datetime")
    fun currentDateTime(): LocalDateTime {
        return LocalDateTime.now()
    }
}
