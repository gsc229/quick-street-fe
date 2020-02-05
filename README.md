# Market Avenue

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Contributors

|                                       [Richard Lawson](https://github.com/lawsonarichard)                                       |                                           [Chao Ji](https://github.com/cjgodfather)                                           |                                    [Rashmi Poddar](https://github.com/rashmipoddar)                                     |                                      [Dominique Maack](https://github.com/dmaack)                                       |                                          [Greg Cameron](https://github.com/gsc229)                                          | [Luis Ocasio](https://github.com/LuisOcasio)                                                                                                                                                                                                   |
| :-----------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<img src="https://ca.slack-edge.com/T4JUEB3ME-UJRACG1SQ-443632831451-512" width = "200" />](https://github.com/lawsonarichard) |
|  [<img src="https://ca.slack-edge.com/T4JUEB3ME-ULVDSJDLG-3313f82a2992-512" width = "200" />](https://github.com/cjgodfather)   | [<img src="https://ca.slack-edge.com/T4JUEB3ME-ULJ1T89DY-9fcc77e18fe9-512" width = "200" />](https://github.com/rashmipoddar) | [<img src="https://ca.slack-edge.com/T4JUEB3ME-UJQLGLDB5-79302f48ee3c-512" width = "200" />](https://github.com/dmaack) | [<img src="https://ca.slack-edge.com/T4JUEB3ME-UJG4U8BNZ-917ae58a74d9-512" width = "200" />](https://github.com/gsc229) | [<img src="https://ca.slack-edge.com/T4JUEB3ME-UHADUPR0B-5b039d19981f-512" width = "200" />](https://github.com/LuisOcasio) | [<img src="https://media-exp1.licdn.com/dms/image/C4E03AQFPdR3DfdmBkw/profile-displayphoto-shrink_800_800/0?e=1586390400&v=beta&t=k0hoRjxuwh4LqxonQH540NUmKOsEbEhb_NpGuflbPlk" width = "200" />](https://www.linkedin.com/in/kimberly-mai-ho/) |

| [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/lawsonarichard)
| [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/cjgodfather) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/rashmipoddar) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/dmaack) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/gsc229) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/LuisOcasio) |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](www.linkedin.com/in/lawsonarichard) |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/chao-ji-113b594a/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](www.linkedin.com/in/rashmi-poddar) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/dominique-maack-414bab58/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/greg-cameron-90488b30/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/ocasio-perez/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/kimberly-mai-ho/)

### `yarn build`

## Project Overview

[Trello Board](https://trello.com/b/QXUkqLLu/labs-19-quick-street)

[Product Canvas](https://www.notion.so/Quick-Street-fcd89be6b3d5462c90a0033f40a32287)

[UX Design files](https://www.figma.com/file/BirDv4xu8PdyJNpwFJLvmN/Quick-Street%2C-Kimberly-Ho?node-id=826%3A9834)

Description

It is a one stop platform for like-minded users and local vendors to connect. The vendors are able to market their product online. The users will be able to browse and buy products in their area from vendors that can sell at a reduced overhead cost by removing the entry and time constraints involved in participation at a physical farmers market

### Key Features

- Vendors can register and create their account.
- Vendors can add, update and delete their profile which contains three main things
  - An about section that has information about the vendor
  - A product section that showcases all the products that the vendor has to offer along with images
  - A bulletin board section that displays special updates and news
- Customers can view all the vendors in their area by inputting a zipcode

## Tech Stack

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

#### React

- React is great choice for building interactive and dynamic UIs. It is component based which is perfect for an application like Market Avenue which has a nested component structure.

#### Sass/SCSS

- It allows us to create variables, mixins and functions which makes it easy to reuse styles across the app. It allows us to write nested CSS which is easy to write and understand

#### Cloudinary React

-

#### Axios

-

#### Front end deployed to `🚫insert service here`

#### [Back end](https://github.com/Lambda-School-Labs/quick-street-be) built using:

#### Express

- made it fast and easy to set up
- allowed us to create Restful API
- made it easy to connect to mongooseDB
- made it easy to incorporate middleware

#### MongoDB

# APIs

## Authentication API here

The API allows users to register and login to Market Avenue. There are two user types - vendors and customers.

## Google Maps JavaScript API

We are using the Google Maps JavaScript API to display a map to the users which points out the area in which a vendor works.

## Google Geocoding API

We are using the Google Geocoding API to convert a zipcode into geographic coordinates (like latitude and longitude), to position the map.

## 2️⃣ Payment API here

🚫Replace text below with a description of the API

This is the way you take out your flustrations. Get away from those little Christmas tree things we used to make in school. Isn't it fantastic that you can change your mind and create all these happy things? Everything's not great in life, but we can still find beauty in it.

# Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file at the root level containing the following:

    *  REACT_APP_GOOGLE_MAPS_API_KEY - This is your Google API key, which can be generated in the Google Cloud Console

# 5️⃣ Content Licenses

🚫For all content - images, icons, etc, use this table to document permission of use. Remove the two placeholders and add you content to this table

| Image Filename | Source / Creator | License                                                                      |
| -------------- | ---------------- | ---------------------------------------------------------------------------- |
| doodles.png    | Nicole Bennett   | [Creative Commons](https://www.toptal.com/designers/subtlepatterns/doodles/) |
| rings.svg      | Sam Herbert      | [MIT](https://github.com/SamHerbert/SVG-Loaders)                             |

# 4️⃣ Testing

🚫Document what you used for testing and why

# Installation Instructions

- Clone this repo
- **npm install** to install all required dependencies
- **npm start** to run the app in the development mode

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](https://github.com/Lambda-School-Labs/quick-street-be) for details on the backend of our project.
