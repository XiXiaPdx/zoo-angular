# Zoo of Mythical Creatures

This is an Angular 2 (no CLI) web application for Epicodus code school Friday assignment.  

It is built with ARIA - ["Web Accessibility Initiative – Accessible Rich Internet Applications"](https://www.w3.org/TR/wai-aria/) - as a foundational principle. This is my first conscious attempt to include ARIA into a web application.

Tabindex=0 and Aria-Label are my best friends.

### _Please test my app with VoiceOver on Mac. `Start up VoiceOver with Command+F5 on Mac`_

As a user of this Zoo App

* I want to log a newly-admitted animal by submitting a form with animal species, name, age, diet, zoo location, number of needed caretakers, sex, one like and one dislike.

* I want to view a list of animals I have logged.

* I want options to view all animals, only young animals (less than 2 years of age), or only mature animals (more than 2 years of age).

* I want to click an animal to edit its name, age or caretakers.

## Planning

### 1. Outline behaviors in README.

### 2. Study ARIA.

* # VoiceReader will usually refer to aria-label for audio output. [Examples of aria-label vs aria-labelledby vs aria-describedby](http://www.maxability.co.in/2013/01/aria-label-labelledby-describedby/)


* # Include role="button" on non-button elements acting like buttons.

* # Setting focus on tabbed to elements. [Good reference here using a simple CSS trick/](https://css-tricks.com/almanac/selectors/f/focus/)  

* # To globally change what focus looks, :focus {/* add your css code here*/}

Check site with VoiceOver on Mac and see if it informs well with sound and also all pertinent elements are able to be tabbed to and acted upon.


### 3. Design Considerations

According to the [American Foundation For the Blind](https://afb.org), font size should be at least 16, Sans Serifs, bolder and thicker font styles.

Also, lighter colors for descriptive elements against a darker background is better.

Line spacing should be at least 1.5

### 4. Components

FilteredAnimals

FilterTool

Add New Animal

Edit Current Animal


### 5. Specs


| Behavior | Input Example| Output Example    |
| ---------| -----------------|-----------------|
|create a new Animal Object|new Animal(params)| Animal |

### 6. UX/UI

  After all above functionality is established, think about styling and UI.

# Technologies


## Prerequisites

You will need the following software properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)


## Installation

Perform the following  steps at your terminal prompt

* #### Enter the following to download the app files.
```
git clone https://github.com/XiXiaPdx/zoo-angular.git
```
*  #### get into the app folder
```
cd ng-zoo
```
*  #### install node dependencies
```
npm install
```
* #### install bower dependencies
```
bower install
```
* #### gulp build
```
gulp build
```
* #### gulp serve
```
gulp serve
```

## Further Exploration

The code isn't efficient. 

## License

Copyright (c) 2017 Xi Xia. This software is licensed under the MIT license.
