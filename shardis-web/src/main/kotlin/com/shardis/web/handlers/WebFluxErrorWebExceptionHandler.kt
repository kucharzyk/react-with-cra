package com.shardis.web.handlers

import org.springframework.boot.autoconfigure.web.ErrorProperties
import org.springframework.boot.autoconfigure.web.ResourceProperties
import org.springframework.boot.autoconfigure.web.reactive.error.DefaultErrorWebExceptionHandler
import org.springframework.boot.autoconfigure.web.reactive.error.ErrorAttributes
import org.springframework.context.ApplicationContext
import org.springframework.core.io.Resource
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.web.reactive.function.server.ServerResponse
import reactor.core.publisher.Mono

class WebFluxErrorWebExceptionHandler(errorAttributes: ErrorAttributes,
                                      resourceProperties: ResourceProperties,
                                      errorProperties: ErrorProperties,
                                      applicationContext: ApplicationContext,
                                      private val indexHtml: Resource) :
    DefaultErrorWebExceptionHandler(errorAttributes, resourceProperties, errorProperties, applicationContext) {


    override fun renderDefaultErrorView(responseBody: ServerResponse.BodyBuilder, error: Map<String, Any>): Mono<ServerResponse> {
        val errorPath = error["path"] as String?
        return if (getHttpStatus(error) == HttpStatus.NOT_FOUND && errorPath?.startsWith("/api/") == false) {
            responseBody.syncBody(indexHtml)
        } else {
            responseBody.contentType(MediaType.APPLICATION_JSON_UTF8).syncBody(error)
        }
    }
}
