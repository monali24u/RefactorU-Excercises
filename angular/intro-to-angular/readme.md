Intro to Angular
===========

Difficulty - 1/5
---------

Skills
--------
- Angular
- Binding data to the DOM
- Event Handling

Requirements
-----------

Part I
--------
- Create an HTML page with a button.
- Add an ng-click directive so that when you click the button a message is printed to the console.
- Change the behavior of the click handler to reveal an h1 with some text in the body element.
- Add another button with a click handler that reveals an unordered list with three list items in the body element.

Part II
---------
- Create an HTML page with some filler content including some paragraphs, headings, and links.
- When a paragraph is moused over, turn the text of that paragraph pink.
- Add an exclamation point to the end of each heading when it is moused over.
- When a link is clicked, confirm that the user wants to navigate to that url. If the user clicks OK, allow the default behavior of the link to be executed. If the user clicks cancel, cancel the default browser behavior by calling event.preventDefault() on the event object.
- When a link is clicked and the user chooses not to go to the url, remove the link from the DOM.

Part III
-----------
- Create an HTML page with one giant button in the center.
- When the giant button is clicked, a 'popup' is revealed. The popup is simply a div containing some HTML content, which has a class applied making it appear with position: fixed in the middle of the page.
- Add a close button to the popup. When clicked, the popup should be hidden.
- Make sure the giant button still works to create a popup even after one is opened and closed.