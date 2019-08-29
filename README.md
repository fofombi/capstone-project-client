
# Links
Link to deployed site: https://fofombi.github.io/capstone-project-client/
Link to the API repository: https://github.com/fofombi/capstone-project-api
Link to the deployed API: https://young-falls-92381.herokuapp.com/

# Application Description
Tech. PathLab app is a single-page application which allows users  (Technicians & Technologists) to search for Patients Pathology tests and  review them. Once signed up and authenticated, users can view Patients and create new patient entries. Users can search Patients from the database. The backend was built using Express.js and MongoDB. The front-end was built using React.js and Axios for http requests (the requests communicate with the back end and third-party API).

# Technologies Used

Frontend     | Backend    |
| ------------- |------------|
| Javascript    | Node.js    |
| HTML          | Express.js |
| jQuery        | MongoDB    |
| CSS3/SCSS     | Heroku     |
| React         | Material UI|
|  Git/GitHub   |      API   |


#### Catalog of routes
| HTTP   | Paths          |
| ------ |----------------|
| GET    | /patients      |
| POST   | /patients/:id  |
| PATCH  | /patients/:id  |
| DELETE | /patients/:id  |


# Setup and Installation
1- Download the react template.
2-Unzip and rename the template directory (unzip ~/Downloads/react-auth-template-master.zip)
3-Move ( use the mv command line to move it to the sei/projects/ directory.) into the new project and git init.
4-Empty README.md and fill with your own content.
5-Replace react-auth-template in package.json with my projects name.(capstone-project-client)
6- Replace the "homepage" field in package.json with your (public) Github account name and repository name.
7-Install dependencies with npm install.
8-git add and git commit my changes.
9- Run the development server with npm start.

 The front end includes respective components for the main page, header with navigation, patient search, edit/create forms, and pages allowing to view collections/individual patient entries.

 # Wireframes
 Link to Wireframe: https://imgur.com/a/zk4t48w

 ![image](https://i.imgur.com/8wEfro7.jpg))


 # ERD

 Link to ERD: https://imgur.com/a/QI6kVaZ

  ![image](https://i.imgur.com/aAUWrw1.jpg)

  #  Screenshot Of The App
  * Home Page
 ![image](https://i.imgur.com/UdJamYz.png)

 * Before Sign-up
 ![image](https://i.imgur.com/XF0iu2T.png)

 * Page with Single resource(patient)
 ![image](https://i.imgur.com/1nZabHx.png)

 * Page with multiple resources(patients)
 ![image](https://i.imgur.com/FTN9KOd.png)


# User Stories
As an unregistered user, I would like to sign up with my user Name, email and password.
As a registered user, I would like to sign in with my email and password.
As an authenticated user, I would like to be able to change password.
As an authenticated user, I would like to be able to sign out.
As an authenticated user, I would like to be able to search for patients.
As an authenticated user, I would like to add search test(s) of my patient processed in Pathology Laboratory.
As an authenticated user, I would like to be able to edit edit/delete entries in only patients I work on .


## The Development
PathLab is a single page application that allows a user to sign up, sign in, change password and sign out.
I first work on the Wireframe, the ERD and make sure the authentication works  before moving forward.
I plan accordingly  my daily goal so that every day I could  commit my work, and finish the project before the due date.

# Unsolved Problems / Future Iterations
Though the UI is fully functional, it is currently still lacking in attractiveness.
I am planning to further work on styling my components  and ensuring that they are rendered smoothly.
This app is specifically designated for Technicians and Technologists, I wish to extend it the the Fellow and Pathology Doctor so they could add the results of the Diagnostic.
I would like in the Future add the option of selecting the test available at Path Lab, to avoid same mistakes.
