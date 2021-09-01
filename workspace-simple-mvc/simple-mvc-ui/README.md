# simple-mvc-ui

React16 UI portion of the simple-mvc application incorporating various features of bootstrap, react, axios, redux and redux-toolkit.  The application is primarily a set of 
buttons that behind the scene commmunicate with the simple-mvc-api server side code demonstrating the use of spring-mvc and various combinations of parameters and responses.  

It utilizes bootstrap spinner during communication with the server, hiding the spinner upon return of the response.  It displays a bootstrap alert or modal message taken from the 
response based upon the http status code.  If a successful status code is returned it will also show above the collection of buttons the name associated with the selected button, taken from the response data.

It incorporates axios to create a rest-service thus centralizing all ajax calls to the server in a uniform manor.  It uses an axios interceptor to respond to the http status code
showing alerts for a single message success or a modal message for multi-message success or error message(s).

It uses redux and redux-toolkit to maintain a state of the bootstrap spinner, alert and modal.  It also maintaines data from the last successfully return response or clears the 
data if a response is unsuccessful.

The first step is to download the demo application and all the actual demos. They all reside in the work repository so all that is needed is to clone the work repository.

# Build simple-mvc-ui application in development mode
1. Navigate to the workspace-simple-mvc/simple-mvc-ui directory and run: npm install && npm start
2. Start the simple-mvc-api server side application (see workspace-simple-mvc/simple-mvc-api README.md)
3. Launch in browser: http:/localhost:3001

# Build simple-mvc-ui application in production mode and deploy in tomcat
1. Navigate to the workspace-simple-mvc/simple-mvc-ui directory and run: npm install && npm run build
2. This will create workspace-simple-mvc/simple-mvc-ui/dist directory
3. Go to your tomcat deployment, in the webapps directory create a "simple-mvc-ui" directory 
4. Copy all the contents from the workspace-simple-mvc/simple-mvc-ui/dist directory to the webapps/simple-mvc-ui directory
5. Launch tomcat - application assumes default tomcat settings
6. Start the simple-mvc-api server side application (see workspace-simple-mvc/simple-mvc-api README.md)
7. Launch in browser: http:/localhost:8080/simple-mvc-ui or go to http:/localhost:8080/demos, select the simple-mvc demo and use the launch link
