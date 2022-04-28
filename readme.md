
# Sakar Api

Backend API for Sakar Freelancing Site

## Indices

* [Authentication](#authentication)

  * [Login User](#1-login-user)
  * [Register New User](#2-register-new-user)

* [Jobs](#jobs)

  * [Create new job](#1-create-new-job)
  * [Delete job](#2-delete-job)
  * [Get Single Job](#3-get-single-job)
  * [Get all Jobs](#4-get-all-jobs)
  * [Update  job](#5-update--job)


--------


## Authentication
Handle Authentication Routes



### 1. Login User


Get Jwt for User


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/auth/login
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | json |



***Body:***

```js        
{
    "email" : "ravilamichhane30@gmail.com",
    "password" : "pass123"
}
```



### 2. Register New User


Register a User


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/auth/register
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | json |



***Body:***

```js        
{
    "name" : "Ravi Lamichdfdhane",
    "email" : "ravilamichhane31@gmail.com",
    "password" : "pass123",
    "isAdmin" : true

}
```



## Jobs
CRUD functionality for Jobs



### 1. Create new job


Add new job . User must be Authenticated


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/jobs/
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | json |
| Authorization | Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZWYzOGU4YjllYjZlZTFkZDhkN2JiZTEiLCJpYXQiOjE1OTMwMjA5NjYyNDcsImV4cCI6MTU5Mzg4NDk2Nn0.e_vRKyMdQP12Z88GuFWS75mzxeoRs-ggl9cLDLtn31aZDbtJGbHIIr-YrhJfeujFSZj0i3ojMO9_6UNg1S9696Ddv2GIAFMyKYomnKNd4sgDgNpfrWNeabHoGfkXsuspiymV3Qbcz0P_N-B3j3Exil2pnFT9WOb1gNQhS_t-ssw3g8DG6-9GyBI7Essqrorghu7O8AXvsfdi1b35mk1DwudhcCnRsy3e3ISphMP1GMS-me4p3_vs0eHdNkDzbNCZQlPYYUE_-9MfEPZBpM1tOzu6XTFdInE4jPwyfNKqYGJxZtZ8W1qOnMFZXCr_cJTrCBK8WZ-hnW66n1MTfm0vcbl2bI63uPGPP84ltxB_WqGdhsbn8qqm5jZeFlAW8CtyE-x6vEyHgab1PulyH1ic-fWHnQBzN6UuBqJ4EQ7stsc8rw7ghzX1RfOIiJgKG0y4ygpXbTWFFPJRndF9_fkfwS-NSfunzrsvCKqEbk29ffG0-KzfmCpUOkQdH9JySw4tC1IFAbh8vcXFZfJeUlanQtvPoPMpSqMamN8MbwZI7EtTMmE4UG2OVMd1oBBZUlIjRiwLMOBa7-YeQEA9SbUuL-kB-gFzHZxennZZ62LvOJxCZZl5rD59GqrdRytKTRS-gUkiqJbG4e6bazcLmsGeYep24xbB7BCty1Ljrg3TfCY |  |



***Body:***

```js        
{
    "title" : "Job 2",
    "description" : "This is the second Job",
    "categories" : "Photoshop",
    "budget" : "8000",
    "time" : "2 days"
}
```



### 2. Delete job


Delete Job from Database


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/jobs/5ef3961e812b23228c044922
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZWYzOGU4YjllYjZlZTFkZDhkN2JiZTEiLCJpYXQiOjE1OTMwMjA5NjYyNDcsImV4cCI6MTU5Mzg4NDk2Nn0.e_vRKyMdQP12Z88GuFWS75mzxeoRs-ggl9cLDLtn31aZDbtJGbHIIr-YrhJfeujFSZj0i3ojMO9_6UNg1S9696Ddv2GIAFMyKYomnKNd4sgDgNpfrWNeabHoGfkXsuspiymV3Qbcz0P_N-B3j3Exil2pnFT9WOb1gNQhS_t-ssw3g8DG6-9GyBI7Essqrorghu7O8AXvsfdi1b35mk1DwudhcCnRsy3e3ISphMP1GMS-me4p3_vs0eHdNkDzbNCZQlPYYUE_-9MfEPZBpM1tOzu6XTFdInE4jPwyfNKqYGJxZtZ8W1qOnMFZXCr_cJTrCBK8WZ-hnW66n1MTfm0vcbl2bI63uPGPP84ltxB_WqGdhsbn8qqm5jZeFlAW8CtyE-x6vEyHgab1PulyH1ic-fWHnQBzN6UuBqJ4EQ7stsc8rw7ghzX1RfOIiJgKG0y4ygpXbTWFFPJRndF9_fkfwS-NSfunzrsvCKqEbk29ffG0-KzfmCpUOkQdH9JySw4tC1IFAbh8vcXFZfJeUlanQtvPoPMpSqMamN8MbwZI7EtTMmE4UG2OVMd1oBBZUlIjRiwLMOBa7-YeQEA9SbUuL-kB-gFzHZxennZZ62LvOJxCZZl5rD59GqrdRytKTRS-gUkiqJbG4e6bazcLmsGeYep24xbB7BCty1Ljrg3TfCY |  |



### 3. Get Single Job


Get Single Job by Id


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/jobs/5ef3961e812b23228c044922
```



### 4. Get all Jobs


Fetch all active jobs from the database


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/jobs
```



### 5. Update  job


Update job in database


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/jobs/5ef3961e812b23228c044922
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | json |
| Authorization | Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZWYzOGU4YjllYjZlZTFkZDhkN2JiZTEiLCJpYXQiOjE1OTMwMjA5NjYyNDcsImV4cCI6MTU5Mzg4NDk2Nn0.e_vRKyMdQP12Z88GuFWS75mzxeoRs-ggl9cLDLtn31aZDbtJGbHIIr-YrhJfeujFSZj0i3ojMO9_6UNg1S9696Ddv2GIAFMyKYomnKNd4sgDgNpfrWNeabHoGfkXsuspiymV3Qbcz0P_N-B3j3Exil2pnFT9WOb1gNQhS_t-ssw3g8DG6-9GyBI7Essqrorghu7O8AXvsfdi1b35mk1DwudhcCnRsy3e3ISphMP1GMS-me4p3_vs0eHdNkDzbNCZQlPYYUE_-9MfEPZBpM1tOzu6XTFdInE4jPwyfNKqYGJxZtZ8W1qOnMFZXCr_cJTrCBK8WZ-hnW66n1MTfm0vcbl2bI63uPGPP84ltxB_WqGdhsbn8qqm5jZeFlAW8CtyE-x6vEyHgab1PulyH1ic-fWHnQBzN6UuBqJ4EQ7stsc8rw7ghzX1RfOIiJgKG0y4ygpXbTWFFPJRndF9_fkfwS-NSfunzrsvCKqEbk29ffG0-KzfmCpUOkQdH9JySw4tC1IFAbh8vcXFZfJeUlanQtvPoPMpSqMamN8MbwZI7EtTMmE4UG2OVMd1oBBZUlIjRiwLMOBa7-YeQEA9SbUuL-kB-gFzHZxennZZ62LvOJxCZZl5rD59GqrdRytKTRS-gUkiqJbG4e6bazcLmsGeYep24xbB7BCty1Ljrg3TfCY |  |



***Body:***

```js        
{
    "categories" : ["Photoshop","UI/UX"]
}
```



---
[Back to top](#sakar-api)
> Made with &#9829; by [thedevsaddam](https://github.com/thedevsaddam) | Generated at: 2020-06-25 16:31:23 by [docgen](https://github.com/thedevsaddam/docgen)
