package com.team3.app.utils;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public final class JsonUtil {
	private static final ObjectMapper objectMapper = new ObjectMapper();
	
	public static final <T> T jsonToObject(String json, Class<T> valueType)
			throws IOException, JsonParseException, JsonMappingException
	{
		return objectMapper.readValue(json, valueType);
	}
	
	public static final String objectToJson(Object object) 
			throws JsonProcessingException 
	{
		return objectMapper.writeValueAsString(object);
	}
	
}
