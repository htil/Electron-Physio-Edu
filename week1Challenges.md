# Week 1
# Problem 1 
Problem: Menu bar wasn't desplaying as showing up as in the video 
Steps taken to try to resolve: read Stack OverFlows, github solutions, eventually asked mentor to help 

Solution: Mac menu bars are located at very top of screen, not like windows in the browser view 

#Problem 2 
Problem: Require isnt defined error 
Steps taken: read Stack OverFlows, github solutions. 

Solution: Syntax error. True => true, Require => require, code was out of order 

#Problem 3 
Problem: Index.js file isn't talking to index.html file 

Solution: 

	//allows windows to talk to each other
	{webPreferences:{nodePrefences: true}}
	
	
		

# Problem 4 
Problem: In the VideoList.js file in the Covert application, In the function renderVideos, the line of code:

const { name, path, duration, format, timemark, complete, outputPath, err } = video;

Doesn’t work because you have to index to the video
… to fix 

const { name, path, duration, format, timemark, complete, outputPath, err } = video[0];