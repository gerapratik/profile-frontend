# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`


Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

			FULL STACK PROFILE APPLICATION

REGISTER PAGE:
When user registers in the application  with following , his/her first name  and last name is captured and saved in the profile collection in Mongodb .
![image](https://user-images.githubusercontent.com/85092790/189881172-94456263-0e23-43b5-9d1f-3e36118dd330.png)

LOGIN PAGE:Only the authorised user can login in the application.
![image](https://user-images.githubusercontent.com/85092790/189881205-5fdaac09-5074-4e0d-8efc-fd9e67025924.png)


The email and password are matched with the email and password in the Mongodb collection , only then the user is allowed to login

USER PROFILE PAGE: This page displays profile for the user. For each logged in user,  unique saved  profile is getting fetched from mongodb collection
![image](https://user-images.githubusercontent.com/85092790/189881235-fd205f41-5713-412e-8fba-66bb919ecc4d.png)

EDIT PROFILE MODAL : When user clicks on edit profile , user can modify the profiles add , edit experiences.
a)First and Last Name , Company Name , Start Date, Job Title are required fields
b) When user selects on current , end date is hidden, 
c) When user saves the Edit Profile modal , updated profile is stored in Mongodb collection
![image](https://user-images.githubusercontent.com/85092790/189881260-25a2250e-f66a-462e-90b5-cff3c6c3a4e0.png)


