$(function () {
  $(".serving").bind("change", function (event) {
    let previousValue = parseFloat($("#defaultServing").val());
    let newValue = parseFloat($(event.target).val());
    if (previousValue && newValue) {
      $(".ingredient").each(function (index, elem) {
        let ingrCurrent = $(".amount", elem);
        let oldIngredientAmount = ingrCurrent.text();
        console.log(oldIngredientAmount);
        let newIngredientAmount =
          (oldIngredientAmount * newValue) / previousValue;
        ingrCurrent.text(newIngredientAmount);
      });
      $("#defaultServing").val(newValue);
    }
  });
});
