Day 5

// Shortcut key: rafce 
// and then run in terminal -- npm run dev
//Componet is resuable code block that return a react element
//Virtual DOM is a copy of real DOM, it is a representation of real DOM in memory. It is a lightweight copy of real DOM. It is used to improve the performance of the application. When we make changes to the virtual DOM, it compares the virtual DOM with the real DOM and updates only the changed parts of the real DOM. This process is called reconciliation.
//We have 2 virtual doms:
//1. First dom is created at the time of mounting of react component.

#Day 6

# React Features:
1.Virtual Dom
2.Single page application
3.Jsx & Bable
4.One way Data Binding
5.Component Based 

# Full Revision--

1.Dyanamic nature than we need Dom
2.Syncronous- line By line excute
3.Asynchronous- for Multi tasking 
4.syncronus excute first and than promise and it is in microtask 
5.await process the operation until the prmoise send the result
6.everthing go in syncrousnes until asyncronus comes 
7.local storage: if anything stored in this so it cant be deleted until we delete it manuually.
8.Session storage: if we cross the tab the data is lost
9.Cookies: types-session,
10 session:session end so task end
11.Persistant cookies:
12.Third party cookies: mostly used cookies
13.React: used becz due to light weight,component based, easy
14.Dis advanatge of dom-- used to 
15.Virtual Dom:react raise 2 virtual doms.
15.Reconsination:
16.Hooks:
17.State:it is type of variable 
18.State is not changed until it is triggered
19.state sideefeect:
20.Dependency array:
21.if dependecy array is empyu than 1 time sideefeect runs.
22.Comonents can be sent directy



# diff bw Excess token and refresh token
1. Excess Token:
->
->
->
->


2. Refresh Token:
->
->
->
->

# Bcrpt 
->Salt round: Bcrypt automatically generates and include  uniqe salt for each password hash.
This prevent attackers from using precomputed tables.

# JWT Token
JWT is commonly used for authentication and authorization.
User Login Authentication
✅ Secure API Access
✅ Stateless Authentication

JWT (JSON Web Token) is a secure token-based authentication mechanism used in web applications. After a user logs in, the server generates a token that is sent with future requests to verify the user's identity without storing session data on the server.

# After generating Jwt if i take someones jwt and uses it in my  system will i get access?? 
---> Yes

# If i can get the acess by using someonelse token than how can i prevent this or can be avoided ??
---> 



# Morgan vs Winston

| **Morgan** | **Winston** |
|------------|-------------|
| Logs **HTTP requests** (GET, POST, URL, status code, response time) | Logs **application events** (errors, warnings, info, debug, custom messages) |
| Express middleware for request logging | General-purpose logging library |
| Automatically logs every incoming HTTP request | Logs are written manually using `logger.info()`, `logger.error()`, etc. |
| Mainly used for **request tracking** | Mainly used for **application monitoring and debugging** |
| Easy to set up and use | Highly configurable with multiple transports |
| Usually logs to the console | Can log to console, files, databases, and cloud services |
| Does not provide multiple log levels | Supports log levels such as `error`, `warn`, `info`, `http`, `debug`, etc. |



## Key Difference

- **Morgan** → Automatically logs **HTTP requests**.
- **Winston** → Logs **application events** such as errors, warnings, info, and debug messages.

## Interview Answer (Short)

- **Morgan** is an Express middleware used for automatic **HTTP request logging**.
- **Winston** is a general-purpose logging library used for **application logging**, including errors, warnings, and custom messages with different log levels.