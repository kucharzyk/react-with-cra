package com.shardis.web.controllers

import org.junit.Assert
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.http.MediaType
import org.springframework.test.context.junit4.SpringRunner
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders

@RunWith(SpringRunner::class)
@WebMvcTest(value = [(IndexController::class)], secure = false)
class IndexControllerTest {

    @Autowired
    lateinit var mockMvc: MockMvc

    @Test
    fun index() {
        val html = getHtml("/")
        assertHtmlIsCorrect(html)
    }

    @Test
    fun home() {
        val html = getHtml("/")
        assertHtmlIsCorrect(html)
    }

    @Test
    fun about() {
        val html = getHtml("/")
        assertHtmlIsCorrect(html)
    }

    private fun assertHtmlIsCorrect(html: String?) {

        html?.let {
            System.err.println(html)
            Assert.assertTrue("Html should be correct", it.contains("""<div id="root"></div>"""))
        }
    }

    private fun getHtml(url: String): String? {
        val request = MockMvcRequestBuilders.get(url).accept(MediaType.TEXT_HTML)
        val result = mockMvc.perform(request).andReturn()
        (result.response.forwardedUrl)?.let {
            return getHtml(it)
        }
        Assert.assertEquals("Status $url must be OK", 200, result.response.status)
        val responseBody = result.response.contentAsString
        Assert.assertNotNull("Html should be returned", responseBody)
        return responseBody
    }
}
