# DARRAGH MARTIN PROJECT MILESTONE 2: EURO 2020 GOOGLE MAPS API

The deployed website can be accessed from: [here](https://daradona10.github.io/milestone-project2/)

# MAIN GOAL FOT THIS WEBSITE

This website was set up as an unoffical guide to the forthcoming European Championships in the summer of 2020 across 16 host cities.
It's to act as a guide for the football fans to see where on the maps the host cities are, to see stadiums on the maps, a brief introduction about the stadiums,
the key dates for the matches and the oppportunity to sign up for the Euro newsletter that will allow the user to receive even more news on it.

# Purpose of this Project:

The purpose of this project is to demonstrate accessing and displaying data from a third-party API resource.
The website utilises the Google Maps API and and also using EmailJS.

# UX

This website was provided to satisfy the requirements, in details (guided by user stories/requirements):

 * Provide the the opportunity to sign up for the newsletter with latest info on match tickets, host cities, qualified teams etc

 * Ability to see on the map where the host cities are and on main page where to click on markers to see the name of the stadium over the host city

 * Ability to see on the 2nd map by clicking it will give the user to zoom in on it the chance to see the surrounding locations as to where the stadium is located

 * Ability to see the stadiums being used, small trivia on it and also to see whatc matches being played with the key dates

 * Ability to click on the social media icons that will direct them to the official Euro 2020 pages for more information also

# User Stories:

 * As a football fan, I would like to see on the map where the stadium is located

 * As a football fan, I would like to be able to zoom in on the host city and take note of the surrounding locations of the stadium

 * As a football fan, I would like to be able to find out which stadiums have the matches for my national team and what dates it is on and also for the knockout rounds

 * As a fan of watching football, I love being able to sign up for the newsletter to get the latest information re match tickets, festival news for host cities etc

 * As someone who would use the site frequently I want to keep the site up to date and have any important news and latest changes to be made known also

### Wireframes

Wireframes for the mobile and desktop was done through Balsamiq. Both are listed below:

# Mobile: [here](https://github.com/daradona10/milestone-project2/blob/master/development/wireframemobiledesignproject2.pdf)

 # Desktop: [here](https://github.com/daradona10/milestone-project2/blob/master/development/wireframedesktopdesignproject2.pdf)

# Design Considerations:

It was decided to have the website spread across 4 pages and kept simmple as football fans do not tend to stick with a website if only on 1 page

* High contrast colors

* 4 Simple pages lauout with links to each page and simple navigation

* Minimial/Simple user navigation 

The design utilises the Bootstrap grid system, containers and components responsive to different screen sizes and devices, styled with jQuery

This site is limited to interactive front-end design only (HTML, CSS and JavaScript)

# Features

  # Exisiting Features

  * Navigation: Simple navigation of the site that jumps to the selected section pages

  * Map on home page highlights the stadium in pop up window when the marker is clicked on

  * Buttons on home page open up the host cities page and the newsletter sign ups

  * Marker Locations are displayed on the maps and both pages when clicked on or highlighted have stadium names

  * Map on locations page zooms in when button to relevant city clicked upon powered by Google Maps API.

  * Images of stadiums with brief trivia on them with key matches and dates oultined also

  * Newsletter: Newsletter signup allows users to fill out form which is sent to an email address, powered by EmailJS

  * Social Media: Links to the official Euro 2020 social media platforms


# Features Left to Implement

  * To have more interactivity on the site, places of interest etc

  * To be able to implement a ticketing section for the fans that can buy and swap tickets with other fans who are looking to offload them

  * To have a fans forum for fans to interact via chatrooms to talk everythingfootball related

  * To have a search bar over the map for greater information on bars, hotels, ATM's etc

# Technologies used

  The following languages, frameworks, libraries, IDE, repositories and tools were used for this website:

    * HTML5 - utilises the HTML language and sematic elements for basic layouts and functions.

    * CSS3 - styles using CSS for classes and specific elements

    * Bootstrap - website created using the Bootstrap grid system and components using the CDN to create layout for responsive design.

    * Font Awesome - for icons used for social media links and in contact information

    * JQuery - used for responsive navbar

    * JavaScript - This project utilises JavaScript for the executions of functions relating to the API resources (connect, and display etc)

    * Google Maps API - utilises the Google Maps JavaScript API for locating city markers and having the zoom in feature from auto centre of Europe map.

    * EmailJS - to allow the users to sign up for the newsletter and to gather the email addresses

    * Popper.js - also ised for responsive navbar.

    * GitHub - for hosting of project repository as well as publishling of website.

    * W3C CSS Validation Service - this project was tested for checking conformity and validity of css content.

# Testing

# Code Validation:

The HTML pages were checked using the W3C Validation sites with no errors reported. Warnings were reported but had no relevancy to the pages. The style.css file was tested 
using the W3C CSS Autoprefixer CSS Online tool and all was good. 

Console error was logged on home page but I had corrected it in line with my mentors suggestions and still did not clear. The same for locations page. The contact page was
ignored as no idea as to why it was happening. Again as in line with my mentor, everything was working fine. 
On newsletter errors was logged for video player but again everything checked out ok.

The site was tested on Chrome and using dev tools for functionality. Verified all working well.

The following testing scenarios were applied across all screen sizes.

# Testing Scenarios:

1 Newsletter Sign-Up form:

Go to the "Home" page, click on Newsletter page.
-Try to submit empty form and it comes up first saying please fill out the first field
              -If you fill out first field and then press submit the same thing happens and asks you to fill out the field below it
              -If you fill out the email address section without the @ sign it will tell you that an email address needs to have the @ sign in it.
              -Once all fields are filled out correctly with no errors, verified working correctly.
              -Once you type in box with YES (anything can be written but to keep it simple), the submit says it is sending and is highlighted in pop up window
               sent successfully.
               -Official Song Video was embedded to work on all devices

2 Footers:

Go to Footer section on page.
Checked that footer content is stacked on top of one another for smaller screen sizes and adjacent to one another on larger displays, verified working correctly.
Checked that icons link to correct social media site (in a new page), verified working correctly.
Checked that transitions on desktop view is applied on hover over social media icons, working correctly.

3 Navigation Bars:

Go to Navigation bar on page.
Check that brand logo resizes on larger screens, verified working correctly.
Check that navigation links collapse to navigation toggle on smaller screens, verified working correctly.
Checked that links navigate to sections on page, verified working correctly.

4 Map Display Area:

  Map section on Home page is loaded with markers and also when clicked upon gives you the name of stadium in pop up window

  Map section on Locations page loaded with markers and when hovered over has a small text containing name of stadium
  Also when a certain button is pressed zooms in on the city for 3 seconds before resetting to original location which is map of Europe by default.

5 Stadium page:

  Checked that content is viewable in containers and structure looks good and stacked on top of each other on smaller devices also.


# Deployment 

   The project is deployed on Github and is accessible as follows:

 # Website: [here](https://daradona10.github.io/milestone-project2/)

 # Repository: [here](https://github.com/daradona10/milestone-project2)

To deploy this page to GitHub pages from its GitHub repository, the following steps were taken:

     1. Log into GitHub.
     2. From list of repositories on the screen, select 
     3. From the menu items near the top of the page, select Settings
     4. Scroll down to the GitHub Pages section.
     5. Under the Source Link click the drop-down menu labelled None and select master Branch
     6. On selecting Master Branch the page is automatically refreshed, the website is now deployed.
     7. Scroll back down to the GitHub Pages section to retrieve the link to the deployed website.

This website can also be locally deployed by following the method outlined below:

 1. Follow the link to GitHub repository [here](https://github.com/daradona10/milestone-project2)
 2. Under the repository name, click the green "Clone or download"button
 3. In the Clone with HTTPs section, copy the clone URL for the repository
 4. In your local editor program, open Git Bash
 5. Change the current working directory to the location where you want the cloned directory to be made.
 6. Type the git clone, and then paste the URL you copied in Step 3.
 7. Press Enter. Your local clone will be created.     


# Credits

# Content 

  * Map display is obtained using the Google Maps API

  * Content for the Map infoWindows (click on or highlight over ) obtained from google maps JavaScript API 

  * Stack Overflow was researched extsensively to try and find some solutions to what I was trying to achieve

  * Official Euro 2020 website was used for the information on cities, key match dates etc

  * Went back over some of the coursework we did to take some inspirations and using some of the tools we learnt also and used some of the coding from
    when it was needed

  * EmailJS website was used to set up a service to allow the users to sign up to the newsletter

  * W3Schools site for hints and other information on JavaScript

# Media

  * Video on Newsletter page was taken from Youtube

  * Color layout for website taken from 

# Acknowledgements

  * I would like to thank Brian Macharia my mentor for his valaubale contributions at times

  * I would like to thank Xavier my tutor at Code Institute for guiding me through this

  * A lot of thanks and gratitude to the slack community for helping me whenever I got and to at least point me in the right direction
.
