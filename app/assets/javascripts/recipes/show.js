
var nextRecipe = function() {
  const template = Handlebars.compile($('#recipe-template').html());
  result = template(recipe);
  $('#recipe_handlebars').html(result);
}
