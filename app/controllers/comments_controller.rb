class CommentsController < ApplicationController

  def index
    @comments = Comment.all
    render json: @comments
  end

  def create
    recipe = Recipe.find(params[:user_id])
    user = current_user
    @comment = Comment.create(comment_params)
    render json: @comment, status: 201
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :recipe_id, :user_id)
  end

end
