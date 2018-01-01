package com.shardis.web.controllers;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class MainController {

    private final Resource indexHtml;

    public MainController(@Value("classpath:/static/index.html") Resource indexHtml) {
        this.indexHtml = indexHtml;
    }

    @GetMapping("/")
    Resource index() {
        return this.indexHtml;
    }
}
