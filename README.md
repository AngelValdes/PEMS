# Public Education Management System
### All javascript files compliant with:
- [AirBnB Javascript Style Guide] (https://github.com/airbnb/javascript)
- [ESLint] (http://eslint.org/)

### Included testing files written with [Mocha] (https://mochajs.org/) and [Faker] (https://github.com/FotoVerite/Faker.js)

### No IDE dependencies, you can open in any IDE. In VS, open as web site or make a new nodeJS project and add these existing files and folders.

```
#### Note: Replace http://localhost:5000 with appropiate hosting location
## Usage 
#### Create a .env file inside root of "store" folder with the following values according to your database server:
```
DB_NAME=pems
DB_USER=pemsUser
DB_PASS=pemsPass
DB_HOST=localhost
DB_SCHEMA=mssql
DB_PORT=1433
ENV_NAME=local
ENV_PORT=5000
AUTH_SUPERSECRET=mysecretkey
```
#### Also make sure you create the database/user/password before running the app. ORM will create the tables and relations automatically in the database.

#### When doing PUT and POST do not forget to add in the request header:
 ```
Content-Type: application/json
 ```
#### Unit Testing is written to test 100% of code functionality and routes. there are static and dynamic routes unit testing. To test open a console command window at the project scope and type "mocha" and press enter. you should see all unit test run and passing.

#### See below for routes end points. 
## Display all users info including related entities
- GET Route: http://localhost:5000/api/users

#### Response Data:
```javascript
[
	{
		id: 1,

	},
]
```
## Display all courses info including related entities for a userId
- GET Route: http://localhost:5000/api/users/1/courses

#### Response Data:
```javascript
[
	{
		id: 1,
	
		courses: [
      {
				id: 1,
				title: ""
			},	
		]
  },
]
```

## Update user info 
- PUT Route: http://localhost:5000/api/users/1 (1 could be any id value)

#### Request Header: 
```
Content-Type: application/json
```

#### Request Body: 
```javascript
{"id":1,"name":"Juan",...}
```

#### Response Data:
```javascript
[
	301,
	{
		id: 1,
	  ...
	},
	null
]

```
## Insert new user 
- POST Route: http://localhost:5000/api/users 

#### Request Header: 
```
Content-Type: application/json
```
#### Request Body: 
```javascript
{"name":"maria"}
```

#### Response Data:
```javascript
[
	201,
	{
		id: 5, 
		name: "Maria",
	},
	null
]
```
```
## Delete user 
- DELETE Route: http://localhost:5000/api/users/1 (1 could be any id value)

#### Response Data:
```javascript
[200,"id: 3 deleted!",null]
```
