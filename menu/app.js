// Items
const menu = [
    {
        id: 1,
        title: "chilli sin carne",
        category: "lunch",
        price: 15.99,
        img: "./images/item-1.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "banana chia",
        category: "breakfast",
        price: 13.99,
        img: "./images/item-2.jpg",
        desc: `Vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "avocado toast",
        category: "brunch",
        price: 6.99,
        img: "./images/item-3.jpg",
        desc: `Kombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "smoothie bowl",
        category: "breakfast",
        price: 20.99,
        img: "./images/item-4.jpg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "veggie noodles",
        category: "lunch",
        price: 22.99,
        img: "./images/item-5.jpg",
        desc: `Franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "miso soup",
        category: "soups",
        price: 8.99,
        img: "./images/item-6.jpg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "carrot spinach noodles",
        category: "lunch",
        price: 8.99,
        img: "./images/item-7.jpg",
        desc: `Carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "broccoli shroom spaghetti",
        category: "lunch",
        price: 12.99,
        img: "./images/item-8.jpg",
        desc: `On it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "burrata bake",
        category: "appetisers",
        price: 16.99,
        img: "./images/item-9.jpg",
        desc: `Skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "korean pancakes",
        category: "desserts",
        price: 16.99,
        img: "./images/item-10.jpg",
        desc: `Amongst moments do in arrived at my replied. Fat weddings servants but man believed prospect. Companions understood is as especially pianoforte connection introduced.`,
    },
];

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');

//Load items
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
        return `<article class="menu-item">
                <img src=${item.img} alt=${item.title} class="photo">
                <div class="item-info">
                  <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">${item.price}</h4>
                  </header>
                  <p class="item-text">${item.desc}</p>
                </div>
              </article>`;
    });
    displayMenu = displayMenu.join('');
    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
    const categories = menu.reduce(
        function(values, item) {
            // If the array doesn't include the item category property
            if (!values.includes(item.category)) {
                // add that category
                values.push(item.category)
            }
            // and if the category already exists, just return the values as they currently are
            return values;
        },
        ['all']
    );
    const categoryBtns = categories.map(function(category) {
        return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`
    })
        .join("");
    container.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll('.filter-btn');

    //Filter items
    //Check if each button of .filter-btn' class
    filterBtns.forEach(function (btn) {
        // was clicked
        btn.addEventListener('click', function (e) {
            // and if it was, do the following:
            // define the value of <button>'s data-id
            const category = e.currentTarget.dataset.id;
            // define the value
            const menuCategory = menu.filter(function(menuItem) {
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "all") {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
}

window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu);
    displayMenuButtons();
});