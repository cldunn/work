# workspace-demos

This is react16 UI application that displays a lists of links to various demos which when clicked displays a description of the demo, a list of it features and a 
link to navigate to the demo.  This assumes the demos list application and each of the demos have already been been downloaded, installed, built and started.

The first step is to download the demo application and all the actual demos.  They all reside in the work repository so all that is needed is to clone the work repository.

# Build Demos Application in Development Mode
1. Navigate to the workspace-demos directory and run: npm install && npm start
2. Launch in browser: http:/localhost:3000

# Build Demos Application in Production Mode and deploy in Tomcat
1. Navigate to the workspace-demos directory and run: npm install && npm run build
2. This will create workspace-demos/dist directory
3. Go to your tomcat deployment, in the webapps directory create a "demos" directory 
4. Copy all the contents from the workspace-demos/dist directory to the webapps/demos directory
5. Launch tomcat - application assumes default tomcat settings
6. Launch in browser: http:/localhost:8080/demos

