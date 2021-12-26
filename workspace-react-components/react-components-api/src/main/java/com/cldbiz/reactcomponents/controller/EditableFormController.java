package com.cldbiz.reactcomponents.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cldbiz.reactcomponents.common.JsonResponse;
import com.cldbiz.reactcomponents.criteria.ItemCriteria;
import com.cldbiz.reactcomponents.dto.RecordDto;

@RestController
@RequestMapping("/v1/editable-form")
public class EditableFormController extends BaseController {
	private static final Logger LOGGER = LoggerFactory.getLogger(EditableFormController.class);
	
	/*
	@InitBinder
	public void initBinder(WebDataBinder binder) {
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
	    binder.registerCustomEditor(Date.class, new CustomDateEditor(formatter, true));
	}
	*/
	
	/*************************************************************************
	 * Passes in name parameter, 
	 * returns collection of records, returns status OK 
	 *************************************************************************/
	@GetMapping(value="/findRecord/{id}", produces="application/json") 
	public ResponseEntity<JsonResponse> findRecord(@PathVariable("id") Long id) {
		RecordDto recordDto  = new RecordDto(
			id, "Clifford", "Qwertyuiopas$2", "cliffdunntx@yahoo.com", "M", new Date(), 1234.56);
		
		JsonResponse jsonResp = JsonResponse.getBuilder().addData("recordDto", recordDto).built();
		
		return new ResponseEntity<JsonResponse>(jsonResp, HttpStatus.OK);
	}

	/*************************************************************************
	 * Passes in RecordDto parameter to be updated or saved 
	 * returns status OK 
	 *************************************************************************/
	@PostMapping(value="/saveRecord", produces="application/json") 
	public ResponseEntity<JsonResponse> saveRecord(@RequestBody RecordDto recordDto) {
		
		JsonResponse jsonResp = JsonResponse.getBuilder(getMessage("global.success"))
			.addData("recordDto", recordDto)
			.built();
		
		return new ResponseEntity<JsonResponse>(jsonResp, HttpStatus.OK);
	}
}
