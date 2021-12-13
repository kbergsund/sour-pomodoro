# [sour pomodoro](https://kbergsund.github.io/sour-pomodoros/) 
(It's Definitely Not Rotten Tomatoes...)

 ## A Front End Engineering Project by: 
  - [Kyra Bergsund](https://github.com/kbergsund)
  - [Regan Losey](https://github.com/reganlosey)


 ### Project Managers: 
  - [Cassandra Torkse](https://github.com/CassandraGoose)
  -  [Kayla Gordon](https://github.com/kaylagordon)


<hr>

## Abstract
- sour pomodoro is a one-stop shop for some of the worst movies from the past couple of years. The homepage provides a quick view of each movie, with a star-rating visual above the poster. Choose to sort by a number of metrics to find the worst-rated, the oldest, or just alphabetically. Clicking any of the poster redirects you to a unique URL that provides additional data, from budget/revenue numbers, if available, to a numerical rating.

## Languages/Technology
- React 
- React Router
- Javascript
- HTML
- Sass 
- Cypress

## Learning Goals
- Gain competency with React 
- Create a multi-page UX using Router
- Test React components & asynchronous JS using E2E testing


## Install & Setup
* Visit deployed site [here](https://kbergsund.github.io/sour-pomodoros/)
Or:
1. Clone this down
2. `cd` into the directory
3. Run `npm install` and then `npm start`
5. Head to `localhost:3000` in your browser  

## Site Overview 

 - On load, users see a grid of movie posters. A corresponding star-rating visual is underneath. Posters scale slightly on hover.
  
<img src="https://user-images.githubusercontent.com/82983696/145870321-ae76b835-8c1c-4e2c-961e-88e29d009c75.gif"  width="1052" >

<br>

- In the upper right is a sort dropdown with a variety of sort options. The grid re-renders when a user makes their selection.
  
<img src="https://user-images.githubusercontent.com/82983696/145870313-0b086d7f-eb09-4eca-a5d2-2d0af71f85b0.gif" width="1052">

<br>

- Clicking on a movie poster redirects users to a unique URL. Here they can see a backdrop image from the movie and additional data. Clicking the 'X' in the upper left takes them back to the homepage.
  
<img src="https://user-images.githubusercontent.com/82983696/145870303-24d48d03-569a-495f-9159-ca36e3f4f71e.gif" width="1052">

<br>

- If, at any point, a user tries to input their own invalid URL, they see an error page that gives them the option to go back to the homepage.

<img src="https://user-images.githubusercontent.com/82983696/145871548-2fabfc76-8cc5-4005-912c-272a8b7fff53.gif" width="1052">

<br>

## Future Directions
1. Add a search bar to the homepage (search by title)
2. Impliment filtering by genre
3. Add more data


## Project Spec & Rubric
- [Here](https://frontend.turing.edu/projects/module-3/rancid-tomatillos-v3.html)

## Resources:
  - [reactjs.org](https://reactjs.org/)
  - [docs.cypress.io](https://docs.cypress.io/)


Header background illustration by [MITstudio](https://stock.adobe.com/contributor/206977406/mitstudio) via Adobe Stock
