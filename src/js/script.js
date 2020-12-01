/* eslint-disable no-console */
'use strict';

const languageClickHandler = function (event) {
    console.log('Link was clicked!');
    // console.log(event);
    event.preventDefault();
    const clickedElement = this;

    const activLanguages = document.querySelectorAll('.active');

    for (let activLanguage of activLanguages) {
        activLanguage.classList.toggle('active');
    }

    console.log('clickedElement', clickedElement);
}

const links = document.querySelectorAll('.lang a');

for (let link of links) {
    link.addEventListener('click', languageClickHandler);
    console.log(link);
}