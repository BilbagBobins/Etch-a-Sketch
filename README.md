# Etch-a-Sketch
This is my submission for the Etch-a-Sketch project from The Odin Project.

I am required to create a webpage that mimics the functions of an Etch-a-Sketch toy:- a grid of squares where each cell changes from white to black when the mouse moves over it. 

The grid has to have the option to change the number of squares/cells per side based on the user input.

A couple of extra functions are suggested to attempt:

1. Changing each cell to a different random color as the mouse moves over it.

2. Change the darkness of each cell by 10% each time the mouse passes over it. A white square will be black once the mouse moves over it 10 times.

## Creating the grid
I knew already that you can create a grid using a for loop nested in another FOR loop so this is how I went about it. 

I created a container to hold the grid. With a function parameter derived from a user input each FOR loop would run up to the input size and on each iteration create a new cell div, give that div a class and a size and then append it to the grid container. 

The cell size had to be adjustable depending on how many cells the user wanted. Because the grid container is a static size the cell size could be calculated by dividing the container by how many cells the user wanted, and then minus 2 to accomodate the 1px border each cell would have. 

## Coloring functions
### Black
I created the black function first. This was a function that used an Event Listener waiting FOR a 'mouseenter' event and then calling another function that would color that cell black.

I put this function in the drawGrid function so that each cell when created would have this 'black' function call built into it. This proved to be the wrong way to do it once I added more than one coloring function.

### RandomRGB
This function was a fun little one to write. I needed to get 3 random values between 0 and 255 into an rgb() label. Initially I wrote it as 2 separate functions - one that wrote out the rgb value and the other that was called upon for each rgb random value : 

const rgb = `rgb(${random()}, ${random()}, ${random()})`

This worked but I felt it was clunky and could be refined. I came up with an alternative method that used an array and a FOR loop. Each iteration of the loop would call random() and insert that random value into the array. Then at the end it would turn the array into a string and concatenate it all:

const rgb = `rgb(${rgbArr.toString()})`

### Shading
This function seemed easy enough to write but proved a bit tricky to implement - Determine the current cell rgb value and decrease each r, g and b value by 25 (roughly 10% of 255) each time the mouse passes over it.

When you extract the rgb value of an element with 'style.backgroundColor' it formats it as a string. I needed an array to be able to change each value as I did with the RandomRGB function. I went online and found a method that was written to do just that - convert rgb strings to an array containing only the rgb values.

User "User372551" at [https://stackoverflow.com/questions/10970958/get-a-color-component-from-an-rgb-string-in-javascript](URL) provided the following code:

`let rgbArr = rgb.match(/\d+/g)`

With this I could use a similar method as I did with RandomRGB looping over the array and adjusting it -25 per value down each time a mouseover event happens to a minimum of 0. Add in an inital check on the rgbArr to see if there's color value in it and if not set it to 255, and convert the array back into a string and it was done.


## Coloring Function Call Problems
As mentioned in the 'black' function I initially called each function within the creation of each cell. This seemed to work fine with black() and randomRGB() but the error became apparent once shading() was introduced.

It turned out once you activated a funciton it would not stop. This still allowed black and randomRGB to alternate as you clicked the respective buttons but the shading function did not work at all.To solve this I needed to call the coloring functions externally to the creation of each cell. 

I gave each color button a function to change a variable to a value exclusive to that button. I moved the 'mouseenter' event listener from each color function to the drawGrid function so each time it called the colorCell function. Here I had some IF statements looking for which color button value was selected.

## CSS Styling
I wanted a wooden panel background on the page to simulate maybe playing with the toy on or over the floor.

The Etch A Sketch itself is a very loose rendition of the original toy. It's bright red with yellowy gold writing and big rounded corners.

The buttons, although absent on the original toy, were animated with a hover effect and an active state slight reduction of scale when clicked.

The user input was originally a prompt for a value between 1 and 100 but I changed it to a slider input for simplicity.

## Final Impressions
I'm happy with the project. It meets the assignment requirements in its functions and it looks nice.

The apperance could use some refinements but what I want to do are out of my skill set at this stage in my learning. I didn't want to get too deep into the CSS far beyond the basics but some more detailed shadowing and textures would look good.

Something I'm still torn between is the slider. The numerical value of the slider live updating (oninput) is desired. However, updating the grid could have been oninput or onchange ie. updating immediately when the mouse click is down and moved or when the click is released. I went with onchange because there was a small lag when adjusting to the larger grid sizes. On a live updating element this delay is jarring but something that loads when you release a button lagging is less jarring.

An erase button would have been something I could have added but the fact that everything is erased when the grid changes is enough for me.

I was also thinking about making the 'drawing' happen when the mouse is clicked down as a traditional paint app would work but his seemed to go against the Etch-A-Sketch ethos in my opinion.








