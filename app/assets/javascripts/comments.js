function Comment (user_email, body) {
  this.user_email = user_email;
  this.body = body;
}

Comment.prototype.addComment = function() {
  $('.recipeComments').append('<p><strong>' + this.user_email + ' says:</strong><br>' + this.body + '</p>')
}
