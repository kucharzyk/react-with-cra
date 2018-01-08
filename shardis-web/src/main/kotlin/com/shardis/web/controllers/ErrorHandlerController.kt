package com.shardis.web.controllers

import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.web.servlet.error.ErrorAttributes
import org.springframework.boot.web.servlet.error.ErrorController
import org.springframework.core.io.Resource
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.context.request.WebRequest

@RestController
@RequestMapping("/error")
class ErrorHandlerController(
    private val errorAttributes: ErrorAttributes,
    @Value("classpath:/static/index.html") private val index: Resource
) : ErrorController {

    override fun getErrorPath(): String {
        return "/error"
    }

    @RequestMapping
    fun error(request: WebRequest): ResponseEntity<Any> {
        val jsonErrorObject = createJsonErrorObject(request)
        return if (404 == jsonErrorObject["status"] && jsonErrorObject["path"] != null && !jsonErrorObject["path"].toString().startsWith("/api")) {
            ResponseEntity.ok(index)
        } else {
            ResponseEntity.status(jsonErrorObject["status"] as Int).body(jsonErrorObject)
        }
    }

    private fun createJsonErrorObject(request: WebRequest): Map<String, Any> {
        val jsonErrorObject = getErrorAttributes(request, getTraceParameter(request))
        val trace = jsonErrorObject["trace"] as String?
        if (trace != null) {
            val lines = trace.split("\n\t".toRegex()).dropLastWhile { it.isEmpty() }.toTypedArray()
            jsonErrorObject.put("trace", lines)
        }
        return jsonErrorObject
    }

    private fun getTraceParameter(request: WebRequest): Boolean {
        val parameter = request.getParameter("trace")
        return parameter != null && "false" != parameter.toLowerCase()
    }

    private fun getErrorAttributes(request: WebRequest, includeStackTrace: Boolean): MutableMap<String, Any> {
        return errorAttributes.getErrorAttributes(request, includeStackTrace)
    }

}
