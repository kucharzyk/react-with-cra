package com.shardis.web.controllers

import com.fasterxml.jackson.databind.ObjectMapper
import org.junit.Assert
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.http.MediaType
import org.springframework.test.context.junit4.SpringRunner
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import java.time.LocalDate
import java.time.LocalDateTime

@RunWith(SpringRunner::class)
@WebMvcTest(value = [(SampleController::class)], secure = false)
class SampleControllerTest {

    @Autowired
    lateinit var mockMvc: MockMvc

    @Autowired
    lateinit var objectMapper: ObjectMapper

    @Test
    fun testHandleLocalDate() {
        val currentDateString = objectMapper.writeValueAsString(LocalDate.now())

        Assert.assertTrue(
            "date [$currentDateString] must be in format [yyyy-MM-dd]",
            currentDateString.matches(Regex("""^"\d{4}-\d{2}-\d{2}"$"""))
        )

        val request = MockMvcRequestBuilders.get("/api/sample/date").accept(MediaType.APPLICATION_JSON)
        val result = mockMvc.perform(request).andReturn()
        Assert.assertEquals("Status must be OK", 200, result.response.status)
        val responseBody = result.response.contentAsString
        Assert.assertNotNull("Html should be returned", responseBody)
        Assert.assertEquals("JSON must be correct", currentDateString, responseBody)
    }

    @Test
    fun testHandleLocalDateTime() {
        val currentDateTimeString = objectMapper.writeValueAsString(LocalDateTime.now())

        Assert.assertTrue(
            "date [$currentDateTimeString] must be in format [yyyy-MM-dd'T'HH:mm:ss.SSS]",
            currentDateTimeString.matches(Regex("""^"\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+"$"""))
        )

        val request = MockMvcRequestBuilders.get("/api/sample/datetime").accept(MediaType.APPLICATION_JSON)
        val result = mockMvc.perform(request).andReturn()
        Assert.assertEquals("Status must be OK", 200, result.response.status)
        val responseBody = result.response.contentAsString
        Assert.assertNotNull("Html should be returned", responseBody)

        Assert.assertTrue(
            "date from rest [$responseBody] must be in format [yyyy-MM-dd'T'HH:mm:ss.SSS]",
            responseBody.matches(Regex("""^"\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+"$"""))
        )


    }
}
