package com.shardis.web.routes

import com.fasterxml.jackson.databind.ObjectMapper
import org.junit.Assert
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.HttpHeaders
import org.springframework.test.context.junit4.SpringRunner
import org.springframework.test.web.reactive.server.WebTestClient
import java.time.LocalDate
import java.time.LocalDateTime

@RunWith(SpringRunner::class)
@SpringBootTest
@AutoConfigureWebTestClient
class ApiRoutesTest {

    @Autowired
    lateinit var webTestClient: WebTestClient

    @Autowired
    lateinit var objectMapper: ObjectMapper

    @Test
    fun testHandleLocalDate() {
        val currentDateString = objectMapper.writeValueAsString(LocalDate.now())

        Assert.assertTrue(
            "date [$currentDateString] must be in format [yyyy-MM-dd]",
            currentDateString.matches(Regex("""^"\d{4}-\d{2}-\d{2}"$"""))
        )

        webTestClient.get()
            .uri("/api/sample/date")
            .header(HttpHeaders.CONTENT_TYPE, "application/json")
            .exchange()
            .expectStatus().isOk
            .expectBody()
            .json(currentDateString)
    }

    @Test
    fun testHandleLocalDateTime() {
        val currentDateTimeString = objectMapper.writeValueAsString(LocalDateTime.now())

        Assert.assertTrue(
            "date [$currentDateTimeString] must be in format [yyyy-MM-dd'T'HH:mm:ss.SSS]",
            currentDateTimeString.matches(Regex("""^"\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+"$"""))
        )

        val dateFromRest: String? = webTestClient.get()
            .uri("/api/sample/datetime")
            .header(HttpHeaders.CONTENT_TYPE, "application/json")
            .exchange()
            .expectStatus().isOk
            .expectBody(String::class.java)
            .returnResult()
            .responseBody

        Assert.assertNotNull(dateFromRest)
        dateFromRest?.let {
            Assert.assertTrue(
                "date from rest [$it] must be in format [yyyy-MM-dd'T'HH:mm:ss.SSS]",
                it.matches(Regex("""^"\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+"$"""))
            )
        }

    }
}
