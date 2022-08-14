// classList - shows/gets all classes
// contains - checks classList for specific class
// add - adds class
// remove - removes class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
    links.classList.toggle('show-links');
});

/*
Another (longer) way to achieve the same result is using toggle instead of add and remove:

if (links.classList.contains('show-links')) {
    links.classList.remove('show-links')
}
else {
    links.classList.add('show-links');
}
*/
