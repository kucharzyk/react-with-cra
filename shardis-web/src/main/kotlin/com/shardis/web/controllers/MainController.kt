package com.shardis.web.controllers

import org.springframework.beans.factory.annotation.Value
import org.springframework.core.io.Resource
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/")
class MainController(@param:Value("classpath:/static/index.html") private val indexHtml: Resource) {

    @GetMapping("/")
    fun index() = indexHtml
}
