![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

Welcome Niged01,

This is the Code Institute student template for Gitpod. We have preinstalled all of the tools you need to get started. It's perfectly ok to use this template as the basis for your project submissions.

You can safely delete this README.md file, or change it for your own project. Please do read it at least once, though! It contains some important information about Gitpod and the extensions we use. Some of this information has been updated since the video content was created. The last update to this file was: **September 1, 2021**

## Gitpod Reminders

To run a frontend (HTML, CSS, Javascript only) application in Gitpod, in the terminal, type:

`python3 -m http.server`

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.

To run a backend Python file, type `python3 app.py`, if your Python file is named `app.py` of course.

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.

In Gitpod you have superuser security privileges by default. Therefore you do not need to use the `sudo` (superuser do) command in the bash terminal in any of the lessons.

To log into the Heroku toolbelt CLI:

1. Log in to your Heroku account and go to *Account Settings* in the menu under your avatar.
2. Scroll down to the *API Key* and click *Reveal*
3. Copy the key
4. In Gitpod, from the terminal, run `heroku_config`
5. Paste in your API key when asked

You can now use the `heroku` CLI program - try running `heroku apps` to confirm it works. This API key is unique and private to you so do not share it. If you accidentally make it public then you can create a new one with _Regenerate API Key_.

------

## Release History

# Aviation Knowledge
-----
insert links here


## Final Design
-------
Insert responive design screen test

## Objective
--------
Design an interactive website quiz using JavaScript along with HTML and CSS, front-end site that responds to a user’s actions.

The client needs in this project are made purely for the purpose of completing my Code Institute project.

## Brief
---------
The end goal of this website is to provide an interactive Aviation themed quiz. The site should include:

-	An emotive enjoyable interactive quiz written in JavaScript.
-	A plethora of questions relating to mainly commercial Aviation 
-	Score boards, leader board and progress tally throughout the quiz
-	A consistent layout and design

## Ux – User Experience Design 
---------
### User Requirements 

User or users wanting a quiz on aviation to play on their flights or with mates as a pub quiz get together or just enjoying alone time for a bit of enjoyment.

User wants a light hearted approach that is not requiring in depth questions on aviation more of a broader general public experience of Aviation 

Base quiz purely of large commercial airlines and aircraft 

### Initial Concept

Aviation brings enjoyment to a lot of people, knowing this I hope to build a fully functioning quiz around aviation using JavaScript, HTML and CSS. I anticipate using a colour scheme of blues and white’s indicative of flying through calm blue skies I will develop this concept further down the tract as the site functions come together. I see the site being easy to navigate. This quiz is designed to fit across all user screens.

Wire frames if I have time


## Colour Scheme
------
With the back ground colour, I have chosen a pastel lighter blue to give the feeling the user is in the sky 

With the buttons and headings, I have chosen shades of white indicative of fluffy white clouds

Further colours chosen Green for correct quest answers red if not 

Font kept black to fit with theme.



## Typography
--------
The font I have chosen to use on this site is Roboto Mono from google fonts. The reason behind choosing this font is upon seeing I immediately reminisce about old airline movies where in the 1970s the boards were analogue with flight details evoking and uplifting nostalgic feeling that I would like the users to be evoked with. It should almost feel to the users like they are sitting in an airport lounge waiting for their flight to be called. 

## Features 
-------

The game features and illustration of a plane as the background image across all pages.
It is intended for the user to experience a streamlined conformity with a clear indication of what the content of the quiz is.

Buttons are large and white animate when hover over.
The user should have an experience of up in the clouds as the buttons are large and animate to give the feeling of floating like a cloud 

The game board features question, answers, a hint image, Next question button and a current score tally. 

All of these features are there to allow the user to interact with the quiz thus allowing them to enjoy working their way through the quiz. There is a feature here that if you select the correct answer is shows green and the correct answers score is increase, on the other side of this if the user selects the incorrect question it shows red and increases the incorrect score. The user can only move on to the next question once the answer has been select this is to prevent confusion and accidently answering the same question twice.

After the last question a new button with finish appears 
The user will know they have reached the end of the game 

Final score page tells the user their score, gives a ranking, Enables the user to save their score.

This experience will give the user a bit of a competitive feeling and enable them to save their score giving them a feeling of interacting with the site. It gives them a ranking on where they score this depending on where they score will either give the user the urge to improve their score or feel great about where their ranking is.

A high scores page shows the top 5 latest game results 


This is a fun feature to create a bit of competitiveness amongst the user and their friends

Features left to implement 

Further quiz questions so the user doesn’t have the same questions every time.
Possibly look at introducing different theme quizzes relating to aviation.



## Technologies used
--------
### Languages 
JavaScript
HTML
CSS 

### Programs 

- Git
    - For version control, committing, and pushing to Github
- Github
    - For storing the repository, files, and images pushed from Gitpod
- Gitpod
    - IDE used to code the website
- Chrome developer tools
    - for checking compatibility, troubleshooting and editing code
- Am I responsive
    - Used to test responsiveness of the website at different screen sizes.
- Google Fonts
    - Used for the font of the website.
- Freeformatter.com
    - To format my HTML, CSS, and JavaScript code 

## Testing
-------
I made use of the console in DevTools to test certain parts of the code. This allowed me to refactor solutions without having to go through rows of code making many attempts before coming to a solution.

Test home page
Stat button works as expected takes user to game page
High scores button works as expected takes user to top score page

Test quiz page 
Hint image and question load as expected 
Correct answer turns green and correct tally increases as expected
Incorrect answer turns red and incorrect tally increases as expect 
Next question button cannot be used until user selects a question as expected 
Tally will score incorrect if all question are incorrect it will score 10 same with correct 
Test finish button works as expected takes user to final page

Test score page username works

Cannot save game until username input works as expected and saves score as expected 

Go home button tested works as expected takes user to home page 

Test high scores page show latest top 5 scores as expected 
Go home button works as expect takes user back to home page 
