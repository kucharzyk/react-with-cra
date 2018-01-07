package com.shardis.web.controllers

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping

@Controller
@RequestMapping("/")
class IndexController {

    @GetMapping("")
    fun index() = "/index.html"

    @GetMapping("/home")
    fun home() = "/index.html"

    @GetMapping("/about")
    fun about() = "/index.html"

}
