# Exoplanet

Exoplanet is an application that uses Nasa's public API information to access and obtain
data on all confirmed exoplanets. Users can then keep track of any exoplanet by adding them
to a personal list of favorites. Add as many to your list as you need, along with a tag to
remember them by!

## How It Works

Start by creating an account to receive full access to all of Exoplanet's features. From here users have the option to:
* Change your current login password
* View all of the confirmed exoplanets through Nasa's public API
* Create a new 'favorite' item with a custom tag that is tied to your personal list of favorites
* View or modify the tags for any saved exoplanet
* Delete a favorite item

## Stretch Goals and Future Features to Come!

* Users will soon be able to pin various locations using our 3rd party map
* Users will soon be able to filter through their completed entries
* Users will soon be able to add a picture to an entry
* Users will soon be able to attach a timeframe to a list or goal
* Users will soon be able to view other public lists and like or follow a list

### Repos and Deployment

Link to the client repo and deployed website

* [Exoplanet-Client Repo](https://github.com/MStephen024/exoplanet-capstone-client)
* [Exoplanet-Server Repo](https://github.com/MStephen024/exoplanet-capstone-server)
* [Exoplanet Deployed Website](http://mstephen024.github.io/exoplanet-capstone-client)
* [Exoplanet Deployed Heroku](https://sleepy-caverns-37154.herokuapp.com/)


### User Stories

- As a user I want to be able to create a new Favorite item with Nasa data
- As a user I want to be able to show all Favorite items
- As a user I want to be able to update any existing Favorite tags
- As a user I want to be able to delete items from Favorites list


#### Stretch-Goal User Stories

- As a user I want to be able to search through all exoplanets
- As a user I want to be able to filter through all exoplanets
- As a user I want to be able to filter data from individual exoplanets
- As a user I want to be able to navigate to Nasa website for each exoplanet data
- As a user I want to be able to sort my favorites


### The Process

I began this project in the back-end by creating a model for the Favorite resource. The
model held each of the properties passed down from the Nasa API and an added 'tag'
properties that is required and will be editable by the user. From the model I
created the routes for each future CRUD action. This allows the front end to receive
the data from the API from the specified URL route. The route was then registered
in the server.js file. To finish off the back-end I created a folder with the
curl-scripts for the CRUD actions. After I tested the curl-scripts in the terminal
I was ready to move into the front-end.

For the front-end I used Reactjs. Using reactjs requires components to
dynamically load JSX onto webpages. I started by creating a folder to hold each
of the Favorite components--and a separate folder to hold the exoplanet data. I
focused on loading the exoplanet data onto the page. The data was acquired using
axios and passing in the URL from the NASA website. It was then mapped over and
rendered on the specified route.

Components were next and handled in the standard CRUD order. With create I was able
to add a tag to the existing exoplanet data and then transfer that combined object
to the Favorites list. In order to view the added items I had to configure the
index action for the favorites list. Axios by default uses a GET method so the file
wasn't too much of a pain. Once I was able to see each user item on the webpage I
knew I needed to select each item individually to allow a user to update, and delete.
Showing each item separately mainly required passing the URL link an id to differentiate
each item from the other. And since each page is essentially going to be set up the same
way, I added a Delete and Edit button to modify each item. The edit function requires a
separate file to configure. I, again, used axios to both GET the information from the
Favorite item and PATCH the current state of the item's 'tag' field. I made sure the
new tag value was saving to the Favorite item and rendered the information properly
to the webpage. All that was left was delete and that was done with a function within
the file created that displays each individual item. A DELETE function was added to
handle everything and once the state was updated I had completed my Exoplanet project.


### The Routes

| Verb   | URI Pattern  | Result |
|:-------|:-------------|:------------------|
| GET    | `/exoplanets`     | Nasa Confirmed Exoplanets    |
| GET    | `/favorites`     | list all favorite items    |
| POST   | `/create-favorite`     | create favorite item       |
| PATCH  | `/favorites/:id/edit` | update favorite item       |
| DELETE | `/favorites/:id` | destroy favorite item      |


## ERD Images
* ![Imgur](https://i.imgur.com/8dGffVd.jpg)

## Built With

* HTML
* CSS
* JavaScript
* [Reactjs](https://reactjs.org/docs/getting-started.html) - Reactjs Docs
* [ExpressJS](https://expressjs.com/en/api.html) - The web framework used
* [MongoDB](https://docs.mongodb.com/manual/) - Non-Relational Database Program
* [Mongoose](https://mongoosejs.com/docs/) - Object Data Modeling(ODM) library for Node.js and MongoDB
* [Node.js](https://nodejs.org/en/docs/) - JavaScript Run-Time Environment


## Acknowledgments

* NASA
