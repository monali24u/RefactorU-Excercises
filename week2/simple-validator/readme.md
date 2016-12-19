Simple Validator
===============

Difficulty - 3/5
---------

Resources
--------
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference">Mozilla Javascript Reference</a> - Good general Javascript reference containing information about specific javascript language constructs, keywords, types, etc.)

Requirements
----------
- Create an html file and js file and add a script tag to include the js file as before. (Getting familiar? Good!)
- Prompt the user to enter their phone number with dashes. (You might want to assure them that it won’t be used for SPAM. Your site probably looks pretty sketchy right now, being a blank page with a prompt for their phone number. I know I wouldn’t enter my phone number...)
- Tip: You can report simple boolean evaluations of user input by combining boolean operators. 
e.g. 
<pre>
alert(userInput.charAt(0) === 'B' && userInput.length === 7)</pre> will display true if the user enters 'Boulder' or 'Baghdad'.


- Alert the user if their phone number is valid (just true or false) according to the simple rule that the fourth and eighth characters must be dashes.

- Following the same procedure as #2 and #3 above to prompt and validate the following fields:

    - birth date
    - must follow the format xx/xx/xx
    - postal code
    - must follow the format xxxxx OR xxxxx-xxxx
    - state abbreviation
    - must be two characters
    - must be all caps
    - married
    - must be yes or no
    - may be any capitalization: YES, Yes, yes
- Tip: While the built-in isNaN method works in most cases to test if a value is a number, it fails on some simple inputs like whitespace. The following function is a more robust implementation for checking if a string contains a valid number: var isNumber = function(n) { return !isNaN(parseFloat(n)) && isFinite(n); };

Bonus
---------
Find someone else who has completed this exercise and try to "break" each other's code. Clone the solution from their github repo and run their application locally. Without looking at their code, try entering incorrect values and getting their program to report that they are valid (or inversely, try entering correct values and getting their program to report that they are invalid). If you find a bug, add an issue to the issue tracker on their github repo. (Every github repo has its own issue tracker, e.g. github.com/refactoru/student-sample-code/issues.)