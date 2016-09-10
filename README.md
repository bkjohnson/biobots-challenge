# Status
I consisder this project to be incomplete and am only submitting it because I feel like I have taken a lot of time already.  However, if I 
were to continue this project, here are some of the things I would add:

* A component to filter the results and only show those that match certain criteria. You can see that this component already exists, but I 
  don't display it since I didn't have time to add all of the features that I wanted.  I was in the process of adding functionality to the sliders
  to allow filtering on data that is equal to, greater than, or less than the selected value, but it would have added to the development time.
* Components to display aggregrate data of the search results, as well as components that compared the aggregrate data of the search results to
  the aggregrate data of all of the data.  For example, [this graph on resolution data](https://jsfiddle.net/uv3zvhoL/) which shows the layer
  height along the x axis, the number of layers on the y axis, and the color intensity is the number of identical resolutions.  Another component
  would compare the average live/dead percent of the current results to the live/dead imaging overall, thus allowing you to see if there are certain
  "input" combinations that produce better results.
* Improved styling and responsiveness.


# Approach
The stack for this project is [Meteor](https://www.meteor.com/) + [Polymer](https://www.polymer-project.org/1.0/), with Meteor acting as the server/database and Polymer making up the client.
If you look through the commit history, you'll notice I took a bottom-up approach focusing on UX first.  I started with the smallest
component and gradually built other components around it, adding functionality as I went.

Since the goal was to build a data-focused web app, I wanted to elevate the raw data into something that made sense and was 
easy to look at and understand.  For data that had a maximum (pressure and percentages), I wanted to indicate not only the value, but
how close that value was to the maximum (or minimum).  I also wanted to use color to convey information as well, which is why you'll see numbers
in a differet color than labels, etc.

# Installation
I've included all of the Polymer dependencies so you don't need to have Polymer or bower installed on your own machine.  You should only need
to install Meteor and from the project directory type:
```
meteor
```
