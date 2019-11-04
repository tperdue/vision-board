# PicCollage

A web application that allows a user to create picture collage using pictures from the user's local file system or pictures searched from the web.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

 * Node version 12.13.0 or higher


### Installing

Clone git repo

```
git clone git@github.com:tperdue/vision-board.git
```

Change into directory where repo was cloned.

```
cd vision-board
```

Install dependencies.

```
npm install 
```

Run project.

```
npm start 
```





## Deployment

Add additional notes about how to deploy this on a live system

## Project Details

The following is a list of the major compoments in the application

### Canvas Board



Code:
* [Individual Canvas Cell Component](src/reena-components/Canvas.js)
```

Template Board Component: src/reena-components/Template.js 
Template Selection Component: src/reena-components/Te


Redux Actions: src/redux-store/actions/color-picker.js
Redux Reducer: src/redux-store/reducers/color-picker.js

```

### Color Picker

Code:
```
Color Picker Component: src/color-picker-components/ColorPicker.js 
Redux Actions: src/redux-store/actions/color-picker.js
Redux Reducer: src/redux-store/reducers/color-picker.js

```

### User Authentication

The application's user authentication system is using Firebase

Code:
```
Login React Component: src/tim-component/Login.js 
Redux Actions: src/redux-store/actions/user.js
Redux Reducer: src/redux-store/reducers/user.js

```





## Built With (no particular order)

* [React ](https://github.com/facebook/react) - A declarative, efficient, and flexible JavaScript library for building user interfaces. 
* [Redux](https://github.com/reduxjs/redux) - State management
* [React-Redux](https://github.com/reduxjs/react-redux) React Binding for Redux
* [Reach Router](https://github.com/reach/router) - React Routing Library
* [Material UI](https://github.com/mui-org/material-ui) - A React UI component library.
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
* [Firebase](https://github.com/firebase/firebase-js-sdk) - Used for serverless backend infrastructure.
* [Uploadcare React Widget](https://github.com/uploadcare/react-widget) - React component used to upload and edit images



## Authors

* **Michael Le**  [LeMichael07](https://github.com/LeMichael07)
* **Reena Gouldbourne** [ReenaGo](https://github.com/ReenaGo)
* **Tim Perdue**  [TPerdue](https://github.com/tperdue)
* **Veronica Johnson** [JOHNSOV5](https://github.com/JOHNSOV5)


