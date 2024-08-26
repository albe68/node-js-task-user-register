# Node.js User Registration

### Overview

This project is a Node.js application that demonstrates user registration using MongoDB for data storage. The application includes functionality for user registration.

----
### Prerequisites

Before running the project, ensure you have the following installed:

- Node.js (v14 or higher)
- MongoDB
- npm
----
#### Installation

- Clone the repository

```
$ git clone https://github.com/albe68/node-js-task-user-register.git
```
```
$ cd your-repository

```
1. Install Dependencies :

```
$ npm install 

```

2. Create a .env file : 

```dotenv	
PORT=8080
MONGODB_CONNECTION_URI=mongodb://0.0.0.0:27017
ENV=development
```
----
#### Usage

1. Start the Server
```
$ npm start

```

2. Hit API Endpoints

Register User
```

POST /api/v1/register-user

```

Request body:

```json
{
    "full_name":"mock_full name",
    "user_name":"mock_username",
    "email": "mock_email@email.com",
    "phone_number":1234567890,
    "password":"mock_password",
    "cnf_password":"mock_password",
    "login_status": false
}
```

>Note: Data validation for payload is strict.

----
### API Modules

- [x] User Registeration Module
    - [x] Data Santization
    - [x]  Password Encrypted
	- [x] Exsisting user validation
    - [x] API versioning









