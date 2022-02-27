# Dinder
App that gets your dog what he/she wants.

This projects uses tools and techniques form multiple disciplines and generate an app that showes the power of React, flask and OpenAI.
The project's backend is deployable as a container anywhere with the Dockerfile. While the frontend is deployable as a npm project. 
Due to the multiservice structure of the app, the backend can also be used to generate a bio from a list of interest and attributes. 

To get the bio deploy the container on any service and make a get request to ```/automatebio:name&:breed&:park&:treat&:trick``` 
