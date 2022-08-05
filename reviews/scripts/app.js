// Reviews data
const reviews = [
    {
        id: 1,
        name: "bathfox aumortiz",
        job: "vet",
        img: "https://res.cloudinary.com/dhucc7wve/image/upload/v1659566255/reviews/woman1_ohzrob.png",
        text: "Preserved defective offending he daughters on or. Rejoiced prospect yet material servants out answered men admitted. Sportsmen certainty prevailed suspected am as. Add stairs admire all answer the nearer yet length. Advantages prosperous remarkably my inhabiting so reasonably be if. Too any appearance announcing impossible one. Out mrs means heart ham tears shall power every.",
    },
    {
        id: 2,
        name: "morwave titanson",
        job: "retail assistat",
        img: "https://res.cloudinary.com/dhucc7wve/image/upload/v1659566256/reviews/woman2_vewgal.png",
        text: "Throwing consider dwelling bachelor joy her proposal laughter. Raptures returned disposed one entirely her men ham. By to admire vanity county an mutual as roused. Of an thrown am warmly merely result depart supply. Required honoured trifling eat pleasure man relation. Assurance yet bed was improving furniture man. Distrusts delighted she listening mrs extensive admitting far.",
    },
    {
        id: 3,
        name: "cavaca jikinillips",
        job: "accountant manager",
        img: "https://res.cloudinary.com/dhucc7wve/image/upload/v1659566258/reviews/woman3_v3gbex.png",
        text: "Months on ye at by esteem desire warmth former. Sure that that way gave any fond now. His boy middleton sir nor engrossed affection excellent. Dissimilar compliment cultivated preference eat sufficient may. Well next door soon we mr he four. Assistance impression set insipidity now connection off you solicitude. Under as seems we me stuff those style at. Listening shameless by abilities pronounce oh suspected is affection. Next it draw in draw much bred.",
    },
    {
        id: 4,
        name: "cootha rainwis",
        job: "nursery teacher",
        img: "https://res.cloudinary.com/dhucc7wve/image/upload/v1659566258/reviews/woman4_n60xpj.png",
        text: "In post mean shot ye. There out her child sir his lived. Design at uneasy me season of branch on praise esteem. Abilities discourse believing consisted remaining to no. Mistaken no me denoting dashwood as screened. Whence or esteem easily he on. Dissuade husbands at of no if disposal.",
    }
]

// Select items
const AUTHOR = document.getElementById('author');
const JOB = document.getElementById('job');
const IMG = document.getElementById('person-img');
const TEXT = document.getElementById('info');


const PREV_BTN = document.querySelector('.prev-btn');
const NEXT_BTN = document.querySelector('.next-btn');
const RANDOM_BTN = document.querySelector('.random-btn');

// Set starting review num
let currentReview = 2;

// Load initial item
window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentReview)
})

// Show person based on the value of currentReview object
function showPerson(num) {
    const ITEM = reviews[num];
    AUTHOR.textContent = ITEM.name;
    JOB.textContent = ITEM.job;
    IMG.src = ITEM.img;
    TEXT.textContent = ITEM.text;
}

// Show next person
NEXT_BTN.addEventListener('click', function () {
    currentReview++;
    console.log(currentReview);
    if (currentReview > reviews.length -1) {
        currentReview = 0;
    }
    showPerson(currentReview);
});

// Show previous person
PREV_BTN.addEventListener('click', function () {
    currentReview--;
    console.log(currentReview)
    if (currentReview < 0) {
        currentReview = reviews.length - 1;
    }
    showPerson(currentReview);
});

RANDOM_BTN.addEventListener('click', function () {
    currentReview = Math.floor(Math.random() * (reviews.length - 1));
    if ()
    showPerson(currentReview);
})