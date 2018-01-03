package com.shardis.common

import org.junit.Test

import org.junit.Assert.*

class SampleServiceTest {

    @Test
    fun add() {
        val sampleService = SampleService()
        assertEquals(5L, sampleService.add(2L, 3L))
    }
}