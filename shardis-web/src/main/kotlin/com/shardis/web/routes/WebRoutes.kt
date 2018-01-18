package com.shardis.web.routes

import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.core.io.Resource
import org.springframework.http.MediaType
import org.springframework.web.reactive.function.server.ServerResponse.ok
import org.springframework.web.reactive.function.server.router

@Configuration
class WebRoutes(@Value("classpath:/static/index.html") private val indexHtml: Resource) {

    @Bean
    fun webRouter() = router {
        accept(MediaType.TEXT_HTML).nest {
            GET("/") {
                ok().contentType(MediaType.TEXT_HTML).syncBody(indexHtml)
            }
            GET("/home") {
                ok().contentType(MediaType.TEXT_HTML).syncBody(indexHtml)
            }
            GET("/about") {
                ok().contentType(MediaType.TEXT_HTML).syncBody(indexHtml)
            }
            GET("/time") {
                ok().contentType(MediaType.TEXT_HTML).syncBody(indexHtml)
            }
        }
    }
}
