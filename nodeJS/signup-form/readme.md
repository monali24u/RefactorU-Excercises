Signup Form
==========

Difficulty - 3/5
---------

Objective
----------
Create an express app that presents the user with a signup form

Resources
---------
- <a href="http://nodejs.org/">nodejs.org</a>
- <a href="http://expressjs.com/">expressjs.com</a> 
- <a href="https://github.com/RefactorU/Jan2016-DemoCode/tree/master/week6/scaffold">demo-code-scaffold</a>

Requirements
---------
- Create a route that sends the following text to the user in response to requesting '/': 
```
<form method="post" action="/formsubmit"><input name="email" type="email">  <input type="submit"></form>
```
- Run the web server and verify that the form displays when you request '/' page in your browser.
- Add a new route to your app.js file that handles the <code>"/formsubmit"</code> path by using <code>app.post(...)</code>.
    - This will only handle POST requests, so if you enter "/formsubmit" into your browser you will receive a 404 response. This is because typing urls in the address bar of your browser always generates a GET request. Express routes have to match both the url and the method (GET, POST, PUT, DELETE).
- When the user submits the form, redirect them to a new route called '/success' using res.redirect. This route should simply send a message to the user that says "Success!".
- Restart your server and navigate to the home page. Submit the form and verify that you are redirected to the success page. When you hit refresh on the success page it should simply refresh the message without submitting the form data again.

<strong>Success!</strong> You implemented a technique called <a href="http://en.wikipedia.org/wiki/Post/Redirect/Get">Post/Redirect/Get</a>. By handling the form submission then redirecting the user to a different route, they can refresh the page without resubmitting the form.
