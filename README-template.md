# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Links
- Solution URL: [Solution](https://github.com/ernsen12/Space-tourism-multi-page-website.)
- Live Site URL: [Demo](https://ernsen12.github.io/Space-tourism-multi-page-website./)

## My process

### Built with

- HTML5
- CSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Jquery](https://jquery.com/)

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```css - using css grid
.crew{
    display: grid;
    grid-template-columns: repeat(12, 65px);
    grid-template-rows: repeat(4, auto);
}    
 .crew_info{
    height: auto;
    grid-area: 2 / 1 / 2 / 8;
    justify-self: start;
   }
```
```js - loading or importing HTML file to another HTML file
$(document).ready(function(){
    $("#nav_placeholder").load("./navigation.html");
})
```

### Continued development

Layout and design websites more effieciently using css.

### Useful resources

- [import HTML file to another using Jquery](https://stackoverflow.com/questions/8988855/include-another-html-file-in-a-html-file) - This helped me import and resue a HTML(navigation) on all pages of the project.
- [CSS grid cheat sheet](https://css-tricks.com/snippets/css/complete-guide-grid/) - cheat sheet and guides on how to use css grid display.

## Author

- Frontend Mentor - [@ernsen12](https://www.frontendmentor.io/profile/ernsen12)
