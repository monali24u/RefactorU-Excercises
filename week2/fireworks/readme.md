JS Mega Bonus: Fireworks
==============

Difficulty - 6/5
---------

Skills
----------
- animation
- timing
- math


Background
-----------
Everyone loves watching fireworks (except dogs). Let's build a simple app that launches animated 2-d fireworks. 


Requirements
------------
- Create a button that, when clicked, calls a function called `launchRocket`. You will need no other HTML.
- `launchRocket` should create a div at the bottom-center of the page, representing a rocket. Immediately after being created, the rocket should 'fly' upwards, and it should appear to be affected by gravity. You can dynamically affect the position of the rocket with javascript, e.g. 
```
var rocket = document.createElement('div')
rocket.style.position = 'absolute';
rocket.style.left     = 50vw;
rocket.style.bottom   = 0vh;
```
- The initial angle and velocity of the rocket should be set randomly within a predefined range, such that if multiple rockets are launched, they will not follow the same trajectory, but they should all stay visible on the page.
- The rocket should spin at a random speed in a random direction.
- Once the rocket stops ascending (i.e. its vertical velocity is 0) the rocket should appear to 'explode'. You can achieve the explosion effect by removing the rocket from the DOM, and in its place, insert a random number of divs (5-10 is a good amount) to represent the particles from the explosion.
- Like the rocket itself, the particles should be launched upwards with a random angle and velocity, seemingly affected by gravity, and they should spin at a random speed in a random direction.
- Unlike the rocket, the particles should continue falling until they reach the bottom of the page. When they pass the bottom of the page, the particles should be removed from the DOM. Also, each particle should be a random color. 
- Use only vanilla Javascript. Frameworks, libraries, and other 3rd party tools are not needed for this exercise.


Hints
--------
There are two native Javascript methods that will be very useful for completing this exercise.
- Calling `performance.now()` will return the number of milliseconds that have passed since Javascript started running on the page. This is the most precise clock available to a front-end Javascript developer. Use `performance.now()` to write a function that can determine where all the rockets and particles should be at ANY given moment in time.
```
var now = performance.now()
var then = performance.now()
var timeElapsed = then - now
```
- `requestAnimationFrame()` is a built-in function that accepts a callback function, which will be executed the next time your browser re-draws the screen. On a typical LCD monitor, the screen is redrawn 60 times per second (every ~17 milliseconds). If a function passes itself into `requestAnimationFrame()`, then that function will be called every 17 milliseconds, before the screen is re-drawn.  Take the function you wrote previously, which determines where the rockets and particles should be at ANY given moment in time, and call it inside of `requestAnimationFrame()` to determine where the rockets and particles should be at EVERY given moment in time.
```
function render(){
    setRocketPositions()
    setParticlePositions()
    requestAnimationFrame(render)
}
render()
```
- It is important that your code runs efficiently. If it takes your code longer than 17 milliseconds to determine where to place the rockets and particles, you won't be able to animate them smoothly. 
- While debugging, it'll be useful to `console.log()` various values as they change. However, `console.log()` will make your code run much more slowly if you call it on every screen re-draw (especially if you leave your console open), so you'll need to disable `console.log()`s to really test how efficiently your code performs. 
- If you don't remember much from high school physics, you might want to google for some formulas that describe how position, velocity, and acceleration relate to each other. 




















