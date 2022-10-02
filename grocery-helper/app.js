/* SELECT ITEMS */

const alert = document.querySelector(".alert");
// Basically a container for alerts, title, input field and submit button
const form = document.querySelector(".grocery-form");
// Input field
const groceryInput = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
// Container for all items that were already added
const groceriesContainer = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

/* Edit option */

let editElement;
let editFlag = false;
let editId = "";

/* EVENT LISTENERS */

//Submit form
form.addEventListener("submit", addItem);

// Clear items
clearBtn.addEventListener("click", clearItems);

/* FUNCTIONS */

function addItem(e) {
  e.preventDefault();
  const value = groceryInput.value;
  const id = new Date().getTime().toString();
  // Adding an item to the list
  if (value && !editFlag) {
    groceryInput.classList.remove("empty-value");
    const groceryItem = document.createElement("article");
    // Add class
    groceryItem.classList.add("grocery-item");
    // Add id
    const attrib = document.createAttribute("data-id");
    attrib.value = id;
    groceryItem.setAttributeNode(attrib);
    groceryItem.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <button type="button" class="edit-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pencil"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                  />
                </svg>
              </button>
              <button type="button" class="delete-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
              </button>
            </div>`;
    const deleteBtn = groceryItem.querySelector(".delete-btn");
    const editBtn = groceryItem.querySelector(".edit-btn");
    deleteBtn.addEventListener("click", deleteItem);
    editBtn.addEventListener("click", editItem);

    //Append child to grocery list
    list.appendChild(groceryItem);
    displayAlert("Item added to the list", "alert-success");

    // Add to local storage
    addToLocalStorage(id, value);

    // Set back to default
    setBackToDefault();

    // Editing an item
  } else if (value && editFlag) {
    groceryInput.classList.remove("empty-value");
    // Set the title of the current element to be the value of the current input field
    editElement.innerHTML = groceryInput.value;
    displayAlert("Item updated", "alert-success");
    // Edit local storage
    editLocalStorage(editId, value);
    setBackToDefault();
    // If the input value is empty
  } else {
    groceryInput.classList.add("empty-value");
    displayAlert("Empty field", "alert-danger");
  }
}

// Display alert
function displayAlert(text, cssClass) {
  alert.textContent = text;
  alert.classList.add(cssClass);

  // Remove alert after a specific time
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(cssClass);
  }, 5000);
}

// Clear items
function clearItems() {
  const items = document.querySelectorAll(".grocery-item");
  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
    groceriesContainer.classList.remove("show-container");
    displayAlert("Items deleted", "alert-success");
    setBackToDefault();
    localStorage.removeItem("list");
  }
}

// Delete function
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  // removeChild of an element of class .grocery-list which is
  list.removeChild(element);
  if (list.children.length === 0) {
    groceriesContainer.classList.remove("show-container");
  }
  displayAlert("Item removed", "alert-danger");
  setBackToDefault();
  // Remove from local storage
  removeFromLocalStorage(id);
}

// Edit function
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  /* Set edit item - select sibling because currentTarget.parentElement is .btn-container and we need to select .title (to edit it), which is on the same level (sibling) */
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // Set form value
  groceryInput.value = editElement.innerHTML;
  editFlag = true;
  editId = element.dataset.id;
  submitBtn.textContent = "edit";
}

// Set back to default
function setBackToDefault() {
  groceryInput.value = "";
  editFlag = false;
  editId = "";
  submitBtn.textContent = "submit";
}

/* LOCAL STORAGE */
function addToLocalStorage(id, value) {
  // ES6 shortcut - equivalent of {id: id, value: value}
  const grocery = { id, value };
  // If the item already exists ? If yes, give me the item and use JSON parse : if it doesn't, set items to empty array
  let items = getLocalStorage();
  // Add the let items to const grocery
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
  console.log(items);
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter(function (item) {
    // Select all items apart from the current one (the one being deleted)
    if (item.id !== id) {
      return item;
    }
  });
  // Update the local storage to be the result of setting the items to all apart from the one being deleted - this is the same as deleting one item.
  localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value) {
  let items = getLocalStorage();
  items = items.map(function (item) {
    // If the currently iterated item matches the id of the item being edited, the the value of the item will be assigned to the new value we are changing the item to.
    if (item.id === id) {
      item.value = value;
    }
    // This will return all items one after another, including the one changed by the if statement.
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

// localStorage API
// setItem
// getItem
// removeItem
// Save as strings

/* Setup items */
