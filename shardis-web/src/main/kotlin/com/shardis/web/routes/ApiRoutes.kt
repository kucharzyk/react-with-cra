package com.shardis.web.routes

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.http.MediaType
import org.springframework.web.reactive.function.server.ServerResponse.ok
import org.springframework.web.reactive.function.server.body
import org.springframework.web.reactive.function.server.router
import reactor.core.publisher.Mono
import java.time.LocalDate
import java.time.LocalDateTime

@Configuration
class ApiRoutes {

    fun getDate(): Mono<LocalDate> = Mono.just(LocalDate.now())
    fun getDateTime(): Mono<LocalDateTime> = Mono.just(LocalDateTime.now())
    fun throwNpe(): Mono<Any> = throw NullPointerException()

    @Bean
    fun apiRouter() = router {
        (accept(MediaType.APPLICATION_JSON) and "/api").nest {
            "/sample".nest {
                GET("/date") { ok().contentType(MediaType.APPLICATION_JSON_UTF8).body(getDate()) }
                GET("/datetime") { ok().contentType(MediaType.APPLICATION_JSON_UTF8).body(getDateTime()) }
                GET("/npe") { ok().contentType(MediaType.APPLICATION_JSON_UTF8).body(throwNpe()) }
            }
        }
    }
}
