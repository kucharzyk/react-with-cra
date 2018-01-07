package com.shardis.web.config;

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.DispatcherServlet

@Configuration
class ServletConfig {

    @Bean
    fun dispatcherServlet(): DispatcherServlet {
        System.err.println("DAFAQ")
        return DispatcherServlet().also {
            it.setThrowExceptionIfNoHandlerFound(true)
        }
    }
}
