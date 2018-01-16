package com.shardis.web.routes

import org.junit.Assert
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.HttpHeaders
import org.springframework.http.MediaType
import org.springframework.test.context.junit4.SpringRunner
import org.springframework.test.web.reactive.server.WebTestClient

@RunWith(SpringRunner::class)
@SpringBootTest
@AutoConfigureWebTestClient
class WebRoutesTest {

    @Autowired
    lateinit var webTestClient: WebTestClient

    @Test
    fun index() {
        val html = getHtml("/")
        assertHtmlIsCorrect(html)
    }

    @Test
    fun home() {
        val html = getHtml("/home")
        assertHtmlIsCorrect(html)
    }

    @Test
    fun about() {
        val html = getHtml("/about")
        assertHtmlIsCorrect(html)
    }

    private fun assertHtmlIsCorrect(html: String?) {
        html?.let {
            Assert.assertTrue("Html \n\n $html \n\nshould be correct", it.contains("""<div id="root"></div>"""))
        }
    }

    private fun getHtml(url: String): String? {
        val responseBody = webTestClient.get()
            .uri(url)
            .header(HttpHeaders.CONTENT_TYPE, MediaType.TEXT_HTML_VALUE)
            .exchange()
            .expectStatus().isOk
            .expectBody(String::class.java)
            .returnResult()
            .responseBody

        Assert.assertNotNull("Html should be returned", responseBody)
        return responseBody
    }
}
