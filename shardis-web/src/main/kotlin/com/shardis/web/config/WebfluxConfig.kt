package com.shardis.web.config

import com.shardis.web.handlers.WebFluxErrorWebExceptionHandler
import org.springframework.beans.factory.ObjectProvider
import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.autoconfigure.web.ResourceProperties
import org.springframework.boot.autoconfigure.web.ServerProperties
import org.springframework.boot.autoconfigure.web.reactive.error.ErrorAttributes
import org.springframework.boot.autoconfigure.web.reactive.error.ErrorWebExceptionHandler
import org.springframework.context.ApplicationContext
import org.springframework.context.MessageSource
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Primary
import org.springframework.core.annotation.Order
import org.springframework.core.io.Resource
import org.springframework.http.codec.ServerCodecConfigurer
import org.springframework.web.reactive.result.view.ViewResolver

@Configuration
class WebfluxConfig(@Value("classpath:/static/index.html") private val indexHtml: Resource) {

    @Bean
    @Primary
    @Order(-1)
    fun errorWebExceptionHandler(errorAttributes: ErrorAttributes, messageSource: MessageSource, serverProperties: ServerProperties,
                                 applicationContext: ApplicationContext,
                                 resourceProperties: ResourceProperties,
                                 viewResolversProvider: ObjectProvider<List<ViewResolver>>,
                                 serverCodecConfigurer: ServerCodecConfigurer): ErrorWebExceptionHandler {
        val exceptionHandler = WebFluxErrorWebExceptionHandler(
            errorAttributes,
            resourceProperties,
            serverProperties.error,
            applicationContext,
            indexHtml
        )
        exceptionHandler.setViewResolvers(viewResolversProvider.getIfAvailable { emptyList() })
        exceptionHandler.setMessageWriters(serverCodecConfigurer.writers)
        exceptionHandler.setMessageReaders(serverCodecConfigurer.readers)
        return exceptionHandler
    }

}
