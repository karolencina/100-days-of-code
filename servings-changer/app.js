const servingInput = document.querySelector("#serving");
servingInput.addEventListener("change", (event) => {
  let defaultServing = document.querySelector("#defaultServing").value;
  let previousValue = parseInt(defaultServing);
  let newValue = parseInt(event.target.value);
  if (previousValue && newValue) {
    const ingredients = document.querySelectorAll(".ingredient");
    ingredients.forEach(function (element) {
      let quantity = element.querySelector(".quantity");
      console.log(quantity);
      let oldQuantity = quantity.innerHTML;
      let newQuantity = (oldQuantity * newValue) / previousValue;
      console.log(oldQuantity);
      console.log(newValue);
      console.log(previousValue);
      quantity.innerHTML = newQuantity;
    });
    document.querySelector("#defaultServing").value = newValue;
  }
});
