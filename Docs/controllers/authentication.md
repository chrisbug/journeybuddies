# Authentication controller docs

User Schema will be Object for each user consits of the following.

| Dependancies |
| ------------ |
| passport     |
| mongoose     |
| user model   |

Methods
---
* register
  * requries Resquest with.
    * email.
    * firstName
    * lastName
  * It will then call save method from user model
  * returns a JWT.
* login
  * uses passport to authenticate user.
    * requires the user email and password.
  * returns a JWT and status.
    * 200 is okay.
    * 404 passport error.
    * 401 no user found.
