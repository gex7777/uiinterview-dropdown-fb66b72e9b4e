### Problem statement

#### Files

- index.html
- src/index.js (app file)
- src/components (where the components reside)
- Code to be checked in back to the same repository

#### Build

- Build a drop down component using using a combination of div/span/ul/li which shows a list of colors - green, blue, red & black.
- The drop down should show the color name as well as a small indicator of how the color looks
- Refrain from using select and option tag since the idea is to mimic a dropdown


Presentation

- The component should support label and value as a typical select component would do
- Display a list of items from which the user can select one value
- On selecting an item the list should collapse and selected value should be shown on the drop down
- The dropdown unit to support a search field which on typing filters the list of items shown
- The drop down should be wrapped inside a parent container and whenever the user selects a color, the background color of the parent container should change to reflect the color selected

Brownie Points

- If the drop down is rendered closer to the bottom/top of the page, the expanded list should render above the drop down anchor if positioned closer to the edge of the page or vice versa

Evaluation

- Code structure (The default state of dropdown + search & options listing to be handled by different components)
- Logic
- Styling
- Functionality

Functionality Overview

 <img src="https://imgcdn.shortlyst.com/?u=https%3A%2F%2Fstatic.shopalyst.com%2Fassets%2Fcampaigns%2FScreenshot_2023-08-31%2520at%25201%2C43%2C02%2520PM_1693469660212.png" width="128" />


Stack

- react
- parcel (install from https://parceljs.org/getting_started.html)
- nodejs & npm (download & install from https://nodejs.org/dist/latest-v10.x/)

Run

- `npm install` - Install all dependencies in package.json
- `npm run start` - Parcel will start a live reload server at port 1234 and take care of build & bundling
