package com.shardis.web

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class ShardisApplication

fun main(args: Array<String>) {
    runApplication<ShardisApplication>(*args)
}