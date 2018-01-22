# User model docs

User Schema will be Object for each user consits of the following.

| Vlaues    | email | firstName | lastName | hash  | salt  |
| --------- | ----- | --------- | -------- | ----- | ----- |
| Type:     | String| String    | String   | String| String|
| Required: | yes   | yes       | yes      | yes   | yes   |
| Unique:   | true  | false     | false    | false | false |

Methods
---
* setPassword
  * Requries string.
  * Stores the hashed password in DB.
* validPassword
  *  Requires string.
  *  Retruns true if password hash matches stored hash.
* generateJwt
  * Returns a JWT for the user to store client side.
  * Used to identify client as legitmate user.
  * Will Expire.
