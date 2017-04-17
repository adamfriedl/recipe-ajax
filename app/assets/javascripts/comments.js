function Comment (recipe_id, user_id, body) {
  this.recipe_id = recipe_id;
  this.user_id = user_id;
  this.body = body;
}

Comment.prototype.addComment = function() {
  var comment = (`<p><strong>${value[user_id.email]} says:</strong><br>${value['body']}</p>`)
  $('.recipeComments').append(comment)
}
