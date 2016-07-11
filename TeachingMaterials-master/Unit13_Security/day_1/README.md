# Authentication and Authorization Workshop

**Generated from HotTowel Angular**

>*Opinionated Angular style guide for teams by [@john_papa](//twitter.com/john_papa)*

>More details about the styles and patterns used in this app can be found in my [Angular Style Guide](https://github.com/johnpapa/angularjs-styleguide) and my [Angular Patterns: Clean Code](http://jpapa.me/ngclean) course at [Pluralsight](http://pluralsight.com/training/Authors/Details/john-papa) and working in teams.

## Prerequisites

1. Install [Node.js](http://nodejs.org)

2. Install Yeoman `npm install -g yo`

3. Install these NPM packages globally

    ```bash
    npm install -g bower gulp nodemon
    ```

    >Refer to these [instructions on how to not require sudo](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md)

## Running HotTowel

### Linting
 - Run code analysis using `gulp vet`. This runs jshint, jscs, and plato.

### Tests
 - Run the unit tests using `gulp test` (via karma, mocha, sinon).

### Running in dev mode
 - Run the project with `gulp serve-dev`

 - opens it in a browser and updates the browser with any files changes.

### Building the project
 - Build the optimized project using `gulp build`
 - This create the optimized code for the project and puts it in the build folder

### Running the optimized code
 - Run the optimize project from the build folder with `gulp serve-build`

## Exploring HotTowel
HotTowel Angular starter project

### Structure
The structure also contains a gulpfile.js and a server folder. The server is there just so we can serve the app using node. Feel free to use any server you wish.

	/src
		/client
			/app
			/content

### Installing Packages
When you generate the project it should run these commands, but if you notice missing packages, run these again:

 - `npm install`
 - `bower install`

### The Modules
The app has 4 feature modules and depends on a series of external modules and custom but cross-app modules

```
app --> [
        app.admin --> [
            app.core,
            app.widgets
        ],
        app.dashboard --> [
            app.core,
            app.widgets
        ],
        app.layout --> [
            app.core
        ],
        app.widgets,
		app.core --> [
			ngAnimate,
			ngSanitize,
			ui.router,
			blocks.exception,
			blocks.logger,
			blocks.router
		]
    ]
```

#### core Module
Core modules are ones that are shared throughout the entire application and may be customized for the specific application. Example might be common data services.

This is an aggregator of modules that the application will need. The `core` module takes the blocks, common, and Angular sub-modules as dependencies.

#### blocks Modules
Block modules are reusable blocks of code that can be used across projects simply by including them as dependencies.

##### blocks.logger Module
The `blocks.logger` module handles logging across the Angular app.

##### blocks.exception Module
The `blocks.exception` module handles exceptions across the Angular app.

It depends on the `blocks.logger` module, because the implementation logs the exceptions.

##### blocks.router Module
The `blocks.router` module contains a routing helper module that assists in adding routes to the $routeProvider.

## Gulp Tasks

### Task Listing

- `gulp help`

    Displays all of the available gulp tasks.

### Code Analysis

- `gulp vet`

    Performs static code analysis on all javascript files. Runs jshint and jscs.

- `gulp vet --verbose`

    Displays all files affected and extended information about the code analysis.

- `gulp plato`

    Performs code analysis using plato on all javascript files. Plato generates a report in the reports folder.

### Testing

- `gulp serve-specs`

    Serves and browses to the spec runner html page and runs the unit tests in it. Injects any changes on the fly and re runs the tests. Quick and easy view of tests as an alternative to terminal via `gulp test`.

- `gulp test`

    Runs all unit tests using karma runner, mocha, chai and sinon with phantomjs. Depends on vet task, for code analysis.

- `gulp test --startServers`

    Runs all unit tests and midway tests. Cranks up a second node process to run a server for the midway tests to hit a web api.

- `gulp autotest`

    Runs a watch to run all unit tests.

- `gulp autotest --startServers`

    Runs a watch to run all unit tests and midway tests. Cranks up a second node process to run a server for the midway tests to hit a web api.

### Cleaning Up

- `gulp clean`

    Remove all files from the build and temp folders

- `gulp clean-images`

    Remove all images from the build folder

- `gulp clean-code`

    Remove all javascript and html from the build folder

- `gulp clean-fonts`

    Remove all fonts from the build folder

- `gulp clean-styles`

    Remove all styles from the build folder

### Fonts and Images

- `gulp fonts`

    Copy all fonts from source to the build folder

- `gulp images`

    Copy all images from source to the build folder

### Styles

- `gulp styles`

    Compile less files to CSS, add vendor prefixes, and copy to the build folder

### Bower Files

- `gulp wiredep`

    Looks up all bower components' main files and JavaScript source code, then adds them to the `index.html`.

    The `.bowerrc` file also runs this as a postinstall task whenever `bower install` is run.

### Angular HTML Templates

- `gulp templatecache`

    Create an Angular module that adds all HTML templates to Angular's $templateCache. This pre-fetches all HTML templates saving XHR calls for the HTML.

- `gulp templatecache --verbose`

    Displays all files affected by the task.

### Serving Development Code

- `gulp serve-dev`

    Serves the development code and launches it in a browser. The goal of building for development is to do it as fast as possible, to keep development moving efficiently. This task serves all code from the source folders and compiles less to css in a temp folder.

- `gulp serve-dev --nosync`

    Serves the development code without launching the browser.

- `gulp serve-dev --debug`

    Launch debugger with node-inspector.

- `gulp serve-dev --debug-brk`

    Launch debugger and break on 1st line with node-inspector.

### Building Production Code

- `gulp optimize`

    Optimize all javascript and styles, move to a build folder, and inject them into the new index.html

- `gulp build`

    Copies all fonts, copies images and runs `gulp optimize` to build the production code to the build folder.

### Serving Production Code

- `gulp serve-build`

    Serve the optimized code from the build folder and launch it in a browser.

- `gulp serve-build --nosync`

    Serve the optimized code from the build folder and manually launch the browser.

- `gulp serve-build --debug`

    Launch debugger with node-inspector.

- `gulp serve-build --debug-brk`

    Launch debugger and break on 1st line with node-inspector.

### Bumping Versions

- `gulp bump`

    Bump the minor version using semver.
    --type=patch // default
    --type=minor
    --type=major
    --type=pre
    --ver=1.2.3 // specific version
    
## Workshop Instructions

Each step-xx/ folder under the steps/ folder represent the changes made to make that step to work. Try to do the following without them but if you're ever lost or behind, feel free to drop the files in the project folders to get up to speed.

### Step #1: Add authentication to each server route

1. Install jsonwebtoken to server app (npm install jsonwebtoken --save)
2. Require jsonwebtoken on your routes.js file
3. Create your own secret key
4. Create an isAuthenticated function that uses jsonwebtoken to validate a token from a header value
5. Add the new isAuthenticated function as a step to get to each route (/people, /person/:id, /admin)

Expected result: All routes now return 403 Forbidden

### Step #2: Add a /authenticate route on the server to retrieve a token

1. Add some random users to the data.js file on the server
2. Create an authenticate function that will authenticate a post request against the users you just created. If successful, return a token.
3. Create an /authenticate route on the server that will call the authenticate function

Expected result: /authenticate returns token when successful. That same token can be validated when requesting a different resource (e.g. /admin).

### Step #3: Create a login route/view/controller on the client

1. Create controller, view, module, and route for a login screen.
2. Make view to have a form with an ng-submit that calls a function from the controller.
3. Add an authenticate function to the dataservice file that calls the /api/authenticate and passes in the arguments.
4. Handle the response from the server by simply login response.data.token and forward UI to dashboard route.

Expected result: When navigating to /login, you should be presented with a login screen. If you put in the correct credentials and submit, you should see the token logged on the console and redirected to dashboard. If credentials are incorrect, you should see a 403 Forbidden response.

### Step #4: Add mechanism to route unauthenticated requests back to the login route (client)

1. Hint: it's in the dataservice.js file.
2. Bonus points: If you can get the toaster to properly display 'You are not authenticated. Please login.', that would be great!

Expected result: When navigating to either dashboard or admin and I'm not authenticated, the app should route me to the login screen.

### Step #5: Store and make use of token returned upon authentication to make subsequent requests to the server

1. Create a principal service in the app.core module to keep track of the token received after successful authentication.
2. Save the token on the principal service after each successful authentication.
3. Add an interceptor for requests to add the token to the header for each request.

Expected result: Once authentication is successful, you should be redirected to the dashboard and from there navigate between admin and dashboard without being redirected to the login screen.

### Step #6: Add roles to users (server) and use them to authorize them (client and server)

1. In your data.js (server), add a roles attribute to each user with an array of roles. Examples: roles: ['USER'], roles: ['USER', 'ADMIN']
2. In your routes.js (server), add the user roles to the response.
3. In your principal service, create a getter and setter for a new roles attribute.
4. In your dataservice.js, save the roles on your principal service upon a successful authentication.
5. Decorate the $state service in the config section of your app so $state can also have the toState and the toParams (on every $stateChangeStart).
6. Add a roles property in admin.route.js under settings. Example: roles: ['ADMIN']
7. In router-helper.provider.js, add a resolve to the resolveAways config to check for authorization. This will be added to each state's resolve during configuration. Make sure that if the toState contains settings.roles, to check that the logged in user has at least one of those roles. If they do, let them through but if not, reject the promise that needs to be returned.

Expected result: User will not be able to navigate to routes for which he/she does not have roles to. A toaster message should be displayed as well stating the user is unathorized to access the page.

### Step #7: Complete authorization by enforcing it on the server side as well

1. Add a paths object to the data.js file that will return an array with each path and the authorized roles for each path.
2. In the isAuthenticated function, check for authorization as well.

Expected result: Requests from postman that are not properly authorized will be rejected with a 401 response status.

### Extra step #8: Implement the above authentication and authorization but using passport.js and acl

1. Documentation for passport.js: http://passportjs.org/docs
2. Documentation for acl: https://www.npmjs.com/package/acl

Expected result: Same result.

## License

MIT
