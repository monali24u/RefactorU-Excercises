Node Colors
==========

Difficulty - 2/5
---------

Skills
-------
- Command Line Node
- Exports / Require

Background
--------
This exercise will be an introduction into writing a command line interface using node.  Many node modules (especially those that are globally installed) are actually command line interfaces and don't significantly affect the way an application runs.

`module.exports` and `require` are also very important concepts in node.  They are how node files can communicate information to one another.  As your application grows, you will be splitting things out into more focused groups of files for organization and modularity.  MVC architecture is important server-side as well as client-side and will require you to have multiple files or groups of files.

Objective
-------
Create a series of command line node scripts for working with colors.

Requirements
----------

Part I: Luminosity
--------------
- Write a program that takes a color and returns the luminosity of that color using the following formula: luminosity = 0.2126*r + 0.7152*g + 0.0722*b.
For example, <code>node luminosity.js 255 239 213</code> should return 240.52439999999999. <code>node luminosity.js 50 15 25</code> should return 23.163. It should take each RGB color component as a separate command line argument. They can be accessed with <code>process.argv[2]</code>, <code>process.argv[3]</code>, <code>process.argv[4]</code>. (process[argv[0] refers to the executing program, 'node', and process.argv[1] refers to the current filename, e.g. 'luminosity.js'.)

- Write a separate program that takes a color and returns 'light' if the luminosity is greater than 155 and 'dark' otherwise. At this point, you can just copy the luminosity function from the last step into a new file. You'll require it as a module in Part III.
    - <code>node islight.js 255 239 213</code> should return light.
    - <code>node islight.js 50 15 25</code> should return dark.

Part II: require
-----------
- Create a new project directory.
- Create a file <code>colorutil.js</code> with the following content: <code>module.exports = { };</code>
- Add your <code>luminosity</code> function from Part I as a method on the module.exports object.
- Create a file <code>luminosity-cli.js</code> which does the same thing as <code>luminosity.js</code> from Part I, but instead requires <code>colorutil.js</code> to include the <code>luminosity</code> function.
- <code>require</code> colorutil.js. Store it on a variable colorutil.
Call the luminosity method defined on the colorutil module, passing the r, g, b values that are specified on the command line (<code>process.argv[2]</code>, <code>process.argv[3]</code>, <code>process.argv[4]</code>) and store the calculated result in a variable.
console.log the result.
- Run node luminosity-cli.js. 
    - <code>node luminosity-cli.js 255 239 213</code> should return 240.52439999999999.
    - <code>node luminosity-cli.js 50 15 25</code> should return 23.163.

<strong>Success!</strong> You can now create your own library to be used in any nodejs script. Anything that you add to the module.exports object will be available to other scripts via require.

Bonus I: Luminosity Library
--------------------
Add a darken function to your luminosity module which returns the given color in r,g,b, but with each value decreased by 20% in order to return a darker overall color. Write a darken-cli.js to take r,g,b command line arguments like luminosity-cli.js to test your darken function. It should also require colorutil.js. It should output space-separated r,g,b values for the darker color.

- <code>node darken-cli.js 255 239 213</code> should return 204 191.2 170.4
- <code>node darken-cli.js 50 15 25</code> should return 40 12 20

Bonus II: Web Colors API
-----------
Write a program that takes a color name like 'red', 'green', or 'blue' as a command line argument and returns the RGB components, comma-separated. Use the request module to make an HTTP request to retrieve a list of web colors to use for comparison.

- Create a new project directory.
- Initialize an empty package.json file using npm init.
- Install the <a href="https://github.com/mikeal/request">request</a> module using <code>npm install --save request</code>. <strong>Note</strong>: <code>npm install</code> downloads the module and saves it in the node_modules folder. The <code>--save</code> option modifies your package.json, adding the module as a dependency. Use <code>--save-dev</code> to add the module as a dependency for development only, such as a unit testing framework like <a href="http://github.com/visionmedia/mocha">mocha</a>.
- There are 140 web color names that browsers recognize. Use the request module to retrieve <a href="https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json">webcolors.json</a> which contains an array of all 140 colors, stored as objects in the following format: 
<pre><code>
{ 
    &emsp;name: 'FireBrick', 
    &emsp;hex: 'B22222', 
    &emsp;rgb: { 
        &emsp;&emsp;r: 178, g: 34, b: 34 
    &emsp;} 
}
</code></pre>
- Call <code>JSON.parse</code> on the content body that comes back from the request in order to get a workable Javascript array containing all the colors.
- Search the colors array for a color name that matches the user-specified name. Make sure to do a case-insensitive comparision. Return the R, G, and B components separated by spaces. For example,  <code>node color.js papayawhip</code> should return 255 239 213.
