Loop Practice #4
===============

Difficulty - 3/5
---------

Requirements
----------
For each problem below, write a set of nested loops that prints the given output. Some of the problems will require you to write if statements in the loops. Assume a global array called months is defined as follows:

<pre>
var months = [{
    name: 'January',
    days: 31
},{
    name: 'February',
    days: 28
},{
    name: 'March',
    days: 31
},{
    name: 'April',
    days: 30
},{
    name: 'May',
    days: 31
},{
    name: 'June',
    days: 30
},{
    name: 'July',
    days: 31
},{
    name: 'August',
    days: 31
},{
    name: 'September',
    days: 30
},{
    name: 'October',
    days: 31
},{
    name: 'November',
    days: 30
},{
    name: 'December',
    days: 31
}];
</pre>

Problems:
----------

1. Write a set of loops that will print out each day of each month in the following format:

<pre>
January 1
January 2
...
January 30
January 31
February 1
February 2
...
February 27
February 28
March 1
March 2
...
Dec 30
Dec 31
</pre>

There should be 365 print statements, one for each day in a year.

2. Write a set of loops that will print out each second of each hour in a day (in 24 hour clock format).

For example, your output should look like the following:

<pre>
0:0:0
0:0:1
...
0:0:58
0:0:59
0:1:0
0:1:1
...
0:1:58
0:1:59
...
23:0:0
23:0:1
...
23:59:58
23:59:59
</pre>

There should be 24 * 60 * 60 = 86,400 print statements.

BONUS
----------

3. Write a set of loops that will print out each second of each hour in a day (in 12 hour clock format).

For example, your output should look like the following:

<pre>
1:0:0 AM
...
1:59:59 AM
2:0:0 AM
...
2:59:59 AM
...
11:59:59 AM
12:00:00 PM
...
12:59:59 PM
1:0:0 PM
...
1:59:59 PM
2:0:0 PM
...
11:59:59 PM
12:0:0 AM
...
12:59:59 AM
</pre>

Now, write a function that turns all single digit numbers into their respective two digit format. For example, 1 should be 01 and 9 should be 09. Then use this function to format your output from part 3, so it will now look like the following:

<pre>
01:00:00 AM
...
12:00:00 PM
...
01:00:00 PM
...
12:00:00 AM
</pre>
