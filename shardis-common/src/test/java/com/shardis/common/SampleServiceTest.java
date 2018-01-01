package com.shardis.common;

import org.junit.Test;

import static org.junit.Assert.*;

public class SampleServiceTest {

    @Test
    public void add() {
        SampleService sampleService = new SampleService();
        assertEquals(5L, sampleService.add(2L,3L));
    }
}