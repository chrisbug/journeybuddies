## Sprint Report.
### Authentication user story
Users need to sign up and in.
Only authenticated users can access routes on backend.
Users need a js web token to prove to server they should have access.
User passwords need to be protected and not stored in plain text.

---

| Goals | Status
| ---------------- | -- |
| Sign in & Sign up | X  |
| Protected backend routes | X |
| Users password hashing | X |
| Generating JWT for users | X |

#### Breakdown of Goals Achived.

###### Sign in & Sign up
Users can signup and if signedup they can sign in.

###### Protected backend routes
End points are protected and users must provided a JWT that will be checked with a
salt stored with each user.

###### Users password hashing
User passwords aren't stored in plaintext and now store a hash of the password
In line with best pratice.

###### Generating JWT for users
JWT are generated in the back end and sent to the client. JWT will expire. 
