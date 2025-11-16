# Recipe-Finder
This is a recipe finder web applicaton made with React using The MealDB API.

It's built with learning purposes, based on [Florin Pop App Ideas](https://github.com/florinpop17/app-ideas).

Check it live here: [https://recipe-finder-three.vercel.app/](https://recipe-finder-three.vercel.app/)

## Screenshot

![Recipe Finder Mobile](https://user-images.githubusercontent.com/57023693/103819928-21cfca80-504a-11eb-86ec-531c89e38574.png)

## Features
- Search for recipes by typing the main ingredient (i.e. "Chicken", "Cheese")
- Get random recipe suggestions
- Get details of each recipe (ingredients list and preparation)  

## How to run

### Running with docker

Make sure you have [Docker](https://www.docker.com/) installed.

Build the docker image by running the following command in the project directory:

```docker build -t recipe-finder .```

Then run the container mapping the port 3000, voluming the current directory to /app in the container:

```docker run -it -p 3000:3000 -v $(pwd):/app recipe-finder```

Or accessing the container bash:

```sh
docker run -it -p 3000:3000 -v $(pwd):/app recipe-finder /bin/bash

# then, inside the container, run:
npm start

```

Your app will be running at http://localhost:3000.

### Running locally

Download or clone this repository.

Make sure you have installed node version >= 10. You may check with: 

```node -v```

In the project directory, install the necessary packages locally by running:

```npm install```

Next, start up a local server:

```npm start```

Your app will be running at http://localhost:3000.

## Built With:

- React - [Create React App](https://github.com/facebook/create-react-app)
- [styled-components](https://styled-components.com/)
- [The Meal DB API](https://www.themealdb.com/api.php)
