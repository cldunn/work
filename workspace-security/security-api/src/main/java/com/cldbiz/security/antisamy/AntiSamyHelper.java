package com.cldbiz.security.antisamy;

import org.owasp.validator.html.AntiSamy;
import org.owasp.validator.html.CleanResults;
import org.owasp.validator.html.PolicyException;
import org.owasp.validator.html.ScanException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.cldbiz.security.exception.ApplicationException;

@Component
public class AntiSamyHelper {

	private static final String ANTISAMY_VIOLATION_MSG = "AntiSamy: input is not allowed";
	
	private static AntiSamy antisamy;

	@Autowired
	private AntiSamyHelper(AntiSamy antisamy) {
		AntiSamyHelper.antisamy = antisamy;
	}
	
	public static String scan(String input) {
		
		if (input != null && !"".equals(input)) {
			try {
				CleanResults cr = antisamy.scan(input);

				if (cr.getNumberOfErrors() > 0) {
					throw new ApplicationException(ANTISAMY_VIOLATION_MSG, cr.getErrorMessages());
				}
				else if ("".equals(cr.getCleanHTML())) {
					// no error messages if iframe and link tags removed => treat empty cleanHTML() as an error
					throw new ApplicationException(ANTISAMY_VIOLATION_MSG); 
				}
			}
			catch (ScanException ex) {
				throw new RuntimeException(ex);
			}
			catch (PolicyException ex) {
				throw new RuntimeException(ex);
			}
		}
		
		return input;
	}
}
