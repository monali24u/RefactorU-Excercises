Restaurant Objects
===============

Difficulty - 3/5
---------

Skills
---------
- Object Constructors
- Higher Order Functions
- Accessing Prototypes

Background
-----------
Object Oriented Programming has been around for a long time because it works.  Organizing your code in an Object Oriented manner allows for modularity and extensibility.  As projects become larger, this level of organization / architecture becomes extremely important.

Leveraging Higher Order Functions is also an important skill.  Re-writing or copy/pasting the same or similar code is inefficient and can end up costing you time in the long run (especially if that duplicated code needs to change).  Being able to leverage code you've already written through other functions/methods will help you stay more organized and your code more maintainable.

Objective
----------
Define several constructors and prototype methods.

Resources
---------
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript">Introduction to Object-Oriented JavaScript</a>
- <a href="http://www.phpied.com/3-ways-to-define-a-javascript-class/">3 ways to define a JavaScript class</a>
- <a href="http://eloquentjavascript.net/chapter8.html">Eloquent Javascript Ch8 - Object-Oriented Programming</a>

Requirements
----------

Part I
---------
- Define a constructor for the following object. Add parameters to the constructor for the given properties and add them as instance variables.
    - FoodItem
        - string name
        - number calories
        - boolean vegan
        - boolean glutenFree
        - boolean citrusFree
- Define a <code>stringify</code> method on the constructor's prototype. It should return a string description of the food including its name, calories, and dietary information, formatted as you choose. <code>stringify</code> should not have any side effects.
Instantiate three different FoodItems and store each in a separate variable. Call <code>stringify</code> on each instance and print the result to the console.

Part II
----------
- Define constructors for the following objects. Add parameters to the constructor for the given properties and add them as instance variables.
    - Drink
        - string name
        - string description
        - number price
        - Array of FoodItem ingredients
    - Plate
        - string name
        - string description
        - number price
        - Array of FoodItem ingredients
    - Order
        - Array of Plate plates
    - Menu
        - Array of Plate plates
    - Restaurant
        - string name
        - string description
        - Menu menu
    - Customer
        - string dietaryPreference
- Define a <code>stringify</code> method on each constructor's prototype. This method should return a string representation of the object, formatted as you choose. stringify should not have any side effects. You may want to reuse the <code>stringify</code> method of the contained objects. (e.g. the Menu object should call <code>stringify</code> on each of its plates to reuse that functionality instead of having to duplicate the code for each plate).
- Add the following methods to the Plate object to determine if all the food items within it fit a specific dietary restriction.
    - boolean isVegan
    - boolean isGlutenFree
    - boolean isCitrusFree
- Instantiate a Burrito Plate, a Guacamole Plate, and a Margarita Drink.
- Instantiate a Menu that contains each of the instantiated Plates and Drinks.
- Instantiate a Restaurant that contains the instantiated Menu.
- Call the Restaurant's stringify method to have it print out all its information.