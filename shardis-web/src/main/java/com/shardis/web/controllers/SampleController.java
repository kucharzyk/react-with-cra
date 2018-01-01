package com.shardis.web.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/sample")
public class SampleController {

    @GetMapping("/date")
    LocalDate currentDate() {
        return LocalDate.now();
    }

    @GetMapping("/datetime")
    LocalDateTime currentDateTime() {
        return LocalDateTime.now();
    }
}
