class CommentsController < ApplicationController

  def index
    @comments = Recipe.find(params[:recipe_id]).comments
    render json: @comments
  end

  def create
    recipe = Recipe.find(params[:recipe_id])
    @comment = recipe.comments.new(comment_params)
    @comment.user = current_user
    @comment.save
    render json: @comment, status: 201
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :recipe_id, :user_id)
  end

end
