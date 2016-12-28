Static File Server
============

Difficulty - 3/5
---------

Objective
--------
Create a web server using NodeJS that can serve static files.

Skills
-------
- Scaffolding an express app.
- Understanding the relationship between client and server.
- Using the File System module.
- Asynchronous Operations

Resources
--------
- <a href="http://nodejs.org/">nodejs.org</a>
- <a href="http://nodejs.org/api/fs.html#fs_fs_readfilesync_filename_options">fs.readFileSync</a>
- <a href="http://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback">fs.readFile</a>
- <a href="https://github.com/RefactorU/Jan2016-DemoCode/tree/master/week6/scaffold">demo-code-scaffold</a>

Requirements
----------

Part I: Simple Web Server
----------------
- Create a new folder in your projects directory.
- cd into the newly created folder.
- Demo-Code Scaffold
- Run npm init to create package.json
- Copy scaffold.js from the demo-code repo into your own app.js file.
- 2 Modules need to be installed 
    - <code>npm install express --save</code>
    - <code>npm install body-parser --save</code>
- Run nodemon app.js to start your web server
- Navigate your browser to http://localhost:3000

<strong>Success!</strong> You executed a node script which created an HTTP server. As long as the script continues to run in the terminal, it responds to HTTP requests that are sent to localhost. By entering http://localhost:PORT into your browser, you generated an HTTP request to your node server. Each request is responded to with a corresponding route handler.

Part II: Serve a Static File
-----------

- Add data.txt file to your directory. Insert some arbitrary text to the file.
- Include the File System core module by adding <code>var fs = require('fs');</code> at the very top of the file. This provides file operations like read/write.
- Read the documentation for fs.readFileSync. Read the data.txt file with <code>var fileContents = fs.readFileSync('data.txt');</code>.
- Add <code>res.header('Content-Type', 'text/html');</code> to add the HTTP response header that specifies the type of content we're sending to the browser.
- Use <code>res.send</code> to send the fileContents back to the user.
- Restart your node server and refresh your browser. You should now see the contents of your text file written out to the page!

<strong>Note: readFileSync is Synchronous!</strong> The problem with readFileSync is that it is a blocking method. This means that the server has to wait for the file to be loaded before moving on to the next instruction in your code. This is bad! The performance benifits of node are only realized when slow operations are performed asynchronously so that the server can continue to handle requests while waiting for the results. This is especially true in this example since reading from the file system is very slow. In the next part, you will make your static file server nonblocking.

Part III: Make it Asynchronous
---------------
- We're going to redo PART II using fs.readFile and callbacks. This blocking code: <code>var fileContents = fs.readFileSync('data.txt');</code> changes to this asynchronous code: <code>fs.readFile('data.txt', function(err, data){ // do something with data here });</code>
- Move res.header(...) and res.send(...) into the fs.readFile callback so that they are executed after the file is read.
- Restart your node server and request the localhost url again. You should see the same result as in PART II!  <strong>Note:</strong> If you are having trouble with callbacks/asynchronous code, rember the golden rule of asynchronous programming: Anything that depends on the result of an asynchronous call must go inside the callback. Code that comes after the asynchronous call is executed before the callback.

<strong>Success!</strong> So what's different? This time we utilized the asynchronous nature of node by passing a callback to the readFile function. This allows our code to move along normally without being blocked. Once the file has been loaded and the content is ready, node will invoke our callback and allow us to continue on with sending content back to the server.

Bonus: Static File Server
-------------
Modify your route to allow the user to request any file by name. Files should be read from the 'public' folder. For example, http://localhost:PORT/data1.txt should respond with the contents of MYPROJECT/public/data.txt.
<pre><code>
app.get('/:filename', function(req, res) {
    &emsp;// access value of :filename with req.params.filename
    &emsp;// read the file with the specified filename
    &emsp;// send the contents of the file to the user
});
</code></pre>