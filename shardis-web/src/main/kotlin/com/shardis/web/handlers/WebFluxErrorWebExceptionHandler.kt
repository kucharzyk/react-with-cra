package com.shardis.web.handlers

import org.springframework.boot.autoconfigure.web.ErrorProperties
import org.springframework.boot.autoconfigure.web.ResourceProperties
import org.springframework.boot.autoconfigure.web.reactive.error.DefaultErrorWebExceptionHandler
import org.springframework.boot.autoconfigure.web.reactive.error.ErrorAttributes
import org.springframework.context.ApplicationContext
import org.springframework.web.reactive.function.server.ServerResponse
import reactor.core.publisher.Mono
import java.util.*

class WebFluxErrorWebExceptionHandler(errorAttributes: ErrorAttributes,
                                      resourceProperties: ResourceProperties,
                                      errorProperties: ErrorProperties,
                                      applicationContext: ApplicationContext) :
    DefaultErrorWebExceptionHandler(errorAttributes, resourceProperties, errorProperties, applicationContext) {


    override fun renderDefaultErrorView(
        responseBody: ServerResponse.BodyBuilder, error: Map<String, Any>): Mono<ServerResponse> {
        val builder = StringBuilder()
        val timestamp = error["timestamp"] as Date
        builder.append("<html><body><h1>Custom Whitelabel Error Page</h1>")
            .append("<p>This application has no configured error view, so you are seeing this as a fallback.</p>")
            .append("<div id='created'>").append(timestamp.toString())
            .append("</div>").append("<div>There was an unexpected error (type=")
            .append(error["error"]).append(", status=")
            .append(error["status"]).append(").</div>").append("<div>")
            .append(error["message"]).append("</div>").append("</body></html>")
        return responseBody.syncBody(builder.toString())
    }
}
