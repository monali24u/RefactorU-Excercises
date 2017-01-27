Magellan's Voyage
==========

Difficulty - 2/5
---------

<img src="https://ru-student-site.s3.amazonaws.com/magellan.jpg">

Objective
----------

Create an express app that takes the user on a virtual tour of Magellan's voyage circumnavigating the globe. Each page is a separate stop on the voyage.

Requirements
--------

Part I
-------

- Scaffold out an express application.
- The user should start on the home page at Seville, where Magellan departed Spain in 1519.
- Using express routing, create a separate page and route handler for each of the following locations from Magellan's expedition:
    - Seville
    - Canary Islands
    - Cape Verde
    - Strait of Magellan
    - Guam
    - Philippines
- At each location (except the last), a next button should lead the user to a new page with information about that stop on Magellan's voyage.

Bonus
---------

- Add a route to handle an unknown destination. For example, if the user requests a page for "India", the user should see a simple page that informs the user that Magellan did not travel to India. (See Application Routing in the Express documentation for a description of different types of dynamic routes.)
- Add a /next route which will serve up a JSON response that tells the user what location comes after a given location.
The route should take a query string of the current location e.g. <code>/next?location=Seville</code>.
Return a JSON response that looks like the following: <code>{ location: 'Seville', nextLocation: 'Canary Islands' }</code>