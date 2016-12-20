Victims & Volunteers
==============

Difficulty - 4/5
---------

Skills
-------------
- Javascript Fundamentals
- functions
- boolean logic
- problem solving

Background
---------
Most front-end development involves a ton of interaction with elements on the page: clicks, scrolls, mouseovers... but before we tackle the DOM, can you simulate real use cases with simple prompts, confirms, and alerts? This exercise will test your understanding of functions and boolean logic to reinforce an understanding of Javascript fundamentals.

Requirements
-------------
Create a Javascript application (A Javascript-driven web page. Just set up your basic HTML and a script tag that will run your script on page load.) that allows the user to match people in need with volunteers during a disaster relief effort.

- First prompt the user to ask how many disaster victims they wish to enter.
- For each disaster victim that will be added, prompt the user to enter their name, phone number, and street. You don't need to validate the information. Add each newly entered user to three arrays, one for each piece of information, using array.push. <em>Think!</em> How will you know how many times to prompt the user for a name/phone/street? How can you make this dynamic so that it works for any number of people?
- Repeat steps 1 and 2, but this time you are asking for volunteers. You'll need a separate set of arrays.

<em>Note</em>: There is an easier way to store this info than in 3 separate arrays for each set of people. We'll learn how to do that when we cover objects. <strong>Bonus</strong>: Implement this exercise using only 2 total arrays of objects.

At the end, print out, in a single alert, the number of persons in need, the number of volunteers, and a list of all persons in need and all volunteers. You may format this in any way that looks reasonable.

Bonus I:
--------
Change the program so that instead of asking the user up front how many victims they wish to enter, simply start asking for information and after each person in need they enter ask if they would like to continue using the confirm function.

Bonus II:
--------
After all of the above, prompt the user to enter the name of a person in need. Then display an alert that lists all the volunteers that are available to help on the same street.

Bonus III:
--------
? Hold off on this one until we start on Angular! Replace prompts and alerts with forms and on-page rendering (i.e. displaying text in a div or other element in the DOM). Create a full-fledged user interface that could be used on a real site.