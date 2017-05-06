#Angular-Zoo

This is an Angular 2 (no CLI) web application for Epicodus code school Friday assignment.  

It is built with ARIA - ["Web Accessibility Initiative – Accessible Rich Internet Applications"](https://www.w3.org/TR/wai-aria/) - as a foundational principle. This is my first conscious attempt to include ARIA into a web application.

As a user of this Zoo App

* I want to log a newly-admitted animal by submitting a form with animal species, name, age, diet, zoo location, number of needed caretakers, sex, one like and one dislike.

* I want to view a list of animals I have logged.

* I want options to view all animals, only young animals (less than 2 years of age), or only mature animals (more than 2 years of age).

* I want to filter for species, diet, number of caretakers, and sex.

* I want to rank order for most liked to least.

* I want to click an animal to edit its name, age or caretakers.

* I want to have a mock Staff Login Button to enable certain Staff-Only features.


## Planning

#### 1. Outline behaviors in README.

#### 2. Study ARIA.

Include aria-label on input elements with no <label> tag. [Examples of aria-label vs aria-labelledby vs aria-describedby](http://www.maxability.co.in/2013/01/aria-label-labelledby-describedby/)


Include role="button" on non-button elements acting like buttons.

Setting focus on tabbed to elements. [Good reference here using a simple CSS trick/](https://css-tricks.com/almanac/selectors/f/focus/)  

To globally change focus, :focus {outline:none;border:1px solid red
}

Check site with VoiceOver on Mac and see if it informs well with sound and also all pertinent elements are able to be tabbed to and acted upon.

Start up VoiceOver with Command+F5


#### 3. Design Considerations

According to the [American Foundation For the Blind](https://afb.org), font size should be at least 16, Sans Serifs, bolder and thicker font styles.

Also, lighter colors for descriptive elements against a darker background is more preferrable than the inverse.

Line spacing should be at least 1.5

#### 3. Components.

FilteredAnimals
FilterTool
Staff Log In
Add New Animal
Edit Current Animal


#### 2. Specs


| Behavior | Input Example| Output Example    |
| ---------| -----------------|-----------------|
|create a newQuestion Object|newQuestion()| question |
|create a newAnswer Object|newAnswer ()|answer|

#### 3. Integration
  * Make Application.hbs for navbar, footer, and outlet for templates
  * route for Index.hbs to show all questions
   * component add-question on Index.hbs
  * route for Question.hbs to hold individual question
   * delete button on route.
   * component to edit-question on Question.hbs
   * component for all-answers on Question.hbs
   * component to add-answers on Question.hbs


  * Relationship of question to many answers established in Firebase.
  * delete question, deletes all answers as well. No orphans.
  .

#### 4. UX/UI

  After all above functionality is established, think about styling and UI.

#### 5. Explore
  * Try to do one thing in ember that was not exampled in our weekly curriculum.

## Technologies

Built with the Ember.JS framework. Connected to FireBase database.

The usual suspects of Javascript, Jquery, HTML, and CSS are here as wel.   

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

Perform the following  steps at your terminal prompt

* Enter the following to download the app files.
```
git clone https://github.com/XiXiaPdx/message-board.git
```
* Then get into the app folder
```cd message-board
```
* Then enter command
```npm install
```
* Followed by command
```bower install
```

App is now installed and ready to run.

_My [github repo](https://github.com/XiXiaPdx/message-board.git) for this project. You don't need to visit to install, just here for reference._

## Running the App Locally

Inside the message-board folder, enter the following at your terminal prompt

* Enter
```ember serve
```
* Visit the app at [http://localhost:4200](http://localhost:4200).


## Further Reading

[Guides and tutorials at ember.js](http://emberjs.com/)

## Maintainers

Probably no one...I can't wait to delete this from my repo.

## License

Copyright (c) 2017 Xi Xia. This software is licensed under the MIT license.
