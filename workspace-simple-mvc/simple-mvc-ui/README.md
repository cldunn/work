simple-mvc-ui

React16 UI portion of the simple-mvc-ui application incorporating various features of bootstrap, react, axios, redux and redux-toolkit.  The application is primarily a set of 
buttons that behind the scene commmunicate with the spmple-mvc-api server side code demonstrating the use of spring-mvc.  

It utilizes bootstrap spinner during communication with the server, hiding the spinner upon return of the response.  It displays a bootstrap alert or modal message taken from the 
response based upon the http status code.  If a successful status code is returned it will also show the name associated with the selected button, taken from the response data.

It incorporates axios to create a rest-service thus centralizing all ajax calls to the server in a uniform manor.  It uses an axios interceptor to respond to the http status code
showing alerts of single message success or modal message for multi-message success or error messages.

It uses redux and redux-toolkit to maintain a state of the bootstrap spinner, alert and modal.  It also maintaines data from the last successfully return response or clears the 
data if a response is unsuccessful.
