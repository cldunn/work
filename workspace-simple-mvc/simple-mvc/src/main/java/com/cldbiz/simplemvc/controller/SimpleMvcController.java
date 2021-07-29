package com.cldbiz.simplemvc.controller;

import java.io.IOException;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cldbiz.simplemvc.common.JsonResponse;
import com.cldbiz.simplemvc.common.I18nMessage;
import com.cldbiz.simplemvc.dto.MessageKeyWithArgDto;
import com.cldbiz.simplemvc.exception.ApplicationException;

@RestController
@RequestMapping("/v1")
public class SimpleMvcController extends BaseController {

	@GetMapping(value="/simpleMvc/getLabelsData", produces="application/json") 
	public ResponseEntity<JsonResponse> getLabelData() {
		Map<String, String> labels = getMessages("label");
		JsonResponse mv = JsonResponse.getBuilder().data("labels", labels).built();
		
		try {
			TimeUnit.SECONDS.sleep(3);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return new ResponseEntity<JsonResponse>(mv, HttpStatus.OK);
	}

	@GetMapping(value="/simpleMvc/getSucessMessage", produces="application/json") 
	public ResponseEntity<JsonResponse> getSucessMessage() {
		String message = getMessage("global.success");
		Map<String, String> labels = getMessages("label");
		JsonResponse mv = JsonResponse.getBuilder(message).data("labels", labels).built();
		
		return new ResponseEntity<JsonResponse>(mv, HttpStatus.OK);
	}

	@GetMapping(value="/simpleMvc/getMessageKeyAsPathVar/{key}", produces="application/json") 
	public ResponseEntity<JsonResponse> getMessageKeyAsPathVar(@PathVariable("key") String key) {
		JsonResponse mv = JsonResponse.getBuilder(getMessage(key)).built();
		return new ResponseEntity<JsonResponse>(mv, HttpStatus.OK);
	}

	@GetMapping(value="/simpleMvc/getMessageWithArgAsParams", produces="application/json") 
	public ResponseEntity<JsonResponse> getMessageWithArgAsParams(
			@RequestParam(value="key", required=true) String key,
			@RequestParam(value="arg", required=true) String arg) {
		JsonResponse mv = JsonResponse.getBuilder(getMessage(key, arg)).built();
		return new ResponseEntity<JsonResponse>(mv, HttpStatus.OK);
	}

	@GetMapping(value="/simpleMvc/getMessageKeyAsPathVarArgAsParam/{key}", produces="application/json") 
	public ResponseEntity<JsonResponse> getMessageKeyAsPathVarArgAsParam(
			@PathVariable("key") String key,
			@RequestParam(value="arg", required=true) String arg) {
		JsonResponse mv = JsonResponse.getBuilder(getMessage(key, arg)).built();
		return new ResponseEntity<JsonResponse>(mv, HttpStatus.OK);
	}

	@GetMapping(value="/simpleMvc/getMessageWithKeyAndArgAsDto", produces="application/json") 
	public ResponseEntity<JsonResponse> getMessageWithKeyAndArgAsDto(MessageKeyWithArgDto messageKeyWithArgDto) {
		String message = getMessage(messageKeyWithArgDto.getKey(), messageKeyWithArgDto.getArg());
		JsonResponse mv = JsonResponse.getBuilder(message).built();
		return new ResponseEntity<JsonResponse>(mv, HttpStatus.OK);
	}

	@PostMapping(value="/simpleMvc/postMessageWithKeyAsDto", produces="application/json") 
	public ResponseEntity<JsonResponse> postMessageWithKeyAsDto(@RequestBody MessageKeyWithArgDto messageKeyWithArgDto) {
		String message = getMessage(messageKeyWithArgDto.getKey());
		JsonResponse mv = JsonResponse.getBuilder(message).built();
		return new ResponseEntity<JsonResponse>(mv, HttpStatus.OK);
	}

	@PostMapping(value="/simpleMvc/postThrowApplicationException", produces="application/json") 
	public void postThrowApplicationException() {
		I18nMessage msg = new I18nMessage("exception.method", "postThrowApplicationException");

		// TODO: log exception based upon profile and log level
		throw new ApplicationException(msg.getText());
	}

	@PostMapping(value="/simpleMvc/postThrowApplicationExceptionWithDetails", produces="application/json") 
	public void postThrowApplicationExceptionWithDetails() {
		I18nMessage msg = new I18nMessage("exception.files.notFound", "postThrowApplicationExceptionWithDetails");
		ApplicationException appEx = new ApplicationException(HttpStatus.NOT_FOUND, msg.getText());
		appEx.addDetail("MyFileOne.txt");
		appEx.addDetail("MyFileTwo.txt");
		appEx.addDetail("MyFileThree.txt");
		appEx.addDetail("MyFileFour.txt");
		appEx.addDetail("MyFileFive.txt");
		appEx.addDetail("MyFileSix.txt");

		// TODO: log exception based upon profile and log level
		throw appEx;
	}

	@PostMapping(value="/simpleMvc/postThrowRuntimeException", produces="application/json") 
	public void postThrowRuntimeException() {
		// TODO: log exception based upon profile and log level
		throw new NullPointerException();
	}
}
