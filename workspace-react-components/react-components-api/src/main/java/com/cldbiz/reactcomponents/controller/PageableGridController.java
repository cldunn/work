package com.cldbiz.reactcomponents.controller;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cldbiz.reactcomponents.common.JsonResponse;
import com.cldbiz.reactcomponents.common.SearchResult;
import com.cldbiz.reactcomponents.criteria.PageInfo;
import com.cldbiz.reactcomponents.criteria.ItemCriteria;
import com.cldbiz.reactcomponents.dto.ItemDto;
import com.cldbiz.reactcomponents.service.ReactComponentsService;

@RestController
@RequestMapping("/v1/pageable-grid")
public class PageableGridController extends BaseController {
	private static final Logger LOGGER = LoggerFactory.getLogger(PageableGridController.class);
	
	@Autowired
	ReactComponentsService rcService;
	
	/****************************************************************************
	 * Passes in no parameters, 
	 * returns text for search criteria form and pageable grid, returns status OK 
	 ****************************************************************************/
	@GetMapping(value="/init", produces="application/json") 
	public ResponseEntity<JsonResponse> initApp() {
		// retrieve UI labels
		Map<String, String> i18n = getMessages();
		
		JsonResponse jsonResp = JsonResponse.getBuilder()
			.addData("i18n", i18n).built();
		
		LOGGER.info("initApp called, this info message will appear in dev and prod profiles");

		return new ResponseEntity<JsonResponse>(jsonResp, HttpStatus.OK);
	}

	/*************************************************************************
	 * Passes in name parameter, 
	 * returns collection of records, returns status OK 
	 *************************************************************************/
	@GetMapping(value="/searchItems", produces="application/json") 
	public ResponseEntity<JsonResponse> searchItems(ItemCriteria itemCriteria) {
		List<ItemDto> itemDtos = rcService.searchItems(itemCriteria);

		Integer startNdx = (itemCriteria.getPage() - 1) * itemCriteria.getPageSz();
		Integer endNdx = itemCriteria.getPage() * itemCriteria.getPageSz();
		Integer total = itemDtos.size();
		
		List<ItemDto> dtos = itemDtos.subList(startNdx, Math.min(endNdx, total));
		JsonResponse jsonResp = JsonResponse.getBuilder()
				.addData("result", new SearchResult<ItemDto>(total, dtos)).built();
		
		return new ResponseEntity<JsonResponse>(jsonResp, HttpStatus.OK);
	}

}
