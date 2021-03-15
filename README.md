# Teams Management System - Tempo.io Test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

### `npm test`

## Solution

- Used React, Context API, Styled Components, React Testing Library, React Router Dom, React Icons and other minor packages.
- Handling state with unique Context API to avoid messy props.
- Created a list of teams which is the main route of app.
- Created a team page to show the team members, filtering the list of users by team id.
- Created a filter with logic to handle with different pages and filters.
- Created two lists of teams and users looking for better performance on filter records.
- Created a reusable component of ListItem to use with Team and User, including conditional rendering of item action.
- Created a reusable component to handle with loading indicator when the app is finding some API data.
- Created a reusable component to handle with empty lists.
- Created a reusable component to handle with page title.

### Testing

- Created tests of all pages mocking values of Context.
- Created tests of all reusable components with different values of props.