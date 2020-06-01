# CS361 - COVIDCoach 
View live at http://covidcoach.herokuapp.com/. 

This is a project built for Oregon State University's CS361 course - Software Engineering I.

There are three primary goals for COVIDCoach:
* help people avoid catching the virus,
* help people learn about the virus, and
* help people stay connected and in touch with others.  

Avoiding COVID-19: The application provides basic information regarding transmission and spread of COVID-19. Users can learn about what symptoms of COVID-19 look like, and prevention methods that they can take. There is a brief description of social distancing and how to best distance yourself from others. 

Learning about COVID-19: COVIDCoach is a non-biased, data-driven source where users can learn more about the COVID-19 pandemic. The data includes both a global overview of COVID-19 cases and a breakdown of COVID-19 cases by state in the United States. 

Stay connected: The "remind" tab of COVIDCoach integrates with your Google account and Google Calendar to create a reminder for your calendar. You can set the reminder for any day and time, and hitting submit will forward the event onto your calendar for future reference. 

There is also a help page on the site describing basic information regarding COVIDCoach. 

The site was built with these quality attributes in mind:
* Accessibility:
We want to have users of all ages that are able to easily access our application and understand the information on our page. Because older citizens are also more at risk, we want information to be easily digestible, easily usable, and recognizable. 
* Credibility:
COVID-19 is a pandemic and dominating global news. With that comes a lot of misinformation regarding the virus, how the virus is spread, and prevention methods. We want to choose non-biased, professional medical sources to highlight and deem relevant. 
* Localizability:
The recommendations and official guidelines on what is allowed varies widely from state to state. By having localizability, it allows for users to obtain more relevant and correct information at all times. 


## Built With
* [React](https://reactjs.org/)


## Authors
* **Elizabeth Tackett** - [emctackett](https://github.com/emctackett)
* **Laura Jiang** - [laurajjiang](https://github.com/laurajjiang)
* **Suzana Shaver** - [shaversu](https://github.com/shaversu)
* **Caleb Schmidt** - [calebschmidt](https://github.com/calebschmidt)
* **Mikayla Friend** - [mikaylafr](https://github.com/MikaylaFr)


## How To Run COVIDCoach
To run the project, first clone it OR download the source code zip file from the GitHub release and unzip the file. Then `cd` into the covid-cohort directory using a command line interface tool:
```bash
git clone https://github.com/emctackett/covid-cohort.git
cd covid-cohort
``` 

### npm

Next, install and update necessary dependencies with npm by typing:
```bash
npm install
```

Run the application with npm by typing:
```bash
npm start
```

A tab should automatically open in your default browser at http://localhost:3000/ where you can view the site.

### yarn

You can also install dependencies and run this app using yarn:
```bash
yarn
yarn start
```

Both npm and yarn will open COVIDCoach at [http://localhost:3000](http://localhost:3000) in a new tab of your default browser.

To end the program, go back to the terminal and press `ctrl` + `c`, where the program will confirm that you want to terminate the job.

## React App Info

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Software Architecture

In designing COVIDCoach, we wanted the application to be simple to use and easily accessible. As such, it made sense to keep the application client-side only using a React single-page application with routing to simulate different pages.

![Architecture for COVIDCoach](/public/architecture.png)

As shown in the above diagram, COVIDCoach is accessible by both mobile devices and desktop browsers by navigating to http://covidcoach.herokuapp.com/. The application is served/hosted on Heroku, a free-tier hosting platform. Heroku applications are "sleepy," so the first visit in an hour may take a bit of loading time to spin up assets and allocate resources for the application. COVIDCoach is reliant on external APIs, acting as a unified interface for different location, calendar, or COVID-tracking APIs. The /safety page calls an API to determine the user's location by zipcode. The /data page uses a COVID-tracking API to provide global and state-by-state data. Lastly, the /reminder page offers the ability to integrate with a user's Google Calendar to set up reminders and Google Hangout meetings with friends and family.

There is no explicit back-end or database that was required to set-up COVIDCoach. Although we had initially planned for a user database, the functionality we were looking for could be captured without limiting access behind user sign-ups and logins. It also distracted from the quality attribute of accessibility that we were aiming for; we want users to be able to easily access COVIDCoach and the information that they are looking for should be readily available.

![Component Diagram for COVIDCoach](/public/component.png)

The component diagram above details the features of COVIDCoach. COVIDCoach can be thought of as a dashboard that unifies these different features. The data visualization component is split up into localization (gathering the user's zipcode to then display their state and the COVID-related guidelines for their particular state) and calling the COVID-tracking API to display state-by-state data. 

## Design Patterns
Our team implemented the Facade design pattern, intended to create an interface for working with the Google Calendar API by grouping methods together (thus reducing redundant code). You may view the implementation of the pattern in [RemindForm.js](https://github.com/emctackett/covid-cohort/blob/master/src/RemindForm.js), which is exported as DoubleButton in the [Remind.js](https://github.com/emctackett/covid-cohort/blob/master/src/Remind.js) file.


## Final State of COVIDCoach
Here is a list of known issues with COVIDCoach: 
- [ ] Placeholder

Product backlog: 
- [ ] Placeholder

Areas for development: 
- [ ] Expanding data to be more global and more informative (deaths, recovered, etc.)


## File Structure
The highest level includes the package.json which provides scripts to run the program and the package-lock.json which provides the project dependencies and necessary installations. 

The public folder holds the basic outline for the site (index.html) and our favicon. 

The src folder contains all of the JavaScript files involved in building the components of our project. The file, index.js, performs the routing for the site. Every other file is appropriately named for the component that they are involved in building.


## Contributing
There will be no particular keeper of the project. Contact the owner of the repository (@emctackett) if you are interested in contributing or supporting COVIDCoach in some manner. For the original developers, we may continue to infrequently update COVIDCoach if requested or necessary through our original workflow (branch then pull request if the repository is still active, else just merge the branch directly onto master once the changes have been tested).

If you are externally interested in contributing to the project, feel free to fork the project directory from master. When you have a change that you are interested in merging, submit a pull request so that your changes may be reviewed. 
