# E-Commerce Website
A generic e-commerce website with MERN stack (MongoDB, Express, React, Node) currently working on localhost. Work-in-progress...

# Features
## Authentication - User In
  * ### Register
    * Get inputs from user on client side.
    * Check if inputs are sent in valid format.
    * If inputs are valid, send them to server side and await response from server.
    * Inform user on client side depending on the response (Registered successfully or error).
  * ### Login
    * Get inputs from user on client side.
    * Check if inputs are sent
    * If inputs are sent by user, send them to server and await response (access token as a browser cookie) from server.
    * If response succeed, then save the cookie to the browser from response.
    * Inform user on client side depending on the response. (Signed in succesfully or error)
  * ### Authorization
    * If user is logged in, there is an access token stored in browser as a cookie.
    * When user tries to access to a page which requires authorization, (such as user profile) app needs to check if user logged in or not.
    * Application sends a request to server to get user data.
    * If server sends back user data as response, it means user is logged in.
    * If server response is an error, it means user is not logged in and the app should catch the error.
  * ### Log Out
    * When user logged out, access token in browser cookies is removed.
  * ### Forgot Password
    * When user clicks on "I forgot my password" option in login page, system asks for e-mail.
    * After user submits e-mail, system sends a link to the user's e-mail adress, if it exists.
    * This link is unique, secure and expires in an hour. Only the user who registered with this e-mail adress can use it.
    * When user clicks on the link via e-mail, system asks the user for new password.
    * After user submits password, password will be changed if session is not expired.

## OTHER FEATURES COMING SOON...
(Admin panel, products, categories)
