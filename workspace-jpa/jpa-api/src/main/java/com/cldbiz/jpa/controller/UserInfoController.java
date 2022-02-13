package com.cldbiz.jpa.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cldbiz.jpa.common.JsonResponse;
import com.cldbiz.jpa.dto.PageDto;
import com.cldbiz.jpa.dto.UserProfileDto;
import com.cldbiz.jpa.service.UserInfoService;

@RestController
@RequestMapping("/v1")
public class UserInfoController extends BaseController{
	private static final Logger LOGGER = LoggerFactory.getLogger(UserInfoController.class);
	
	@Autowired
	UserInfoService userInfoService;

	@GetMapping(value="/usersList", produces="application/json") 
	public ResponseEntity<JsonResponse> usersList(UserProfileDto userProfileDto) {
		List<UserProfileDto> usersList = userInfoService.findUserInfoList(userProfileDto);
		
		String message = getMessage("global.success");
		
		JsonResponse jsonResp = JsonResponse.getBuilder(message).addData("usersList", usersList).built();
		
		return new ResponseEntity<JsonResponse>(jsonResp, HttpStatus.OK);
	}

	@GetMapping(value="/usersPage", produces="application/json") 
	public ResponseEntity<JsonResponse> usersPage(UserProfileDto userProfileDto) {
		PageDto<UserProfileDto> pageDto = userInfoService.findUserInfoPage(userProfileDto);
		
		String message = getMessage("global.success");
		
		JsonResponse jsonResp = JsonResponse.getBuilder(message).addData("pageDto", pageDto).built();
		
		return new ResponseEntity<JsonResponse>(jsonResp, HttpStatus.OK);
	}

	@PostMapping(value="/saveUser", produces="application/json") 
	public ResponseEntity<JsonResponse> saveUser(@RequestBody UserProfileDto userProfileDto) {
		userProfileDto = userInfoService.saveUserInfo(userProfileDto);
		
		String message = getMessage("global.success");
		
		JsonResponse jsonResp = JsonResponse.getBuilder(message).addData("userProfileDto", userProfileDto).built();
		
		return new ResponseEntity<JsonResponse>(jsonResp, HttpStatus.OK);
	}

	@PostMapping(value="/deleteUsers", produces="application/json") 
	public ResponseEntity<JsonResponse> deleteUsers(@RequestBody List<Long> ids) {
		userInfoService.deleteUserInfoByIds(ids);
		
		String message = getMessage("global.success");
		
		JsonResponse jsonResp = JsonResponse.getBuilder(message).built();
		
		return new ResponseEntity<JsonResponse>(jsonResp, HttpStatus.OK);
	}
}
