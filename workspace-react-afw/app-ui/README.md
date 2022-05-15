# react-components-ui

React16 UI portion of the react-components application incorporating various bootstrap and 3rd party components.  The application is integrates bootstrap Offcanvas, Tabs and Form UI components as well as a grid component from github.com/adazzle/react-data-grid and splitter component from https://github.com/farfromrefug/react-splitter-layout to create an application UI.  The spring-framework backend supplies mock data soley for the purpose of displaying UI features.

Click on the hamburger icon in the left of the toolbar and slide open the menu sidebar.  Select a menu item in the sidebar to open a new tab in the tab strip.  Use the search button
inside the tab to retrieve static data to populate the data gird in the body of the tab.  Click on the edit icon in the actions column of the data grid to split the screen revealing editable form in the bottom half of the screen populated wtih the selected data item. Resize the panes in the tab.  Edit the form, to demonstrate various input field validations and formating.  Restore full screen mode 

The first step is to download the demo application and all the actual demos. All demos reside in the work repository so all that is needed is to clone the work repository.

# Build react-components-ui application in development mode
1. Navigate to the workspace-react-components/react-components-ui directory and run: npm install && npm start
2. Start the react-components-api server side application (see workspace-react-components/react-components-api README.md)
3. Launch in browser: http:/localhost:3002

# Build simple-mvc-ui application in production mode and deploy in tomcat
1. Navigate to the workspace-react-components/react-components-ui directory and run: npm install && npm run build
2. This will create workspacereact-components/react-components-ui/dist directory
3. Go to your tomcat deployment, in the webapps directory create a "react-components-ui" directory 
4. Copy all the contents from the workspace-react-components/react-components-ui/dist directory to the webapps/react-components-ui directory
5. Launch tomcat - application assumes default tomcat settings
6. Start the react-components-api server side application (see workspace-react-components/react-components-api README.md)
7. Launch in browser: http:/localhost:8080/react-components-ui or go to http:/localhost:8080/demos, select the react-components demo and use the launch link
